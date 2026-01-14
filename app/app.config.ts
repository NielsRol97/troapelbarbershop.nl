import type { OpeningTime } from './types/opening-times'

export default defineAppConfig({
  times: [
    { day: 'Maandag', closed: true },
    { day: 'Dinsdag', openingHour: '12:00', closingHour: '21:00' },
    { day: 'Woensdag', openingHour: '09:00', closingHour: '18:00' },
    { day: 'Donderdag', openingHour: '09:00', closingHour: '21:00' },
    { day: 'Vrijdag', openingHour: '09:00', closingHour: '18:00' },
    { day: 'Zaterdag', openingHour: '09:00', closingHour: '14:00' },
    { day: 'Zondag', closed: true },
  ] satisfies OpeningTime[],

  address: 'Viaductstraat 1A, 9561 EP Ter Apel',
  phone: '+31 6 11859891',
  email: 'info@troapelbarbershop.nl',
})
