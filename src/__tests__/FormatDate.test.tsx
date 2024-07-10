import { formatDate } from '../utils/formatDate';

describe('formatDate function', () => {
    test('formats ISO string to localized date string', () => {
        const isoString = '2024-07-09T18:26:50.768Z';
        const formattedDate = formatDate(isoString);
        expect(formattedDate).toMatch(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}, [0-9]{1,2}:[0-9]{2}:[0-9]{2} (AM|PM)$/);
    });
});