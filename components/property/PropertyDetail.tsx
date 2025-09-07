// components/property/PropertyDetail.tsx
import Image from "next/image";

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
}

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Image
        src={property.image}
        alt={property.title}
        width={1200}
        height={600}
        className="w-full h-80 object-cover rounded-2xl mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 mb-4">{property.location}</p>
      <p className="text-xl font-semibold mb-6">${property.price}</p>
      <p className="text-gray-700">{property.description}</p>
    </div>
  );
}

