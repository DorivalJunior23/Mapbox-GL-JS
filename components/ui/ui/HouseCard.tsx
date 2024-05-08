import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../card';
import { Button } from '../button';

interface HouseCardProps {
    image: StaticImageData;
    price: string;
    houseStats: string;
    address: string;
}
const HouseCard = ({ image, price, houseStats, address }: HouseCardProps) => {
    return (
        <Card>
            <Image alt='house' src={image} className="rounded-md" />
            <CardHeader>
                <CardTitle>{price}</CardTitle>
                <CardDescription>{houseStats}</CardDescription>
                <CardDescription>{address}</CardDescription>
            </CardHeader>
            <div className='flex justify-end pb-1 px-1'>
                <Button size={'sm'}>View Details</Button>
            </div>
        </Card>
    )
}

export default HouseCard