import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userfunc } from '../services/Apis'
import { st_ach } from '../services/Apis'
import { st_publi } from '../services/Apis'
import { st_semi } from '../services/Apis'
import { stproj } from '../services/Apis'
import { stforvisits } from '../services/Apis'
import Table, { StatusPill } from "./FtyTable";
import Sidebar from "../components/FtySidebar";
import { useLocation } from 'react-router-dom';
function FtyApprove() {
    const navigate = useNavigate();
    const location = useLocation();

    const [data, setUserData] = useState([]);

    const userGet = async () => {
        const response = await userfunc();
        if (response.status === 200) {
            setUserData(response.data)
            //  console.log(response.data)
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
                Header: "Student Name",
                accessor: "student_name",
            },   
            {
                Header: "Award Name",
                accessor: "award_name",
            },
            {
                Header: "Award Reason",
                accessor: "award_reason",
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
                Header: 'Approve',
                Cell: props => {
                    const { original } = props.cell.row;
                    return (<div>
                        <button class="activeButtonIndex === 0 ? bg-blue-500 : bg-green-500  hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full" onClick={() => updateStatus(original._id, original.award_name, original.award_reason, original.year, original.date, original.shared_with, "Verified")}>Approve</button>
                    </div>);
                }
            }
        ],
        []
    );

    const updateStatus = async (id, award_name, award_reason, year, date, shared_with, status) => {
        let item = { award_name, award_reason, year, date, shared_with, status }
        console.log(item);

        let result = await fetch(`http://localhost:4002/user/faculty/Approve/${id}`, {
            method: 'Put',
            body: JSON.stringify({ award_name, award_reason, year, date, shared_with, status }),
            headers: {
                'Accept': "application/json",
                'content-Type': "application/json"
            }

        });

        result = await result.json()
        //    navigate('/faculty/Approve')
        window.location.reload();
    }


    const [data2, setUserData2] = useState([]);
    const userGet2 = async () => {
        const response = await st_ach();
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
        () => [
            {
                Header: "Student Name",
                accessor: "student_name",
            },
            {
                Header: " Achievements",
                accessor: "achievements",
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
                Cell: props => {
                    const { original } = props.cell.row;
                    return (<div>
                        <button class="activeButtonIndex === 0 ? bg-blue-500 : bg-green-500  hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full" onClick={() => updateStatus2(original._id, original.achievements, original.year, original.date, original.shared_with, "Verified")}>Approve</button>
                    </div>);
                }
            }
        ],
        []
    );

    const updateStatus2 = async (id, achievements, year, date, shared_with, status) => {
        let item = { achievements, year, date, shared_with, status }
        console.log(item);

        let result = await fetch(`http://localhost:4002/user/faculty/ApproveAch/${id}`, {
            method: 'Put',
            body: JSON.stringify({ achievements, year, date, shared_with, status }),
            headers: {
                'Accept': "application/json",
                'content-Type': "application/json"
            }

        });
        result = await result.json()
        //    navigate('/faculty/Approve')
        window.location.reload();
    }



    const [data3, setUserData3] = useState([]);
    const userGet3 = async () => {
      const response = await st_publi();
      if (response.status === 200) {
        setUserData3(response.data)
        console.log(response.data)
      } else {
        console.log("error for get user data")
      }
    }
    useEffect(() => {
      userGet3();
      setTimeout(() => {
      }, 1200)
    }, [])
  
  
    const columns3 = React.useMemo(
      () => [
        {
            Header: "Student Name",
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
          Header: "Collaborations",
          accessor: "collaboration",
        },
        {
          Header: "Number-of-students",
          accessor: "no_of_students",
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
                <button class="activeButtonIndex === 0 ? bg-blue-500 : bg-green-500  hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full" onClick={() => updateStatus3(original._id, original.topic, original.year, original.date, original.collaboration, "Verified")}>Approve</button>
            </div>);
        }
  
        }
      ],
      []
    );


    const updateStatus3 = async (id, topic, year, date, collaboration, status) => {
        let item = { topic, year, date, collaboration, status }
        console.log(item);

        let result = await fetch(`http://localhost:4002/user/faculty/ApprovePub/${id}`, {
            method: 'Put',
            body: JSON.stringify({ topic, year, date, collaboration, status }),
            headers: {
                'Accept': "application/json",
                'content-Type': "application/json"
            }

        });
        result = await result.json()
        //    navigate('/faculty/Approve')
        window.location.reload();
    }


    const [data4, setUserData4] = useState([]);
    const userGet4 = async () => {
        const response = await stforvisits();
        if (response.status === 200) {
            setUserData4(response.data)
            console.log(response.data)
        } else {
            console.log("error for get user data")
        }
    }
    useEffect(() => {
        userGet4();
        setTimeout(() => {
        }, 1200)
    }, [])


    const columns4 = React.useMemo(
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
                        <button class="activeButtonIndex === 0 ? bg-blue-500 : bg-green-500  hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full" onClick={() => updateStatus4(original._id, original.topic, original.start_date, original.end_date, original.country, "Verified")}>Approve</button>
                    </div>);
                }

            }
        ],
        []
    );

    const updateStatus4 = async (id, topic, start_date, end_date, country, status) => {
        let item = { topic, start_date, end_date, country, status }
        console.log(item);

        let result = await fetch(`http://localhost:4002/user/faculty/ApproveFor/${id}`, {
            method: 'Put',
            body: JSON.stringify({ topic, start_date, end_date, country, status }),
            headers: {
                'Accept': "application/json",
                'content-Type': "application/json"
            }

        });
        result = await result.json()
        //    navigate('/faculty/Approve')
        window.location.reload();
    }

    const [data5, setUserData5] = useState([]);
  const userGet5 = async () => {
    const response = await st_semi();
    if (response.status === 200) {
      setUserData5(response.data)
      console.log(response.data)
    } else {
      console.log("error for get user data")
    }
  }
  useEffect(() => {
    userGet5();
    setTimeout(() => {
    }, 1200)
  }, [])


  const columns5 = React.useMemo(
    () => [

      {
        Header: " Title",
        accessor: "title",
      },
      {
        Header: " Type",
        accessor: "type",
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
        Header: "Venue",
        accessor: "venue",
      },
      {
        Header: "Chief_guest",
        accessor: "chief_guest",
      },
      {
        Header: "Mode",
        accessor: "mode",
      },
      {
        Header: "Collaborator",
        accessor: "collaborator",
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
                <button class="activeButtonIndex === 0 ? bg-blue-500 : bg-green-500  hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full" onClick={() => updateStatus5(original._id, original.title, original.type, original.year, original.date, "Verified")}>Approve</button>
            </div>);
        }

      }
    ],
    []
  );

  const updateStatus5 = async (id, title, type, year, date, status) => {
    let item = { title, type, year, date, status }
    console.log(item);

    let result = await fetch(`http://localhost:4002/user/faculty/ApproveSemi/${id}`, {
        method: 'Put',
        body: JSON.stringify({ title, type, year, date, status }),
        headers: {
            'Accept': "application/json",
            'content-Type': "application/json"
        }

    });
    result = await result.json()
    //    navigate('/faculty/Approve')
    window.location.reload();
}

const [data6, setUserData6] = useState([]);
  const userGet6 = async () => {
    const response = await stproj();
    if (response.status === 200) {
      setUserData6(response.data)
      console.log(response.data)
    } else {
      console.log("error for get user data")
    }
  }
  useEffect(() => {
    userGet6();
    setTimeout(() => {
    }, 1200)
  }, [])


  const columns6 = React.useMemo(
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
            return (<div>
                <button class="activeButtonIndex === 0 ? bg-blue-500 : bg-green-500  hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full" onClick={() => updateStatus6(original._id, original.year, original.date, original.granted_money, original.description, "Verified")}>Approve</button>
            </div>);
        }

      }
    ],
    []
  );

  const updateStatus6 = async (id, year, date, granted_money, description, status) => {
    let item = { year, date, granted_money, description, status }
    console.log(item);

    let result = await fetch(`http://localhost:4002/user/faculty/ApprovePro/${id}`, {
        method: 'Put',
        body: JSON.stringify({ year, date, granted_money, description, status }),
        headers: {
            'Accept': "application/json",
            'content-Type': "application/json"
        }

    });
    result = await result.json()
    //    navigate('/faculty/Approve')
    window.location.reload();
}




    return (
        <>

            <div className=" absolute right-0  w-3/4 bg-gray-100 text-gray-900">
                <Sidebar />
                <main className="absolute max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                    <div className="">
                        <h1 className="text-xl font-semibold">Student Awards for Verification</h1>
                    </div>
                    <div className="mt-4">
                        <Table columns={columns} data={data} />  <br /><br />
                    </div>
                    {/* <h1 className="text-xl font-semibold">Student Achievements for Verification</h1>
                        <Table columns={columns2} data={data2} /> */}
                    <div className="">
                        <h1 className="text-xl font-semibold">Student Achievements for Verification</h1>
                    </div>
                    <div className="mt-4">
                        <Table columns={columns2} data={data2} />  <br /><br />
                    </div>
                    <div className="">
                        <h1 className="text-xl font-semibold">Student Publications for Verification</h1>
                    </div>
                    <div className="mt-4">
                        <Table columns={columns3} data={data3} />  <br /><br />
                    </div>
                    <div className="">
                        <h1 className="text-xl font-semibold">Student Foreign visits for Verification</h1>
                    </div>
                    <div className="mt-4">
                        <Table columns={columns4} data={data4} />  <br /><br />
                    </div>
                    <div className="">
                        <h1 className="text-xl font-semibold">Student Seminars for Verification</h1>
                    </div>
                    <div className="mt-4">
                        <Table columns={columns5} data={data5} />  <br /><br />
                    </div>
                    <div className="">
                        <h1 className="text-xl font-semibold">Student Projects for Verification</h1>
                    </div>
                    <div className="mt-4">
                        <Table columns={columns6} data={data6} />  <br /><br />
                    </div>
                </main>
            </div>
            <div className="w-1/2 bg-gray-100 text-gray-900"></div>
        </>

    );
}

export default FtyApprove;
