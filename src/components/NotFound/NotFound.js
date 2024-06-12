import React from 'react';

export default function NotFound() {
    return (
        <header>
            <div className="relative px-8 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-12 lg:py-16">
                <div className="flex items-center justify-center">
                    <h2 className="font-sans font-bold text-5xl text-red-600 leading-normal">
                        404
                    </h2>
                </div>
                <div className="flex items-center justify-center">
                    <h2 className="font-sans font-bold text-4xl text-red-600 leading-normal">
                        Page Not Found
                    </h2>
                </div>
            </div>
        </header>
    )
}