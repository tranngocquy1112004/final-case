export function fetchData(payload) {
    return {
        type: 'products/fetchData',
        payload: payload
    }
}

export function setSearchText(payload) {
    return {
        type: 'filters/searchText',
        payload: payload
    }
}
