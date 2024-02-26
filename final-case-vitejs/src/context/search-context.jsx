import { createContext, useReducer } from "react";
import reducer, {initState} from "../reducer/reducer";
export const SearchContext = createContext();

 const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
