const EXPAND_NODE = 'asclepius/node/EXPAND';

const initialState = {
  expanded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case EXPAND_NODE:
      return {
        ...state,
        expanded: true
      };
    case COLLAPSE_NODE:
      return {
        ...state,
        expanded: false
      };
    default:
      return state;
  }
};

export function isExpanded(globalState, nodeId) {
  return globalState.nodes[nodeId] && globalState.nodes[nodeId].expanded;
};

export function expand(nodeId) {
  return {
    type: EXPAND_NODE,
    nodeId
  };
}
