import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: number;
  comment: string;
  rating?: number;
  user?: string;
}

const ReviewSection = ({ propertyId }: { propertyId: string }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p className="text-gray-500">Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="space-y-4">
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id} className="p-4 border rounded-lg shadow-sm bg-white">
            <p className="text-gray-700">{review.comment}</p>
            {review.rating && (
              <p className="text-yellow-600 font-medium">⭐ {review.rating}/5</p>
            )}
            {review.user && (
              <p className="text-sm text-gray-500">- {review.user}</p>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No reviews available yet.</p>
      )}
    </div>
  );
};

export default ReviewSection;
