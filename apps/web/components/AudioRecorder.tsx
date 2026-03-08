"use client"

import { useState, useRef } from "react"

export default function AudioRecorder() {
  const [recording, setRecording] = useState(false)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const socketRef = useRef<WebSocket | null>(null)

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true
    })

    const mediaRecorder = new MediaRecorder(stream)

    socketRef.current = new WebSocket("ws://localhost:4000")

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0 && socketRef.current?.readyState === 1) {
        socketRef.current.send(event.data)
      }
    }

    mediaRecorder.start(250)

    mediaRecorderRef.current = mediaRecorder
    setRecording(true)
  }

  const stopRecording = () => {
    mediaRecorderRef.current?.stop()
    socketRef.current?.close()
    setRecording(false)
  }

  return (
    <div className="p-6 space-y-4">

      {!recording ? (
        <button
          onClick={startRecording}
          className="px-6 py-3 bg-green-600 text-white rounded"
        >
          Start Podcast
        </button>
      ) : (
        <button
          onClick={stopRecording}
          className="px-6 py-3 bg-red-600 text-white rounded"
        >
          Stop Podcast
        </button>
      )}

    </div>
  )
}