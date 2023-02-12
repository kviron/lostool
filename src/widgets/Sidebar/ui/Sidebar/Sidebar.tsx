import React, { FC, useState } from 'react';
import { classNames } from 'shared';
import { LangSwitcher, ThemeSwitcher } from 'shared/ui';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
            <button
                type="button"
                onClick={onToggle}
            >
                toggle
            </button>
        </div>
    );
};
