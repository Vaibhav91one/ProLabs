type PopularProductCard = {
  imgURL: React.ElementType;
  name: string;
  description: string;
};

export const PopularProductCard = ({
  imgURL: Icon,
  name,
  description,
}: PopularProductCard) => {
  return (
    <div className="flex flex-wrap flex-col w-full max-sm:w-full p-10 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100 rounded-xl">
      <div className="mt-8 flex justify-start gap-2.5 mb-5">
        <div className="p-3 bg-slate-800 rounded-full">
        <Icon className="size-10" />
        </div>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 leading-normal">{description}</p>
    </div>
  );
};

export default PopularProductCard;
