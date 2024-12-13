/**
 * Customer Rewards Program
 * @author Raja Das
 * @exports getPoints
 * @param {any} amt
 * @returns {any}
 */

import PropTypes from 'prop-types';

/* Calculation Point based on purchase */
export const getPoints = (amt) => {
    if (!isNaN(amt)) {
        const price = Math.floor(amt);
        if (price >= 50 && price <= 100) {
            return price - 50;
        } else if (price > 100) {
            return (2 * (price - 100) + 50);
        }
        return 0;
    }
    return 0;
};

getPoints.propTypes = {
    amt: PropTypes.string
};
