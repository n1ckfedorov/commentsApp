import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PageTitle from './components/PageTitle';
import './index.css';
import { Home } from './pages';
import { store } from './store/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PageTitle title="Comments" />
                <Home />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
