// import
import Dashboard from "./views/Dashboard";
import Tables from "views/Positions";
import Profile from "views/Profile";

import {RiDashboardLine, RiArchiveLine, RiProfileLine} from "react-icons/ri";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: RiDashboardLine,
    component: Dashboard
  },
 
  {
    path: "/positions",
    name: "Positions",
    icon: RiArchiveLine,
    component: Positions
  },
 
  {
    path: "/profile",
    name: "Profile",
    icon: RiProfileLine,
    component: Profile
  },
];
export default dashRoutes;
