import React, { Component, useEffect, useState } from "react";
import Papa from 'papaparse';
import { st_award_csv } from "../services/Apis";
import { useNavigate } from "react-router-dom";
import Table, { StatusPill } from "./Table2";
import Sidebar from "../components/staffSide";
import { toast } from "react-toastify";


function StaffCsv() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {

    var file;
    file = event.target.files[0];
    Papa.parse(file, {
      delimiter: ',',
      skipEmptyLines: true,

      columns: ['st_name', 'award_name', 'year', 'date', 'shared_with', 'status'],
      header: true, complete: async function (results) {

        console.log("Finished:", results.data);
        const response = await st_award_csv(results.data);
        setMessage(response.data.message);
      }
    });

    //await st_award_csv(fileData);
  }


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
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full" onClick={() => navigate("./Home.js", {
              state: {
                name: "student_name",

                year: "year",
                date: "date",
                shared: "shared_with"
              }
            })}>Edit</button>
          </div>
        ),

      }
    ],
    []
  );


  const columns2= React.useMemo(
    () => [

      {
        Header: "Faculty Name",
        accessor: "faculty_name",
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
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full" onClick={() => navigate("./Home.js", {
              state: {
                name: "student_name",

                year: "year",
                date: "date",
                shared: "shared_with"
              }
            })}>Edit</button>
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
        <Sidebar />
        <main className="absolute max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="">


            <h1 className="text-xl font-semibold">SELECT A FILE OF GIVEN FORMAT FOR STUDENT DATA</h1> <br />




            <input class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={handleSubmit}
            />




          </div>

          <Table columns={columns} data={data} />
          <br />  <br />   <br />
          <h1 className="text-xl font-semibold">SELECT A FILE OF GIVEN FORMAT FOR FACULTY DATA</h1> <br />
          <div className="App">


            <input class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={handleSubmit}
            />



          </div>


          <Table columns={columns2} data={data} />


        </main>
      </div>
      <div className="w-1/2 bg-gray-100 text-gray-900"></div>
    </>

  );
}

export default StaffCsv;
