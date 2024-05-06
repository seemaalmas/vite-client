import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundry';
import Navigation from './components/Navigation';
const RegisterUser = React.lazy(() => import('./components/Register'))
const LoginUser = React.lazy(() => import('./components/Login'));
const Loading = React.lazy(() => import('./components/Loading'));
const DashboardPage = React.lazy(() => import('./components/Dashboard'))
const NotFoundpage = React.lazy(() => import("./components/NotFound"));
const News = React.lazy(() => import('./components/News'));
const Poll = React.lazy(()=> import('./components/Poll'));

// const VerificationComponent =  React.lazy(()=> "./componentes/VerificationComponent")
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {

  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Navigation />
            <Routes>

              {/* <Route path="/verify/:verificationToken" element={<VerificationComponent/>} /> */}
              <Route path="/" element={<DashboardPage />} ></Route>
              <Route path="/news/*" element={<News />} ></Route>
              <Route path="/poll" element={<Poll />} ></Route>

              <Route path="/register" element={<RegisterUser />} ></Route>
              <Route path="/login" element={<LoginUser />} ></Route>

              <Route path="*" element={<NotFoundpage />} />

              {/* <Route path="/register" Component={RegisterUser}/> */}



            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>


    </>

  );
}


export default App;
