import React from 'react';
import { CheckCircle, Info, XCircle, X, Warning } from 'phosphor-react';
import './Toast.css';

const icons = {
    info: <Info size={24} color="#3498db" />,
    warning: <Warning size={24} color="#f1c40f" />,
    error: <XCircle size={24} color="#e74c3c" />,
    success: <CheckCircle size={24} color="#2ecc71" />
};

const Toast = ({ status, icon, message, showAction, onClose, onActionClick, actionText }) => {
    const StatusIcon = icons[status];

    return (
        <div className={`toast`}>
            {icon && <div className="toast-icon">{StatusIcon}</div>}
            <div className="toast-message">{message}</div>
            <div className='bar'></div>
            {showAction && (
                <div className="toast-actions">
                    <span className="toast-action-btn" onClick={onActionClick}>
                        {actionText}
                    </span>
                    <button className="toast-close-btn" onClick={onClose}>
                        <X size={20} color="#fff" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Toast;
