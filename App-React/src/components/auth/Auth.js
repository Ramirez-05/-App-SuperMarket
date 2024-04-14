import React, { useState } from 'react';

export default function Auth({ onShowCreateAccount }) {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="w-auto h-screen bg-black flex justify-center gap-0">
            <section className="h-80 -mx-8 min-h-screen flex items-center justify-start px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-md w-full mx-auto bg-white drop-shadow-2xl rounded-lg p-8 transition-transform transform hover:scale-110">
                <h2 className="text-center text-5xl font-extrabold text-gray-900">Iniciar sesión</h2>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Correo electrónico</label>
                            <input
                            value={formData.username}
                            type="email"
                            name="username"
                            required
                            onChange={handleChange}
                            className="mb-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Correo electrónico"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Contraseña</label>
                            <input
                            value={formData.password}
                            name="password"
                            type="password"
                            required
                            onChange={handleChange}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Contraseña"
                            />
                        </div>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                            Recuérdame
                            </label>
                        </div>
                        <div className="text-sm">
                            <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">¿Olvidaste tu contraseña?</a>
                        </div>
                    </div>
                    <div>
                        <button type="submit" disabled={loading} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            {loading ? "Cargando..." : "Iniciar sesión"}
                        </button>
                    </div>
                </form>
                <div>
                    <p className="text-center text-sm text-gray-600 pt-5">
                    ¿No tienes una cuenta? <button onClick={onShowCreateAccount} className="font-medium text-indigo-600 hover:text-indigo-500">Crear una cuenta</button>
                    </p>
                </div>
                </div>
            </section>
        </div>
    );
}
