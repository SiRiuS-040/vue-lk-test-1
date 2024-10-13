import axios from 'axios'
import { defineStore } from 'pinia'
import type { IVechicle, IVechicles, IMetaLink } from '@/repository/vechicles/models'

interface IStore {
  vechicles?: IVechicle[]
  vechiclesPerPage?: number
  vechiclesTotal?: number
  currentVechicle?: IVechicle
  paginationLinks?: IMetaLink[]

}

export const useVechiclesStore = defineStore('vechiclesStore', {
  state: (): IStore => ({
    vechicles: [],
    vechiclesPerPage: 0,
    vechiclesTotal: 0,
    paginationLinks: []
  }),
  getters: {},
  actions: {
    async fetchCarsByParams(perPage: number = 9, page: number = 1) {
      axios
        .get(`https://api.caiman-app.de/api/cars-test?&per_page=${perPage}&page=${page}`)
        .then((response) => {
          console.log(response);

          this.vechicles = response.data.data;
          this.vechiclesPerPage = response.data.meta["per_page"]
          this.paginationLinks = response.data.meta.links
          this.vechiclesTotal = response.data.meta.total
        })
        .catch((error) => {
          console.log(error);
        })
    },

    async fetchAllCars() {
      axios
        .get(`https://api.caiman-app.de/api/cars-test`)
        .then((response) => {
          console.log(response);

          this.vechicles = response.data.data;
          this.vechiclesPerPage = response.data.meta["per_page"]
          this.paginationLinks = response.data.meta.links
          this.vechiclesTotal = response.data.meta.total
        })
        .catch((error) => {
          console.log(error);
        })
    }
  },
})