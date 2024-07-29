import NavBarLatest from "@/Components/Globals/NavBar/NavBarLatest";
import Footer from "@/Components/Globals/Footer/Footer";
import NextTopLoader from "nextjs-toploader";
import GlobalRouteListener from '@/app/(home)/GlobalRouteListener'
import "../../../public/static/css/globals.css"
import "../../../public/static/css/transitions.css"
import "../../../public/static/css/fonts.css"

export const metadata = {
  title: "GTU Innovation Council",
  description:
    ". Discover the power of imagination at GIC - a platform that nurtures students' soft skills and talent, fostering innovation and industry collaboration for relevant research and development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="htmltagel">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="preload" as="image" href="/images/backgrounds/GTU_CAMPUS_POTRAIT_4.webp" />
        <link rel="preload" as="image" href="/images/backgrounds/GTU_CAMPUS_6.webp" />
        <link rel="preload" href="/static/css/fonts.css" as="style"/>
        <link rel="preload" href="/static/css/transitions.css" as="style"/>
        <link rel="preload" href="/static/css/globals.css" as="style"/>
      </head>
      <body
        className="scroll-smooth"
        style={{
          backgroundImage: "url('/images/backgrounds/8.de377256.jpeg')",
          fontFamily: "dosislight",
        }}
      >
        <NavBarLatest />
        <div
          id="DocumentFirstChild"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
        >
          <NextTopLoader
            color="red"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            easing="ease"
            showSpinner={false}
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            zIndex={1600}
            showAtBottom={false}
          />
          <div className="min-h-[100dvh] flex flex-col">
            <div className="flex-1" id="main-root">
              
            
              
                {children}
              
            </div>
          </div>
        </div>
        <Footer />
        <GlobalRouteListener/>
      </body>
    </html>
  );
}
