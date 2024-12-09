/**
 * Customer Rewards Program
 * @exports RewardScreen
 * @author Raja Das
 * @description Loader component
 */
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import fetch from '../../api/api';
import Loader from "../../component/Loader/loader";
import {
    AllRewardTable,
    MonthlyRewardTable,
    TotalRewardTable,
    UserMonthlyTotalRewardTable
} from "../../component/RewardsTable/rewardTable";
import './styles.less';

const RewardScreen = () => {
    const [loading, setLoading] = useState(false); //boolean
    const [tableData, setTableData] = useState(null); // string table data

    useEffect(() => {
        setLoading(true);
        /* fetching data */
        fetch().then(response => {
            setTableData(response);
            setLoading(false);
        });
    }, []);

    return (
        <Container>
            {loading ? (
                <div className="loaderContainer">
                    <Loader />
                </div>
            ) : (
                <div className="rewardsContainer">
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
                </div>
            )}
        </Container>
    );
};

export default RewardScreen;
