import React from 'react';
import './styles/_index.scss'

import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared";
import {AppRouter} from "app/providers/RouterProvider";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;