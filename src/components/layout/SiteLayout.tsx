import { Outlet } from "react-router-dom";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const SiteLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
