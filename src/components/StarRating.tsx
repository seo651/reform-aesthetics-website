import { Star } from 'lucide-react';

interface StarRatingProps {
  rating?: number;
}

export function StarRating({ rating = 5 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-[#F5A623] text-[#F5A623]' : 'fill-gray-300 text-gray-300'}`}
        />
      ))}
    </div>
  );
}
