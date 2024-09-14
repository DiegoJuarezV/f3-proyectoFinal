import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../utils/globalReducer";

const DentistStates = createContext();

const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  }

  useEffect(() => {
    const getDentists = async () => {
      try {
        let response = await fetch(url);
        let data = await response.json();
        dispatch({ type: "GET_DENTISTS", payload: data })
      } catch (error) {
        console.error(error.message);
      }
    }

    getDentists();
  }, [])

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs])

  return (
    <DentistStates.Provider value={{ state, dispatch, toggleTheme }}>
      {children}
    </DentistStates.Provider>
  )
}

export default GlobalContext;

export const useDentistStates = () => useContext(DentistStates);