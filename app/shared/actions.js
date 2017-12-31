import {
  ADD_GUEST,
  GUEST_ADDED,
  GUEST_LOGIN,
  GUEST_LOGGED_IN,
  ADD_SO,
  SO_ADDED
} from './constants';
//import { API_URL } from './config';
import Config from 'react-native-config';

function addGuest() {
  return {
    type: ADD_GUEST
  };
}

function guestAdded() {
  return {
    type: GUEST_ADDED,
  };
}

export function add_guest(guest) {
  return function dofetch(dispatch) {
    dispatch(addGuest());

    const url = Config.API_URL + 'guests';

    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(guest)
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        dispatch(guestAdded());
        return responseJson
      })
      .catch(error => {
        /* eslint-disable no-console */
        console.log(error);
      });
  };
}

function add_so() {
  return {
    type: ADD_SO
  };
}

function so_added() {
  return {
    type: SO_ADDED
  };
}

export function add_significant_other(so) {
  return function dofetch(dispatch) {
    dispatch(add_so());

    const url = Config.API_URL + 'significant_others';

    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(so)
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        dispatch(so_added());
        return responseJson;
      })
      .catch(error => {
        /* eslint-disable no-console */
        console.log(error);
      });
  };
}

function loginGuest() {
  return {
    type: GUEST_LOGIN
  };
}

function guestLoggedIn(data) {
  return {
    type: GUEST_LOGGED_IN,
    data
  };
}

export function login_guest(code) {
  return function dofetch(dispatch) {
    dispatch(loginGuest());

    const url = Config.API_URL + 'guests/' + code;

    return fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        dispatch(guestLoggedIn(responseJson));
        return responseJson;
      })
      .catch(error => {
        /* eslint-disable no-console */
        console.log(error);
      });
  };
}
