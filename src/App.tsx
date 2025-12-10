import React, { useState } from 'react';
import { Login } from './components/login';
import { Register } from './components/register';
import { Products } from './components/products';

type Page = 'login' | 'register' | 'products';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('products');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {currentPage === 'login' && (
        <Login 
          onLogin={handleLogin}
          onSwitchToRegister={() => setCurrentPage('register')}
        />
      )}
      {currentPage === 'register' && (
        <Register 
          onRegister={handleLogin}
          onSwitchToLogin={() => setCurrentPage('login')}
        />
      )}
      {currentPage === 'products' && isAuthenticated && (
        <Products onLogout={handleLogout} />
      )}
    </div>
  );
}
