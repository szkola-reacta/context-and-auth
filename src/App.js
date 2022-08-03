
import './App.css';

// import { Hello } from './Hello';
import { Hello } from './HelloFn';
import { ErrorBoundary } from './ErrorBoundary';
import { Provider as UserProvider } from './UserContext';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <UserProvider>
          <Hello />
        </UserProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
