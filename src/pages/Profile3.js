import Papa from 'papaparse';
import { st_award_csv } from "../services/Apis";
//import Table, { StatusPill } from "./Table";
import React, { useState } from 'react'
import Sidebar from "../components/staffSide";

export default function Profile3() {
	const handleSubmit = async (event) => {

			var file;
			file = event.target.files[0];
			Papa.parse(file, { delimiter: ',',
							   skipEmptyLines: true,
							   
							   columns: ['st_name', 'award_name', 'year', 'date', 'shared_with', 'status'],
							   header: true,complete: function(results) {

				console.log("Finished:", results.data);
				st_award_csv (results.data);

			}});
			
		  //await st_award_csv(fileData);
	}	
		 
	
	return (
		<div className="App">
      <Sidebar/>

			<input
				type="file"
				accept=".csv,.xlsx,.xls"
				onChange={handleSubmit}
			/>



		</div>
	);
}


