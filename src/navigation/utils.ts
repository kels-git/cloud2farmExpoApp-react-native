import {
    CommonActions,
    createNavigationContainerRef,
  } from '@react-navigation/native'


  export const navigationRef = createNavigationContainerRef()

  
export const navigateAndSimpleReset = (name, index = 0) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(
        CommonActions.reset({
          index,
          routes: [{ name }],
        }),
      )
    }
  }