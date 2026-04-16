import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes/Routes';
import TimelineContext from './context/TimelineContext';
import FriendsContext from './context/FriendsContext'; // ✅ ADD THIS
import CustomToastContainer from './components/customToast/CustomToastContainer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineContext>
      <FriendsContext>   {/* ✅ WRAP HERE */}
        <RouterProvider router={router} />
        <CustomToastContainer />
      </FriendsContext>
    </TimelineContext>
  </StrictMode>
);