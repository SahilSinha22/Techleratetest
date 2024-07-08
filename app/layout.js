<<<<<<< HEAD
import { Inter, Bebas_Neue, Josefin_Sans } from "next/font/google";
=======
import { Inter, Bebas_Neue } from "next/font/google";
>>>>>>> origin/main
import "./globals.css";
import Footer from "@/app/component/Footer"
const inter = Inter({ subsets: ["latin"] });


const Bebas_Neue_init=Bebas_Neue({
  subsets: ['latin'],
  weight: '400' ,
  variable: '--font-Bebas_Neue',
});
<<<<<<< HEAD
const Josefin_Sans_init=Josefin_Sans({
  subsets: ['latin'],
  weight: '700' ,
  variable: '--font-Josefin_Sansa',
});
=======
>>>>>>> origin/main

export const metadata = {
  title: "Techlerate",
  description: "Techlerate gone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={`${inter.className} ${Bebas_Neue_init.variable} ${Josefin_Sans_init.variable}`}>
=======
      <body className={`${inter.className} ${Bebas_Neue_init.variable}`}>
>>>>>>> origin/main
        {children}
        <Footer/>
        </body>
    </html>
  );
}
