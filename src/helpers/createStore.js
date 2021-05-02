// CREATE THAT HELPER FOR SERVER SIDE SO ALL OF THE STORE(DATA) IN THE SERVER SIDE CAN BE INITIALIZED BEFORE
// THE APPLICATION GET INITIALIZED
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import reducers from '../client/reducers';
import axios from 'axios';

export default (req) => {

    const axiosInstance = axios.create({
        baseURL:'http://react-ssr-api.herokuapp.com',
        headers: {cookie:req.get('cookie') || ''}
    });

    const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
    return store;
};