import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Clear any old auth data on mount
  useEffect(() => {
    localStorage.removeItem('mapriot_user');
  }, []);

  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'Usuario',
    email: 'usuario@example.com'
  });
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const login = async (email: string, password: string) => {
    // Simulate API call (replace with real API)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simple validation - in production use real authentication
        if (!email || !password) {
          reject(new Error('Email and password are required'));
          return;
        }

        if (password.length < 6) {
          reject(new Error('Password must be at least 6 characters'));
          return;
        }

        const newUser: User = {
          id: Math.random().toString(36).substr(2, 9),
          name: email.split('@')[0],
          email: email,
        };

        setUser(newUser);
        setIsAuthenticated(true);
        localStorage.setItem('mapriot_user', JSON.stringify(newUser));
        resolve();
      }, 1000);
    });
  };

  const register = async (name: string, email: string, password: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!name || !email || !password) {
          reject(new Error('All fields are required'));
          return;
        }

        if (password.length < 6) {
          reject(new Error('Password must be at least 6 characters'));
          return;
        }

        const newUser: User = {
          id: Math.random().toString(36).substr(2, 9),
          name: name,
          email: email,
        };

        setUser(newUser);
        setIsAuthenticated(true);
        localStorage.setItem('mapriot_user', JSON.stringify(newUser));
        resolve();
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('mapriot_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
