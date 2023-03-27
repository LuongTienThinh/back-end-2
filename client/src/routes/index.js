import Home from '../pages/Home';
import Login from '../pages/Login';

// Public routes
const publicRoutes = [
  { name: "Home", path: '/', component: Home },
  { name: "Login", path: '/login', component: Login },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
