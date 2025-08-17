import { useEffect, useState } from "react";
import { BASE_URL } from "../constant/Constant";
import axios from "axios";
import NavBar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import CardProduct from "../components/CardProduct";

const ProductPage = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [filter, setFilter] = useState("");
  console.log("cek data", dataProduct);
  const getDataProduct = async () => {
    const { data } = await axios.get(
      `${BASE_URL}/pub/product?search=${search}&page=${currentPage}&filter=${filter}&sort=${sort}`
    );

    console.log("Cek data", data.data);
    setDataProduct(data.data);
    setCurrentPage(data.currentPage);
    setTotalPage(data.totalPage);
  };

  useEffect(() => {
    getDataProduct();
  }, [filter, search, currentPage, sort]);

  useEffect(() => {
    const datalistCategory = async () => {
      const { data } = await axios.get(`${BASE_URL}/pub/category`);
      console.log("Cak Category", data.data);
      setListCategory(data.data);
    };
    datalistCategory();
  }, []);

  const handlerFilter = (event) => {
    console.log("test", event);
    setFilter(event.target.value);
    setCurrentPage(1);
  };

  const handlerSort = (event) => {
    console.log("test", event);
    setSort(event.target.value);
    setCurrentPage(1);
  };

  const handlerSearch = (event) => {
    console.log("test", event);
    setSearch(event.target.value);
    setCurrentPage(1);
  };

  const handlePagination = () => {
    let arr = [];
    for (let x = 1; x <= totalPage; x++) {
      arr.push(x);
    }

    return arr;
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPage) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar
            handlerSearch={handlerSearch}
            handlerSort={handlerSort}
            handlerFilter={handlerFilter}
            listCategory={listCategory}
            filter={filter}
          />
          {/* <!-- Main content --> */}
          <main className="flex-1 p-10 bg-slate-300/90 overflow-y-auto">
            <CardProduct dataProduct={dataProduct} />
            {/* <!-- Pagination --> */}
            <div className="flex justify-center mt-8 space-x-2">
              {currentPage > 1 && (
                <button
                  onClick={handlePrev}
                  className="bg-gray-100 font-bold px-4 py-2 rounded-l-md hover:bg-gray-400 transition-all duration-300"
                >
                  Prev
                </button>
              )}
              {handlePagination().map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={
                    page === currentPage
                      ? "min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-400 py-2 px-3 text-sm font-bold rounded-lg"
                      : "min-h-[38px] min-w-[38px] flex justify-center items-center bg-white rounded-lg hover:bg-gray-400 font-bold py-2 px-3 text-sm transition-all duration-300"
                  }
                >
                  {page}
                </button>
              ))}
              {currentPage !== totalPage && totalPage > 1 && (
                <button
                  onClick={handleNext}
                  className="bg-gray-100 font-bold px-4 py-2 rounded-r-md hover:bg-gray-400 transition-all duration-300"
                >
                  Next
                </button>
              )}
            </div>
            {dataProduct.length === 0 && (
              <div className="flex justify-center items-center mt-30">
                <h1 className="text-xl font-bold text-gray-800">
                  No product found
                </h1>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
