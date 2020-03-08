import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
// import Training from './components/training';
// import Todos from './components/Todos';

import HomeStack from './routes/drawer';

const getFont = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});


export default () => {
const [loaded, setLoaded] = useState(false);


return (loaded
  ? <HomeStack />
  : <AppLoading
      startAsync={getFont}
      onFinish={() => setLoaded(true)}
    />)
};
