/**
 * Customer Rewards Program
 * @author Raja Das
 * @exports getPoints
 * @param {any} amt
 * @returns {any}
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
