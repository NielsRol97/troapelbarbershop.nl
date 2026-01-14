import type { OpeningTime } from './opening-times'

export {}

declare module 'nuxt/schema' {
  interface AppConfig {
    footer: {
      text: string
    }
    contact: {
      address: string
      phone: string
      email: string
    }
    times: OpeningTime[]
  }
}
