import React, { useContext } from 'react';
import { ThemeContext } from './index';

const ThemeButton = () => {
    const theme = useContext(ThemeContext);

    const styles = { color: theme.fore, background: theme.background };
    return <button style={styles}>ThemeButton</button>;
};

export default ThemeButton;
