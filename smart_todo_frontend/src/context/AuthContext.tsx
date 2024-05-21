import React, { createContext, useState, ReactNode } from "react";

interface AuthContextType {
  token: string | null;
  signup: (
    username: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  signup: async () => {},
  login: async () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  const signup = async (
    username: string,
    password: string,
    confirmPassword: string
  ) => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("https://zeuron-bvqk.onrender.com/api/users/signup", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.token);
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed");
    }
  };

  const login = async (username: string, password: string) => {
    try {
      const res = await fetch("https://zeuron-bvqk.onrender.com/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.token);
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed");
    }
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
