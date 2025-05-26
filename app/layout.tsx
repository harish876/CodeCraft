import { MantineNavBar } from '@/components';

import '@gfazioli/mantine-marquee/styles.layer.css';
import '@gfazioli/mantine-text-animate/styles.layer.css';

import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';

import '@mantine/core/styles.layer.css';

import { Layout } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { theme } from '../theme';

import './global.css';

export const metadata = {
  title: {
    default: 'CodeCraft - Get started with coding',
    template: '%s | CodeCraft',
  },
  description:
    'Get Started with your coding journey',
  metadataBase: new URL('https://resilientdb.com/'),
  keywords: [
    'ResilientDB',
    'Blockchain',
    'Database',
    'Distributed Systems',
    'Consensus',
    'PBFT',
    'Next.js',
    'Mantine',
    'Nextra',
    'Documentation',
  ],
  generator: 'Next.js',
  applicationName: 'ResilientDB',
  appleWebApp: {
    title: 'ResilientDB',
  },
  openGraph: {
    url: 'https://resilientdb.com/',
    siteName: 'ResilientDB',
    locale: 'en_US',
    type: 'website',
  },
  other: {
    'msapplication-TileColor': '#fff',
  },
  twitter: {
    site: 'https://resilientdb.com/',
  },
  alternates: {
    canonical: 'https://resilientdb.com/',
  },
};

export default async function RootLayout({ children }: { children: any }) {
  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr" {...mantineHtmlProps}>
      <Head>
        <ColorSchemeScript nonce="8IBTHwOdqNKAWeKl7plt8g==" defaultColorScheme="dark" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <Layout
            banner={
              <Banner storageKey="mantine-nextjs-nextra">
                ✨ Get started on your Coding Journey 
              </Banner>
            }
            navbar={<MantineNavBar />}
            pageMap={pageMap}
            docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
            sidebar={{ defaultMenuCollapseLevel: 1 }}
          >
            {children}
          </Layout>
        </MantineProvider>
      </body>
    </html>
  );
}
