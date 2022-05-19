/**
 * React Native App
 * Everything starts from the entrypoint
 */
import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Appearance,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Navigator from 'app/navigation';
import configureStore from 'app/store';
//import SQLite from 'react-native-sqlite-storage';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  PaperThemeDefault,
  PaperThemeDark,
  CombinedDefaultTheme,
  CombinedDarkTheme,
} from 'app/config/theme';
import { NotifierWrapper } from 'react-native-notifier';

const { persistor, store } = configureStore();

const RootNavigation: React.FC = () => {
  const colorScheme = Appearance.getColorScheme();
  const isDark = colorScheme === 'dark' ? true : false;
  const paperTheme = isDark ? PaperThemeDark : PaperThemeDefault;
  const combinedTheme = isDark ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <NotifierWrapper>
        <Navigator theme={combinedTheme} />
      </NotifierWrapper>
    </PaperProvider>
  );
};

const Entrypoint: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <SafeAreaView style={styles.safeArea}>
          <RootNavigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default Entrypoint;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
});
