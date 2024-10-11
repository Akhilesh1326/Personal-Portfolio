// LoadingPage.jsx
import React from 'react';

const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="flex flex-col items-center">
                <div className="loader mb-4"></div>
                <h2 className="text-xl font-semibold text-gray-700 animate-spin">/</h2>
                <h2 className="text-xl font-semibold text-gray-700 animate-spin">/</h2>
                <h2 className="text-xl font-semibold text-gray-700 animate-spin">/</h2>
                <h2 className="text-xl font-semibold text-gray-700 animate-spin">/</h2>
                <h2 className="text-xl font-semibold text-gray-700 animate-spin">/</h2>
                <h2 className="text-xl font-semibold text-gray-700 animate-spin">/</h2>
                <h2 className="text-xl font-semibold text-gray-700 animate-spin">/</h2>
                <h2 className="text-xl font-semibold text-gray-700 animate-spin">/</h2>
                <h2 className="text-xl font-semibold text-gray-700 animate-spin">/</h2>
            </div>
        </div>
    );
};

export default LoadingPage;
