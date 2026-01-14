import type { NavItem } from '@/types/navigation'

export const useNavigation = () => {
  const items = [
    { id: 1, label: 'Start', to: '/', icon: 'material-symbols:home-rounded' },
    { id: 2, label: 'Over ons', to: '/over-ons', icon: 'material-symbols:person-rounded' },
    { id: 3, label: 'Diensten', to: '/diensten', icon: 'material-symbols:content-cut' },
    { id: 4, label: 'Producten', to: '/producten', icon: 'material-symbols:storefront-rounded' },
    { id: 5, label: 'Contact', to: '/contact', icon: 'material-symbols:phone-in-talk-rounded' },
    { id: 6, label: 'Gallerij', to: '/gallerij', icon: 'material-symbols:photo-library-rounded' },
  ] satisfies NavItem[]

  return { items }
}