import React from 'react';
import { ToastContainer } from 'react-toastify';

const CustomToastContainer = () => {
    return (

        <ToastContainer
            position="top-center"
            autoClose={2500}
            hideProgressBar={false}  // Changed to false to show progress bar
            newestOnTop={true}
            closeOnClick={true}
            pauseOnHover={true}
            pauseOnFocusLoss={false}
            theme="light"
            toastStyle={{
                background: 'linear-gradient(120deg, #ffffff 0%, #f0fdf4 100%)',
                color: '#166534',
                borderRadius: '16px',
                padding: '14px 20px',
                fontSize: '14px',
                fontWeight: '600',
                boxShadow: '0 10px 15px -3px rgba(34, 197, 94, 0.15)',
                border: '1px solid #bbf7d0',
                textShadow: 'none',
                position: 'relative',
            }}
            progressStyle={{
                background: 'linear-gradient(90deg, #10b981, #34d399, #6ee7b7)',
                height: '4px',
                borderRadius: '4px',
                bottom: '0',
                left: '0',
                animation: 'progress 2.5s linear forwards',
            }}
            icon={true}
            style={{
                marginTop: '90px',
                maxWidth: '440px',
                width: 'auto',
            }}
        />

    );
};

export default CustomToastContainer;