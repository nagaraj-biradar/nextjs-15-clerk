"use client";

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
const UserClient = () => {
  const [user, setUser] = React.useState<User[]>([]);
  const [error, setError] = React.useState<Error | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className="flex flex-col gap-4 m-4">
          <div>
            {user.map((user) => (
              <div key={user.id}>
                <div className="flex flex-row justify-evenly">
                  {user.name}

                  <span>{user.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default UserClient;
