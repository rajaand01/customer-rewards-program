/**
 * Customer Rewards Program
 * @exports MonthlyRewardTable
 * @exports AllRewardTable
 * @exports TotalRewardTable
 * @author Raja Das
 * @description Reward Table Component
 */
import React from "react";
import dayjs from "dayjs";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { allTransactionTableColumn, monthlyTableColumn, totalRewardsTableCoumn } from "../../constant/constant";

/* Calculation Point based on purchase */
const getPoints = (amt) => {
    const price = Math.floor(amt);
    if (price >= 50 && price <= 100) {
        return price - 50;
    } else if (price > 100) {
        return (2 * (price - 100) + 50);
    }
    return 0;
};

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
                data-testid={dataTestId}
                disableColumnFilter
                disableColumnMenu
                disableColumnResize
                disableColumnSelector
                disableRowSelectionOnClick
                disableDensitySelector
                disableMultipleRowSelection
                disableEval
                disableVirtualization
                showCellVerticalBorder
            />
        </Box>
    );
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
                    }).map((item) => {
                        item.pts = getPoints(item.amt);
                        item.id = item.transactionId;
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

/* Total Reward Table component */
export const TotalRewardTable = (props) => {
    const { data } = props;
    /* Creating a new set of user from data array and calculating total rewards obtained
    per user and taking index as data grid id */
    const totalRewardData = Array.from(new Set(data?.map(item => item.name))).map((name, index) => {
        const custRewardArray = data.filter(item => item.name === name);
        const totalPts = custRewardArray.map(item => getPoints(item.amt)).reduce((a, b) => a + b);
        return { name, totalPts, id: index };
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

/* All Reward Table component */
export const AllRewardTable = (props) => {
    const { data } = props;
    const allRewardData = data?.map((item) => {
        item.pts = getPoints(item.amt);
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
