export const GREETING_MESSAGES = [
  "Comment puis-je vous aider ?",
  "Par où commençons-nous ?",
];

export function getRandomGreeting(): string {
  return GREETING_MESSAGES[
    Math.floor(Math.random() * GREETING_MESSAGES.length)
  ] as string;
}
