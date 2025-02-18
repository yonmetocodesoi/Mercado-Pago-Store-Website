import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Bot } from 'lucide-react';

interface LoginProps {
  onLogin: (credentials: { email: string; password: string }) => Promise<void>;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await onLogin({ email: login, password });
    } catch (error) {
      setError('Login falhou. Por favor, verifique suas credenciais.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="neon-border bg-gray-900/50 backdrop-blur-md p-8 rounded-lg shadow-lg">
          <div className="flex justify-center mb-8">
            <Bot className="w-24 h-24 text-cyan-400" />
          </div>
          
          <h1 className="text-2xl font-bold text-center mb-8 neon-text">
            SupriBots Tools
          </h1>

          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded text-red-300 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="login" className="block text-cyan-400 text-sm font-medium">
                Login
              </label>
              <input
                id="login"
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="cyber-input w-full"
                placeholder="Seu login"
                required
                disabled={isLoading}
                autoComplete="username"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-cyan-400 text-sm font-medium">
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="cyber-input w-full"
                placeholder="Sua senha"
                required
                disabled={isLoading}
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="cyber-button w-full flex items-center justify-center gap-2 mt-6"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Lock className="w-5 h-5" />
                </motion.div>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  <span>Entrar</span>
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;