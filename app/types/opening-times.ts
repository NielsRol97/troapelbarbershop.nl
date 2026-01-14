export type Weekday =
  | 'Maandag'
  | 'Dinsdag'
  | 'Woensdag'
  | 'Donderdag'
  | 'Vrijdag'
  | 'Zaterdag'
  | 'Zondag'

export type OpeningTime = Readonly<{
  day: Weekday
  openingHour?: string 
  closingHour?: string 
  closed?: boolean
}>
