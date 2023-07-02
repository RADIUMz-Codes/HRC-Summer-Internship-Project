import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, Button } from "@material-ui/core";
import './index.css'


const columns = [
    { field: "id", headerName: "Sl No",width:150 },
    { field: "customerOrderID", headerName: "Customer Order Id" ,width:200 },
    { field: "salesOrg", headerName: "Sales Org", width:180 },
    {
        field: "distributionChannel",
        headerName: "Distribution Channel",
        width:210
    },
    { field: "companyCode", headerName: "Company Code", width:180 },
    { field: "orderCreationDate", headerName: "Order Creadon Date",width:210 },
    { field: "amountInUsd", headerName: "Order Amount", width:210 },
    { field: "orderCurrency", headerName: "Order Currency", width:210 },
    { field: "customerNumber", headerName: "Customer Number", width:210},
];

export default function AdvancedSearch() {
    const fetchRows = () => {
        const options = {
            method: "GET",
            url: "http://localhost:8080/h2h_milestone_3/DisplayServlet",
        };

        axios
            .request(options)
            .then(function (response) {
                setRows(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    

    const [rows, setRows] = useState([]);
    const [custOrdId, setCustOrdId] = useState('');
    const [custNo, setCustNo] = useState('')
    const [salesOrg, setSalesOrg] = useState('')
    const [filteredRows, setFilteredRows] = useState([]);


    useEffect(() => {
        fetchRows();
    },[]);

    const handleSubmit = () =>{
        filterRows()
    }
    const filterRows = () => {
        let filtered = rows;
        let f = false;
        if(custOrdId.length>0){
            f= true;
            filtered =filtered.filter((row) => row.customerOrderID === Number(custOrdId));
        }
        if(salesOrg.length>0){
            f= true;
            filtered =filtered.filter((row) => row.salesOrg === Number(salesOrg));
        }
        if(custNo>0){
            f= true;
            filtered =filtered.filter((row) => row.customerNumber === Number(custNo));
        }
        if(f){
            setFilteredRows(filtered);
        }
    };
    return (
        <>
            <div>
                <TextField
                    label="Customer Order ID"
                    // fullWidth
                    className="tf"
                    value={custOrdId}
                    onChange={(e) => {setCustOrdId(e.target.value)}}
                    style={{ margin: '5px' }}
                
                
                />
                <TextField
                    label="Customer Number"
                    // fullWidth
                    className="tf"
                    value={custNo}
                    onChange={(e) => {setCustNo(e.target.value)}}
                    style={{ margin: '5px' }}
                />
                <TextField
                    label="Sales Org"
                    // fullWidth
                    className="tf"
                    value={salesOrg}
                    onChange={(e) => {setSalesOrg(e.target.value)}}
                    style={{ margin: '5px' }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    style={{ backgroundColor: "#fc7500", margin: '5px' , height:'55px'}}
                >
                    Search
                </Button>

                
            </div>
            <div style={{ height: 400, width: "100%", marginTop:'30px'}}>
                <DataGrid
                    rows={filteredRows}
                    columns={columns}
                    rowsPerPageOptions={[5, 10, 20, 50, 100]}
                    className="dg"
                />
            </div>
        </>
    );
}

