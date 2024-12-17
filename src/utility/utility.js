/**
 * Customer Rewards Program
 * @author Raja Das
 * @exports getPoints
 * @param {string} amt
 * @returns {number}
 */

/* Calculation Point based on purchase */
export const getPoints = (amt) => {
    // Checking if the props is a number or not
    if (!isNaN(amt)) {
        const price = Math.floor(amt); // rounding off the amt for eliminating cents
        if (price >= 50 && price <= 100) {
            return price - 50;
        } else if (price > 100) {
            return (2 * (price - 100) + 50);
        }
        return 0;
    }
    return 0;
};

/**
 * Customer Rewards Program
 * @author Raja Das
 * @exports filterData
 * @param {Array} dataArray
 * @param {object} dateState
 * @returns {Array}
 */
/* Filtering data based on date range */
export const filterData = (dataArray, dateState) => {
    const startDate = new Date(dateState.fromDate);
    const endDate = new Date(dateState.toDate);

    return dataArray.filter(data => {
        const date = new Date(data.transactionDt);
        return (date >= startDate && date <= endDate);
    });
};
