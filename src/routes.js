const routes = [
    { path: '/', name: 'Dashboard' },
    { path: '/orders', name: 'Orders' },
    { path: '/settings', redirect: '/', name: 'Settings' },
    { path: '/settings/printer', name: 'Printer' },
    { path: '/settings/currency', name: 'Currency' },
    { path: '/users', redirect: '/', name: 'Users' },
    { path: '/users/permission', name: 'Permission' },
    { path: '/users/role', name: 'Role' },
]

export default routes;