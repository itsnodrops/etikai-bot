export const Config = {
  PREFERRED_AGENTS: [
    {
      subnet: "Kite AI Agents",
      names: ["Sherlock", "Professor", "Crypto Buddy"],
    },
    {
      subnet: "AI Veronica",
      names: ["Zane", "Vyn", "Noa", "Avril", "Diane", "Sakura"],
    },
  ],
  GROQ_MODEL: {
    models: ["llama-3.1-8b-instant", "gemma2-9b-it"],
  },
  MIN_CHATS: 3, // Minimum chats per agent
  MAX_CHATS: 10, // Maximum chats per agent
  MIN_SWAP_COUNT: 5, // Minimum number of swaps per cycle
  MAX_SWAP_COUNT: 10, // Maximum number of swaps per cycle
  DEPOSIT_TO_MULTISIG_AMOUNT: 0.1, // Amount of KITE to deposit to multi-sig wallet if enabled
  CREATE_MULTISIG_ENABLED: true, // Set to true to create a multi-sig wallet and deposit funds
  BRIDGE_ENABLED: false, // Manual bridge are recommended
  CYCLE_RESET: false, // Use cron instead for best experience
  RESET_TIME: "07:00", // Igroned when CYCLE_RESET set to false
};
