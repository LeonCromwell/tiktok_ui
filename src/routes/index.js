import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';

// Public Route
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/user/:nickname', component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
