/**
 * Customer Rewards Program
 * @author Raja Das
 * @exports RewardScreen
 * @description Loader component
 * @returns {any}
 */

import React, { useEffect, useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import dayjs from "dayjs";
import Loader from "../../component/Loader/loader";
import {
    AllRewardTable,
    MonthlyRewardTable,
    TotalRewardTable,
    UserMonthlyTotalRewardTable
} from "../../component/RewardsTable/rewardTable";
import CustomMessage from '../../component/CustomMessage/customMessage';
import { getUserTransaction } from "../../services/services";
import { filterData } from "../../utility/utility";
import './styles.less';

const RewardScreen = () => {
    const [loading, setLoading] = useState(false); //boolean
    const [dateState, setDateState] = useState({
        toDate: dayjs(new Date()).format('YYYY-MM-DD'), //set today's date as toDate
        fromDate: dayjs(new Date()).subtract(90, 'days').format('YYYY-MM-DD') //set 90 days prior date as fromDate
    });
    // const [toDate, setToDate] = useState(dayjs(new Date()).format('YYYY-MM-DD')); //set today's date as toDate
    // const [fromDate, setFromDate] = useState(dayjs(new Date()).subtract(90, 'days').format('YYYY-MM-DD')); //set 90 days prior date as fromDate
    const [tableData, setTableData] = useState(null); // array table data
    const [responseText, setResponseText] = useState(null); // string response message

    const loadData = async () => {
        setLoading(true);
        const response = await getUserTransaction();
        setTableData(filterData(response?.data, dateState)); // storing response data fetched from the api
        setResponseText(response?.message); // storing response message fetched from the api
        setLoading(false);
    };

    // it will show last 90 days data from today
    const handleReset = () => {
        setDateState({
            toDate: dayjs(new Date()).format('YYYY-MM-DD'), //set today's date as toDate
            fromDate: dayjs(new Date()).subtract(90, 'days').format('YYYY-MM-DD') //set 90 days prior date as fromDate
        });
        loadData();
    };

    // handle change to update date state
    const handleChange = (e) => {
        const value = e.target.value;

        if (e.target.name === 'fromDate' && dayjs(value).isBefore(dateState.toDate) ||
            e.target.name === 'toDate' && dayjs(value).isAfter(dateState.fromDate)) {
            setDateState({
                ...dateState,
                [e.target.name]: value
            });
        }
    };

    useEffect(() => {
        // fetching user transaction on component load
        loadData();
    }, []);

    return (
        <Container>
            {loading ? (
                // Displaying Loader Component on loading
                <div className="loaderContainer">
                    <Loader />
                </div>
            ) : (
                <div className="rewardsContainer">
                    <div className="rewardsContainerHeader">
                        <h2>User's & Transaction Database</h2>
                    </div>
                    <div className="rewardsFilterContainer">
                        <div className="rewardsFilterContainerHeader">
                            <p>Filter By</p>
                        </div>
                        <div className="rewardsFilterContent">
                            <TextField
                                type="date"
                                id="from-date"
                                label="From Date"
                                className="filterInputField"
                                name={"fromDate"}
                                inputProps={{
                                    "data-testid": "from-date"
                                }}
                                value={dateState.fromDate}
                                onChange={handleChange}
                                helperText={"From Date must be before To Date"}
                            />
                            <TextField
                                type="date"
                                id="to-date"
                                label="To Date"
                                className="filterInputField"
                                name={"toDate"}
                                inputProps={{
                                    "data-testid": "to-date"
                                }}
                                value={dateState.toDate}
                                onChange={handleChange}
                                helperText={"To Date must be after From Date"}
                            />
                        </div>
                        <div className="rewardsFilterContent">
                            <Button
                                size="large"
                                variant="contained"
                                className="filterInputBtn"
                                data-testid="filter-btn"
                                onClick={loadData}
                            >Filter</Button>
                            <Button
                                size="large"
                                variant="outlined"
                                className="filterInputBtn"
                                onClick={handleReset}
                            >Reset</Button>
                        </div>
                    </div>
                    {tableData ? (
                        <>
                            <div className="rewardContent">
                                <h2>User Monthly Rewards</h2>
                                <MonthlyRewardTable data={tableData} />
                            </div>
                            <div className="rewardContent">
                                <h2>User Monthly Total Rewards</h2>
                                <UserMonthlyTotalRewardTable data={tableData} />
                            </div>
                            <div className="rewardContent">
                                <h2>Total Rewards</h2>
                                <TotalRewardTable data={tableData} />
                            </div>
                            <div className="rewardContent">
                                <h2>All Transactions</h2>
                                <AllRewardTable data={tableData} />
                            </div>
                        </>
                    ) : (
                        // Showing a error screen if failed to fetch data
                        < CustomMessage message={responseText} />
                    )}
                </div>
            )}
        </Container>
    );
};

export default RewardScreen;
