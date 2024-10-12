import { defineStore } from 'pinia'

interface IStore {
  isOpen: boolean
}


export const useAppMenuStore = defineStore('appMenu', {
  state: (): IStore => (
    { isOpen: false }
  ),
  getters: {},
  actions: {
    triggerMenuState() {
      this.isOpen = !this.isOpen
    }
  },
})