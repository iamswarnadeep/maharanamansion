// src/global.d.ts
export {};

declare global {
  interface Window {
    Email: {
      send: (options: {
        SecureToken?: string;
        Username?: string;
        Password?: string;
        To: string;
        From: string;
        Subject: string;
        Body: string;
      }) => Promise<string>;
    };
  }
}
