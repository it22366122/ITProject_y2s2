import { Button, TextInput } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

export default function ProfileDash() {
  const {currentUser} = useSelector((state) => state.user);
  
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <div
          className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
          
        >
          <img
            src="../src/img/dp.jpeg"
            alt=""
            className="rounded-full w-full h-full object-cover"
            style={{ objectFit: "cover" }}
          />
        </div>
        <TextInput
          type="text"
          defaultValue={currentUser.username}
          disabled
        ></TextInput>
        <TextInput
          type="text"
          defaultValue={currentUser.email}
          disabled
        ></TextInput>
        <Button className="bg-red-500">Sign Out </Button>
      </form>
      
    </div>
  );
}
