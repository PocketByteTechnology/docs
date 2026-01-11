import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import { Banner } from 'fumadocs-ui/components/banner';
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-title" content="PocketByte" />
        <title>PocketByte | Indie Video Game Console</title>
        <meta name="description" content="A handheld video game console for small, fun games that live in your pocket. Authentic experiences for casual gamers; infinite options for game developers." />
        <meta name="author" content="PocketByte" />

        <meta property="og:title" content="PocketByte | Indie Video Game Console" />
        <meta property="og:description" content="A handheld video game console for small, fun games that live in your pocket. Authentic experiences for casual gamers; infinite options for game developers." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="CHANGE LATER" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pocketbyte" />
        <meta name="twitter:image" content="CHANGE LATER" />
      </head>
        <meta name="apple-mobile-web-app-title" content="PocketByte" />
      <body className="flex flex-col min-h-screen">
        <Banner>🎉 DevKits launching soon! Join our Discord server or email newsletter for updates. 🎉</Banner>
        <RootProvider theme={{defaultTheme: "dark"}}>{children}</RootProvider>
        <Analytics />
      </body>
    </html>
  );
}
