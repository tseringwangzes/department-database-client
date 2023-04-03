import React, { Component, useEffect, useState } from "react";
import Sidebar from "../components/staffSide";
import { useNavigate } from "react-router-dom";
import { stproj } from '../services/Apis';
import { ft_projects } from '../services/Apis'

import Table, { StatusPill } from "./Table";
import TablesProjects from "../tables/TablesProjects";
import FtyTablesProjects from "../tables/FtyTablesProjects";

export default function StaffProject() {

  const navigate = useNavigate();
  const utype = "1";

  const [data, setUserData] = useState([]);
  const userGet = async () => {
    const response = await stproj();
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
        Header: " Student Name",
        accessor: "student_name",
      },
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
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Collaboration with",
        accessor: "collaboration",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
      },
      {
        Header: 'Edit',
        Cell: props => {
          const { original } = props.cell.row;

          return (
            <div>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full" onClick={() => navigate("./ProjectsEdit.js/" + original._id, {
                state: {
                  topic: original.topic,
                  year: original.year,
                  date: original.date,
                  granted_money: original.granted_money,
                  description: original.description,
                  status: original.status,
                  id: original._id,
                  faculty_name: original.faculty_name,
                  student_name: original.student_name,
                  collaboration: original.collaboration,
                  utype: utype
                }
              })}>Edit</button>
            </div>);
        }

      }
    ],
    []
  );



  const [data2, setUserData2] = useState([]);
  const userGet2 = async () => {
    const response = await ft_projects();
    if (response.status === 200) {
      setUserData2(response.data)
      console.log(response.data)
    } else {
      console.log("error for get user data")
    }
  }
  useEffect(() => {
    userGet2();
    setTimeout(() => {
    }, 1200)
  }, [])


  const columns2 = React.useMemo(
    () => [{
      Header: "Faculty Name",
      accessor: "faculty_name",
    },
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
        const { original } = props.cell.row;
        return (
          <div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full" onClick={() => navigate("./FtyProjectsEdit.js/" + original._id, {
              state: {
                faculty_name: original.faculty_name,
                topic: original.topic,
                year: original.year,
                date: original.date,
                granted_money: original.granted_money,
                status: original.status,
                id: original._id,
                utype: utype
              }
            })}>Edit</button>
          </div>);
      }

    }
    ],
    []
  );
  return (
    <>
      <div className=" absolute right-0  w-3/4 bg-gray-100 text-gray-900">
        <Sidebar />
        <main className="absolute max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="">
            <h1 className="text-xl font-semibold">Student Project Grants</h1>
          </div>
          <div className="mt-4">
            <TablesProjects columns={columns} data={data} utype={utype} />
          </div>
          <br />
          <div className="">
            <h1 className="text-xl font-semibold">Faculty Project Grants</h1>
          </div>
          <div className="mt-4">
            <FtyTablesProjects columns={columns2} data={data2} utype={utype} />
          </div>
        </main>
      </div>
      <div className="w-1/2 bg-gray-100 text-gray-900"></div>
    </>
  );
}









