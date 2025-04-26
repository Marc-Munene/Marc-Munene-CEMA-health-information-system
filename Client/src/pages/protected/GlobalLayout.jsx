import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const GlobalLayout = () => {
  return (
    <>
      <div>
        <Outlet />
        <Toaster position="top-right" richColors />
      </div>
    </>
  );
};

export { GlobalLayout };
