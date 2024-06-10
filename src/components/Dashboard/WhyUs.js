import React from 'react';
import { ThumbsUp, Tag, Clock, Award } from 'feather-icons-react';

export default function WhyUs(){
    return (
        <section id="WhyUs">
            <div className="relative px-8 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-12 lg:py-16">
                <div className="mb-8 lg:mb-12 text-center sm:text-left">
                    <h2 className="mb-6 font-sans font-bold text-3xl leading-normal">
                        Why Us?
                    </h2>
                    <p className="text-base font-sans">
                        Mengapa harus pilih Binar Car Rental?
                    </p>
                </div>
                <div className="grid gap-4 md:gap-6 lg:grid-cols-4 md:grid-cols-2">
                    <div className="px-4 py-4 border-2 rounded-lg lg:px-6 lg:py-6">
                        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-400">
                            <ThumbsUp color="white"/>
                        </div>
                        <h3 className="mb-3 text-lg sm:text-xl font-bold font-sans">
                            Mobil Lengkap
                        </h3>
                        <p className="font-sans text-base text-justify">
                            Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat.
                        </p>
                    </div>
                    <div className="px-4 py-4 border-2 rounded-lg lg:px-6 lg:py-6">
                        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-red-500">
                            <Tag color="white"/>
                        </div>
                        <h3 className="mb-3 text-lg sm:text-xl font-bold font-sans">
                            Harga Murah
                        </h3>
                        <p className="font-sans text-base text-justify">
                            Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                        </p>
                    </div>
                    <div className="px-4 py-4 border-2 rounded-lg lg:px-6 lg:py-6">
                        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-blue-700">
                            <Clock color="white"/>
                        </div>
                        <h3 className="mb-3 text-lg sm:text-xl font-bold font-sans">
                            Layanan 24 Jam
                        </h3>
                        <p className="font-sans text-base text-justify">
                            Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                        </p>
                    </div>
                    <div className="px-4 py-4 border-2 rounded-lg lg:px-6 lg:py-6">
                        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-green-500">
                            <Award color="white"/>
                        </div>
                        <h3 className="mb-3 text-lg sm:text-xl font-bold font-sans">
                            Sopir Profesional
                        </h3>
                        <p className="font-sans text-base text-justify">
                            Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}