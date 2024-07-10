import { render, screen } from '@testing-library/react';
import ListCar from '../components/ListCar/ListCar';
import { CarDetail } from '../interfaces/CarInterface';

jest.mock('../api/CarApi', () => {
    const mockCars: CarDetail[] = [
        {
            id: 'd7912250-64ed-41de-a75d-4cf6ebb8743e',
            manufacture: 'Lincoln',
            model: 'MKZ',
            image: 'https://res.cloudinary.com/ddpbwjjfz/image/upload/v1715908216/car/jhm4qjtedmakflzbiq1z.jpg',
            capacity: 6,
            transmission: 'Automanual',
            type: 'Sedan',
            year: 2021,
            rent_price: 900000,
            delete: {
                deleted_at: null,
            },
        },
        {
            id: 'ee01113d-6323-4e65-b58b-69f624d4c00d',
            manufacture: 'Honda',
            model: 'Civic',
            image: 'https://res.cloudinary.com/ddpbwjjfz/image/upload/v1715908216/car/jhm4qjtedmakflzbiq1z.jpg',
            capacity: 4,
            transmission: 'Manual',
            type: 'Coupe',
            year: 2020,
            rent_price: 300000,
            delete: {
                deleted_at: null,
            },
        },
    ];
    
    return {
        requestGetCarsDetail: jest.fn().mockResolvedValue(mockCars)
    }
});

describe('ListCar Component', () => {
    test('renders ListCar component correctly', async () => {
        render(<ListCar />);

        expect(screen.getByText('Lincoln / MKZ / Sedan')).toBeInTheDocument();
        expect(screen.getByText('Honda / Civic / Couple')).toBeInTheDocument();
    });
});
