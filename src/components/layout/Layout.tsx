
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocialFloatingBar from "./SocialFloatingBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
      <SocialFloatingBar />
    </div>
  );
};

export default Layout;
