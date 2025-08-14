import Image from 'next/image';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ image, title, location, price }) => (
  <div className="border rounded-lg overflow-hidden shadow-md bg-white">
    <div className="relative w-full h-48">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-sm text-gray-500 mb-2">{location}</p>
      <p className="text-md font-bold">{price}</p>
    </div>
  </div>
);

export default Card;
