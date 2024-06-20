import React from 'react';

interface Title {
    title: string;
}

const NotFound: React.FC<Title> = ({ title }) => {
    return (
        <header>
            <div className="relative px-8 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-12 lg:py-16">
                <div className="flex items-center justify-center">
                    <h2 className="font-sans font-bold text-5xl text-red-600 leading-normal">
                        {title}
                    </h2>
                </div>
            </div>
        </header>
    )
}

export default NotFound;