import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToTeam } from "../features/team/team.slice";
import Swal from "sweetalert2";
import axios from "axios";

const User = ({ user }) => {
  const team = useSelector((state) => state.team.team);
  const dispatch = useDispatch();
  const handleAddToTeam = async (user) => {
    if (!user.available) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This member is not available!",
      });
    }

    const exist = team.find((m) => m.domain === user.domain);
    if (exist) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This type of domain member already exits!",
      });
    }
    dispatch(addToTeam(user));
    const res = await axios.post(`https://build-team.vercel.app/team`, {
      member: user,
    });
    const data = res.data;
    if (data.success) {
      Swal.fire("Good job!", "Successfully add a member!", "success");
    }
  };

  return (
    <div className="border border-slate-700">
      <div className="bg-gray-200">
        <img
          src={user?.avatar}
          className="mx-auto h-32"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src =
              "https://robohash.org/sintessequaerat.png?size=50x50&set=set1";
          }}
          alt=""
        />
      </div>
      <div className="p-3">
        <h1 className="text-xl font-semibold text-teal-500">
          {user.first_name + " " + user.last_name}
        </h1>
        <p>{user.email}</p>
        <p>Domain: {user.domain}</p>
        <p>Gender: {user.gender}</p>
        <p>Availability: {user.available ? "Available" : "Not Available"}</p>
      </div>
      <div>
        <button
          onClick={() => handleAddToTeam(user)}
          className="w-full py-1 bg-teal-500 text-white uppercase"
        >
          Add to team
        </button>
      </div>
    </div>
  );
};

export default User;
