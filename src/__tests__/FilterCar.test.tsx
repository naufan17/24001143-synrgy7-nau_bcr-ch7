import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FilterCar from '../components/FilterCar/FilterCar';
import { Car } from '../interfaces/CarInterface';

jest.mock('../api/CarApi', () => {
    const mockCars: Car[] = [
        {
            id: 'd7912250-64ed-41de-a75d-4cf6ebb8743e',
            plate: 'OSL-4224',
            manufacture: 'Lincoln',
            model: 'MKZ',
            image: 'https://res.cloudinary.com/ddpbwjjfz/image/upload/v1715908216/car/jhm4qjtedmakflzbiq1z.jpg',
            capacity: 6,
            description: 'Driver & front passenger map pockets. Direct-type tire pressure monitor system. Cargo area lamp. Glove box lamp.',
            transmission: 'Automanual',
            type: 'Sedan',
            year: 2021,
            rent_price: 900000,
            available: true,
            option: ['Navigation System', 'Bluetooth'],
            spec: ['Direct-type tire pressure monitor system', 'Cargo area lamp'],
        },
        {
            id: 'ee01113d-6323-4e65-b58b-69f624d4c00d',
            plate: 'LXD-2147',
            manufacture: 'Honda',
            model: 'Civic',
            image: 'https://res.cloudinary.com/ddpbwjjfz/image/upload/v1715908216/car/jhm4qjtedmakflzbiq1z.jpg',
            capacity: 4,
            description: 'Automatic temperature control. Delay-off headlights. Electronic stability. Remote keyless entry.',
            transmission: 'Manual',
            type: 'Coupe',
            year: 2020,
            rent_price: 300000,
            available: true,
            option: ['Leather Seats', 'Backup Camera'],
            spec: ['Automatic temperature control', 'Electronic stability'],
        },
    ];

    return {
        requestGetCars: jest.fn().mockResolvedValue(mockCars)
    }
});

describe('FilterCar Component', () => {
    test('renders correctly and displays all cars initially', async () => {
        render(<FilterCar />);

        expect(screen.getByText('Lincoln / MKZ')).toBeInTheDocument();
        expect(screen.getByText('Honda / Civic')).toBeInTheDocument();
    });

    test('displays error messages when required fields are empty and "Cari Mobil" is clicked', async () => {
        render(<FilterCar />);

        fireEvent.click(screen.getByText('Cari Mobil'));

        expect(screen.findByText('Date is required')).toBeInTheDocument();
        expect(screen.getByText('Time is required')).toBeInTheDocument();
        expect(screen.getByText('Capacity is required')).toBeInTheDocument();
    });

    test('filters cars based on capacity', async () => {
        render(<FilterCar />);
        
        fireEvent.change(screen.getByLabelText(/Jumlah Penumpang/i), { target: { value: '5' } });
        fireEvent.change(screen.getByLabelText(/Tanggal/i), { target: { value: '2024-07-10' } });
        fireEvent.change(screen.getByLabelText(/Waktu Jemput\/Ambil/i), { target: { value: '10:00' } });

        fireEvent.click(screen.getByText('Cari Mobil'));

        expect(screen.getByText('Lincoln / MKZ')).toBeInTheDocument();
        expect(screen.queryByText('Honda / Civic')).not.toBeInTheDocument();
    });
});
