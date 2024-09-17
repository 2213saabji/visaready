// Import React and necessary libraries
import React from 'react';
import {Provider} from 'react-redux';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { Button, Provider as PaperProvider } from 'react-native-paper';
// Import the Redux store and the main App component
import store from './src/redux/store';
import App from './src/App';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state to render fallback UI on error
    return { hasError: true };
  }

  back = () => {
    this.setState({ hasError: false });
  }
  componentDidCatch(error, errorInfo) {
    // Log error details to an error reporting service
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return (
        <SafeAreaView style={styles.errorContainer}>
          <Text style={styles.errorText}>Something went wrong.</Text>
          <Button onPress={this.back}>Return to code</Button>
        </SafeAreaView>
      );
    }

    return this.props.children;
  }
}

const Root = () => (
<Provider store={store}>
  <PaperProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </PaperProvider>
</Provider>


);

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8d7da',
  },
  errorText: {
    fontSize: 18,
    color: '#721c24',
  },
});

export default Root;
