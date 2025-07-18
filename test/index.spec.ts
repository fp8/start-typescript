import { main } from '../src/index';
import { CONFIG_DATA } from '../src/start';

describe('main', () => {
  it('should return a welcome message with the current time', async () => {
    const fixedDate = new Date('2024-01-01');
    const message = await main(fixedDate);
    console.log(message);

    expect(message).toContain(`Welcome to ${CONFIG_DATA.name}`);
    expect(message).toContain('2024-01-01T00:00:00.000Z');
  });

  it('should use the current date if no date is provided', async () => {
    const message = await main();
    expect(message).toContain(`Welcome to ${CONFIG_DATA.name}`);
    // Optionally, check that the message contains a valid ISO date string
    expect(message).toMatch(
      /time is now \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/,
    );
  });
});
