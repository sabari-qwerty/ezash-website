"use client";
import React, { FC, FormEvent } from "react";
import { InputWithLable } from "./InputWithLable";

export const Contactfrom: FC = () => {
  const handleSubmite = (e: FormEvent) => {
    e.preventDefault();
    alert("thanks");
  };
  return (
    <form onSubmit={handleSubmite} className="flex flex-col space-y-8 ">
      <div className="flex space-x-8">
        <InputWithLable lable="First Name" type="text" id="first" required />
        <InputWithLable lable="Last Name" type="text" id="last" required />
      </div>
      <div className="flex space-x-8">
        <InputWithLable lable="Emil" type="email" id="email" required />
        <InputWithLable lable="Phone Number" type="text" id="phone" required />
      </div>
      <div className="w-full flex flex-col space-y-2  ">
        <label htmlFor="message" className="text-white w-full text-left">
          Leave us a message...
        </label>
        <textarea
          className="min-h-[200px] indent-4 text-white outline-none inputTag bg-transparent"
          placeholder="enter your message"
        ></textarea>
      </div>
      <div className="w-full  flex justify-end">
        <button className="custom-btn btn-15" type="submit">
          Sumite
        </button>
      </div>
    </form>
  );
};
