import { revalidatePath } from "next/cache";
import React from "react";

type User = { name: string; avatar: string; id: string };

const MockUsers = async () => {
  const response = await fetch(
    "https://672deaa6fd89797156444480.mockapi.io/users"
  );
  const data = await response.json();

  async function addUser(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const response = await fetch(
      "https://672deaa6fd89797156444480.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );
    const newUser = await response.json();
    revalidatePath("/mock-users");
    console.log(newUser);
  }

  return (
    <div className="flex flex-col gap-4 m-4">
      <form action={addUser} className=" flex  gap-2">
        <div className="flex  gap-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className=" rounded-lg w-50 h-10 p-2 border-2 border-gray-200"
          />
          <button
            className=" bg-sky-400 px-5 rounded-lg text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div>
        {data.map((user: User) => (
          <div key={user.id}>
            <div className="flex flex-row justify-evenly">{user.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockUsers;
