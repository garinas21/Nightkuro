import NavBar from "../components/NavBar";
import axios from "axios";
import { BASE_URL } from "../constant/Constant";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const HomePage = () => {
  const [filter, setFilter] = useState(1);
  const [dataProduct, setDataProduct] = useState([]);
  const [listCategory, setListCategory] = useState([]);

  const fetchDataProduct = async () => {
    const { data } = await axios.get(
      `${BASE_URL}/pub/product?filter=${filter}`
    );
    setDataProduct(data.data.slice(0, 3));
  };

  useEffect(() => {
    fetchDataProduct();
  }, [filter]);

  const fetchDataCategory = async () => {
    const { data } = await axios.get(`${BASE_URL}/pub/category`);
    console.log(data, "Cek");
    setListCategory(data.data);
  };

  useEffect(() => {
    fetchDataCategory();
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="min-h-screen bg-slate-300/90 flex flex-col items-center gap-5">
          <img
            className="self-start h-120 w-3/4 object-cover mask-r-from-40% mask-r-to-90% rounded-bl-4xl"
            src="https://i.pinimg.com/1200x/3c/1b/9f/3c1b9fd602050964cafa1539f509a671.jpg"
            alt=""
          />
          <h1 className="text-center font-bold text-2xl text-blue-950 mt-5 mx-10">
            Nightkuro Product LineUp
          </h1>
          <div className="grid grid-cols-8 gap-5 py-10 ">
            {listCategory.map((el) => (
              <button
                type="button"
                value={el.id}
                onClick={(event) => {
                  setFilter(el.id);
                }}
                className="h-16 w-full flex items-center justify-center border-2 border-gray-100/30 rounded-2xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"
              >
                <span className="text-blue-950 font-bold line-clamp-1 hover:line-clamp-2">
                  {el.name}
                </span>
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-14 mb-10 ">
            {dataProduct.map((el) => (
              <Link
                key={el.id}
                to={`/product/${el.id}`}
                className="h-100 w-45 flex flex-col bg-gradient-to-r from-zinc-200 to-zinc-100 shadow-xl rounded-2xl overflow-hidden "
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
                  <h5 className="text-gray-600 text-xs pb-3">
                    {el.Category.name}
                  </h5>
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
          <div className="bg-gray-700 h-40 w-screen flex justify-center p-10 rounded-tl-4xl">
            <Link
              to="/product"
              className="text-blue-100 text-2xl font-bold hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out mb-20"
            >
              <h1>See all Collection</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
