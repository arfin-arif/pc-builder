import Link from "next/link";
import FeaturedCardHelper from "./FeaturedCardHelper";

const FeaturedCard = ({ allCategories }) => {
  return (
    <div className="grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {allCategories.map((card) => (
        <Link key={card.id} href={card.url}>
          <FeaturedCardHelper key={card.id} card={card}></FeaturedCardHelper>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedCard;
