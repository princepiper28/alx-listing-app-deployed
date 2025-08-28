// pages/api/properties.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { PropertyProps } from "@/interfaces";

const properties: PropertyProps[] = [
  {
    id: "1",
    name: "Modern Apartment",
    address: {
      state: "Lagos",
      city: "Ikeja",
      country: "Nigeria",
    },
    rating: 4.5,
    category: ["Apartment", "Modern"],
    price: 80,
    offers: {
      bed: "2 Beds",
      shower: "2 Showers",
      occupants: "4 Guests",
    },
    image: "https://via.placeholder.com/400x300",
    discount: 10,
  },
  {
    id: "2",
    name: "Cozy Studio",
    address: {
      state: "Abuja",
      city: "Wuse",
      country: "Nigeria",
    },
    rating: 4.2,
    category: ["Studio", "Affordable"],
    price: 50,
    offers: {
      bed: "1 Bed",
      shower: "1 Shower",
      occupants: "2 Guests",
    },
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: "3",
    name: "Luxury Villa",
    address: {
      state: "Rivers",
      city: "Port Harcourt",
      country: "Nigeria",
    },
    rating: 4.9,
    category: ["Villa", "Luxury"],
    price: 200,
    offers: {
      bed: "5 Beds",
      shower: "4 Showers",
      occupants: "10 Guests",
    },
    image: "https://via.placeholder.com/400x300",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(properties);
}
