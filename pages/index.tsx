import FilterPill from "@/components/FilterPill";
import PropertyCard from "@/components/PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useState } from "react";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Pet Friendly",
  "Free Parking",
  "Mountain View",
];

export default function HomePage() {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterClick = (label: string) => {
    setSelectedFilter(label === selectedFilter ? "" : label);
  };

  const filteredProperties = selectedFilter
    ? PROPERTYLISTINGSAMPLE.filter((prop) =>
        prop.category.includes(selectedFilter)
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <>
      {/* ✅ Hero Section */}
      <section
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center text-center text-white px-4"
        style={{ backgroundImage: "url(/assets/images/hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="z-10 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-base md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* ✅ Filter Section */}
      <section className="py-6 px-4 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <FilterPill
              key={filter}
              label={filter}
              selected={selectedFilter === filter}
              onClick={() => handleFilterClick(filter)}
            />
          ))}
        </div>
      </section>

      {/* ✅ Listing Section */}
      <section className="py-8 px-4 max-w-7xl mx-auto">
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.name} property={property} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No properties match this filter.</p>
        )}
      </section>
    </>
  );
}
