export const Config = {
  PREFERRED_AGENTS: [
    { name: "Sherlock" },
    { name: "Professor" },
    { name: "Crypto Buddy" },
  ],
  GROQ_MODEL: {
    models: ["llama3-8b-8192", "llama3-70b-8192", "gemma2-9b-it"],
  },
  MIN_CHATS: 25, // Minimum chats per Agent
  MAX_CHATS: 35, // Maximum chats per Agent
  RESET_TIME: "07:00",
};
