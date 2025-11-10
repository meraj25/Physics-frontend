import { Outlet } from "react-router";
import Navigation from "@/components/Navigation";



 function HeaderLayout() {
  return (
    <>
      
      <Navigation />
      
      <Outlet />
    </>
  );
}

export default HeaderLayout;