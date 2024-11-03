import { SafeAreaView, StyleSheet } from 'react-native';
import Counter from './Counter';
import { Provider } from 'react-redux';
import store from './ReduxToolkits/store'


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Counter />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});