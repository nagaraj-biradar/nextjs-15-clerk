import React from "react";

type User = {
  id: 1;
  name: "Leanne Graham";
  username: "Bret";
  email: "Sincere@april.biz";
  address: {
    street: "Kulas Light";
    suite: "Apt. 556";
    city: "Gwenborough";
    zipcode: "92998-3874";
    geo: {
      lat: "-37.3159";
      lng: "81.1496";
    };
  };
};

const UserServer = async () => {
  const respponse = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await respponse.json();

  return (
    <div>
      {data.map((user: User) => (
        <div key={user.id}>
          <div className="flex flex-row justify-evenly">
            {user.name}
            <span>{user.email}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserServer;
