import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';
import { ToastContainer } from 'react-toastify';
import TimelineContext from './context/TimelineContext';
import CustomToastContainer from './components/customToast/CustomToastContainer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineContext>
      <RouterProvider router={router} />
      <CustomToastContainer></CustomToastContainer>
    </TimelineContext>
  </StrictMode>
);