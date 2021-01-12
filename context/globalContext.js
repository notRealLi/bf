import React, { createContext, useReducer, useContext } from "react";

const GlobalStateContext = createContext("");
const GlobalDispatchContext = createContext("");

const globalReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME": {
      return {
        ...state,
        themeId: action.payload,
        currentTheme: state.themes[action.payload],
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    themeId: 0,
    currentTheme: { id: 0, textColor: "#ffb8c5", backgroundColor: "#30186d" },
    themes: [
      { id: 0, textColor: "#ffb8c5", backgroundColor: "#30186d" },
      { id: 1, textColor: "#f96167", backgroundColor: "#f3dc6c" },
      { id: 2, textColor: "#ec4d37", backgroundColor: "#1d1b1b" },
      { id: 3, textColor: "#cc313d", backgroundColor: "#f7c5cc" },
      { id: 4, textColor: "#a04ef6", backgroundColor: "#e7d045" },
    ],
  });

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};
