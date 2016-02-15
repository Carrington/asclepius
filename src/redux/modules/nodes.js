const LOAD = 'asclepius/node/LOAD';
const LOAD_SUCCESS = 'asclepius/node/LOAD_SUCCESS';
const LOAD_FAIL = 'asclepius/node
const EXPAND_NODE = 'asclepius/node/EXPAND';

const initialState = {
  expanded: false
};

export default function reducer(state = initialState, action = {}) {
  let newState = {};
  newState.nodes = state.nodes;

  switch (action.type) {
    case EXPAND_NODE:
      newState.nodes[action.nodeId].expanded = true;
      return {
        ...state,
        newState
      };
    break;
    case COLLAPSE_NODE:
      newState.nodes[action.nodeId].expanded = false;
      return {
        ...state,
        newState
      };
    break;
    case LOAD:
      newState.nodes[action.nodeId].loading = true;
      return {
        ...state,
        newState
      };
    break;
    case LOAD_SUCCESS:
      newState.nodes[action.nodeId].data = action.result;
      newState.nodes[action.nodeId].loading = false;
      newState.nodes[action.nodeId].loaded = true;
      newState.error = null;
      return {
        ...state,
        newState
      };
    break;
    case LOAD_FAIL:
      newState.nodes[action.nodeId].data = null;
      newState.nodes[action.nodeId].loaded = false;
      newState.nodes[action.nodeId].loading = false;
      newState.error = action.error;
    break;
    default:
      return state;
    break;
  }
};

export function isExpanded(globalState, nodeId) {
  return globalState.nodes[nodeId] && globalState.nodes[nodeId].expanded;
};

export function expand(nodeId) {
  return {
    type: EXPAND_NODE,
    nodeId: nodeId
  };
};

export function load(nodeId) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    nodeId: nodeId,
    promise: (client) => client.get('nodes/' + nodeId)
  }
};
