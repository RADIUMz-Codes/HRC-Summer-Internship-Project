import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import "./index.css";
import axios from "axios";
const MyForm = () => {
    const [custOrdId, setCustOrdId] = useState("");
    const [salesOrg, setsalesOrg] = useState("");
    const [disChan, setDisChan] = useState("");
    const [custNo, setCustNo] = useState("");
    const [compCode, setCompCode] = useState("");
    const [ordCurr, setOrdCurr] = useState("");
    const [amtUsd, setAmtUsd] = useState("");
    const [ordDate, setOrdDate] = useState("");

    

    const addDataBackend = () =>{
        const options = {
            method: "GET",
            url: "http://localhost:8080/h2h_milestone_3/CreateInvoice",
            params: {
                customer_order_id: custOrdId,
                sales_org: salesOrg,
                distribution_channel: disChan,
                division: "0",
                released_credit_value: "0",
                purchase_order_type:"0",
                company_code: compCode,
                order_creation_date:"0",
                order_creation_time: ordDate,
                credit_control_area: "0",
                sold_to_party: "0",
                order_amount: "0",
                requested_delivery_date: "0",
                order_currency: ordCurr,
                credit_status: "0",
                customer_number: custNo,
                amount_in_usd: amtUsd,
                unique_cust_id: "0",
            },
        };
    
        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                alert('Data Added Sucessfully!!');
                handleClear();
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    const handleSubmit = () => {
        addDataBackend()
    };

    const handleClear = () => {
        setCustOrdId('');
        setsalesOrg('');
        setDisChan('');
        setCustNo('');
        setCompCode('');
        setOrdCurr('');
        setAmtUsd('');
        setOrdDate('');
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
                <TextField
                    label="Customer Order ID"
                    fullWidth
                    className="tf"
                    value={custOrdId}
                    onChange={(e) => setCustOrdId(e.target.value)}
                    autoFocus
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField
                    label="Sales Org"
                    fullWidth
                    className="tf"
                    value={salesOrg}
                    onChange={(e) => setsalesOrg(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Distribution Channel"
                    fullWidth
                    className="tf"
                    value={disChan}
                    onChange={(e) => setDisChan(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField
                    label="Customer Number"
                    fullWidth
                    className="tf"
                    value={custNo}
                    onChange={(e) => setCustNo(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField
                    label="Company Code"
                    fullWidth
                    className="tf"
                    value={compCode}
                    onChange={(e) => setCompCode(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={2}>
                <TextField
                    label="Order Currency"
                    fullWidth
                    className="tf"
                    value={ordCurr}
                    onChange={(e) => setOrdCurr(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={2}>
                <TextField
                    label="Amount in USD"
                    fullWidth
                    className="tf"
                    value={amtUsd}
                    onChange={(e) => setAmtUsd(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={2}>
                <TextField
                    label="Order Date"
                    fullWidth
                    className="tf"
                    value={ordDate}
                    onChange={(e) => setOrdDate(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    style={{ width: "100%", backgroundColor: '#fc7500' }}
                >
                    Submit
                </Button>
            </Grid>
            <Grid item sm={6}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClear}
                    style={{ marginLeft: 8, width: "100%" ,backgroundColor: '#db4437'}}
                >
                    Clear
                </Button>
            </Grid>
        </Grid>
    );
};

export default MyForm;
