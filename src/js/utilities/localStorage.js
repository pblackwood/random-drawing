export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('attendance');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('attendance', serializedState);
    }
    catch (err) {
        // Ignore write errors.
    }
};
