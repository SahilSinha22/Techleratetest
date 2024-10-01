import { Inter, Bebas_Neue, Playfair_Display, Josefin_Sans, Open_Sans, Poppins  } from "next/font/google";
import "./globals.css";
import Footer from "@/app/component/Footer"
import Navbar from "@/app/component/Navbar"
import Form from "@/components/Form";
const inter = Inter({ subsets: ["latin"] });


const Bebas_Neue_init=Bebas_Neue({
  subsets: ['latin'],
  weight: '400' ,
  variable: '--font-Bebas_Neue',
});

const Playfair_Display_init=Playfair_Display({
  subsets: ['latin'],
  weight: '500' ,
  variable: '--font-playfair_display',
});
const Poppins_init=Poppins({
  subsets: ['latin'],
  weight: '600' ,
  variable: '--font-Poppins',
});
const Poppins_initd=Poppins({
  subsets: ['latin'],
  weight: '200' ,
  variable: '--font-Poppind',
});
const Poppins_inits=Poppins({
  subsets: ['latin'],
  weight: '400' ,
  variable: '--font-Poppin',
});
const Open_Sans_init=Open_Sans({
  subsets: ['latin'],
  weight: '500' ,
  variable: '--font-Open_Sans',
});
const Josefin_Sans_init=Josefin_Sans({
  subsets: ['latin'],
  weight: '700' ,
  variable: '--font-Josefin_Sansa',
});

export const metadata = {
  title: "Techlerate",
  description: "Techlerate gone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${Open_Sans_init.variable} ${Bebas_Neue_init.variable} ${Playfair_Display_init.variable} ${Poppins_init.variable} ${Poppins_inits.variable} ${Poppins_initd.variable} ${Josefin_Sans_init.variable}`}>
    <div className=""> 
     
   
        {children}
        <Form/>
        <Footer/>
        </div>
        </body>
    </html>
  );
}
