export type GapSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
export type ColumnType = 'div' | 'section' | 'article' | 'aside' | 'main'

export type ColumnCount = 1 | 2 | 3 | 4 | 5 | 6

export type ColumnProps = Readonly<{
  count: ColumnCount
  as?: ColumnType
  gap?: GapSize
}>
