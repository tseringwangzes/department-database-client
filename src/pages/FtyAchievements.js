import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ft_achievements } from '../services/Apis'
import FtyTablesAchievements, { StatusPill } from "../tables/FtyTablesAchievements";
import FtySidebar from "../components/FtySidebar";


function FtyAchievements() {
  const navigate = useNavigate();
const utype = "0";
  const [data, setUserData] = useState([]);
  const userGet = async () => {
    const response = await ft_achievements();
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
        Header: " Achievements",
        accessor: "Achievements",
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
        Header: 'Edit',
        Cell: props => {
          const { original } = props.cell.row;
return(
          <div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full" onClick={() => navigate("./FtyAchievementsEdit.js/"+original._id, {
              state: {
                faculty_name:original.faculty_name,
                Achievements: original.Achievements,
                year: original.year,
                date: original.date,
                shared_with: original.shared_with,
                id:original._id,
                utype:utype
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
            <h1 className="text-xl font-semibold">Your Achievements</h1>
          </div>
          <div className="mt-4">
            <FtyTablesAchievements columns={columns} data={data} utype={utype} />
          </div>
        </main>
      </div>
      <div className="w-1/2 bg-gray-100 text-gray-900"></div>
    </>

  );
}

export default FtyAchievements;