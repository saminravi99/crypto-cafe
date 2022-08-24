import { AUTHOR_FILTER, CATEGORY_FILTER, REMOVE_AUTHOR_FILTER, REMOVE_CATEGORY_FILTER, REMOVE_FILTER, REMOVE_SEARCH_FILTER, SEARCH_FILTER } from "./actionTypes";

export const categoryFilter = (category) => {
    return {
        type: CATEGORY_FILTER,
        payload: {
            category,
        }
    };
}

export const searchFilter = (search) => {
    return {
        type: SEARCH_FILTER,
        payload: {
            search,
        }
    };
}

export const authorFilter = (author) => {
    return {
        type: AUTHOR_FILTER,
        payload: {
            author,
        }
    };
}

export const removeFilter = () => {
    return {
        type: REMOVE_FILTER,
    };
}

export const removeSearchFilter = () => {
    return {
        type: REMOVE_SEARCH_FILTER,
    };
}

export const removeCategoryFilter = () => {
    return {
        type: REMOVE_CATEGORY_FILTER,
    };
}

export const removeAuthorFilter = () => {
    return {
        type: REMOVE_AUTHOR_FILTER,
    };
}