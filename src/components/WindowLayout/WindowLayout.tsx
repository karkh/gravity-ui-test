import React from 'react';
import block from 'bem-cn-lite';
import {Button, Icon, Theme, ThemeProvider} from '@gravity-ui/uikit';
import {Moon, Sun} from '@gravity-ui/icons';

import './window-layout.scss';

const b = block('window');

const DARK = 'dark';
const LIGHT = 'light';
const DEFAULT_THEME = DARK;

export const DEFAULT_BODY_CLASSNAME = `g-root g-root_theme_${DEFAULT_THEME}`;

export type AppProps = {
    children: React.ReactNode;
};

export const WindowLayout: React.FC<AppProps> = ({children}) => {
    const [theme, setTheme] = React.useState<Theme>(DEFAULT_THEME);

    const isDark = theme === DARK;

    return (
        <ThemeProvider theme={theme}>
            <div className={b()}>
                <Button
                    size="l"
                    view="outlined"
                    onClick={() => {
                        setTheme(isDark ? LIGHT : DARK);
                    }}
                >
                    <Icon data={isDark ? Sun : Moon} />
                </Button>
            </div>
            {children}
        </ThemeProvider>
    );
};
