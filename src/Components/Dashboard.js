import * as React from "react";
import Header from "./Header"
import bg from "./Images/Bgpet.png";
import {Link} from "wouter";

export default function Dashboard(){
    return(

    <div>
        <Header/>
        <div>
            <div className="w-full h-screen sm:h-1/2 md:h-1/3 lg:h-1/4 xl:h-1/5 bg-gray-100 content-center flex flex-col sm:flex-row overflow-x-scroll">
            <div className=" text-center w-full h-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 bg-white px-8 py-2 rounded-3xl border-2 border-gray-200 hover:scale-[1.1] ease-in-out transition m-40 ml-60 sm:ml-30 md:ml-40 lg:ml-50 xl:ml-60">
                    <img src={bg} alt="pet images object-contain" className=" max-w-full h-auto mb-10" />
                    <Link to="/add-pet">
                            <button className="bg-blue-900 text-white px-8 py-2 rounded-3xl border-2 border-gray-200 hover:scale-[1.01] ease-in-out transition mt-3">
                            Add New Pet
                            </button>
                    </Link>
                </div>

                <div className=" text-center w-full h-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 bg-white px-8 py-2 rounded-3xl border-2 border-gray-200 hover:scale-[1.1] ease-in-out transition m-40 ml-60 sm:ml-30 md:ml-40 lg:ml-50 xl:ml-60">
                    <img src={bg} alt="pet images object-contain" className=" max-w-full h-auto mb-10" />
                    <Link to="/view">
                            <button className="bg-blue-900 text-white px-8 py-2 rounded-3xl border-2 border-gray-200 hover:scale-[1.01] ease-in-out transition mt-3">
                            View/Edit Existing Details
                            </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>

    )

}