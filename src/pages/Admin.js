import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userfunc } from '../services/Apis'
import Table, { StatusPill } from "./Table2";
import AdminSidebar from "../components/AdminSidebar";


function Admin() {

  //  console.log(data);


  return (
    <>
    
    <div className=" absolute right-0  w-3/4 bg-gray-100 text-gray-900">
      <AdminSidebar/>
      <main className="absolute max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">This is Admin home</h1>
        </div>
        {/* <div className="mt-4">
          <Table columns={columns} data={data} />
        </div> */}
      </main>
    </div>
    <div className="w-1/2 bg-gray-100 text-gray-900"></div>
    </>

  );
}

export default Admin;
