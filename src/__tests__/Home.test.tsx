import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Layout/Header/Header';
import WhyUs from '../components/Home/WhyUs/WhyUs';
import Service from '../components/Home/Service/Service';
import Testimonial from '../components/Home/Testimonial/Testimonial';
import Rent from '../components/Home/Rent/Rent';
import FAQ from '../components/Home/FAQ/FAQ';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <WhyUs />
            <Service />
            <Testimonial />
            <Rent />
            <FAQ />
        </div>
    );
};

describe('Home Page', () => {
    test('renders Home page components correctly', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        expect(screen.getByText('Sewa & Rental Mobil Terbaik di kawasan Sleman')).toBeInTheDocument();
        expect(screen.getByText('Selamat datang di Binar Car Rental.')).toBeInTheDocument();
        expect(screen.getByText('Mulai Sewa Mobil')).toBeInTheDocument();

        expect(screen.getByText('Why Us?')).toBeInTheDocument();
        expect(screen.getByText('Mobil Lengkap')).toBeInTheDocument();
        expect(screen.getByText('Harga Murah')).toBeInTheDocument();
        expect(screen.getByText('Layanan 24 Jam')).toBeInTheDocument();
        expect(screen.getByText('Sopir Profesional')).toBeInTheDocument();

        expect(screen.getByText('Best Car Rental for any kind of trip in Sleman!')).toBeInTheDocument();
        expect(screen.getByText('Sewa Mobil Dengan Supir di Bali 12 Jam')).toBeInTheDocument();
        expect(screen.getByText('Sewa Mobil Lepas Kunci di Bali 24 Jam')).toBeInTheDocument();
        expect(screen.getByText('Sewa Mobil Jangka Panjang Bulanan')).toBeInTheDocument();
        expect(screen.getByText('Gratis Antar - Jemput Mobil di Bandara')).toBeInTheDocument();
        expect(screen.getByText('Layanan Airport Transfer / Drop In Out')).toBeInTheDocument();

        expect(screen.getByText('Testimonial')).toBeInTheDocument();
        expect(screen.getByText('Berbagai review positif dari para pelanggan kami')).toBeInTheDocument();
        expect(screen.getByText('John Dee, Bromo')).toBeInTheDocument();
        expect(screen.getByText('Felicia, Dieng')).toBeInTheDocument();
        expect(screen.getByText('Unknown, Zimbabwe')).toBeInTheDocument();

        expect(screen.getByText('Sewa Mobil di Sleman Sekarang')).toBeInTheDocument();
        expect(screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')).toBeInTheDocument();
        expect(screen.getByText('Mulai Sewa Mobil')).toBeInTheDocument();

        expect(screen.getByText('Frequently Asked Question')).toBeInTheDocument();
        expect(screen.getByText('Apa saja yang dibutuhkan?')).toBeInTheDocument();
        expect(screen.getByText('Berapa hari minimal sewa mobil lepas kunci?')).toBeInTheDocument();
        expect(screen.getByText('Berapa hari sebelumnya sebaiknya booking sewa mobil?')).toBeInTheDocument();
        expect(screen.getByText('Apakah Ada biaya antar jemput?')).toBeInTheDocument();
        expect(screen.getByText('Bagaimana jika terjadi kecelakaan?')).toBeInTheDocument();
    });
});
