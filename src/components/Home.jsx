import React from "react";
import Counter from "../features/counter/Counter";
import Users from "../features/users/Users";
import FilterComponent from "./FilterComponent";
import SearchBox from "./SearchBox";

const Home = () => {
  return (
    <div className="">
      <div className="mb-10">
        <SearchBox />
      </div>
      <div className="pb-20 grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="col-span-1 md:col-span-4 lg:col-span-3">
          <FilterComponent />
        </div>
        <div className="col-span-1 md:col-span-8 lg:col-span-9">
          <Users />
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default Home;
