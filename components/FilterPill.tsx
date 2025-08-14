// components/FilterPill.tsx
import { FC } from "react";

interface FilterPillProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

const FilterPill: FC<FilterPillProps> = ({ label, selected = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-full border text-sm transition ${
        selected
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
      }`}
    >
      {label}
    </button>
  );
};

export default FilterPill;
