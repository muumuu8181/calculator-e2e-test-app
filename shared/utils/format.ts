export function formatMessage(message: string): string {
  return `📝 ${message}`;
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}