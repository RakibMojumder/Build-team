import React from "react";

const Member = ({ member }) => {
  return (
    <div className="border border-slate-700">
      <div className="bg-gray-100">
        <img
          src={member?.avatar}
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
          {member.first_name + " " + member.last_name}
        </h1>
        <p>{member.email}</p>
        <p>Domain: {member.domain}</p>
        <p>Gender: {member.gender}</p>
        <p>Availability: {member.available ? "Available" : "Not Available"}</p>
      </div>
    </div>
  );
};

export default Member;
