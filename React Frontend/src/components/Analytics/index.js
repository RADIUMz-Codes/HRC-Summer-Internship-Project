import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import axios from "axios";

export default function ANALYTICS() {
    const [data, setData] = useState([]);
    const fetchRows = () => {
        const options = {
            method: "GET",
            url: "http://localhost:8080/h2h_milestone_3/DisplayServlet",
        };

        axios
            .request(options)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchRows();
    }, []);

    /* -------------------------------------------------------------------------- */
    /*                                  Highcarts                                 */
    /* -------------------------------------------------------------------------- */

    const bar = () => {
        const totals = {};
        data.forEach((item) => {
            if (totals[item.distributionChannel]) {
                totals[item.distributionChannel] += item.amountInUsd;
            } else {
                totals[item.distributionChannel] = item.amountInUsd;
            }
        });


        const categories = Object.keys(totals);
        const amounts = Object.values(totals);

        Highcharts.chart("chartContainer", {
            chart: {
                type: "bar",
            },
            title: {
                text: "Total Amount in USD by Distribution Channel",
            },
            xAxis: {
                categories: categories,
                title: {
                    text: "Distribution Channel",
                },
            },
            yAxis: {
                title: {
                    text: "Total Amount in USD",
                },
            },
            series: [
                {
                    name: "Total Amount in USD",
                    data: amounts,
                },
            ],
        });
    };
    return (
        <>
            <button onClick={bar}>Distribution Channel vs Total Amount</button>
            <div
                id="chartContainer"
                style={{ height: "450px", width: "100%" }}
            ></div>
        </>
    );
}
