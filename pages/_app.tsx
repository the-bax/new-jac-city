import config from '../config/site'
import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: config.siteUrl,
      name: config.siteTitle,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ]

  return (
    <>
      <Head>
        <title>The Jac</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        <meta name="description" content={config.siteDescription} />
        <meta name="image" content="/a-gathering-cover.jpg" />

        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

        {/* OpenGraph tags */}
        <meta property="og:url" content={config.siteUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={config.siteTitle} />
        <meta property="og:description" content={config.siteDescription} />
        <meta property="og:image" content="/a-gathering-cover.jpg" />
        <meta property="fb:app_id" content={config.siteFBAppID ? config.siteFBAppID : ''} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.siteTitle} />
        <meta name="twitter:description" content={config.siteDescription} />
        <meta name="twitter:image" content="/a-gathering-cover.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
