import { useLocation } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const location = useLocation();

  // Hide navbar/footer on dashboard
  const hideLayout = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideLayout && (
        <div className="w-full max-w-7xl mx-auto">
          <Navbar />
        </div>
      )}

      <AppRoutes />
      <div className="bg-[#0f0f0f] mt-10">
          <div className="max-w-7xl mx-auto mt-10">
            <Footer />
          </div>
        </div>

    
    </>
  );
}

export default App;