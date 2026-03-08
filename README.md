
# 🎙 CoHostAI

**CoHostAI** is a real-time AI assistant for podcast hosts that listens to conversations and suggests **context-aware follow-up questions** while performing **live fact checking**.

The system analyzes the discussion in real time and displays suggestions privately to the host, helping them ask better questions and maintain engaging conversations.

---

## ✨ Features

- 🎧 **Live Podcast Listening**
  - Streams audio during recording.

- 💡 **AI Follow-up Questions**
  - Suggests relevant questions based on the guest’s responses.

- 🔎 **Real-time Fact Checking**
  - Flags potentially incorrect claims during conversation.

- 🧠 **Conversation Context Awareness**
  - Tracks the discussion and generates meaningful prompts.

- 📊 **Host Dashboard**
  - Displays transcript, suggestions, and fact alerts in real time.

---

## 🏗 System Architecture

```
Podcast Audio
     │
     ▼
WebRTC Audio Stream
     │
     ▼
Speech-to-Text (Gemini Live API)
     │
     ▼
Conversation Context Engine
     │
 ┌───────┴────────┐
 ▼                ▼
Follow-up AI     Fact Checker
     │                │
     └───────┬────────┘
             ▼
       Host Dashboard
```

---

## 🧰 Tech Stack

**Frontend**
- Next.js
- React
- TailwindCSS
- WebRTC

**Backend**
- Node.js
- TypeScript
- Fastify
- WebSockets

**AI**
- Gemini Live API
- Gemini 1.5 Pro

**Infrastructure**
- Google Cloud Run
- Firestore
- Cloud Storage

---

## 📁 Repository Structure

```
cohost-ai
│
├── apps
│   ├── web        # Next.js host dashboard
│   └── server     # Node.js realtime backend
│
├── packages
│   ├── ai         # AI pipelines
│   └── types      # shared types
│
├── infra          # deployment configs
├── docs           # architecture diagrams
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/cohost-ai
cd cohost-ai
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Setup environment variables

Create a `.env` file:

```
GEMINI_API_KEY=your_api_key
```

### 4. Start development

```bash
pnpm dev
```

---

## 🚀 Future Improvements

- Topic detection during conversation
- AI-generated podcast highlights
- Guest background intelligence
- Live audience question suggestions

---

## 📜 License

MIT License
