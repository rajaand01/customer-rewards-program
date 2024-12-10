// fetching user transaction
export const getUserTransaction = () => {
    return fetch('./mockData.json')
        .then(res => res.json())
        .then(response => {
            return response;
        }).catch(error => {
            throw new Error(error);
        }).finally(() => { });
};
