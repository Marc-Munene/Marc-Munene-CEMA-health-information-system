import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuthStore from "../../store/AuthStore";

const ProtectedWrapper = () => {
  const { isLoggedIn } = useAuthStore((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  //   if (!isLoggedIn) return null; // Prevent rendering Outlet while redirecting

  return <Outlet />;
};

export { ProtectedWrapper };
