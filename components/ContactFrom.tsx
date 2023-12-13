"use client";
import React, { FormEvent } from "react";
import { InputWithLable } from "./InputWithLable";

export const Contactfrom = () => {
  const handleSubmite = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmite} className="flex flex-col space-y-8">
      <div className="flex space-x-8">
        <InputWithLable lable="First Name" type="text" id="first" />
        <InputWithLable lable="Last Name" type="text" id="last" />
      </div>
      <div className="flex space-x-8">
        <InputWithLable lable="Emil" type="email" id="email" />
        <InputWithLable lable="Phone Number" type="text" id="phone" />
      </div>
      <div className="w-full flex flex-col space-y-2  ">
        <label htmlFor="message" className="text-white">
          Leave us a message...
        </label>
        <textarea className="min-h-[200px] indent-4 text-white outline-none inputTag bg-transparent"></textarea>
      </div>
    </form>
  );
};
