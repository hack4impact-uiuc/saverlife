import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from 'App/Stores'
import RootScreen from './Containers/Root/RootScreen'
<<<<<<< HEAD
import ArticleCategoryScreen from './Containers/ArticleCategory/ArticleCategoryScreen'
=======
import SavingsScreen from './Containers/Savings/SavingsScreen'
import CalendarScreen from './Containers/CalendarScreen/CalendarScreen'
import ConnectBank from './Containers/ConnectBank/ConnectBank'
>>>>>>> ef28ed26a50ccbc8ae828e8f42a75c82b78701f6

const { store, persistor } = createStore()

export default class App extends Component {
  render() {
    return (
      /**
       * @see https://github.com/reduxjs/react-redux/blob/master/docs/api/Provider.md
       */
      <Provider store={store}>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <PersistGate loading={null} persistor={persistor}>
          <RootScreen ref="MainScreen"/> 
          {/* <ArticleCategoryScreen/> */}
          {/* <SavingsScreen /> */}
     	  {/* <CalendarScreen /> */}
	    {/*<ConnectBank /> */}
        </PersistGate>
      </Provider>
    )
  }
}
