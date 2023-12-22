const REACT_APP_BACKEND_APP_BASE_URL="http://localhost:5151"

export const userRoutes = {
    getUser: `${REACT_APP_BACKEND_APP_BASE_URL}/user/get/`,
    login: `${REACT_APP_BACKEND_APP_BASE_URL}/user/login`,
    register: `${REACT_APP_BACKEND_APP_BASE_URL}/user/register`,
    changePassword: `${REACT_APP_BACKEND_APP_BASE_URL}/user/change_password`,
    forgotPassword: `${REACT_APP_BACKEND_APP_BASE_URL}/user/forgot_password`,
    logout: `${REACT_APP_BACKEND_APP_BASE_URL}/user/logout`,
    delete: `${REACT_APP_BACKEND_APP_BASE_URL}/user/delete`,
};

export const mailRoutes = {
    sendMail: `${REACT_APP_BACKEND_APP_BASE_URL}/mail/send-mail/`
}