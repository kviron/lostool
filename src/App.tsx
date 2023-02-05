import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";

import './styles/_index.scss'
import {useTheme} from "./Theme/useTheme";
import {classNames} from "./helpers/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;