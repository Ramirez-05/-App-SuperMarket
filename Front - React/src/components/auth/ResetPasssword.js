import React, { useState } from 'react';

export default function ResetPassword() {
    const [formData, setFormData] = useState({}); // Define formData utilizando useState
    const [error, setError] = useState(null); // Define error utilizando useState
    const [loading, setLoading] = useState(false); // Define loading utilizando useState

    const handleSubmit = (event) => {
        event.preventDefault();
        // Tu lógica de handleSubmit aquí
    };

    const handleChange = (event) => {
        // Tu lógica de handleChange aquí
    };

    return (
        <div className="w-auto h-screen bg-black flex justify-center gap-0">
            <section className="h-80 -mx-8 min-h-screen flex items-center justify-start px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-md w-full mx-auto bg-white drop-shadow-2xl rounded-lg p-8 transition-transform transform hover:scale-110">
                <h2 className="text-center text-5xl font-extrabold text-gray-900">Verificar Cuenta</h2>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">

                    <div className="rounded-md shadow-sm -space-y-px">
                        <input type="hidden" name="grant_type" value={formData.grant_type} />
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
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <div>
                        <button type="submit" disabled={loading} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            {loading ? "Cargando..." : "Verificar Cuenta"}
                        </button>
                    </div>
                </form>
                </div>
            </section>
        </div>
    );
}
