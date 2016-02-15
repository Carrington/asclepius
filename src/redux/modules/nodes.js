const LOAD_NODE = 'asclepius/node/LOAD_NODE';
const LOAD_NODE_SUCCESS = 'asclepius/node/LOAD_NODE_SUCCESS';
const LOAD_NODE_FAIL = 'asclepius/node/LOAD_NODE_FAIL';

const INIT_NODES = 'asclepius/node/INIT_NODES';

const EXPAND_NODE = 'asclepius/node/EXPAND_NODE';
const COLLAPSE_NODE = 'asclepius/node/COLLAPSE_NODE';

const initialState = {
  nodes: {}, //nodes is a dictionary
  error: null
};

export //TODO look up how to do ducks action constants

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case EXPAND_NODE:
      return {
        ...state,
        nodes: {
          ...state.nodes,
          [action.nodeId]: {
            ...state.nodes[action.nodeId],
            expanded: true
          }
        }
      };
    break;
    case COLLAPSE_NODE:
      return {
        ...state,
        nodes: {
          ...state.nodes,
          [action.nodeId]: {
            ...state.nodes[action.nodeId],
            expanded: false
          }
        }
      };
    break;
    case LOAD_NODE:
      return {
        ...state,
        nodes: {
          ...state.nodes,
          [action.nodeId]: {
            ...state.nodes[action.nodeId],
            loading: true
          }
        }
      };
    break;
    case LOAD_NODE_SUCCESS:
      return {
        ...state,
        nodes: {
          ...state.nodes,
          [action.nodeId]: {
            ...state.nodes[action.nodeId],
            data: action.result,
            loading: false,
            loaded: true
          }
        },
        error: null
      };
    break;
    case LOAD_NODE_FAIL:
      return (action.error && typeof action.error === 'object') ? { //did ES6 fix this?
        ...state,
        nodes: {
          ...state.nodes,
          [action.nodeId]: {
            ...state.nodes[action.nodeId],
            data: null,
            loading: false,
            loaded: false
          }
        },
        error: action.error
      } : state;
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
    types: [LOAD_NODE, LOAD_NODE_SUCCESS, LOAD_NODE_FAIL],
    nodeId: nodeId,
    promise: (client) => client.get('nodes/' + nodeId)
  }
};
