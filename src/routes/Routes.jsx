
import { RiseLoader } from "react-spinners";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import ErrorMsg from "./errorElement/ErrorMsg";
import MainLayout from "../layout/MainLayout";
import TimeLine from "../components/pages/TimeLine";
import HomePage from "../components/pages/HomePage";
import Stats from "../components/pages/Stats";
import { FriendDetails } from './FriendDetailsLazy';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorMsg />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/timeline",
                element: <TimeLine />
            },
            {
                path: "/stats",
                element: <Stats />
            },
            {
                path: "/friend-details/:friendId",
                element: (
                    <Suspense
                        fallback={
                            <div className="flex items-center justify-center min-h-screen">
                                <RiseLoader color="#10B981" />
                            </div>
                        }
                    >
                        <FriendDetails />
                    </Suspense>
                ),
                loader: async () => {
                    const res = await fetch('/friendsData.json');
                    return res.json();
                },
                HydrateFallback: () => (
                    <div className="flex items-center justify-center min-h-screen">
                        <RiseLoader color="#10B981" />
                    </div>
                ), // Add this
            }
        ]
    }
]);