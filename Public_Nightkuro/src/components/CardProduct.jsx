import { Link } from "react-router";

const CardProduct = ({ dataProduct }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {dataProduct.map((el) => (
          <Link
            key={el.id}
            to={`/product/${el.id}`}
            className="flex flex-col bg-gradient-to-r from-zinc-200 to-zinc-100 shadow-xl rounded-2xl overflow-hidden"
          >
            <img
              className="h-56 w-full object-cover border-8 border-zinc-100/30 rounded-t-2xl"
              src={el.imgUrl}
              alt="Product"
            />
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-m font-bold line-clamp-1 text-gray-800 hover:line-clamp-2 transition-all duration-300 ease-in-out">
                {el.name}
              </h2>
              <h5 className="text-gray-600 text-xs pb-3">{el.Category.name}</h5>
              <hr />
              <div className="mt-2 text-right">
                <span className="text-sm font-bold text-black">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(el.price)}
                </span>
              </div>
              <Link
                to={`/product/${el.id}`}
                className="text-blue-500 text-sm mt-4 text-right font-bold hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"
              >
                View Detail
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CardProduct;
