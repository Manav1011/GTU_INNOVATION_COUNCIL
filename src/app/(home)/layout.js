import "@/static/globals.css";
import '@/static/fonts.css'
import NavBar from "@/Components/Globals/NavBar/NavBar";
import Footer from "@/Components/Globals/Footer/Footer";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "GTU Innovation Council",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="htmltagel">
      <body style={{backgroundImage:"url('/images/backgrounds/8.de377256.jpeg')",fontFamily:'dosislight'}}>
        <div id="DocumentFirstChild" style={{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`}}>
          <NextTopLoader color="red" initialPosition={0.08} crawlSpeed={200} height={3} crawl={true} easing="ease" showSpinner={false} speed={200} shadow="0 0 10px #2299DD,0 0 5px #2299DD" zIndex={1600} showAtBottom={false} />
          <div className="min-h-screen flex flex-col">
            <NavBar/>
            <div className="flex-1">{children}</div>
            <Footer/>            
          </div>
        </div>
      </body>
    </html>
  );
}
