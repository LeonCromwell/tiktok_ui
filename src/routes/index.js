import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import routesConfig from '~/config/routes';

// Public Route
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
