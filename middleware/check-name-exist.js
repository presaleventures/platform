export default async ({ route, store, redirect }) => {
  const user = store.getters['auth/user']
  if (user && !user.name && route.name !== 'create_username') {
    return redirect({ name: 'create_username' })
  }
  if (route.name === 'create_username' && user.name) {
    return redirect({ name: 'home' })
  }
}
