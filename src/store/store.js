import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import rootReducer from './reducers';

const createAppStore = () => {
	const sagaMiddleware = createSagaMiddleware();

	const composeEnhancers =
		(typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

	const store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(sagaMiddleware))
	);

	sagaMiddleware.run(sagas);

	return store;
};

export default createAppStore;
