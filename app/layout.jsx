import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Image from 'next/image';

export const metadata = {
  title: 'Fastfony Documentation',
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const navbar = (
  <Navbar
    logo={
      <>
        <Image src="/favicon-32x32.png" alt="Fastfony icon" width="32" height="32" />
        <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
          Fastfony Documentation
        </span>
      </>
    }
    projectLink="https://github.com/fastfony/fastfony"
  />
)
const footer = <Footer>{new Date().getFullYear()} © Fastfony.</Footer>

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
    <Head
      // ... Your additional head options
    >
      {/* Your additional tags should be passed as `children` of `<Head>` element */}
    </Head>
    <body>
    <Layout
      navbar={navbar}
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/fastfony/docs/tree/main/docs"
      footer={footer}
      // ... Your additional layout options
    >
      {children}
    </Layout>
    </body>
    </html>
  )
}
