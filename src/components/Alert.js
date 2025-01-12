import React from 'react';

const Alert = ({ message, isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed top-4 right-4 w-80 animate-fade-in">
            <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
                <div className="flex flex-col gap-3">
                    <p className="text-red-600 font-medium">{message}</p>
                    <button 
                        onClick={onClose}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
                    >
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Alert; 