"use client";

import { useState } from "react";
import { updateGuest } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function UpdateProfileForm({ guest, children }) {
  const [count, setCount] = useState();
  const { fullName, nationality, email, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className="bg-primary-900 py-6 px-4 sm:py-8 sm:px-12 text-base sm:text-lg flex gap-4 sm:gap-6 flex-col rounded-lg"
    >
      <div className="space-y-2">
        <label className="block text-primary-200">Full name</label>
        <input
          disabled
          name="fullName"
          defaultValue={fullName}
          className="px-4 sm:px-5 py-2.5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-primary-200">Email address</label>
        <input
          disabled
          name="email"
          defaultValue={email}
          className="px-4 sm:px-5 py-2.5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality" className="text-primary-200">
            Where are you from?
          </label>
          <img
            src={countryFlag}
            alt="Country flag"
            className="h-4 sm:h-5 rounded-sm"
          />
        </div>

        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID" className="block text-primary-200">
          National ID number
        </label>
        <input
          name="nationalID"
          defaultValue={nationalID}
          className="px-4 sm:px-5 py-2.5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-4 sm:gap-6 mt-2">
        <SubmitButton pendingLabel="Updating..." className="w-full sm:w-auto">
          Update Profile
        </SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
