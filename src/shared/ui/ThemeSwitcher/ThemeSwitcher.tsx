import { FC } from 'react';
import { classNames } from 'shared';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button } from 'shared/ui';
import cls from './ThemeSwitcher.module.scss';
import MoonIcon from '../../assets/icons/moon.svg';
import SunIcon from '../../assets/icons/sun.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {
        className,
        ...otherProps
    } = props;

    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            {...otherProps}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {
                theme === Theme.DARK ? <MoonIcon /> : <SunIcon />
            }

        </Button>
    );
};
