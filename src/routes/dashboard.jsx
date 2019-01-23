// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfilePage from "views/UserProfile/UserProfile.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard Trading",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/about",
    sidebarName: "L'Entreprise",
    navbarName: "A propos de l'entreprise",
    icon: Person,
    component: UserProfilePage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
