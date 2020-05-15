import { createStore } from 'redux';
import DashboardReducer from '../Reducers/DashboardReducer';

let DashboardStore = createStore(DashboardReducer);

export default DashboardStore;