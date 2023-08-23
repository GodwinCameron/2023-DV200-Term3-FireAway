import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  console.log("interceptor");
  
  // List of routes that require JWT authentication
  const protectedRoutes = ['/profile', '/cart', '/checkout', '/rifles'];

  // Check if the current route requires authentication
  if (token && protectedRoutes.includes(config.url)) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;