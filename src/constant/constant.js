/**
 * Customer Rewards Program
 * @exports monthlyTableColumn
 * @exports totalRewardsTableCoumn
 * @exports allTransactionTableColumn
 * @author Raja Das
 * @description Reward Table Column
 */
import moment from "moment";
export const monthlyTableColumn = [
    { field: "custId", headerName: 'Customer ID', headerClassName: 'tableHeader', flex: 1 },
    { field: "name", headerName: 'Customer Name', headerClassName: 'tableHeader', flex: 1 },
    { field: "transactionId", headerName: 'Transaction ID', headerClassName: 'tableHeader', flex: 1 },
    {
        field: "amt", headerName: 'Amount Spent', headerClassName: 'tableHeader',
        flex: 1, renderCell: (params) => `$${params.value.toFixed(2)}`
    },
    {
        field: "transactionDt", headerName: 'Transaction Date', headerClassName: 'tableHeader', flex: 1,
        renderCell: (params) => moment(params.value).format('DD/MM/YYYY'),
        sortComparator: (a, b) => new Date(a) - new Date(b)
    },
    {
        field: "transanctionYr", headerName: 'Transaction Year', headerClassName: 'tableHeader', flex: 1,
        renderCell: (params) => moment(params.row.transactionDt).year()
    },
    { field: "pts", headerName: 'Points', headerClassName: 'tableHeader', flex: 1 }
];

export const totalRewardsTableCoumn = [
    { field: "name", headerName: 'Customer Name', headerClassName: 'tableHeader', flex: 1 },
    { field: "totalPts", headerName: 'Total Reward Points', headerClassName: 'tableHeader', flex: 1 }
];

export const allTransactionTableColumn = [
    { field: "transactionId", headerName: 'Transaction ID', headerClassName: 'tableHeader', flex: 1 },
    { field: "custId", headerName: 'Customer ID', headerClassName: 'tableHeader', flex: 1 },
    { field: "name", headerName: 'Customer Name', headerClassName: 'tableHeader', flex: 1 },
    {
        field: "transactionDt", headerName: 'Purchase Date', headerClassName: 'tableHeader', flex: 1,
        renderCell: (params) => moment(params.value).format('DD/MM/YYYY'),
        sortComparator: (a, b) => (new Date(a)) - (new Date(b))
    },
    { field: "product", headerName: 'Product Purchased', headerClassName: 'tableHeader', flex: 1 },
    {
        field: "amt", headerName: 'Price', headerClassName: 'tableHeader', flex: 1,
        renderCell: (params) => `$${params.value.toFixed(2)}`
    },
    { field: "pts", headerName: 'Points', headerClassName: 'tableHeader', flex: 1 }
];
