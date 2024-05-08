import React from 'react'
import house1 from '@/public/house1.jpeg'
import house2 from '@/public/house2.jpeg'
import house3 from '@/public/house3.jpeg'
import house4 from '@/public/house4.jpeg'
import house5 from '@/public/house5.jpeg'
import house6 from '@/public/house6.jpeg'
import HouseCard from './HouseCard'
const houseList = [
    {
      "image": house2,
      "price": "$2,600,000",
      "houseStats": "3bd 3ba 3,600 sqft",
      "address": "1698 Southridge Dr, Petaluma, CA 94954"
    },
    {
      "image": house3,
      "price": "$3,299,000",
      "houseStats": "4bd 3ba 4,000 sqft",
      "address": "4715 Bodega Ave, Petaluma, CA 94952"
    },
    {
      "image": house4,
      "price": "$2,799,000",
      "houseStats": "3bd 2ba 3,800 sqft",
      "address": "402 E Macarthur St, Sonoma, CA 95476"
    },
    {
      "image": house5,
      "price": "$4,499,000",
      "houseStats": "4bd 1ba 4,200 sqft",
      "address": "7050 Grove St, Sonoma, CA 95476"
    },
    {
      "image": house6,
      "price": "$3,800,000",
      "houseStats": "3bd 4ba 1,000 sqft",
      "address": "20735 Burndale Rd, Sonoma, CA 95476"
    },
    {
      "image": house1,
      "price": "$8,200,000",
      "houseStats": "5bd 4ba 6,000 sqft",
      "address": "O Alan Dr, Penngrove, CA 94951"
    }
]


const PropertiesDisplay = () => {
  return (
    <div className='grid grid-cols-2 w-[500px] gap-1 overflow-auto'>
        {houseList.map((house,index)=>(
            <HouseCard
            key={index}
            image={house.image}
            price={house.price}
            houseStats={house.houseStats}
            address={house.address}
            />
        ))}
    </div>
  )
}

export default PropertiesDisplay