/**
 * Customer Rewards Program
 * @exports RewardScreen
 * @author Raja Das
 * @description Loader component
 */
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Loader from "../../component/Loader/loader";
import {
    AllRewardTable,
    MonthlyRewardTable,
    TotalRewardTable,
    UserMonthlyTotalRewardTable
} from "../../component/RewardsTable/rewardTable";
import './styles.less';
import { getUserTransaction } from "../../services/services";

const RewardScreen = () => {
    const [loading, setLoading] = useState(false); //boolean
    const [tableData, setTableData] = useState(null); // string table data

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const data = await getUserTransaction();
            setTableData(data);
            setLoading(false);
        };
        loadData();
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
