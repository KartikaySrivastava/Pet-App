import React, { Fragment } from "react";
import Header from "./Header";
import Data from "./Data";
import {Link, useNavigate} from "react-router-dom"


export default function View() {

    let history = useNavigate();

    const handleEdit = (id, petName, ownerEmail, ownerPhone, dob, gender, adopted) => {
        localStorage.setItem("petName",petName)
        localStorage.setItem("ownerEmail", ownerEmail)
        localStorage.setItem("ownerPhone", ownerPhone)
        localStorage.setItem("dob", dob)
        localStorage.setItem("gender", gender)
        localStorage.setItem("adopted", adopted)
        localStorage.setItem("id",id)
    }

    const handleDelete=(id) =>{
        var index= Data.map(function(e){
            return e.id //Taking id as parameter and returning particular Dog data
           
        }).indexOf(id); //Getting index of that particular id

        Data.splice(index,1); //adds and/or removes array elements. or overwrites the original array

        history('/view') //After delete we will be on view page only
    }
  return (
    <div>
      <div>
        <Header />
      </div>

      <Fragment>
        <div className="bg-blue-900 mt-40 ml-40 mr-40 mb-10 relative overflow-x-auto shadow-md sm:rounded-lg text-center">
          <h1 className="text-5xl p-2 text-white font-urbanist">Pet Data</h1>
          <table className="w-full text-sm text-left rtl:text-right text-black dark:text-white">
            <thead className="text-xs text-white uppercase bg-gray-300 dark:bg-gray-200 dark:text-black">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Pet Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Owner Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Owner Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Date of birth
                </th>

                <th scope="col" className="px-6 py-3">
                  Gender
                </th>

                <th scope="col" className="px-6 py-3">
                  Adopted
                </th>
                <th scope="col" className="px-12 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {
                //This condition is needed when using web API.
                Data && Data.length > 0
                  ? Data.map((item) => {
                      return (
                        <tr key={item.id} className="bg-white border-b dark:bg-blue-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-blue-800">
                          <td className="px-6 py-4">{item.id}</td>
                          <td className="px-6 py-4">{item.petName}</td>
                          <td className="px-6 py-4">{item.ownerEmail}</td>
                          <td className="px-6 py-4">{item.ownerPhone}</td>
                          <td className="px-6 py-4">{item.dob}</td>
                          <td className="px-6 py-4">{item.gender}</td>
                          <td className="px-6 py-4">{item.adopted}</td>

                          <td className="px-6 py-4  text-center">
                        <Link to={'/edit'}>
                        <button
                             onClick={() => handleEdit(item.id, item.petName, item.ownerEmail,item.ownerPhone,item.dOB,item.gender,item.adopted)}
                              className="hover:underline bg-white py-1 rounded-md text-black sm:text-sm md:text-md lg:text-lg xl:text-lg font-urbanist p-2">
                              Edit
                            </button>
                        </Link>
                           
                            &nbsp;&nbsp;

                            <button
                             onClick={() => handleDelete(item.id)}
                              className="hover:underline bg-white py-1 rounded-md text-black sm:text-sm md:text-md lg:text-lg xl:text-lg font-urbanist p-2">
                              Delete
                            </button>
                          </td>

                          {/* <td className="px-6 py-4 text-right">
                              <a href="#" className="font-medium text-white hover:underline">
                                Delete
                              </a>
                            </td> */}
                        </tr>
                      );
                    })
                  : "No data available"
              }
            </tbody>
          </table>

          <Link to={"/local-add-pet"}>
          <button
                    className="hover:scale-[1.01] ease-in-out active:scale-[.98] p-2 active:duration-75 transition-all py-3 rounded-xl bg-white text-blue-900 text-lg sm:text-md md:text-md lg:text-lg font-bold m-5"
                  >
                   Add Data
                  </button>
          </Link>

        </div>
       
      </Fragment>
      
    </div>
  );
}
