import HalfStarIcon from "@/components/icons/half-star-icon";
import StarIcon from "@/components/icons/star-icon";


interface RatingProps {
  rating: number;
  reviews: number;
}

const Rating = ({ rating, reviews }: RatingProps) => {
  return (
    <div className="flex items-center gap-2">
      <span>{Math.ceil(rating * 10) / 10}</span>
      <div className="flex gap-1 items-center">
        {new Array(Math.floor(rating)).fill(0).map((i, index) => <StarIcon key={index} />)}
        <HalfStarIcon />
      </div>
      <a
        href="#"
        aria-label="Go to view all review"
        className="text-indigo-700 text-sm font-medium"
      >
        See all {reviews} reviews
      </a>
    </div>
  );
};

export default Rating;
