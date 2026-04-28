import React from 'react';
import PhotoCard from './PhotoCard';

const TopGeneration = async () => {
    const res = await fetch('https://pixgen-psi.vercel.app/data.json');
    const data = await res.json();
    const topPhotos = data.slice(0, 8);
    console.log(topPhotos);
    return (
        <div className='container mx-auto'>
            <h1 className='text-2xl font-bold mt-[14px]'>Top Image Generation</h1>
            <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {topPhotos.map((photo) => (
                    <PhotoCard key={photo.id} photo={photo} />
                ))}
            </div>
        </div>
    );
};

export default TopGeneration;