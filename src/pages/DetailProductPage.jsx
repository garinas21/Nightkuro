import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { BASE_URL } from "../constant/Constant";
import NavBar from "../components/NavBar";

const DetailProduct = () => {
  let { id } = useParams();
  const [dataProduct, setDataProduct] = useState({});
  console.log("ini id", id);

  const getDataProduct = async () => {
    const { data } = await axios.get(`${BASE_URL}/pub/product/${id}`);

    console.log("Cek data", data.data);
    setDataProduct(data.data);
  };

  useEffect(() => {
    getDataProduct();
  }, []);

  console.log(dataProduct);
  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="min-h-screen bg-slate-300/90 flex flex-col gap-5 justify-center items-center">
          <div className="flex gap-3">
            <Link
              to="/product"
              className="font-semibold hover:underline hover:text-sky-700 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"
            >
              {" "}
              Collection{" "}
            </Link>
            <h1 className="font-semibold">
              {" "}
              &gt; {dataProduct.Category?.name}{" "}
            </h1>
            <h1 className="font-semibold"> &gt; {dataProduct.name} </h1>
          </div>
          <div className="flex flex-col md:flex-row border-2 border-slate-100/40 rounded-2xl w-6/10 h-8/10 p-10 gap-10">
            <img
              className="min-h-full w-3/5 rounded-lg shadow-xl object-cover"
              src={dataProduct.imgUrl}
              alt="Product"
            />
            <div className="flex flex-col p-5 gap-2">
              <span className="font-bold text-2xl">{dataProduct.name}</span>
              <span className="text-sm">{dataProduct.Category?.name}</span>
              <hr />
              <p className="pl-5 my-10">{dataProduct.description}</p>
              <hr />
              <span className="font-bold mt-5">
                Stock : {dataProduct.stock}
              </span>
              <span className="text-right font-bold mt-2">
                {" "}
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(dataProduct.price)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
