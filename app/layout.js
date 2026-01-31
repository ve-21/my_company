import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalEffects from "@/components/GlobalEffects";
import "./globals.css";

export const metadata = {
  title: "Ve Enterprise | Premium Software Solutions",
  description: "Leading software development company specializing in web, mobile, and enterprise solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased flex flex-col min-h-screen bg-[#020420]">
        <GlobalEffects />
        <Navbar />
        <main className="flex-grow pt-20 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
