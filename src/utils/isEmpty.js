const isEmpty = (value) => {
    if (value === '' || value === null || value === undefined) {
        return true;
    }
    return false;
};

export default isEmpty;
