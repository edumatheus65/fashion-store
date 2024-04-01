import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";
import { RounterMain } from "./router/routerMain";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import { LoadingGear } from "./components/LoadingGear/LoadingGear";

export const App = () => {
  const { loading } = useContext(UserContext);

  return (
    <>
      {loading ? <LoadingGear /> : <RounterMain />}
      <ToastContainer position="top-right" autoClose={1300} theme="dark" />
    </>
  );
};

export default App;
