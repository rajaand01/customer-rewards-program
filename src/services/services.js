export const getUserTransaction = () => {
    return fetch('./mockData.json').then(res => res.json());
};
