// import
import Dashboard from "./views/Dashboard";
import Profile from "views/Profile";
import Portfolios from "views/Portfolios";
import Movements from "views/Movements";

import {RiDashboardLine, RiProfileLine, RiFolderChart2Line, RiArrowLeftRightLine} from "react-icons/ri";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: RiDashboardLine,
    component: Dashboard
  },
  {
    path: "/profile",
    name: "Profile",
    icon: RiProfileLine,
    component: Profile
  },
  {
    path: "/positions",
    name: "Portfolios",
    icon: RiFolderChart2Line,
    component: Portfolios
  },
  {
    path: "/movements",
    name: "Movements",
    icon: RiArrowLeftRightLine,
    component: Movements
  },
];
export default dashRoutes;
