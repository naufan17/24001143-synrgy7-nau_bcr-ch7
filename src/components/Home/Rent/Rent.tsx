import React from 'react';

const Rent: React.FC = () => {
    return (
        <section>
            <div className="relative px-8 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-12 lg:py-16">
                <div className="p-12 bg-blue-800 rounded-xl sm:p-16">
                    <div className="flex item-center justify-center">
                        <div className="max-w-screen-sm text-center">
                            <h2 className="mb-6 font-sans font-bold text-3xl sm:text-4xl text-white leading-normal">
                                Sewa Mobil di Sleman Sekarang
                            </h2>
                            <p className="mb-10 text-base text-white font-sans">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                            <a href="/cars" className="inline-flex items-center justify-center h-10 px-5 font-semibold font-sans text-white rounded bg-green-500 hover:bg-green-600">
                                Mulai Sewa Mobil
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rent;