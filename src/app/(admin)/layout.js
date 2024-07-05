import '@/static/globals.css'
import '@/static/fonts.css'

export const metadata = {
  title: "GTU Innovation Council",
  description: ". Discover the power of imagination at GIC - a platform that nurtures students' soft skills and talent, fostering innovation and industry collaboration for relevant research and development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>    
      <meta name="robots" content="noindex"/>
      <meta property="og:image" content="/images/ogimage.png" />
      <link rel="icon" href="/images/favicon.ico" sizes="any" />
    </head>
      <body style={{ backgroundColor: "#f1f5f9" }}>
        <div className="w-full h-[100dvh]">        
        {children}        
        </div>
      </body>
    </html>
  );
}
