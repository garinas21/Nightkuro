const Sidebar = ({
  handlerSearch,
  handlerFilter,
  handlerSort,
  filter,
  listCategory,
}) => {
  return (
    <>
      <div className="col-span-2 bg-slate-800 p-6">
        <h2 className="text-white font-semibold mb-2">Search</h2>
        <input
          onChange={handlerSearch}
          className="w-full p-2 rounded-md bg-slate-700 text-slate-200 mb-6"
          type="text"
          placeholder="Search"
        />
        {/* <!-- Filter Category --> */}
        <h2 className="text-white font-semibold mb-2">Filter by Category</h2>
        <ul className="space-y-2 mb-6">
          <li>
            <label className="flex items-center space-x-2">
              <input
                onChange={handlerFilter}
                type="radio"
                name="category"
                value=""
                checked={filter === ""}
              />
              <span className="text-slate-200">All</span>
            </label>
          </li>
          {listCategory.map((el) => (
            <li key={el.id}>
              <label className="flex items-center space-x-2">
                <input
                  onChange={handlerFilter}
                  type="radio"
                  name="category"
                  value={el.id}
                  checked={filter === el.id.toString()}
                />
                <span className="text-slate-200">{el.name}</span>
              </label>
            </li>
          ))}
        </ul>
        {/* <!-- Sort --> */}
        <h2 className="text-white font-semibold mb-2">Sort By</h2>
        <select
          id="sort"
          className="w-full p-2 rounded-md bg-slate-700 text-slate-200"
          onChange={handlerSort}
        >
          <option value=" ">Default</option>
          <option value="name">Name (A-Z)</option>
          <option value="-name">Name (Z-A)</option>
          <option value="price">Price (Low → High)</option>
          <option value="-price">Price (High → Low)</option>
        </select>
      </div>
    </>
  );
};

export default Sidebar;
