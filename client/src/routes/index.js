import Home from '../pages/Home';
import Irregular from '../pages/Irregular';
import Note from '../pages/Note';

// Public routes
const publicRoutes = [
  { name: "Home", path: '/', component: Home },
  { name: "Irregular", path: '/irregular-verb', component: Irregular },
  { name: "Note", path: '/note', component: Note },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
