/**
 * Customer Rewards Program
 * @exports RewardScreen
 * @author Raja Das
 * @description Loader component
 */
import React, { useEffect, useState } from "react";
import fetch from '../../api/api';
import Loader from "../../component/Loader/loader";
import { AllRewardTable, MonthlyRewardTable, TotalRewardTable } from "../../component/RewardsTable/rewardTable";
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
        <div className="screenContainer">
            {loading ? (
                <div className="loaderContainer">
                    <Loader loading={loading} />
                </div>
            ) : (
                <div className="rewardsContainer">
                    <div className="rewardContent">
                        <h2>User Monthly Rewards</h2>
                        <MonthlyRewardTable data={tableData} />
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
        </div>
    );
};

export default RewardScreen;
