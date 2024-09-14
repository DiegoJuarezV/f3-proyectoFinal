const lsFavs = JSON.parse(localStorage.getItem("favs")) || []; 

export const initialState = {
  dentist: [],
  favs: lsFavs,
  theme: "light",
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, dentist: action.payload };
    case "ADD_FAVS":
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_FAVS":
      const filteredFavs = state.favs.filter(
        (fav) => fav.id !== action.payload.id
      );
      return { ...state, favs: filteredFavs };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error("Error al obtener los datos");
  }
}