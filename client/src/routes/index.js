import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

// Public routes
const publicRoutes = [
  { name: "Home", path: '/', component: Home },
  { name: "Login", path: '/login', component: Login },
  { name: "Register", path: '/register', component: Register },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
