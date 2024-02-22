import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './components/App/AppContainer';
import ToastsContainer from './components/Toast/ToastsContainer';
import GlobalStyles from './styles/Global';
import store from './redux/store';
import theme from './theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
});

// INFO: StrictMode was avoided due to warnings from react-helmet

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <ToastsContainer />
        <GlobalStyles />
        <App />
      </ReduxProvider>
    </ThemeProvider>
  </QueryClientProvider>,
  document.getElementById('root')
);
