import DashboardLayout from "../layout/DashboardLayout.vue";
// GeneralViews
import NotFound from "../pages/NotFoundPage.vue";

// Admin pages
import Overview from "src/pages/Overview.vue";
import UserProfile from "src/pages/UserProfile.vue";
import LoginPage from "@/pages/LoginPage.vue";
import TableList from "src/pages/TableList.vue";
/*commented because their respective display modules are commented*/

// import Typography from 'src/pages/Typography.vue'
// import Icons from 'src/pages/Icons.vue'
// import Maps from 'src/pages/Maps.vue'
// import Notifications from 'src/pages/Notifications.vue'
// import Upgrade from 'src/pages/Upgrade.vue'

const routes = [
  {
    path: "/",
    component: LoginPage
    // redirect: '/admin/overview'
  },

  {
    path: "/dashboard",
    component: DashboardLayout,
    redirect: "/admin/overview"
  },
  {
    path: "/admin",
    component: DashboardLayout,
    redirect: "/admin/overview",
    children: [
      {
        path: "overview",
        name: "Overview",
        component: Overview
      },
      {
        path: "user",
        name: "User",
        component: UserProfile
      },
      // Editing starts from here
      {
        path: "supporting-documents",
        name: "Table List",
        component: TableList
      },
      {
        path: "my-savings",
        name: "Table List",
        component: TableList
      },
      {
        path: "reimbursement",
        name: "Table List",
        component: TableList
      },
      {
        path: "mortgage",
        name: "Table List",
        component: TableList
      },
      {
        path: "projects",
        name: "Table List",
        component: TableList
      },
      {
        path: "dream",
        name: "Table List",
        component: TableList
      },
      {
        path: "preferred-house",
        name: "Table List",
        component: TableList
      }
      /*Commented because their respective pages are commented*/
      // {
      //   path: 'table-list',
      //   name: 'Table List',
      //   component: TableList
      // },
      // {
      //   path: 'typography',
      //   name: 'Typography',
      //   component: Typography
      // },
      // {
      //   path: 'icons',
      //   name: 'Icons',
      //   component: Icons
      // },
      // {
      //   path: 'maps',
      //   name: 'Maps',
      //   component: Maps
      // },
      // {
      //   path: 'notifications',
      //   name: 'Notifications',
      //   component: Notifications
      // },
      // {
      //   path: 'upgrade',
      //   name: 'Upgrade to PRO',
      //   component: Upgrade
      // }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
