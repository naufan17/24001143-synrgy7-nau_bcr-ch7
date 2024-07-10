import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CardCar from '../components/ListCar/CardCar';
import { CarDetail } from '../interfaces/CarInterface';

jest.mock('../api/CarApi', () => {
    const mockCars: CarDetail[] = [
        {
            id: '1',
            manufacture: 'Chevrolet',
            model: 'Impala',
            type: 'Sedan',
            capacity: 5,
            transmission: 'Automatic',
            year: 2023,
            rent_price: 100000,
            image: 'chevrolet_impala.jpg',
            delete: {
                deleted_at: null,
            },
        },
    ];
    
    return {
        requestGetCarsDetail: jest.fn().mockResolvedValue(mockCars)
    }
});

describe('CardCar Component', () => {
    it('renders CardCar component correctly', async () => {
        render(<CardCar />);

        await screen.findByText('Chevrolet / Impala / Sedan');
        await screen.findByText('Ford / F150 / Sedan');

        expect(screen.getByText('Chevrolet / Impala / Sedan')).toBeInTheDocument();
        expect(screen.getByText('Ford / F150 / Sedan')).toBeInTheDocument();
    });
});
