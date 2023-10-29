import React, { createContext, useState } from 'react';
import Toolbar from './Toolbar';

const themes = {
    light: {
        fore: '#000',
        background: '#eee',
    },
    dark: {
        fore: '#fff',
        background: '#222',
    },
};

export const ThemeContext = createContext(themes.light);

const Context = () => {
    const [theme, setTheme] = useState(themes.light);

    function toLight() {
        setTheme(themes.light);
    }
    function toDark() {
        setTheme(themes.dark);
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <span>Context Demo</span>
                <button onClick={toLight}>light</button>
                <button onClick={toDark}>dark</button>
            </div>
            <Toolbar />
        </ThemeContext.Provider>
    );
};

export default Context;
