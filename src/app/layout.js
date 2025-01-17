import { Poppins } from "next/font/google";
import "./globals.css";

import Headers from "@/components/layouts/Headers";
import Footer from "@/components/layouts/Footer";

import AppContext from "@/components/AppContext";
// import Headers from "@/components/layouts/Headers";



const fira_Code = Poppins({ subsets: ["latin"],
 weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fira_Code.className} suppressHydrationWarning={true}>
      <main className="">
      {/* <AppContext> */}
          <Headers />
          {children}
        <Footer />
      {/* </AppContext>       */}
      </main>
      </body>
    </html>
  );
}
