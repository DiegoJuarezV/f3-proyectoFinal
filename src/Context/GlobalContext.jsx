import { createContext, useContext, useEffect, useReducer } from "react";

const DentistStates = createContext();

const initialState = {
  dentist: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, dentist: action.payload };
    default:
      throw new Error("Error al obtener los datos");
  }
}

const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

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

  return (
    <DentistStates.Provider value={{ state }}>
      {children}
    </DentistStates.Provider>
  )
}

export default GlobalContext;

export const useDentistStates = () => useContext(DentistStates);