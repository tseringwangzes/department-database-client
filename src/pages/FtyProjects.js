import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ft_projects } from '../services/Apis'
import FtyTablesProjects, { StatusPill } from "../tables/FtyTablesProjects";
import FtySidebar from "../components/FtySidebar";


function FtyProjects() {
  const navigate = useNavigate();


  const [data, setUserData] = useState([]);
  const userGet = async () => {
    const response = await ft_projects();
    if (response.status === 200) {
      setUserData(response.data)
      console.log(response.data)
    } else {
      console.log("error for get user data")
    }
  }
  useEffect(() => {
    userGet();
    setTimeout(() => {
    }, 1200)
  }, [])


  const columns = React.useMemo(
    () => [

      {
        Header: " Topic",
        accessor: "topic",
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
        Header: "Granted-Money",
        accessor: "granted_money",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: 'Edit',
        Cell: props => {
          const {original}=props.cell.row;
          return(
          <div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full" onClick={() => navigate("./FtyProjectsEdit.js/"+original._id, {
              state: {
                faculty_name:original.faculty_name,
                topic: original.topic,
                year: original.year,
                date: original.date,
                granted_money: original.granted_money,
                status:original.status,
                id: original._id
              }
            })}>Edit</button>
          </div>);
        }

      }
    ],
    []
  );


  //  console.log(data);


  return (
    <>

      <div className=" absolute right-0  w-3/4 bg-gray-100 text-gray-900">
        <FtySidebar />
        <main className="absolute max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="">
            <h1 className="text-xl font-semibold">Your Projects</h1>
          </div>
          <div className="mt-4">
            <FtyTablesProjects columns={columns} data={data} />
          </div>
        </main>
      </div>
      <div className="w-1/2 bg-gray-100 text-gray-900"></div>
    </>

  );
}

export default FtyProjects;