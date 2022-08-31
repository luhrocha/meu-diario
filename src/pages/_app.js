import '../ui/styles/globals.css'
import Head from 'next/head'
import { Header } from '../ui/components/Header'
import { Footer } from '../ui/components/Footer'

function MyApp({ Component, pageProps }) {
  return (
  <>
      <Head>
        <title>Meu Diario</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      <div className='flex flex-col md:w-4/5 w-full my-0 mx-auto min-h-screen'>
          <Header />
            <Component {...pageProps} />
          <Footer/>
      </div>      
  </>
  )
}

export default MyApp
