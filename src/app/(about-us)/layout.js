import "@/static/globals.css";
import '@/static/fonts.css'
import NavBar from "@/Components/Globals/NavBar/NavBar";
import Footer from "@/Components/Globals/Footer/Footer";

export const metadata = {
  title: "GTU Innovation Council",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="htmltagel">
      <body style={{fontFamily:'dosislight'}}>
        <div>          
          <div className="flex flex-col justify-end">
            <NavBar/>               
            <div className="flex overflow-auto">
              {children}                           
            </div>
            <div className="fixed bottom-0 w-full">
              <Footer/>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}