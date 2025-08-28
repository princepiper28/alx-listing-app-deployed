// pages/index.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import FilterPill from "@/components/FilterPill";
import PropertyCard from "@/components/PropertyCard";

// 👇 This should match your API response shape
export interface PropertyProps {
  id: string; 
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount?: number; // optional
}

const filters = [
  "Top Villa",
  "Self Checkin",
  "Pet Friendly",
  "Free Parking",
  "Mountain View",
];

export default function HomePage() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<PropertyProps[]>([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🔗 Fetch properties from API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get<PropertyProps[]>("/api/properties");
        setProperties(response.data);
        setFilteredProperties(response.data); // default view
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // 🔎 Handle filter selection
  const handleFilterClick = (label: string) => {
    const newFilter = label === selectedFilter ? "" : label;
    setSelectedFilter(newFilter);

    if (!newFilter) {
      setFilteredProperties(properties);
    } else {
      setFilteredProperties(
        properties.filter((prop) => prop.category.includes(newFilter))
      );
    }
  };

  // ⏳ Loading state
  if (loading) {
    return <p className="text-center mt-8">Loading properties...</p>;
  }

  // ❌ Error state
  if (error) {
    return <p className="text-center text-red-500 mt-8">{error}</p>;
  }

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
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No properties match this filter.
          </p>
        )}
      </section>
    </>
  );
}
