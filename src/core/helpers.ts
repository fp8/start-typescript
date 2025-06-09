import { createLogger } from './logger';

const logger = createLogger();

export function getIsoDateString(date: Date): string {
  logger.info(`Converting date to ISO string: ${date.toString()}`);
  // Ensure the date is in ISO format
  return date.toISOString();
}
