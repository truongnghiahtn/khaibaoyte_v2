import UserPage from "./page/home/UserPage";
import Home from "./page/home/Home";
import Submit from "./page/home/pageSubmit";
import Dashboard from "./page/dasboard/Dasboard";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: `/user`,
    exact: false,
    component: UserPage,
  },
  {
    path: "/Submit",
    exact: false,
    component: Submit,
  },
  {
    path: "/Dashboard",
    exact: false,
    component: Dashboard,
  },
];

export { routesHome };
