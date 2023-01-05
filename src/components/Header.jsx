import React, { useEffect } from "react";
import { RiTeamLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeam } from "../features/team/team.slice";
import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeam());
  }, [dispatch]);
  const teamMember = useSelector((state) => state.team.teamMember);
  return (
    <div className="py-8 lg:py-10 flex items-center justify-center gap-5">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-teal-500" : "")}
      >
        <AiOutlineHome className="text-4xl" />
      </NavLink>
      <div className="relative">
        <NavLink
          to="/team"
          className={({ isActive }) => (isActive ? "text-teal-500" : "")}
        >
          <RiTeamLine className="text-4xl" />
        </NavLink>
        <span className="h-5 w-5 bg-teal-500 text-white text-sm rounded-full text-center absolute -top-4 right-1">
          {teamMember}
        </span>
      </div>
    </div>
  );
};

export default Header;
