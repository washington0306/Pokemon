import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import FavoriteProvider from './contexts/Favorites';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FavoriteProvider>
      <App />
    </FavoriteProvider>
  </React.StrictMode>,
);
