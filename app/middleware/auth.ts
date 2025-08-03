export default defineNuxtRouteMiddleware((to, from) => {
  // Manage via store
  const authStore = {
    isLoggedIn: true,
  };

  if (!authStore.isLoggedIn) {
    return navigateTo("/login");
  }
});
