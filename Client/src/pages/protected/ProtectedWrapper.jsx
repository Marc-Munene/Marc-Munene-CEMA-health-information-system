import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuthStore from "../../store/AuthStore";

const ProtectedWrapper = () => {
  const { isLoggedIn, setDoctor } = useAuthStore((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    const getDoctor = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/api/auth/me`,
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          navigate("/");
        }

        const { data } = await response.json();
        setDoctor(data);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    };

    if (!isLoggedIn) {
      getDoctor();
    }
  }, []);

  return <Outlet />;
};

export { ProtectedWrapper };
