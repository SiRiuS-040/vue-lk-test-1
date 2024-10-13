import { defineStore } from 'pinia'
import type { IVechicle, IVechicles, IMetaLink } from '@/repository/vechicles/models'

interface IStore {
  vechicles?: IVechicle[]
  vechiclesPerPage?: number
  vechiclesTotal?: number
  currentVechicle?: IVechicle
  paginationLinks?: IMetaLink[]
}

export const useAuthStore = defineStore('auth', {
  state: (): IStore => ({
    vechicles: [],
    vechiclesPerPage: 0,
    vechiclesTotal: 0,
    paginationLinks: []
  }),
  getters: {},
  actions: {
    fetchCars(perPage: number = 9, page: number = 1) {
      // axios
      //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      //   .then(response => ())
    }
  },
})