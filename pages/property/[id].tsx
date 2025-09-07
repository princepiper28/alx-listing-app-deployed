// pages/property/[id].tsx
import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";

interface ApiProperty {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string; // 👈 matches API
  location: string;
}

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string; // 👈 normalized for PropertyDetail.tsx
  location: string;
}

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProperty = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const response = await axios.get<ApiProperty>(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${id}`
        );

        // ✅ Normalize API response so PropertyDetail always gets "image"
        const normalizedProperty: Property = {
          ...response.data,
          image: response.data.imageUrl,
        };

        if (isMounted) {
          setProperty(normalizedProperty);
        }
      } catch (err) {
        console.error("Error fetching property details:", err);
        if (isMounted) setError("Failed to load property details.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProperty();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  if (!property) {
    return <p className="text-center text-gray-500 mt-10">Property not found</p>;
  }

  return <PropertyDetail property={property} />;
}

