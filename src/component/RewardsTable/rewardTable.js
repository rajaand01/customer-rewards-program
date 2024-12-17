/**
 * Customer Rewards Program
 * @exports MonthlyRewardTable
 * @exports UserMonthlyTotalRewardTable
 * @exports AllRewardTable
 * @exports TotalRewardTable
 * @author Raja Das
 * @description Reward Table Component
 */
import React from "react";
import dayjs from "dayjs";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {
    allTransactionTableColumn,
    monthlyTableColumn,
    monthlyTotalRewardsTableCoumn,
    totalRewardsTableCoumn
} from "../../constant/constant";
import { getPoints } from "../../utility/utility";
import PropTypes from 'prop-types';

/* Reward Table component */
const RewardTable = (props) => {
    const { rows, column, dataTestId } = props;
    return (
        <Box
            sx={{
                '& .tableHeader': {
                    backgroundColor: '#007fff',
                    color: '#fff',
                    fontWeight: 'bold'
                }
            }}
        >
            <DataGrid
                rows={rows}
                columns={column}
                pageSizeOptions={[5, 10, 25, 50, 100]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5
                        }
                    }
                }}
                sx={{
                    '& .MuiDataGrid-cell': {
                        padding: 2
                    }
                }}
                getRowHeight={() => 'auto'}
                data-testid={dataTestId}
                disableColumnFilter
                disableColumnMenu
                disableColumnResize
                disableColumnSelector
                disableRowSelectionOnClick
                disableDensitySelector
                disableMultipleRowSelection
                disableEval
                showCellVerticalBorder
            />
        </Box>
    );
};

RewardTable.propTypes = {
    rows: PropTypes.array,
    column: PropTypes.array,
    dataTestId: PropTypes.string
};

/* Monthly Reward Table component */
export const MonthlyRewardTable = (props) => {
    const { data } = props;

    /* Creating a unique month and year set from data array */
    const months = Array.from(new Set(data?.map(item => dayjs(item.transactionDt).format('MMMM YYYY'))));
    return (
        <>
            {
                months?.map(month => {
                    /* particular month data filtered from data array */
                    const monthData = data?.filter((item) => {
                        return dayjs(item.transactionDt).format('MMMM YYYY') === month;
                    })?.map((item) => {
                        item.pts = getPoints(item?.amt);
                        item.id = item?.transactionId;
                        return item;
                    });
                    return (
                        <div key={month} className="monthlyRewardTable">
                            <h2>{month}</h2>
                            <RewardTable
                                rows={monthData}
                                column={monthlyTableColumn}
                                dataTestId="testMonthlyRewardTable"
                            />
                        </div>
                    );
                })
            }
        </>
    );
};

MonthlyRewardTable.propTypes = {
    data: PropTypes.array
};

/* Month Wise User's Total Reward component */
export const UserMonthlyTotalRewardTable = (props) => {
    const { data } = props;

    const userMonthlyTotalRewardData = Array.from(new Set(data?.map(item => item.name))).map((item, index) => {
        const userData = data?.filter(userDataItem => userDataItem.name === item);
        const transanctionMonths = Array.from(new Set(userData?.map(user => {
            return dayjs(user?.transactionDt).format('MMMM YYYY');
        })));
        const totalPts = transanctionMonths?.map(month => {
            return userData?.filter(userDataItem => dayjs(userDataItem.transactionDt).format('MMMM YYYY') === month)
                ?.map(recordItem => getPoints(recordItem.amt)).reduce((a, b) => a + b);
        });
        const totalAmt = transanctionMonths?.map(month => {
            return userData?.filter(userDataItem => dayjs(userDataItem.transactionDt).format('MMMM YYYY') === month)
                ?.map(recordItem => parseFloat(recordItem.amt)).reduce((a, b) => a + b);
        });
        return { id: index, name: item, custId: userData?.[0].custId, transanctionMonths, totalPts, totalAmt };
    });
    return (
        <div className="totalRewardTable">
            <RewardTable
                rows={userMonthlyTotalRewardData}
                column={monthlyTotalRewardsTableCoumn}
                dataTestId="testTotalRewardTable"
            />
        </div>
    );
};

UserMonthlyTotalRewardTable.propTypes = {
    data: PropTypes.array
};

/* Total Reward Table component */
export const TotalRewardTable = (props) => {
    const { data } = props;
    /* Creating a new set of user from data array and calculating total rewards obtained
    per user and taking index as data grid id */
    const totalRewardData = Array.from(new Set(data?.map(item => item.name))).map(name => {
        const custRewardArray = data?.filter(item => item.name === name);
        const totalPts = custRewardArray?.map(item => getPoints(item.amt)).reduce((a, b) => a + b);
        const totalAmt = custRewardArray?.map(item => parseFloat(item.amt)).reduce((a, b) => a + b);
        return {
            name,
            totalPts,
            totalAmt,
            custId: custRewardArray[0].custId,
            id: custRewardArray[0].custId };
    });
    return (
        <div className="totalRewardTable">
            <RewardTable
                rows={totalRewardData}
                column={totalRewardsTableCoumn}
                dataTestId="testTotalRewardTable"
            />
        </div>
    );
};

TotalRewardTable.propTypes = {
    data: PropTypes.array
};

/* All Reward Table component */
export const AllRewardTable = (props) => {
    const { data } = props;
    const allRewardData = data?.map((item) => {
        item.pts = getPoints(item.amt); // Calculating point based on purchase
        item.id = item.transactionId;
        return item;
    });
    return (
        <div className="allRewardTable">
            <RewardTable
                rows={allRewardData}
                column={allTransactionTableColumn}
                dataTestId="testAllRewardTable"
            />
        </div>
    );
};

AllRewardTable.propTypes = {
    data: PropTypes.array
};
