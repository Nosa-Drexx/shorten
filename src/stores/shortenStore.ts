import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'

type StateType = {
  LinkList: ShortenLink[]
}

export const useShortenStore = defineStore('shortenStore', {
  //States
  state: (): StateType => ({
    LinkList: []
  }),

  //Computed
  getters: {},

  //Methods
  actions: {
    //update links that have already been copied to clipboard
    updateCopiedLinks(id: string): void {
      for (let i = 0; i < this.LinkList.length; i++) {
        if (this.LinkList[i].id === id) {
          this.LinkList[i].copied = true

          break
        }
      }
    },

    // add links to list
    addLinkToList(originalLink: string, fullShortLink: string, shortLink: string): void {
      const newData: ShortenLink = {
        id: nanoid(),
        originalLink,
        fullShortLink,
        shortLink,
        copied: false
      }

      this.LinkList.unshift(newData)
    }
  }
})
