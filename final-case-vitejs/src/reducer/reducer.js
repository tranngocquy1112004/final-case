export const initState = {
    filters: {
        searchText: '',
    },
    products: []
}
export default function reducer(state, action) {
    switch (action.type) {
        case 'products/fetchData': {
            return {
                ...state,
                products: action.payload
            }
        }
        case 'filters/searchText':{
            return {
                ...state,
                filters: {
                    ...state.filters,
                    searchText: action.payload
                }
            }
        }
        default: {
            return state
        }
    }
}