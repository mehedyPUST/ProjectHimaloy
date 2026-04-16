import { createContext } from "react";

export const FriendsContextCreate = createContext({
    friends: [],
    loading: false,
});