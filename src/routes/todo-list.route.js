const REACT_APP_BACKEND_APP_BASE_URL=process.env.REACT_APP_BACKEND_APP_BASE_URL

export const todoListRoutes = {
    getTodoList: `${REACT_APP_BACKEND_APP_BASE_URL}/todolist/get-todolist/`,
    addTeamWork: `${REACT_APP_BACKEND_APP_BASE_URL}/todolist/work/add-team`,
    addTeamProject: `${REACT_APP_BACKEND_APP_BASE_URL}/todolist/project/add-team`,
    addTeamPersonal: `${REACT_APP_BACKEND_APP_BASE_URL}/todolist/personal/add-team`,
    addTeamHobbies: `${REACT_APP_BACKEND_APP_BASE_URL}/todolist/hobbies/add-team`,
    addTeamTravel: `${REACT_APP_BACKEND_APP_BASE_URL}/todolist/travel/add-team`,
    createDailyTask: `${REACT_APP_BACKEND_APP_BASE_URL}/todolist/daily-task/createTask/`,
    createReminder: `${REACT_APP_BACKEND_APP_BASE_URL}/todolist/reminder/createTask/`,
    createTask: `${REACT_APP_BACKEND_APP_BASE_URL}/todolist/task/createTask/`,
    createGoal: `${REACT_APP_BACKEND_APP_BASE_URL}/todolist/goal/createTask/`,
    addStepsToGoal: `${REACT_APP_BACKEND_APP_BASE_URL}/todolist/goal/addSteps/`,
    createHabit: `${REACT_APP_BACKEND_APP_BASE_URL}/todolist/habit/createHabit/`,
    addSpendToFinancial: `${REACT_APP_BACKEND_APP_BASE_URL}/todolist/financial/addSpend/`,
    updateTeam: `${REACT_APP_BACKEND_APP_BASE_URL}/todolist/team/update/`,
    updateTask: `${REACT_APP_BACKEND_APP_BASE_URL}/todolist/task/update/`,
    updateGoal: `${REACT_APP_BACKEND_APP_BASE_URL}/todolist/goal/update/`,
    deleteTeam: `${REACT_APP_BACKEND_APP_BASE_URL}/todolist/team/delete/`,
    deleteGoal: `${REACT_APP_BACKEND_APP_BASE_URL}/todolist/goal/delete/`,
    deleteTask: `${REACT_APP_BACKEND_APP_BASE_URL}/todolist/task/delete/`,
};