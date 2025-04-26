import { Login } from "../Auth/Login";
// import { SignUp } from "../Auth/SignUp";

const Home = () => {
  return (
    <>
      <Login />
      <div
        className="min-h-screen mx-auto py-3 rounded-lg px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: "url('/CEMA.PNG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      ></div>
      {/* <SignUp /> */}
    </>
  );
};

export { Home };
