import actions from './nodes';

const LOAD_GRAPH = 'asclepius/graph/LOAD_GRAPH';
const LOAD_GRAPH_SUCCESS = 'asclepius/graph/LOAD_GRAPH_SUCCESS';
const LOAD_GRAPH_FAIL = 'asclepius/graph/LOAD_GRAPH_FAIL';

const ORIENT_GRAPH_ORBIT = 'asclepius/graph/ORIENT_GRAPH_ORBIT';
const ORIENT_GRAPH_HORIZONTAL = 'asclepius/graph/ORIENT_GRAPH_HORIZONTAL';
const ORIENT_GRAPH_VERTICAL = 'asclepius/graph/ORIENT_GRAPH_VERTICAL';
const ORIENT_GRAPH_FAIL = 'asclepius/graph/ORIENT_GRAPH_FAIL';

const FILTER_GRAPH_EDGE = 'asclepius/graph/FILTER_GRAPH_ANGLE';
const FILTER_GRAPH_VERTEX = 'asclepius/graph/FILTER_GRAPH_VERTEX';

const initialState = {
  graph: {
    loading: false,
    loaded: false
  }
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_GRAPH:
      return {
        ...state,
        //TODO is it possible to attach another event to fire here?
        graph: {
          ....state.graph,
          loading: true
        }
      }
    break;
    case LOAD_GRAPH_SUCCESS:
      return {
        ...state,
        graph: {
          ....state.graph,
          data: action.result,
          loading: false,
          loaded: true
        }
      };
    break;
    case LOAD_GRAPH_FAIL:
      return (action.error && typeof action.error === 'object') ? {
        ...state,
        graph: {
          ...state.graph,
          graph: {
            ...state.graph,
            data: null,
            loading: false,
            loaded: false
          }
        },
        error: action.error
      } : state;
    break;
    case ORIENT_GRAPH_ORBIT:
      return ;
    break;
    default:
      return state;
    break;
  }
};

export function load() {
  return {
    types: [INIT_NODES, LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get({
      nodeId: 0, //default should be config,
      orientation: 'init',
      depth: 0 //default should be config
    });
  };
};

export function orientGraphOrbit(nodeId) {
  return {
    types: [ORIENT_GRAPH_ORBIT, ORIENT_GRAPH_SUCCESS, ORIENT_GRAPH_FAILURE],
    promise: (client) => client.get({
      nodeId: nodeId,
      orientation: 'orbit',
      depth: 3 //needs to be settable
    });
  };
};
