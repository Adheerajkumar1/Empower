/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './UserDashBoard.css';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDBox from 'components/MDBox';
import { Avatar, Button, Grid } from '@mui/material';
import axios from 'axios';

const AuthData = JSON.parse(localStorage.getItem('myData'));


function UserDashBoard() {
	const [ employeeData, setEmployeeData ] = useState([]);
	const [ error, setError ] = useState('');

	const GetEmpData = async () => {
		try {
			const res = await axios.get(
				`https://localhost:5001/api/Employee/GetEmployeeByEmpCode?empCode=${AuthData.empCode}`
			);
			setEmployeeData(res.data);
		} catch (err) {
			setError(err.message);
		}
	};
	console.log(employeeData, 'Employee Data');
	useEffect(() => {
		GetEmpData();
	}, []);
	return (
		<MDBox>
			<Grid className="user_container">
				<DashboardNavbar />
			</Grid>
			<Grid className="prifile_head">
				<Avatar className="avtar" />
				<Grid className="name_email">
					<h4>
						{employeeData.empFName} {employeeData.empMName} {employeeData.empLName}
					</h4>
					<h6>{employeeData.empEmailId}</h6>
				</Grid>
				<Grid className="btn">
					<Button variant="contained" size="small" className="edit_btn">
						Edit Profile
					</Button>
					<Button variant="contained" size="small" className="edit_dwnl">
						Download CV
					</Button>
					<Button variant="contained" size="small" className="edit_dwnl">
						Download Salery Slip
					</Button>
				</Grid>
			</Grid>

			<Grid container spacing={2} className="profile_body">
				<Grid item xs={2.4}>
					<Grid className="head">Name</Grid>
					<Grid className="head_item">
						{employeeData.empFName} {employeeData.empMName} {employeeData.empLName}
					</Grid>
				</Grid>
				<Grid item xs={2.4}>
					<Grid className="head">Date Of Birth</Grid>
					<Grid className="head_item">{employeeData.empDateofBirth}</Grid>
				</Grid>
				<Grid item xs={2.4}>
					<Grid className="head">Gender</Grid>
					<Grid className="head_item">{employeeData.empGenderId}</Grid>
				</Grid>
				<Grid item xs={2.4}>
					<Grid className="head">Father</Grid>
					<Grid className="head_item">{employeeData.empFatherName}</Grid>
				</Grid>
				<Grid item xs={2.4}>
					<Grid className="head">Marital Status</Grid>
					<Grid className="head_item">{employeeData.empMaritalStatusId}</Grid>
				</Grid>
				<Grid item xs={2.4}>
					<Grid className="head">Date of Marrige</Grid>
					<Grid className="head_item">{employeeData.empDateofMarriage}</Grid>
				</Grid>
				<Grid item xs={2.4}>
					<Grid className="head">Address</Grid>
					<Grid className="head_item">Address</Grid>
				</Grid>
				<Grid item xs={2.4}>
					<Grid className="head">Skills</Grid>
					<Grid className="head_item">{employeeData.empSkills}</Grid>
				</Grid>
				<Grid item xs={2.4}>
					<Grid className="head">Last Company</Grid>
					<Grid className="head_item">{employeeData.empLastCompany}</Grid>
				</Grid>
				<Grid item xs={2.4}>
					<Grid className="head">Leaving Date</Grid>
					<Grid className="head_item">{employeeData.empLeavingDate}</Grid>
				</Grid>
				<Grid item xs={2.4}>
					<Grid className="head">Leaving Reason</Grid>
					<Grid className="head_item">{employeeData.empLeavingReason}</Grid>
				</Grid>
				<Grid item xs={2.4}>
					<Grid className="head">Pan Number</Grid>
					<Grid className="head_item">{employeeData.empPAN}</Grid>
				</Grid>
				<Grid item xs={2.4}>
					<Grid className="head">Aadhar Number</Grid>
					<Grid className="head_item">{employeeData.empAadhar}</Grid>
				</Grid>
				<Grid item xs={2.4}>
					<Grid className="head">Language</Grid>
					<Grid className="head_item">{employeeData.emplanguage}</Grid>
				</Grid>
				<Grid item xs={2.4}>
					<Grid className="head">Contact Number</Grid>
					<Grid className="head_item">{employeeData.empMobileNumber}</Grid>
				</Grid>
				<Grid item xs={2.4}>
					<Grid className="head">Alternate number</Grid>
					<Grid className="head_item">{employeeData.empEmergencyContactNumber}</Grid>
				</Grid>
				<Grid item xs={2.4}>
					<Grid className="head">Email ID</Grid>
					<Grid className="head_item">{employeeData.empEmailId}</Grid>
				</Grid>
				<Grid item xs={2.4}>
					<Grid className="head">Personal Email ID</Grid>
					<Grid className="head_item">{employeeData.empPersonalEmailId}</Grid>
				</Grid>
			</Grid>
		</MDBox>
	);
}

export default UserDashBoard;