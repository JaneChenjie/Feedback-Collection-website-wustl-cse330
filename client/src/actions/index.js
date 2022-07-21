import axios from 'axios';
import { values } from 'lodash';
import { Fetch_USER, FETCH_SURVEYS } from './types';
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: Fetch_USER, payload: res.data });

};
export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);
   
    dispatch({type: Fetch_USER, payload: res.data});
};
export const submitsSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);
    history.push('/surveys');
    dispatch({ type: Fetch_USER, payload: res.data });

   
}
export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');

    dispatch({ type: FETCH_SURVEYS, payload: res.data });

}


