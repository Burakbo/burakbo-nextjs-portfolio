import '../SCSS/shared/globals.scss'
import '/public/_fonts.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return(
      <ThemeProvider enableSystem={false}>
      <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp