let BACKEND_URL = '';
/*if (import.meta.env.MODE === 'development') {
  console.log('Estás en modo de desarrollo');
  BACKEND_URL = 'http://localhost:3000';
  // BACKEND_URL = 'https://pmjlrx6t-3000.uks1.devtunnels.ms';
} else if (import.meta.env.MODE === 'production') {
  console.log('Estás en modo de producción');
  BACKEND_URL = 'http://51.20.246.74:3000';
}*/

if (process.env.NODE_ENV === "development") {
  console.log("Estás en modo de desarrollo");
  BACKEND_URL = process.env.REACT_APP_BACKEND_URL_DEVELOPMENT || "http://localhost:3000";
} else if (process.env.NODE_ENV === "production") {
  console.log("Estás en modo de producción");
  BACKEND_URL = process.env.REACT_APP_BACKEND_URL_PRODUCTION || "http://51.20.246.74:3000";
}

export { BACKEND_URL };
