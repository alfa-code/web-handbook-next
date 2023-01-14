import { Roboto } from '@next/font/google';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

/**
 * @see https://nextjs.org/docs/basic-features/font-optimization
 */
const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
        input, textarea, button { font-family: inherit }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
