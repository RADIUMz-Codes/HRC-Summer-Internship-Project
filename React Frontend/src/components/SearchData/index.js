import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, Button } from "@material-ui/core";



const columns = [
    { field: "id", headerName: "Sl No",width:150 ,},
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

export default function SearchData() {
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
    const [filteredRows, setFilteredRows] = useState([]);

    useEffect(() => {
        fetchRows();
    },[]);

    const handleSubmit = () =>{
        filterRowsByOrderDate()
        
    }
    const filterRowsByOrderDate = () => {
        const filtered = rows.filter((row) => row.customerOrderID === Number(custOrdId));
        setFilteredRows(filtered);
        console.log(filteredRows)
        
    };
    return (
        <>
            <div>
                <TextField
                    label="Customer Order ID"
                    fullWidth
                    className="tf"
                    value={custOrdId}
                    onChange={(e) => {setCustOrdId(e.target.value)}}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    style={{ width: "100%", backgroundColor: "#fc7500" }}
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
