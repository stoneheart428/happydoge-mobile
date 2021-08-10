import axios from 'axios';
import {SERVER_URL} from '../constant/server_url';
import {GET_ERRORS} from './type';
import {getUser} from '../actions/profileAction';
export const withdraw = (data, setVisible) => {
  return async dispatch => {
    await axios
      .post(SERVER_URL + '/withdraw', data)
      .then(res => {
        if (res.data.msg === 'success') {
          setVisible(data.amount, data.flag);
          dispatch(getUser(data.id));
        }
      })
      .catch(err => {
        dispatch({type: GET_ERRORS, payload: err.response.data});
      });
  };
};
