import UserPage from "./page/home/UserPage";
// import Home from "./page/home/Home";
import Submit from "./page/home/pageSubmit";
import MyDashboard from "./page/dasboard/DashboardChuDe";
import DashboardTemPlate from "./page/dasboard/DashboardTemplate";
import DashboardThongKe from "./page/dasboard/Dasboard";

const routesHome = [
  {
    path: "/Submit",
    exact: false,
    component: Submit,
  },
  {
    path: `/user`,
    exact: false,
    component: UserPage,
  },
];

export { routesHome };

const routesAdmin = [
  {
    path: `/`,
    exact: true,
    component: MyDashboard,
  },
  {
    path: `/admin/template`,
    exact: false,
    component: DashboardTemPlate,
  },
  {
    path: `/admin/thongke`,
    exact: false,
    component: DashboardThongKe,
  },
];

export { routesAdmin };
