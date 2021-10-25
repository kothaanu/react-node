import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './shared/reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from './shared/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = compose (
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension && window.devToolsExtension(),
) (createStore) (reducers);

sagaMiddleware.run(sagas);

export default store;
