// import
import Dashboard from "./views/Dashboard";
import Profile from "./views/Profile";
import Positions from "./views/Positions";
import EditPosition from "./views/EditPosition";
import Movements from "./views/Movements";

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
    name: "Positions",
    icon: RiFolderChart2Line,
    component: Positions,
    detailPath: "/edit-position",
    detailComponent: EditPosition
  },
  {
    path: "/movements",
    name: "Movements",
    icon: RiArrowLeftRightLine,
    component: Movements
  },
];
export default dashRoutes;
