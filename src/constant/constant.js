/**
 * Customer Rewards Program
 * @exports monthlyTableColumn
 * @exports monthlyTotalRewardsTableCoumn
 * @exports totalRewardsTableCoumn
 * @exports allTransactionTableColumn
 * @author Raja Das
 * @description Reward Table Column
 */
import React from "react";
import dayjs from "dayjs";
import { Typography } from "@mui/material";

export const monthlyTableColumn = [
    { field: "custId", headerName: 'Customer ID', headerClassName: 'tableHeader', flex: 1 },
    { field: "name", headerName: 'Customer Name', headerClassName: 'tableHeader', flex: 1 },
    { field: "transactionId", headerName: 'Transaction ID', headerClassName: 'tableHeader', flex: 1 },
    {
        field: "amt", headerName: 'Amount Spent', headerClassName: 'tableHeader',
        flex: 1, align: 'right', renderCell: (params) => `$${parseFloat(params?.value).toFixed(2)}`
    },
    {
        field: "transactionDt", headerName: 'Transaction Date', headerClassName: 'tableHeader', flex: 1,
        renderCell: (params) => dayjs(params?.value).format('DD/MM/YYYY'),
        sortComparator: (a, b) => new Date(a) - new Date(b)
    },
    {
        field: "transanctionYr", headerName: 'Transaction Year', headerClassName: 'tableHeader', flex: 1,
        renderCell: (params) => dayjs(params?.row?.transactionDt).year()
    },
    { field: "pts", headerName: 'Points', headerClassName: 'tableHeader', flex: 1, align: 'right' }
];

export const monthlyTotalRewardsTableCoumn = [
    { field: "custId", headerName: 'Customer ID', headerClassName: 'tableHeader', flex: 1 },
    { field: "name", headerName: 'Customer Name', headerClassName: 'tableHeader', flex: 1 },
    {
        field: "transanctionMonths", headerName: 'Transaction Month', headerClassName: 'tableHeader', flex: 1,
        renderCell: (params) => (
            <div>
                {params.value?.map((item, key) => <Typography key={key}>{item}</Typography>)}
            </div>
        )
    },
    {
        field: "totalAmt", headerName: 'Total Amount Spent', headerClassName: 'tableHeader', flex: 1,
        align: 'right', renderCell: (params) => (
            <div>
                {params.value?.map((item, key) => <Typography key={key}>${parseFloat(item).toFixed(2)}</Typography>)}
            </div>
        )
    },
    {
        field: "totalPts", headerName: 'Total Reward Points', headerClassName: 'tableHeader', flex: 1,
        align: 'right', renderCell: (params) => (
            <div>
                {params.value?.map((item, key) => <Typography key={key}>{item}</Typography>)}
            </div>
        )
    }
];

export const totalRewardsTableCoumn = [
    { field: "name", headerName: 'Customer Name', headerClassName: 'tableHeader', flex: 1 },
    { field: "totalPts", headerName: 'Total Reward Points', headerClassName: 'tableHeader', flex: 1, align: 'right' }
];

export const allTransactionTableColumn = [
    { field: "transactionId", headerName: 'Transaction ID', headerClassName: 'tableHeader', flex: 1 },
    { field: "custId", headerName: 'Customer ID', headerClassName: 'tableHeader', flex: 1 },
    { field: "name", headerName: 'Customer Name', headerClassName: 'tableHeader', flex: 1 },
    {
        field: "transactionDt", headerName: 'Purchase Date', headerClassName: 'tableHeader', flex: 1,
        renderCell: (params) => dayjs(params.value).format('DD/MM/YYYY'),
        sortComparator: (a, b) => (new Date(a)) - (new Date(b))
    },
    { field: "product", headerName: 'Product Purchased', headerClassName: 'tableHeader', flex: 1 },
    {
        field: "amt", headerName: 'Price', headerClassName: 'tableHeader', flex: 1,
        renderCell: (params) => `$${parseFloat(params?.value).toFixed(2)}`, align: 'right'
    },
    { field: "pts", headerName: 'Points', headerClassName: 'tableHeader', flex: 1, align: 'right' }
];
