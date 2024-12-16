/**
 * Customer Rewards Program
 * @author Raja Das
 * @exports getUserTransaction
 * @description return user transaction data.
 * @returns {any}
 */
// fetching user transaction
export const getUserTransaction = () => {
    return fetch('https://customer-transaction.onrender.com/transactionlist')
        .then((response) => {
            // check response.ok
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response); // reject instead of throw
        })
        .then((response) => {
            return response;
        }).catch(() => {
            // return error messages, if any
            return { data: null, message: "Failed to fetch data" };
        }).finally(() => { });
};
