import * as React from "react";
import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import bg from "./Images/Bgpet.png";
import {Link, useNavigate} from "react-router-dom"

export default function Addpet() {
  const [petName, setPetName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [adopted, setAdopted] = useState("");

  const handlePostRequest = (e) => {
    e.preventDefault();
    const pet_data = { petName, ownerEmail, ownerPhone, dob, gender, adopted };
    console.log(pet_data);

    axios
      .post(`https://crudcrud.com/api/ae99c5a85c374b57826146cb1d5c2f7b`, {
        pet_data,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });

    setPetName("");
    setOwnerEmail("");
    setOwnerPhone("");
    setDob("");
    setGender("");
    setAdopted("");
  };

  return (
    <div>
      <Header />
      <div className=" w-full h-screen  bg-gray-100 grid  place-items-center">
        <div className="bg-white px-8 py-2 rounded-3xl border-2 border-gray-200 hover:scale-[1.01] ease-in-out transition mt-3">
          <img
            src={bg}
            alt="pet images"
            className="object-contain md:object-scale-down"
          />
          <p className="font-medium text-lg  sm:text-md md:text-xl text-gray-600 mt-2">
            Please enter pet details details.
          </p>
          <div>
            <label className="text-lg sm:text-md md:text-xl font-medium">
              Pet Name
            </label>
            <input
              value={petName}
              onChange={(event) => {
                setPetName(event.target.value);
              }}
              className="w-full border-2 border-gray-300 rounded-xl p-2 mt-1 bg-transparent"
              placeholder="Enter Pet Name"
              type="text"
              required
            />
          </div>

          <div>
            <label className="text-lg sm:text-md md:text-xl font-medium">
              Pet Owner Email{" "}
            </label>
            <input
              value={ownerEmail}
              onChange={(event) => {
                setOwnerEmail(event.target.value);
              }}
              className="w-full border-2 border-gray-300 rounded-xl p-2 mt-1 bg-transparent"
              placeholder="Enter Pet Owner Email"
              type="Email"
              required
            />
          </div>

          <div>
            <label className="text-lg sm:text-md md:text-xl font-medium">
              Pet Owner Phone
            </label>
            <input
              value={ownerPhone}
              onChange={(event) => {
                setOwnerPhone(event.target.value);
              }}
              className="w-full border-2 border-gray-300 rounded-xl p-2 mt-1 bg-transparent"
              placeholder="Enter Pet owner phone no."
              type="tel"
              pattern="[0-9]"
              maxLength="10"
              required
            />
          </div>

          <div>
            <label className="text-lg sm:text-md md:text-xl font-medium">
              Date of Birth
            </label>
            <input
              value={dob}
              onChange={(event) => {
                setDob(event.target.value);
              }}
              className="w-full border-2 border-gray-300 rounded-xl p-2 mt-1 bg-transparent"
              placeholder="mm"
              type="date"
              required
            />
          </div>

          <div>
            <label className="text-base sm:text-md md:text-xl font-medium">
              Gender :{" "}
            </label>
            <select
              value={gender}
              onChange={(event) => {
                setGender(event.target.value);
              }}
              name="pet-gender"
              id="pet-gender"
              className="border-black bg-white p-4 mt-2 rounded-xl"
            >
              {Array.isArray(["Male", "Female", "Non-Binary"]) ? (
                ["Select Pet Gender","Male", "Female", "Non-Binary"].map((address, key) => (
                  <option key={key} value={address}>
                    {address}
                  </option>
                ))
              ) : (
                <option value="">Invalid gender list</option>
              )}
            </select>
          </div>

          <div>
            <label className="text-base sm:text-md md:text-xl font-medium">
              Adopted :{" "}
            </label>
             {" "}
            <input
              type="radio"
              name="adoption"
              label="yes"
              checked={adopted === "Yes"}
              value="Yes"
              onChange={() => setAdopted("Yes")}
            />
              <label htmlFor="adopted">Yes</label>
             {" "}
            <input
              type="radio"
              name="adoption"
              label="no"
              checked={adopted === "No"}
              value="No"
              onChange={() => setAdopted("No")}
            />
              <label htmlFor="not adopted">No</label>
            <br />
          </div>

          <div className="mt-8 mb-4 flex flex-col justify-center gap-y-4">
            <button
              onClick={handlePostRequest}
              className="hover:scale-[1.01] ease-in-out active:scale-[.98] active:duration-75 transition-all py-3 rounded-xl bg-blue-900 text-white text-lg sm:text-md md:text-xl font-bold"
            >
              Submit
            </button>
          </div>

          <div className="mt-8 mb-4 flex flex-col justify-center gap-y-4">
          <Link to={"/view"}>
            <button
              className="hover:scale-[1.01] ease-in-out mx-40 content-center active:scale-[.98] pr-10 pl-10 active:duration-75 transition-all py-3 rounded-xl bg-blue-900 text-white text-lg sm:text-md md:text-xl font-bold"
            >
             View Data
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
