import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt: string) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  
  // avoid getting same prompt 2 times in a row
  if(randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt
}