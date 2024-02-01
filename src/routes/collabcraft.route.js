const REACT_APP_BACKEND_APP_BASE_URL=process.env.REACT_APP_BACKEND_APP_BASE_URL

export const roomRoutes = {
    getUserRooms : `${REACT_APP_BACKEND_APP_BASE_URL}/room/getUserRooms`,
    getRoomDetails: `${REACT_APP_BACKEND_APP_BASE_URL}/room/getRoomDetails/`,
    createRoom: `${REACT_APP_BACKEND_APP_BASE_URL}/room/createRoom`,
    joinRoom: `${REACT_APP_BACKEND_APP_BASE_URL}/room/joinRoom`,
}