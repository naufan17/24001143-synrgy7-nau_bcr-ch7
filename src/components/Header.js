import React from 'react';

export default function Header() {
    return (
        <header className="bg-blue-50">
            <div className="relative px-8 py-12 mb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-12 lg:py-16">
                <div className="mb-16 lg:max-w-lg lg:mb-0">
                    <h2 className="mb-6 font-sans font-bold text-4xl leading-normal">
                        Sewa & Rental Mobil Terbaik di kawasan Sleman
                    </h2>
                    <p className="mb-6 text-base text-justify font-sans">
                        Selamat datang di Binar Car Rental. 
                        Kami menyediakan mobil berkualitas terbaik dengan jarga terjagkau. 
                        Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                    </p>
                    <a href="/cars" className="inline-flex items-center justify-center h-10 px-5 font-semibold font-sans text-white rounded bg-green-500 hover:bg-green-600">
                        Mulai Sewa Mobil
                    </a>
                </div>
                <div className="flex justify-center lg:absolute bottom-0 right-0">
                    <img src="./images/img_car.png" className="object-cover object-top w-full max-w-xl lg:h-auto lg:max-w-screen-sm" alt="Car"/>
                </div>
            </div>
        </header>
    )
}