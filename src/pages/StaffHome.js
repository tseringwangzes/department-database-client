import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userfunc } from '../services/Apis'
import Table, { StatusPill } from "./Table2";
import Sidebar from "../components/staffSide";


function StaffHome() {
  const navigate = useNavigate();

  const [data, setUserData] = useState([]);



  const columns = React.useMemo(
    () => [

      {
        Header: "Student Name",
        accessor: "student_name",
      },
      {
        Header: "Year",
        accessor: "year",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Shared With",
        accessor: "shared_with",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
      },
      {
      Header: 'Edit',
            Cell: row => (
            <div>
               <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full" onClick={() => navigate("./Home.js",{
                                              state:{
                                              name:"student_name",
                                          
                                              year:"year",
                                              date:"date",
                                              shared:"shared_with"
                }})}>Edit</button>
            </div>
            ),
        
      }
    ],
    []
  );


  //  console.log(data);


  return (
    <>
    
    <div className=" absolute right-0  w-3/4 bg-gray-100 text-gray-900">
      <Sidebar/>
      <main className="absolute max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">This is staff home</h1>
        </div>
        <div className="mt-4">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
    <div className="w-1/2 bg-gray-100 text-gray-900"></div>
    </>

  );
}

export default StaffHome;
