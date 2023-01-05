import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersByName } from "../features/users/users.slice";

const SearchBox = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUsersByName({ count, name: e.target.searchField.value }));
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="md:w-2/5 flex mx-auto relative">
        <input
          className="border border-teal-500 text-slate-800 py-1.5 pl-5 w-full focus:outline-none rounded-l-full"
          type="text"
          name="searchField"
          placeholder="Search Name"
          required
        />
        <button
          className="px-5 py-1.5 bg-teal-500 border border-teal-500 text-white rounded-r-full"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
