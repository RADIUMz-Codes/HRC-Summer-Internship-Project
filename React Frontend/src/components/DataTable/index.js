import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./index.css";
import axios from "axios";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const columns = [
    { field: "id", headerName: "Sl No",width:150 },
    { field: "customerOrderID", headerName: "Customer Order Id" ,width:200 },
    { field: "salesOrg", headerName: "Sales Org", width:180 },
    {field: "distributionChannel", headerName: "Distribution Channel", width:210 },
    { field: "companyCode", headerName: "Company Code", width:180 },
    { field: "orderCreationDate", headerName: "Order Creadon Date",width:210 },
    { field: "amountInUsd", headerName: "Order Amount", width:210 },
    { field: "orderCurrency", headerName: "Order Currency", width:210 },
    { field: "customerNumber", headerName: "Customer Number", width:210},
];

export default function DataTable() {
    /* ----------------------------- Handling States ---------------------------- */
    const [rows, setRows] = React.useState([]);
    const [selectedIds, setSelectedIds] = React.useState([]);
    const [editDisable, setEditDisable] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [delDisable, setDelDisable] = React.useState(true);

    /* ----------------------------- States for Edit ---------------------------- */
    const [editOrdCurr, seteditOrdCurr] = React.useState("");
    const [editCompCode, seteditCompCode] = React.useState("");
    const [editDisChan, setEditDisChan] = React.useState("");
    const [editOrdAmt, setEditOrdAmt] = React.useState("");

    React.useEffect(() => {
        fetchRows();
        // For Edit Button
        setEditDisable(selectedIds.length === 1 ? false : true);
        // For Delete
        setDelDisable(selectedIds.length > 0 ? false : true);
    }, [editDisable, selectedIds]);

    /* -------------------------------------------------------------------------- */
    /*              Fetching Data From our backend for our DataTable              */
    /* -------------------------------------------------------------------------- */
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

    /* -------------------------------------------------------------------------- */
    /*                             Handleing Edit Api                             */
    /* -------------------------------------------------------------------------- */
    const editApi = () => {
        const options = {
            method: "GET",
            url: "http://localhost:8080/h2h_milestone_3/UpdateInvoice",
            params: {
                idUp: selectedIds[0],
                ordCurr: editOrdCurr,
                compCode: editCompCode,
                disChan: editDisChan,
                ordAmt: editOrdAmt,
            },
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                handleClose();
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    /* ----------------------------- For Edit Modal ----------------------------- */
    const handleClickOpen = () => {
        const selectedRowId = selectedIds[0]; 
        const selectedRow = rows.find((row) => row.id === selectedRowId);
        // console.log(selectedRow);
        setEditOrdAmt(selectedRow.amountInUsd)
        setEditDisChan(selectedRow.distributionChannel)
        seteditCompCode(selectedRow.companyCode)
        seteditOrdCurr(selectedRow.orderCurrency)
        setOpenEdit(true);
    };

    const handleClose = () => {
        setOpenEdit(false);
    };

    // handleEdit submit
    const editSubmit = () => {
        editApi();
    };

    /* -------------------------------------------------------------------------- */
    /*                              Handleing Delete                              */
    /* -------------------------------------------------------------------------- */

    const delApi = (i) => {
        const options = {
            method: "GET",
            url: "http://localhost:8080/h2h_milestone_3/DeleteInvoice",
            params: { idDel: i },
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    const deleteHandler = () => {
        selectedIds.map(delApi);
    };


    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */

    return (
        <>
            <div style={{ height: 400, width: "100%",  }}>
                
                <DataGrid
                    rows={rows}
                    columns={columns}
                    rowsPerPageOptions={[5, 10, 20, 50, 100]}
                    checkboxSelection
                    onSelectionModelChange={(rs) => setSelectedIds(rs)}
                    className="dg"
                />
            </div>
            {/* ----------------------------- Refresh Button ----------------------------- */}
            <Button
                variant="contained"
                color="primary"
                onClick={fetchRows}
                style={{ backgroundColor: "#fc7500", margin: "5px" }}
            >
                REFRESH DATA
            </Button>

            {/* ------------------------------- Edit Button ------------------------------ */}

            <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
                disabled={editDisable}
                style={{ backgroundColor: "#fc7500", margin: "5px" }}
            >
                EDIT
            </Button>

            {/* ------------------------------ Delete Button ----------------------------- */}

            <Button
                variant="contained"
                color="primary"
                onClick={deleteHandler}
                disabled={delDisable}
                style={{ backgroundColor: "#fc7500", margin: "5px" }}
            >
                DELETE
            </Button>

            {/* -------------------------------------------------------------------------- */
            /*                              Edit PopUp Modal                              */
            /* -------------------------------------------------------------------------- */}
            <Dialog
                open={openEdit}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        variant="outlined"
                        label="Order Currency"
                        className="tfEdit"
                        value={editOrdCurr}
                        onChange={(e) => seteditOrdCurr(e.target.value)}
                        style={{ margin: '8px' }}
                    />
                    <TextField
                        variant="outlined"
                        label="Company Code"
                        className="tfEdit"
                        value={editCompCode}
                        type="number"
                        onChange={(e) => seteditCompCode(e.target.value)}
                        style={{ margin: '8px' }}
                        // fullWidth
                    />
                    <TextField
                        variant="outlined"
                        label="Distribution Channel"
                        value={editDisChan}
                        className="tfEdit"
                        onChange={(e) => setEditDisChan(e.target.value)}
                        style={{ margin: '8px' }}
                        // fullWidth
                    />
                    <TextField
                        variant="outlined"
                        label="Order Amount"
                        className="tfEdit"
                        value={editOrdAmt}
                        onChange={(e) => setEditOrdAmt(e.target.value)}
                        style={{ margin: '8px' }}
                        // fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={editSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
