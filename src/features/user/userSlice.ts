import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserInfo {
    lastName: string;
    firstName: string;
    email: string;
    children: Array<{
        lastName: string;
        firstName: string;
        class: string;
    }>;
}

const emptyUser: UserInfo = {
    lastName: '',
    firstName: '',
    email: '',
    children: [{
        lastName: '',
        firstName: '',
        class: ''
    }]
};

const getInitialUser = (): UserInfo => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : emptyUser;
};

const initialState: UserInfo = getInitialUser();

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (_: unknown, action: PayloadAction<UserInfo>) => {
            localStorage.setItem('user', JSON.stringify(action.payload));
            return action.payload;
        },
        clearUser: () => {
            localStorage.removeItem('user');
            return emptyUser;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUser = (state: { user: UserInfo }) => state.user;
export default userSlice.reducer;
