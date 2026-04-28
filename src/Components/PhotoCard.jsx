import Image from 'next/image';
import { FcLikePlaceholder } from "react-icons/fc";
import React from 'react';
import { FaDownload } from "react-icons/fa";
import { Button, Chip, Separator } from '@heroui/react';
import Link from 'next/link';

const PhotoCard = ({ photo }) => {
    return (
        <div className='border p-3  mt-[10px] rounded-xl'>
            <div className='relative w-full aspect-square'>
                <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='rounded-md object-cover' src={photo.imageUrl} fill alt={photo.title} />
                <Chip size='sm' className='absolute right-2 top-2'>{photo.category}</Chip>
            </div>
            <div>
                <h2 className='font-medium'>{photo.title}</h2>
            </div>
            <div className='flex gap-2'>
                <div className='flex gap-2 items-center'>
                    <FcLikePlaceholder />
                    <p>{photo.likes}</p>
                </div>
                <Separator orientation='vertical' />
                <div className='flex gap-1 items-center'>
                    <FaDownload />
                    <p>{photo.downloads}</p>
                </div>
            </div>
            <Link href={`/all-photos/${photo.id}`}>
                <Button variant='outline' className={`w-full mt-[15px]`}>View</Button>
            </Link>
        </div>
    );
};

export default PhotoCard;