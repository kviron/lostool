import { FC } from 'react';
import { classNames } from 'shared';
import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className } = props;
    const { t, i18n } = useTranslation();
    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
            .then(() => {
                document.documentElement.lang = i18n.language;
            });
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={toggleLang}
        >
            {t('Язык')}
        </Button>
    );
};
