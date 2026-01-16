import type { HeadingLevel } from '@/types/title'
import type { Text } from '@/types/text'

export type Hero = {
    title: string
    heading?: HeadingLevel
    subtitle?: Text
    backgroundImage?: string
}