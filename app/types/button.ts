export type Button = {
  text: string
  primary?: boolean

  href?: string      // → <a>
  onClick?: () => void // → <button>
}
