function DashboardReducer(state = [], action) {
    switch (action.type) {
        case "FETCH_EMPLOYEE":
            return action.Employee;
        default:
            return state;
    }
}

export default DashboardReducer;