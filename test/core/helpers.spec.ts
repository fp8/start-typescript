import { getIsoDateString } from '../../src/core/helpers';

describe('index', () => {
  it('should convert date to ISO string', () => {
    const date = new Date('2023-10-01');
    const isoString = getIsoDateString(date);
    expect(isoString).toBe('2023-10-01T00:00:00.000Z');
  });
});
