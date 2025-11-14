import { showHUD, Clipboard } from "@raycast/api";

export default async function main() {
  // Read text from clipboard
  const clipboardText = await Clipboard.readText();

  // Check if clipboard contains text
  if (!clipboardText) {
    await showHUD("Clipboard is empty or does not contain text");
    return;
  }

  // Convert backslashes to forward slashes
  const convertedText = clipboardText.replace(/\\/g, "/");

  // Write converted text back to clipboard
  await Clipboard.copy(convertedText);

  // Show notification
  await showHUD("Converted path separators");
}
