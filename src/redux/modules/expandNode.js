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
    default:
      return state;
  }
};

export function isExpanded() {
  
};
