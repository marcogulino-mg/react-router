// IMPORT COMPONENT OUTLET FROM ROUTER LIBRARY
import { Outlet } from "react-router-dom";
// IMPORT COMPONENTS
import Header from "../components/Header";

export default function Defaultlayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
