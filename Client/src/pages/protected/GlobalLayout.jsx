import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const GlobalLayout = () => {
  return (
    <>
      <div>
        <Outlet />
        <Toaster position="top-center" richColors />
      </div>
    </>
  );
};

export { GlobalLayout };
