import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard/Dashboard';

jest.mock('../api/OrderApi', () => {
    const mockOrders = [
        {
            id: "bdb941da-9003-4862-b602-82298f4be165",
            manufacture: "Chevrolet",
            model: "Impala",
            type: "Sedan",
            duration: 2,
            rent_start: "2024-07-09T18:26:50.768Z",
            rent_end: "2024-07-11T18:26:50.768Z",
            total_price: 800000,
            status: "Rented",
            created_at: "2024-07-09T18:26:50.780Z"
        },
        {
            id: "cc3a1155-6ecd-429b-a548-b0774142bf1a",
            manufacture: "Ford",
            model: "F150",
            type: "Sedan",
            duration: 2,
            rent_start: "2024-07-09T18:27:44.233Z",
            rent_end: "2024-07-11T18:27:44.233Z",
            total_price: 400000,
            status: "Rented",
            created_at: "2024-07-09T18:27:44.249Z"
        },
    ];

    return {
        requestGetOrders: jest.fn().mockResolvedValue(mockOrders)
    };
});

describe('Dashboard Component', () => {
    test('renders Dashboard component with order list', async () => {
        render(<Dashboard />);

        expect(screen.getByText('Chevrolet / Impala')).toBeInTheDocument();
        expect(screen.getByText('Ford / F150')).toBeInTheDocument();
    });
});