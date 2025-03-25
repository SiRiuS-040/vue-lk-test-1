import axios from "axios";
import { defineStore } from "pinia";
import type {
  IVehicle,
  IVehicles,
  IMetaLink,
} from "@/repository/vehicles/models";

interface IStore {
  vehicles?: IVehicle[];
  vehiclesPerPage?: number;
  vehiclesTotal: number;
  currentVehicle?: IVehicle;
  paginationLinks?: IMetaLink[];
}

export const useVehiclesStore = defineStore("vehiclesStore", {
  state: (): IStore => ({
    vehicles: [],
    vehiclesPerPage: 0,
    vehiclesTotal: 0,
    paginationLinks: [],
  }),
  getters: {},
  actions: {
    async fetchCarsByParams(
      perPage: number = 9,
      page: number = 1,
      search: string = ""
    ) {
      axios
        .get(
          `https://api.caiman-app.de/api/cars-test?&per_page=${perPage}&page=${page}&search=${search}`
        )
        .then((response) => {
          console.log(response);

          this.vehicles = response.data.data;
          this.vehiclesPerPage = response.data.meta["per_page"];
          this.paginationLinks = response.data.meta.links;
          this.vehiclesTotal = response.data.meta.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async fetchAllCars() {
      axios
        .get(`https://api.caiman-app.de/api/cars-test`)
        .then((response) => {
          console.log(response);

          this.vehicles = response.data.data;
          this.vehiclesPerPage = response.data.meta["per_page"];
          this.paginationLinks = response.data.meta.links;
          this.vehiclesTotal = response.data.meta.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
