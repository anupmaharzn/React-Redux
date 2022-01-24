export const updateObject = (oldstate, updatedValue) => {
    return {
        ...oldstate,
        ...updatedValue
    }
};