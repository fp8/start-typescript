// Kickoff the startup process and return config data
import { CONFIG_DATA } from './start';

import { createLogger, getIsoDateString } from './core';
const logger = createLogger();

// A sample main function that return a welcome message
export async function main(now?: Date): Promise<string> {
  const nowString = getIsoDateString(now ?? new Date());
  const message = `Welcome to ${CONFIG_DATA.name} and time is now ${nowString}`;
  return message;
}

main()
  .then((message) => {
    logger.warn(message);
  })
  .catch((error) => {
    // istanbul ignore next @preserve
    logger.error('ERROR:', error);
  });
