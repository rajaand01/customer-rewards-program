/**
 * Customer Rewards Program
 * @author Raja Das
 * @exports getUserTransaction
 * @description return user transaction data.
 * @returns {any}
 */
// fetching user transaction
export const getUserTransaction = () => {
    // this api is returning a set of user transactions
    return fetch('./data.json');
};
