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
    return fetch('https://customer-transaction.onrender.com/transactionlist')
        .then((res) => {
            // check response.ok
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res); // reject instead of throw
        })
        .then((response) => {
            return response;
        }).catch((error) => {
            //logging error
            console.log(error);
            // return error messages, if any
            return { data: null, message: "Failed to fetch data" };
        }).finally(() => { });
};
