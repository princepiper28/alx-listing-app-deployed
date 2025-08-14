// components/PropertyCard.tsx
import { FC } from "react";
import { PropertyProps } from "@/interfaces";

const PropertyCard: FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img
        src={property.image}
        alt={property.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{property.name}</h3>
          {property.discount && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              -{property.discount}%
            </span>
          )}
        </div>

        <p className="text-sm text-gray-500">
          {property.address.city}, {property.address.country}
        </p>

        <div className="mt-2 flex gap-2 flex-wrap text-xs text-gray-600">
          {property.category.map((cat) => (
            <span
              key={cat}
              className="bg-gray-100 px-2 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="mt-3 text-sm flex justify-between items-center">
          <span className="font-bold text-blue-600">
            ${property.price.toLocaleString()}
          </span>
          <span className="text-yellow-500 font-medium">★ {property.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
