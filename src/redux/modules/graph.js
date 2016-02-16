import actions from './nodes';

const LOAD = 'asclepius/graph/LOAD_GRAPH';
const LOAD_SUCCESS = 'asclepius/graph/LOAD_GRAPH_SUCCESS';
const LOAD_FAIL = 'asclepius/graph/LOAD_GRAPH_FAIL';

const ORIENT_ORBIT = 'asclepius/graph/ORIENT_GRAPH_ORBIT';
const ORIENT_HORIZONTAL = 'asclepius/graph/ORIENT_GRAPH_HORIZONTAL';
const ORIENT_VERTICAL = 'asclepius/graph/ORIENT_GRAPH_VERTICAL';
const ORIENT_FAIL = 'asclepius/graph/ORIENT_GRAPH_FAIL';

const FILTER_ANGLE = 'asclepius/graph/FILTER_GRAPH_ANGLE';
const FILTER_VERTEX = 'asclepius/graph/FILTER_GRAPH_VERTEX';

const initialState = {
  graph: {
    loading: false,
    loaded: false
  }
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        //TODO is it possible to attach another event to fire here?
        graph: {
          ...graph,
          loading: true
        }
      }
    break;
    default:
      return state;
    break;
  }
};

export function load() {
  return {
    types: [INIT_NODES, LOAD, LOAD_SUCCESS, LOAD_FAIL]
  }
}
