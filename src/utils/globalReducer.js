const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];
const lsTheme = localStorage.getItem("theme") || "light";

export const initialState = {
  dentist: [],
  favs: lsFavs,
  theme: lsTheme,
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
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return { ...state, theme: newTheme };
    default:
      throw new Error("Error al obtener los datos");
  }
}