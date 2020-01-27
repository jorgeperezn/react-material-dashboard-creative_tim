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
import IconDashboard from "@material-ui/icons/Dashboard";
import IconPerson from "@material-ui/icons/Person";
import IconLibraryBooks from "@material-ui/icons/LibraryBooks";
import IconBubbleChart from "@material-ui/icons/BubbleChart";
import IconLocationOn from "@material-ui/icons/LocationOn";
import IconNotifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";

// Templates
import BlankTemplate from "views/Templates/BlankTemplate.js";
import TableTemplate from "views/Templates/TableTemplate.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: IconDashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: IconPerson,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/tablelist",
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
    icon: IconLibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: IconBubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: IconLocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: IconNotifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/blanktemplate",
    name: "Blank Template",
    rtlName: "قائمة الجدول",
    icon: IconLibraryBooks,
    component: BlankTemplate,
    layout: "/admin"
  },
  {
    path: "/tabletemplate",
    name: "Table Template",
    rtlName: "قائمة الجدول",
    icon: IconLibraryBooks,
    component: TableTemplate,
    layout: "/admin"
  }
];

export default dashboardRoutes;
