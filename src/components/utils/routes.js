import LoginSupp from "../login/LoginSupp"
import Profile from "../Profile/Profile"


export const publicRoutes = [
    {
        path: '/login',
        Component: LoginSupp
    }
]

export const authRoutes = [
    {
        path: '/profile',
        Component: Profile
    }
]