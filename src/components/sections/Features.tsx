import { products } from "@/constants";
import PopularProductCard from "../self/PopularProductCard";


const Features = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="text-center gap-5">
        <h2 className="text-white text-4xl font-bold">
          Our <span className="text-yellow-300"> Features</span>
        </h2>
      </div>
      <div className="text-white mt-16 grid gap-14 lg:grid-cols-4 mg:grid-cols-3 sm:grid-cols-1">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Features;
