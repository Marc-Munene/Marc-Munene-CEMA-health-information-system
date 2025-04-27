import { Login } from "../Auth/Login";

const Home = () => {
  return (
    <>
      <div
        className="min-h-screen mx-auto py-3 rounded-lg px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: "url('/CEMA.PNG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <Login />
      </div>
    </>
  );
};

export { Home };
