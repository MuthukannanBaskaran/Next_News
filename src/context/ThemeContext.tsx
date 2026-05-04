import { createContext, useReducer, type ReactNode } from "react";

type ThemeState = {
    darkMode: boolean;
};

type ThemeAction = {
    type: "TOGGLE";
};

type ThemeContextType = {
    state: ThemeState;
    dispatch: React.Dispatch<ThemeAction>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

const INITIAL_STATE = { darkMode: true };

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case "TOGGLE":
            return { darkMode: !state.darkMode };
        default:
            return state;
    }
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    )
}