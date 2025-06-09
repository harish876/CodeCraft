import { MantineNavBar } from '@/components';

import '@gfazioli/mantine-marquee/styles.layer.css';
import '@gfazioli/mantine-text-animate/styles.layer.css';

import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';

import '@mantine/core/styles.layer.css';
import '@mantine/notifications/styles.css';

import { Layout } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { theme } from '../theme';

import './global.css';
import { FloatingAssistant } from '../components/FloatingAssistant';
import { Notifications } from '@mantine/notifications';
import { Sidebar } from '@/components/Sidebar/Sidebar';

export const metadata = {
  title: {
    default: 'CodeCraft - Get started with coding',
    template: '%s | CodeCraft',
  },
  description: 'Get Started with your coding journey',
  metadataBase: new URL('https://resilientdb.com/'),
  keywords: ['CodeCraft', 'AI powered learning platform', 'Learning', 'Coding', 'Tutorial'],
  generator: 'Next.js',
  applicationName: 'CodeCraft',
  appleWebApp: {
    title: 'CodeCraft',
  },
  openGraph: {
    url: 'https://github.com/harish876/',
    siteName: 'ResilientDB',
    locale: 'en_US',
    type: 'website',
  },
  other: {
    'msapplication-TileColor': '#fff',
  },
  twitter: {
    site: 'https://github.com/harish876/',
  },
  alternates: {
    canonical: 'https://github.com/harish876/',
  },
};

export default async function RootLayout({ children }: { children: any }) {
  const pageMap = await getPageMap();
  //TODO: Fight with the layout to make context width wider
  return (
    <html lang="en" dir="ltr" {...mantineHtmlProps}>
      <Head>
        <ColorSchemeScript nonce="8IBTHwOdqNKAWeKl7plt8g==" defaultColorScheme="dark" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="stylesheet" href="https://unpkg.com/@antonz/codapi@0.19.10/dist/snippet.css" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <Notifications position="top-right" />
          <Layout
            banner={
              <Banner storageKey="mantine-nextjs-nextra">
                ✨ Get started on your Coding Journey
              </Banner>
            }
            navbar={<MantineNavBar/>}
            pageMap={pageMap}
            docsRepositoryBase="https://github.com/harish876/codecraft"
            sidebar={{ defaultMenuCollapseLevel: 1}}
          >
            {children}
          </Layout>
          <FloatingAssistant />
        </MantineProvider>
      </body>
    </html>
  );
}
