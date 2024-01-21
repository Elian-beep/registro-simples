import React from 'react';
import './App.css';
import Login from 'Pages/Login';
import { AppRouter } from 'routes';

export const App = () => {
  return (
    <main className="App">
        <AppRouter />
    </main>
  );
}

export default App;
