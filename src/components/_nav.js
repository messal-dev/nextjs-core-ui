import { cilSpeedometer } from '@coreui/icons'

const _nav = [
  {
    type: 'item',
    name: 'Dashboard',
    href: '/',
    icon: cilSpeedometer,
  },
  {
    type: 'item',
    name: 'Orders',
    href: '/orders',
    icon: cilSpeedometer,
  },
  {
    type: 'group',
    name: 'Settings',
    href: '/settings',
    icon: cilSpeedometer,
    items: [
      {
        type: 'item',
        name: 'Printer',
        href: '/settings/printer',
      },
      {
        type: 'item',
        name: 'Currency',
        href: '/settings/currency',
      },
    ],
  },
  {
    type: 'group',
    name: 'Users',
    href: '/users',
    icon: cilSpeedometer,
    items: [
      {
        type: 'item',
        name: 'Permission',
        href: '/users/permission',
      },
      {
        type: 'item',
        name: 'Role',
        href: '/users/role',
      },
    ],
  },
]

export default _nav
