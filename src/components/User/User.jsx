import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <>
      <h1 className="bg-gray-600 w-auto d-flex text-center text-orange-50  p-10">
        {" "}
        User : {userid}
      </h1>
    </>
  );
}

export default User;
