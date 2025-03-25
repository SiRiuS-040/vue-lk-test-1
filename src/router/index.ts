import { createRouter, createWebHistory } from "vue-router";

import LoginView from "@/views/LoginView.vue";
import RestoreView from "@/views/RestoreView.vue";
import HomeView from "@/views/HomeView.vue";

import ProfileMainView from "@/views/ProfileMainView.vue";
import ProfileView from "@/views/ProfileView.vue";
import EmployeeAddView from "@/views/EmployeeAddView.vue";

import VehiclesMainView from "@/views/VehiclesMainView.vue";
import VehiclesView from "@/views/VehiclesView.vue";
import VehiclesAddView from "@/views/VehiclesAddView.vue";

import SettingsView from "@/views/SettingsView.vue";
import ComponentsView from "@/views/ComponentsView.vue";

import { loadLayoutMiddleware } from "@/router/middleware/loadLayoutMiddleware";
import { checkAuth } from "@/router/middleware/auth";

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: "/auth-login",
      name: "Login",
      component: LoginView,
      meta: {
        layout: "AuthLayout",
        title: "Login",
      },
    },
    {
      path: "/auth-restore",
      name: "Restore",
      component: RestoreView,
      meta: {
        layout: "AuthLayout",
        title: "Restore",
      },
    },
    {
      path: "/",
      name: "ProfileMain",
      component: ProfileMainView,
      meta: {
        layout: "DefaultLayout",
        title: "ProfileMain",
      },
      children: [
        {
          path: "",
          name: "Profile",
          component: ProfileView,
          meta: {
            layout: "DefaultLayout",
            title: "Profile",
          },
        },
        {
          path: "/profile/add-employee",
          name: "NewEmployee",
          component: EmployeeAddView,
          meta: {
            layout: "DefaultLayout",
            title: "New employee",
          },
        },
      ],
    },

    {
      path: "/vehicles",
      name: "VehiclesMain",
      component: VehiclesMainView,
      meta: {
        layout: "DefaultLayout",
        title: "VehiclesMain",
      },
      children: [
        {
          path: "",
          name: "Vehicles",
          component: VehiclesView,
          meta: {
            layout: "DefaultLayout",
            title: "Vehicles",
          },
        },
        {
          path: "/vehicles/add-vehicle",
          name: "NewVehicles",
          component: VehiclesAddView,
          meta: {
            layout: "DefaultLayout",
            title: "New vehicles",
          },
        },
      ],
    },
    {
      path: "/settings",
      name: "Settings",
      component: SettingsView,
      meta: {
        layout: "DefaultLayout",
        title: "Settings",
      },
    },
    {
      path: "/components",
      name: "Components",
      component: ComponentsView,
      meta: {
        layout: "DefaultLayout",
        title: "Components",
      },
    },
  ],
});

router.beforeEach(loadLayoutMiddleware);
router.beforeEach(checkAuth);

export default router;
