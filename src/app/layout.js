import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Home - Shiplu",
  description: "Portfolio of Shiplu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="linear-gradient(90deg, rgba(169,167,208,1) 0%, rgba(104,121,1,1) 45%, rgba(19,30,222,1) 100%);"
          initialPosition={0.08}
          crawlSpeed={300}
          height={5}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={300}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          zIndex={1600}
          showAtBottom={false}
        />
        <div className="bg-gradient-to-r from-[#07233b] from-10% via-[#04192d] via-58%  to-[#050c16] to-90%">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
