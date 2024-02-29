import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/2")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="text-orange-600 text-center d-flex">
        Github followers: {data.name}
      </div>
    </>
  );
}

export default Github;
