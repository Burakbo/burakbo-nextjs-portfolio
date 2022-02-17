import { useTheme } from 'next-themes'
import styles from '../SCSS/modules/ThemeSwitch.module.scss';
import {useEffect, useState} from "react";

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme } = useTheme()
    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

return(
    <div className={styles.rowCenter}>
        <ruby className={styles.switchStyle} onClick={() =>
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            Mode on: {theme}
            <rt>
                明るい / 暗闇
                <rt>play with lights</rt>
            </rt>

        </ruby>
    </div>
)
}

export default ThemeSwitch;