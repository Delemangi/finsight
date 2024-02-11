const UNAUTHENTICATED_ROUTES = ["login", "register"];

export const isRouteAuthenticated = (route: string) => {
  return !UNAUTHENTICATED_ROUTES.includes(route);
};
