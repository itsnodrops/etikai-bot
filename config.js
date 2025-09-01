export const Config = {
  PREFERRED_AGENTS: [
    {
      subnet: "Kite AI Agents",
      names: ["Sherlock", "Professor", "Crypto Buddy"],
    },
    {
      subnet: "AIVeronica",
      names: ["Zane", "Vyn", "Noa", "Avril", "Diane", "Sakura"],
    },
  ],
  GROQ_MODEL: {
    models: ["llama-3.1-8b-instant"],
  },
  MIN_CHATS: 3, // Minimum chats per agent
  MAX_CHATS: 5, // Maximum chats per agent
  MIN_SWAP_COUNT: 3, // Minimum number of swaps per cycle
  MAX_SWAP_COUNT: 5, // Maximum number of swaps per cycle
  BRIDGE_ENABLED: false, // Manual bridge more recommended
  CYCLE_RESET: false, // Use cron instead for best experience
  RESET_TIME: "07:00", // Igroned when CYCLE_RESET set to false
};