import React, {FC} from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared";
import cls from './Navbar.module.scss'
import {AppLink, ThemeSwitcher} from "shared/ui";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const {toggleTheme} = useTheme()
    const {className} = props

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher/>
            <AppLink to={'/'}>Главная</AppLink>
            <AppLink to={'/about'}>О нас</AppLink>
        </div>
    );
};