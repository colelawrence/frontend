import { CALL_API } from '../middleware/api'
import { push } from 'react-router-redux'

import Schemas from '../schemas'
import { setMessage, resetMessage } from './app'
import { updateLocalModel, editModel } from './locals'
import { selectSessionUser } from '../selectors/session'

import {
  SESSION_USER_REQUEST,
  SESSION_USER_SUCCESS,
  SESSION_USER_FAILURE,
  EDIT_SESSION_USER,
  SAVE_SESSION_USER_REQUEST,
  SAVE_SESSION_USER_SUCCESS,
  SAVE_SESSION_USER_FAILURE,
  SESSION_LOGIN_REQUEST,
  SESSION_LOGIN_SUCCESS,
  SESSION_LOGIN_FAILURE,
  SESSION_ADD_HISTORY_ENTRY,
  SESSION_SSH_KEYS_REQUEST,
  SESSION_SSH_KEYS_SUCCESS,
  SESSION_SSH_KEYS_FAILURE,
  SESSION_CREATE_SSH_KEY_REQUEST,
  SESSION_CREATE_SSH_KEY_SUCCESS,
  SESSION_CREATE_SSH_KEY_FAILURE,
  SESSION_DELETE_SSH_KEY_REQUEST,
  SESSION_DELETE_SSH_KEY_SUCCESS,
  SESSION_DELETE_SSH_KEY_FAILURE,
  SET_PROFILE_PHOTO_REQUEST,
  SET_PROFILE_PHOTO_SUCCESS,
  SET_PROFILE_PHOTO_FAILURE,
  SET_POSTER_PHOTO_REQUEST,
  SET_POSTER_PHOTO_SUCCESS,
  SET_POSTER_PHOTO_FAILURE
} from '../constants/session'

// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchSessionUser () {
  return {
    [CALL_API]: {
      types: [ SESSION_USER_REQUEST, SESSION_USER_SUCCESS, SESSION_USER_FAILURE ],
      endpoint: `/profile`,
      schema: Schemas.SESSION_USER,
      silentError: true
    }
  }
}

// Fetches a single user from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export function loadSessionUser () {
  return (dispatch, getState) => {
    if (getState().session.requestedSession) {
      return null
    }

    return dispatch(fetchSessionUser())
  }
}
export function editSessionUser () {
  return (dispatch, getState) => {
    const user = selectSessionUser(getState())
    if (!user) {
      return null
    }

    return dispatch(editModel(Schemas.SESSION_USER, EDIT_SESSION_USER, user))
  }
}

const SESSION_USER_UPDATE = 'SESSION_USER_UPDATE'
export function updateSessionUser (user) {
  return updateLocalModel(Schemas.SESSION_USER, SESSION_USER_UPDATE, user)
}

export function saveSessionUser (user) {
  return (dispatch, getState) => {
    return dispatch({
      [CALL_API]: {
        types: [SAVE_SESSION_USER_REQUEST, SAVE_SESSION_USER_SUCCESS, SAVE_SESSION_USER_FAILURE],
        endpoint: '/session',
        method: 'PUT',
        schema: Schemas.SESSION_USER,
        data: user
      }
    }).then(action => {
      if (action.type === SAVE_SESSION_USER_SUCCESS) {
        dispatch(setMessage('settings successfully saved'))
        setTimeout(() => {
          dispatch(resetMessage())
        }, 3500)
        return dispatch(push(`/${user.username}`))
      }

      return null
    })
  }
}

export function setProfilePhoto (files) {
  return (dispatch) => {
    return dispatch({
      [CALL_API]: {
        types: [SET_PROFILE_PHOTO_REQUEST, SET_PROFILE_PHOTO_SUCCESS, SET_PROFILE_PHOTO_FAILURE],
        endpoint: '/profile/photo',
        method: 'PUT',
        schema: Schemas.SESSION_USER,
        data: {},
        files
      }
    })
  }
}

export function setPosterPhoto (files) {
  return (dispatch) => {
    return dispatch({
      [CALL_API]: {
        types: [SET_POSTER_PHOTO_REQUEST, SET_POSTER_PHOTO_SUCCESS, SET_POSTER_PHOTO_FAILURE],
        endpoint: '/profile/poster',
        method: 'PUT',
        schema: Schemas.SESSION_USER,
        data: {},
        files
      }
    })
  }
}

export function loginUser (username, password) {
  return {
    [CALL_API]: {
      types: [SESSION_LOGIN_REQUEST, SESSION_LOGIN_SUCCESS, SESSION_LOGIN_FAILURE],
      endpoint: '/session',
      method: 'POST',
      schema: Schemas.SESSION_USER,
      data: { username, password }
    }
  }
}

export function addHistoryEntry (query) {
  return {
    type: SESSION_ADD_HISTORY_ENTRY,
    value: query
  }
}

export function fetchSshKeys () {
  return {
    [CALL_API]: {
      types: [ SESSION_SSH_KEYS_REQUEST, SESSION_SSH_KEYS_SUCCESS, SESSION_SSH_KEYS_FAILURE ],
      endpoint: `/session/keys`,
      schema: Schemas.SSH_KEY_ARRAY,
      silentError: true
    }
  }
}

export function loadSshKeys () {
  return (dispatch, getState) => {
    if (getState().entities.ssh_keys) {
      return null
    }

    return dispatch(fetchSshKeys())
  }
}

export function createSshKey (name = '', key = '') {
  return (dispatch, getState) => {
    return dispatch({
      [CALL_API]: {
        types: [ SESSION_CREATE_SSH_KEY_REQUEST, SESSION_CREATE_SSH_KEY_SUCCESS, SESSION_CREATE_SSH_KEY_FAILURE ],
        endpoint: '/session/keys',
        method: 'POST',
        schema: Schemas.SSH_KEY,
        data: { name, key }
      }
    }).then(action => {
      if (action.type === SESSION_CREATE_SSH_KEY_SUCCESS) {
        dispatch(setMessage(`added ssh key:${name}`))
        setTimeout(() => {
          dispatch(resetMessage())
        }, 3500)
        // return dispatch(push(`/qri`));
      }

      return null
    })
  }
}

export function deleteSshKey (name = '', sha = '') {
  return (dispatch, getState) => {
    return dispatch({
      [CALL_API]: {
        types: [ SESSION_DELETE_SSH_KEY_REQUEST, SESSION_DELETE_SSH_KEY_SUCCESS, SESSION_DELETE_SSH_KEY_FAILURE ],
        endpoint: `/session/keys/${sha}`,
        method: 'DELETE',
        schema: Schemas.SSH_KEY
      }
    }).then(action => {
      if (action.type === SESSION_DELETE_SSH_KEY_SUCCESS) {
        dispatch(setMessage(`deleted ssh key: ${name}`))
        setTimeout(() => {
          dispatch(resetMessage())
        }, 3500)
        // return dispatch(push(`/qri`));
      }

      return null
    })
  }
}