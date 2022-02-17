import styles from "../SCSS/modules/Hero.module.scss";
import Image from "next/image";
import devAvatar from "/public/images/burakdev.jpg";
import {GithubOutlined, LinkedinOutlined, TwitterOutlined} from "@ant-design/icons";


const Hero = () => {

    return (
        <div className={styles.heroSection}>
            <div className={styles.heroRow}>
                <h1 className={styles.title}>Oguzhan Burak <br/> Bozkurt</h1>
                <div className={styles.wrapper}>
                    <div className={styles.avatar}>
                        <Image src={devAvatar} alt={"burakbo"}/>
                    </div>
                </div>
            </div>
            <div className={styles.heroColumn}>
                <ruby className={styles.secondTitle}>Software <rt>ソフトウェア</rt> </ruby>
                <ruby className={styles.secondTitle}>Engineer<rt>工学</rt></ruby>
                <h3 className={styles.subtitle}>- about -</h3>
                <p className={styles.aboutText}>
                    Hi, I&apos;m <b>Burak</b>.
                    <br/>
                    I use the art of <b>coding</b> to craft together <b>Software</b>.
                    <br/>
                    <br/>
                    Based in <b>Hanover, Germany</b>.
                    <br/>
                    <br/>
                    Currently pursuing a bachelor&apos;s degree in <b>Business Informatics</b> as well as building an MVP for a tech startup I co-founded.
                </p>
                <button className={styles.cta}>
                    <span><a href= "mailto:burakbozkurtdev@gmail.com">Get in touch</a></span>
                </button>
                <h3 className={styles.subtitle}>- tech of favor -</h3>
                <p className={styles.plang}>Kotlin / TypeScript / Java / Git / Dart / Sass
                </p>
                <h3 className={styles.subtitle}>- network -</h3>
                <div className={styles.socialnetwork}>
                    <a href="https://twitter.com/0xBuro" rel="noopener noreferrer"><TwitterOutlined/></a>
                    <a href="https://github.com/Burakbo" rel="noopener noreferrer"><GithubOutlined/></a>
                    <a href="https://www.linkedin.com/in/oguzhan-burak-bozkurt-b1850b210/" rel="noopener noreferrer"><LinkedinOutlined/></a>
                </div>

            </div>
        </div>

    )
}

export default Hero;