export const addBook = (book) => {
    return {
        type: "addBook",
        payload: book
    };
};

export const removeBook = (book) => {
    return {
        type: "removeBook",
        payload: book
    };
};

export const openBookInfo = (book) => {
    return {
        type: "openBookInfo",
        payload: book
    };
};

export const closeBookInfo = (book) => {
    return {
        type: "closeBookInfo",
        payload: book
    };
};

export const openMyList = () => {
    return {
        type: "openMyList"
    };
};

export const closeMyList = () => {
    return {
        type: "closeMyList"
    };
};