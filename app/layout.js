'use client'
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import Scroll from "../components/scroll-to-top/index";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });


// export const metadata = {
//   title: "i11Labs | Powered by intelligence",
//   description: "i11Labs, a pioneer in AI integration, application modernization and custom software development, transforms businesses with innovative technology solutions. Explore how we drive change through intelligence. Discover more.",
//   ogTitle: "i11Labs | Powered by intelligence",
//   url: "https://www.i11labs.com",
//   ogDescription: "i11Labs, a pioneer in AI integration, application modernization and custom software development, transforms businesses with innovative technology solutions. Explore how we drive change through intelligence. Discover more.",
//   ogUrl: "https://www.i11labs.com",
//   ogType: "website",
//   ogLocale: "en_US",
// };

export default function RootLayout({ children }) {
const pathname = usePathname();
  const isRegPage = pathname === "/dti-dumptruckit/registration-form/" || pathname === "/dti-dumptruckit/test-env-registration/" || pathname === "/dti-dumptruckit/registration-form/thankyou/" || pathname === "/dti-dumptruckit/test-env-registration/thankyou/"
  return (
    <html lang="en">
      <head>
      <title>i11Labs | Powered by intelligence</title>
      <meta name="description" content="i11Labs, a pioneer in AI integration, application modernization and custom software development, transforms businesses with innovative technology solutions. Explore how we drive change through intelligence. Discover more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noodp,noydir" />
        <meta name="robots" content="index,follow" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="article:publisher" content="2024-07-27T08:17:32+00:00" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:image" content="https://www.i11labs.com/thumbnail.jpg" />
        <meta property="twitter:image" content="https://www.i11labs.com/thumbnail.jpg" />
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossOrigin="anonymous"></script>
        {/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script> */}
        <GoogleAnalytics gaId="G-F08M9KWEE3" />

          {/* Preload video */}
          <link
          rel="preload"
          href="/images/home/Home-video.mp4"
          as="video"
          type="video/mp4"
        />
        <link
          rel="preload"
          href="/images/our-DNA/ourDNA-video.mp4"
          as="video"
          type="video/mp4"
        />
      </head>
      <body className={inter.className}>
        {!isRegPage && <Header />}
        {children}
        {!isRegPage && <Scroll />}
        {!isRegPage && <Footer />}
      </body>
    </html>
  );
}
