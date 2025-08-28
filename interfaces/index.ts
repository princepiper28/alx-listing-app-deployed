// interfaces/index.ts
export interface PropertyProps {
  id: string; // add this to keep it consistent with listings
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
  discount?: number; // changed to number, optional
}