import * as React from "react";
import { useState } from "react";
import Header from "./Header";
import bg from "./Images/Bgpet.png";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Data from "./Data";

export default function LocalAddPet() {
  const [petName, setPetName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [adopted, setAdopted] = useState("");
   const [error, setError] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!petName || !ownerEmail || !ownerPhone || !dob || !gender || !adopted) {
      setError("All fields are required.");
      return;
    }

    const id = uuidv4();
    let uniqueId = id.slice(0, 2);

    Data.push({
      id: uniqueId,
      petName: petName,
      ownerEmail: ownerEmail,
      ownerPhone: ownerPhone,
      dob: dob,
      gender: gender,
      adopted: adopted,
    });
    history("/view");
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
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <label className="text-lg sm:text-md md:text-xl font-medium">
              Pet Name
            </label>
            <input
              onChange={(e) => setPetName(e.target.value)}
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
              onChange={(e) => setOwnerEmail(e.target.value)}
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
              onChange={(e) => setOwnerPhone(e.target.value)}
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
              onChange={(e) => setDob(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-xl p-2 mt-1 bg-transparent"
              placeholder="mm/dd/yyyy"
              type="date"
              required
            />
          </div>

          <div>
            <label className="text-base sm:text-md md:text-xl font-medium">
              Gender :{" "}
            </label>
            <select
              name="pet-gender"
              id="pet-gender"
              className="border-black bg-white p-4 mt-2 rounded-xl"
              onChange={(e) => setGender(e.target.value)}
            >
              {Array.isArray(["Male", "Female", "Non-Binary"]) ? (
                ["Select Gender", "Male", "Female", "Non-Binary"].map(
                  (address, key) => (
                    <option key={key} value={address}>
                      {address}
                    </option>
                  )
                )
              ) : (
                <option value="">Invalid gender list</option>
              )}
            </select>
          </div>

          <div>
            <label className="text-base sm:text-md md:text-xl font-medium">
              Adopted:{" "}
            </label>
            &nbsp;
            <input
              type="radio"
              name="adoption"
              value="Yes"
              checked={adopted === "Yes"}
              onChange={(e) => setAdopted(e.target.value)}
            />{" "}
            &nbsp;
            <label htmlFor="adopted">Yes</label>
            &nbsp;&nbsp;{" "}
            <input
              type="radio"
              name="adoption"
              value="No"
              checked={adopted === "No"}
              onChange={(e) => setAdopted(e.target.value)}
            />
            &nbsp;
            <label htmlFor="not adopted">No</label>
            <br />
          </div>

          <div className="mt-8 mb-4 flex flex-col justify-center gap-y-4">
            <button
              onClick={(e) => handleSubmit(e)}
              className="hover:scale-[1.01] ease-in-out active:scale-[.98] active:duration-75 transition-all py-3 rounded-xl bg-blue-900 text-white text-lg sm:text-md md:text-xl font-bold"
            >
              Submit
            </button>
          </div>

          <div className="mt-8 mb-4 flex flex-col justify-center gap-y-4">
            <Link to={"/view"}>
              <button className="hover:scale-[1.01] ease-in-out mx-40 content-center active:scale-[.98] pr-10 pl-10 active:duration-75 transition-all py-3 rounded-xl bg-blue-900 text-white text-lg sm:text-md md:text-xl font-bold">
                View Data
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
