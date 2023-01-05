import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredUser } from "../features/users/users.slice";

const FilterComponent = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const domain = e.target.domain.value;
    const gender = e.target.gender.value;
    const available = e.target.available.value;

    dispatch(fetchFilteredUser({ count, domain, gender, available }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h2 className="text-2xl font-semibold text-white">Filter Users</h2>
      <div className="space-y-3">
        <div>
          <h3>Domain</h3>
          <select className="w-full border text-slate-800" name="domain" id="">
            <option value="Sales">Sales</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Management">Management</option>
            <option value="UI Designing">UI Designing</option>
            <option value="Business Development">Business Development</option>
          </select>
        </div>
        <div>
          <h3>Gender :</h3>
          <select className="w-full border text-slate-800" name="gender" id="">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Polygender">Polygender</option>
            <option value="Bigender">Bigender</option>
            <option value="Genderfluid">Genderfluid</option>
            <option value="Genderqueer">Genderqueer</option>
            <option value="Agender">Agender</option>
          </select>
        </div>
        <div>
          <h3>Availability:</h3>
          <div className="flex">
            <div className="mr-8">
              <input
                onClick={() => setIsDisabled(false)}
                type="radio"
                name="available"
                id="available"
                value="1"
              />
              <label className="ml-2" htmlFor="available">
                Yes
              </label>
            </div>
            <div>
              <input
                onClick={() => setIsDisabled(false)}
                type="radio"
                name="available"
                id="notAvailable"
                value=""
              />
              <label className="ml-2" htmlFor="notAvailable">
                No
              </label>
            </div>
          </div>
        </div>
      </div>
      <button
        disabled={isDisabled}
        className={`py-1 px-12 text-white ${
          isDisabled ? "bg-gray-600 text-slate-400" : "bg-teal-500"
        }`}
        type="submit"
      >
        Apply
      </button>
    </form>
  );
};

export default FilterComponent;
