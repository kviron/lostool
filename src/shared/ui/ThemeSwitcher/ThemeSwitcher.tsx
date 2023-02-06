import {FC} from "react";
import {classNames} from "shared";
import cls from './ThemeSwitcher.module.scss'
import {useTheme} from "app/providers/ThemeProvider";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {
        className,
        ...otherProps
    } = props

    const {theme, toggleTheme} = useTheme()

    return (
        <button
            {...otherProps}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
        </button>
    );
};