import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
const Layout = () => {
  const [loading, setLoading] = useState(true);
  let isMount = false;
  useEffect(() => {
    if (!isMount) {
      setInterval(() => {
        isMount = true;
        setLoading(false);
      }, 400);
    }
  }, []);

  return loading ? (
    // <Loader />
    <div className="w-full h-screen flex items-center justify-center">
      Loading...
    </div>
  ) : (
    <div className="w-[100vw] overflow-hidden">
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
