import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Footer from "@/app/component/Footer"
const inter = Inter({ subsets: ["latin"] });


const Bebas_Neue_init=Bebas_Neue({
  subsets: ['latin'],
  weight: '400' ,
  variable: '--font-Bebas_Neue',
});

export const metadata = {
  title: "Techlerate",
  description: "Techlerate gone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${Bebas_Neue_init.variable}`}>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
