import Head from 'next/head'

const Header = () => {
    return (
        <Head>
                {/* main */}
            <title>Oguzhan Burak Bozkurt</title>

            {/* preloads */}
            <link rel="icon" href="/public/favicon.ico"/>
            <link rel="preload"
                  href="/public/fonts/SB/MSBee-Thin.woff2"
                  as="font"
                  crossOrigin=""/>
            <link rel="preload"
                  href="/public/fonts/SB/MSBee-Black.woff2"
                  as="font"
                  crossOrigin=""/>
            <link rel="preload"
                  href="/public/fonts/Pixelfont/MonoRegular.woff2"
                  as="font"
                  crossOrigin=""/>
            <link rel="preload"
                  href="/public/fonts/Pixelfont/MonoBold.woff2"
                  as="font"
                  crossOrigin=""/>

            {/* html */}
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <meta name="description" content="nextjs Portfolio of Oguzhan Burak Bozkurt"/>
            <meta name="Classification" content="Developer Portfolio"/>
            <meta name="designer" content="Oguzhan Burak Bozkurt"/>
            <meta name="reply-to" content="burakbozkurtdev@gmail.com"/>
            <meta name="owner" content="Oguzhan Burak Bozkurt"/>
            <meta name="copyright" content="Open Source Project. MIT"/>
            <meta name="language" content="en"/>

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@0xBuro"/>
            <meta name="twitter:title" content="Oguzhan Burak Bozkurt, Software Engineer"/>
            <meta name="twitter:description" content="Developer Portfolio of @0xBuro"/>
            <meta name="twitter:image" content=""/>


            {/* link */}
            <link rel="icon" href="/public/favicon.ico"/>
            <link rel="canonical" href=""/>
            <link rel="apple-touch-icon" href="/public/favicon.ico"/>
        </Head>
    )
}

export default Header;
