import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { stforvisits } from '../services/Apis'
import TablesForeigns, { StatusPill } from "../tables/TablesForeigns";
import Sidebar from "../components/Sidebar";


function Foreign() {
    const utype = "0";
    const navigate = useNavigate();


    const [data, setUserData] = useState([]);
    const userGet = async () => {
        const response = await stforvisits();
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
                Header: "Start-Date",
                accessor: "start_date",
            },
            {
                Header: "End-date",
                accessor: "end_date",
            },
            {
                Header: "Country",
                accessor: "country",
            },
            {
                Header: "Faculty-Name",
                accessor: "faculty_name",
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
                    return (<div>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full" onClick={() => navigate("./ForeignEdit.js/" + original._id, {
                            state: {
                                student_name:original.student_name,
                                topic: original.topic,
                                start_date: original.start_date,
                                end_date: original.end_date,
                                country: original.country,
                                faculty_name: original.faculty_name,
                                status: original.status,
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
                <Sidebar />
                <main className="absolute max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                    <div className="">
                        <h1 className="text-xl font-semibold">Your Foreign Visits</h1>
                    </div>
                    <div className="mt-4">
                        <TablesForeigns columns={columns} data={data} utype={utype}/>
                    </div>
                </main>
            </div>
            <div className="w-1/2 bg-gray-100 text-gray-900"></div>
        </>

    );
}

export default Foreign;