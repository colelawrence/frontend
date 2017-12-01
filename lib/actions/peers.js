import { CALL_API } from '../middleware/api'
import Schemas from '../schemas'

import {
  PEER_REQUEST,
  PEER_SUCCESS,
  PEER_FAILURE,
  PEERS_REQUEST,
  PEERS_SUCCESS,
  PEERS_FAILURE,
  PEER_NAMESPACE_REQUEST,
  PEER_NAMESPACE_SUCCESS,
  PEER_NAMESPACE_FAILURE,
  CONNECTIONS_REQUEST,
  CONNECTIONS_SUCCESS,
  CONNECTIONS_FAILURE
} from '../constants/peers'

export function fetchPeers (page = 1, pageSize = 30) {
  return {
    [CALL_API]: {
      types: [PEERS_REQUEST, PEERS_SUCCESS, PEERS_FAILURE],
      endpoint: '/peers',
      data: { page, pageSize },
      schema: Schemas.PEER_ARRAY
    },
    page,
    pageSize
  }
}

export function loadPeers (page = 1, pageSize = 30) {
  return (dispatch, getState) => {
    // TODO - check pagination
    return dispatch(fetchPeers(page, pageSize))
  }
}

export function fetchPeer (id) {
  return {
    [CALL_API]: {
      types: [PEER_REQUEST, PEER_SUCCESS, PEER_FAILURE],
      endpoint: `/connect/${id}`,
      schema: Schemas.PEER
    }
  }
}

export function loadPeer (id) {
  return (dispatch, getState) => {
    // TODO - check pagination
    return dispatch(fetchPeer(id))
  }
}

export function fetchPeerNamespace (path, page = 1, pageSize = 30) {
  return {
    [CALL_API]: {
      types: [PEER_NAMESPACE_REQUEST, PEER_NAMESPACE_SUCCESS, PEER_NAMESPACE_FAILURE],
      endpoint: `/peernamespace/${path}`,
      data: { path, page, pageSize },
      schema: Schemas.PEER_NAMESPACE_ARRAY,
      silentError: true
    },
    page,
    pageSize,
    path
  }
}

export function loadPeerNamespace (path, page = 1, pageSize = 30, callback) {
  return (dispatch, getState) => {
    // TODO - check pagination
    return dispatch(fetchPeerNamespace(path, page, pageSize))
    .then(action => {
      if (action.type === PEER_NAMESPACE_FAILURE && typeof callback === 'function') {
        console.log(`PEER_NAMESPACE_FAILURE: ${action.error}`)
        callback(action.error)
      } else {
        callback()
      }
    })
  }
}

export function connections () {
  return {
    [CALL_API]: {
      types: [CONNECTIONS_REQUEST, CONNECTIONS_SUCCESS, CONNECTIONS_FAILURE],
      endpoint: '/connections',
      schema: Schemas.CONNECTIONS
    }
  }
}