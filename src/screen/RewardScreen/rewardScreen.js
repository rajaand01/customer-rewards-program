/**
 * Customer Rewards Program
 * @author Raja Das
 * @exports RewardScreen
 * @description Loader component
 * @returns {any}
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
import CustomMessage from '../../component/CustomMessage/customMessage';
import './styles.less';
import { getUserTransaction } from "../../services/services";

const RewardScreen = () => {
    const [loading, setLoading] = useState(false); //boolean
    const [tableData, setTableData] = useState(null); // string table data
    const [responseText, setResponseText] = useState(null); // string response message
    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const response = await getUserTransaction();
            setTableData(response?.data);
            setResponseText(response?.message);
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
                    {tableData ? (<>
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
                    </>) : <CustomMessage message={responseText} />}
                </div>
            )}
        </Container>
    );
};

export default RewardScreen;
