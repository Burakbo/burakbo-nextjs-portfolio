import styles from "../SCSS/modules/Home.module.scss";
import Image from "next/image";
import vercelLogo from '/public/logos/vercel-logotype-light.svg';
import sassLogo from '/public/logos/sass.svg';
import nextjsLogo from '/public/logos/nextjs-logotype-light.svg';


import {useTheme} from "next-themes";

const Footer = () => {
    const { resolvedTheme } = useTheme()
    return(
        <div className={styles.containerFooter}>
        <footer className={styles.footer}>
            <p>built with ❤️ and</p>
            <span >
                <Image src={nextjsLogo} alt="Nextjs Logo" width={54} height={25} />
                <Image src={sassLogo} alt="Sass Logo" width={54} height={25} />
                <Image src={vercelLogo} alt="Vercel Logo" width={72} height={25} />
            </span>

        </footer>
        </div>
    )
}

export default Footer;