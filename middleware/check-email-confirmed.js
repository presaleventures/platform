export default async ({ route, store, redirect }) => {
  if (
    route.name !== 'activation' &&
    route.name !== 'activation_send' &&
    store.getters['auth/check']
  ) {
    const user = store.getters['auth/user']
    if (user && !user.email_confirmed) {
      return redirect({ name: 'activation' })
    }
  }
}
