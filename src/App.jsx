import { useLocation } from "react-router-dom";

import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import AppRoutes from "./routes/AppRoutes";



function App() {
  const location = useLocation();

  const hideLayout = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideLayout && <Navbar />}

      <main className={hideLayout ? "" : "pt-[70px]"}>
        <AppRoutes />
      </main>

      {!hideLayout && (
        <div className="bg-[#0f0f0f]">
          <div className="max-w-7xl mx-auto">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
export default App;