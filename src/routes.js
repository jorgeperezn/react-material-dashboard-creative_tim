/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import PersonIcon from "@material-ui/icons/Person";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import NotificationsIcon from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import Maps from "views/Maps/Maps.js";
import Icons from "views/Icons/Icons.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import NotificationsPage from "views/Notifications/Notifications.js";
// core components/views for RTL layout
import CsUsers from "views/CsUsers/CsUsers";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: DashboardIcon,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: PersonIcon,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooksIcon,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChartIcon,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/csusers",
    name: "Cs Users",
    rtlName: "ملف تعريفي",
    icon: BubbleChartIcon,
    component: CsUsers,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOnIcon,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: NotificationsIcon,
    component: NotificationsPage,
    layout: "/admin"
  }
];

export default dashboardRoutes;
