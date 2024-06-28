import React from 'react';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    message?: string;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, onConfirm, title, message }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg border-2 max-w-96">
                <div className="flex justify-center items-center mb-5">
                    <img 
                        src="./images/img-BeepBeep.png" 
                        className='w-48 h-auto'
                        alt="" 
                    />
                </div>
                <div className="flex justify-center items-center mb-5">
                    <h2 className="text-lg font-bold">
                        {title}
                    </h2>
                </div>
                <div className="flex justify-center items-center mb-5">
                    <p>
                        {message}
                    </p>
                </div>
                <div className="flex justify-center space-x-4">
                    <button 
                        onClick={onConfirm} 
                        className="px-4 py-2 bg-blue-800 text-white font-medium rounded hover:bg-blue-700"
                    >
                        Ya
                    </button>
                    <button 
                        onClick={onClose} 
                        className="px-4 py-2 border-2 border-blue-800 text-blue-800 font-medium rounded hover:bg-blue-200 hover"
                    >
                        Tidak
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;