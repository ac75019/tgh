// import { useMemo } from "react";
// import {store, createStore, applyMiddleware, combineReducers, compose} from 'redux'
// import {composeWithDevTools} from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from "@reduxjs/toolkit/query"
import { volsAPI } from "src/lib/redux/app/services/eod_implied_vols"


// new way
export const store =  configureStore({ 
  reducer: {
    [volsAPI.reducerPath] : volsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(volsAPI.middleware) ,
});

setupListeners(store.dispatch)
export default store;

// old way
                                                                                                                                                                
// let store;

// const initialState = {}

// const middlewares = [thunk]
// const composedEnhancers = compose(
//     applyMiddleware(...middlewares)
// )

// const rootReducer = combineReducers()

// function initStore(preloadedState = initialState) {
//     return createStore(reducer, 
//       preloadedState, 
//       composedEnhancers);
//   }

// export const initializeStore = (preloadedState) => {
// let _store = store ?? initStore(preloadedState);

// if (preloadedState && store) {
//     _store = initStore({
//     ...store.getState(),
//     ...preloadedState,
//     });
//     store = undefined;
// }

// if (typeof window === 'undefined') return _store;
// if (!store) store = _store;

// return _store;
// }

// export default function configureStore(initialState) {
//     const store = useMemo(() => initializeStore(initialState), [initialState]);
//     return store;
//   }

// export default function configureStore()
// {
//     const store = createStore(
//         rootReducer, 
//         initialState,
//         composedEnhancers
//     )
//     return store;
// }