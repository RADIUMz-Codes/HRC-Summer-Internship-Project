import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import Tab from "@material-ui/core/Tab";
import DataTable from "../DataTable";
import AddDataForm from "../AddDataForm";
import "./style.css";
import SearchData from "../SearchData";
import AdvancedSearch from "../Advanced Search";
import ANALYTICS from "../Analytics";

const MyTabs = () => {
    const [selectedTab, setSelectedTab] = useState("tab1");
    const handleChangeTab = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <>
            <h2>Invoice Table</h2>
            <TabContext value={selectedTab}>
                <div style={{ position: "relative" }}>
                    <TabList
                        onChange={handleChangeTab}
                        aria-label="Tabs"
                        className="tbs"
                    >
                        <Tab label="HOME PAGE" value="tab1" />
                        <Tab label="ADD DATA" value="tab2" />
                        <Tab label="ANALYTICS VIEW" value="tab3" />

                        <Tab
                            label="SEARCH"
                            value="tab4"
                            style={{ position: "absolute", right: "200px", }}
                        />
                        <Tab
                            label="Advanced Search"
                            value="tab5"
                            style={{ position: "absolute", right: "10px", backgroundColor:'#8fd163' }}
                        />

                        {/* TODO :compleate */}
                    </TabList>
                </div>
                <TabPanel value="tab1">
                    <DataTable />
                </TabPanel>
                <TabPanel value="tab2">
                    <AddDataForm />
                </TabPanel>
                <TabPanel value="tab3">
                    <ANALYTICS/>
                </TabPanel>
                <TabPanel value="tab4">
                    <SearchData />
                </TabPanel>
                <TabPanel value="tab5">
                    <AdvancedSearch/>
                </TabPanel>
            </TabContext>
        </>
    );
};



export default MyTabs;
