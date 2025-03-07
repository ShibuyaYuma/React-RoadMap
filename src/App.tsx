import React, { useState, Suspense as ReactSuspense} from 'react';
import './App.css';
import Greeting from "./components/Greeting"
import Welcome from './components/Welcome';
import Dog from './components/Dog';
import Person from './components/Composition';
import List from './components/List';
// import { RenderProps } from './components/RenderProps';
import Ref from './components/Ref';
import HOC from './components/HOC';
import Hooks from './components/Hooks/Hooks';
import { BrowserRouter as Router, Route, Routes, Link, useParams, Navigate } from 'react-router-dom';
//import Tanstack from './components/Tanstack';
import StateManager from './components/StateManagement/StateManager';
import MaterialUI from './components/Libraries/MaterialUI';
import Apollo from './components/API/Apollo';
import FramerMotion from './components/Animation/FramerMotion';
// import ReactSpring from './components/Animation/ReactSpring';
import Gsap from './components/Animation/GSAP';
import ErrorBoundary from './components/Others/ErrorBoundaries';
import Suspense from './components/Others/Suspense';
import PortalsComponent from './components/Others/Portals';

const Home: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return(
    <div className="App">
        <Greeting name="Taro" />
        <Welcome isLoggedIn={isLoggedIn} />
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? 'Log out' : 'Log in'}
        </button>
        <Dog/>
        <Person name="John" />
        <List></List>
        {/* <RenderProps
          render={(name) => (
            <h1>Hello, {name}!</h1> // RenderPropsに渡すカスタムUI
          )}
        /> */}
        <Ref></Ref>
        <HOC></HOC>
        <Hooks></Hooks>
    </div>
  )
};
const About: React.FC = () => {
  return(
    <div>あばうと ぺーじ</div>
  )
};

const Profile: React.FC = () => {
  const { id } = useParams();
  return <div>Profile ID: {id}</div>;
};

const Dashboard: React.FC = () => (
    <div>
      <h2>Dashboard</h2>
      <Link to="settings">settings</Link>
      <Link to="settings">settings</Link>
      <Routes>
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
);

const Settings: React.FC = () => <div>Settings Page</div>;

const Navi: React.FC = () => {
  return(
    <div>
      
      <Navigate to="/about"></Navigate>
    </div>
  )
}

const Portals: React.FC = () => {
  return(
    <div>
      <h1>React Portals Example</h1>
      <PortalsComponent />
    </div>
  )
}

const NotFound: React.FC = () => <div>Page Not Found</div>;

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <nav>
          <Link to="/home">Home</Link>
          <br />
          {/* <Link to="/tanstack">Tanstack</Link> */}
          <br />
          <Link to="/stateManager">StateManager</Link>
          <br />
          <Link to="/materialUI">MaterialUI</Link>
          <br />
          <Link to="/Apollo">Apllo</Link>
          <br />
          <Link to="/about">About</Link>
          <br />
          <Link to="/framerMotion">Framer Motion</Link>
          <br />
          {/* <Link to="/reactSpring">React Spring</Link>
          <br /> */}
          <Link to="/gsap">GSAP</Link>
          <br />
          <Link to="/profile/:id">プロフィール</Link>
          <br />
          <Link to="/dashboard/*">ダッシュボード</Link>
          <br />
          <Link to="/navigate/*">AboutPageに飛びます</Link>
          <br />
          <Link to="/portals/*">Portals</Link>
          <br />
          <Link to="*">???</Link>
        </nav>
        <ReactSuspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/home" element={<Home />} />
            {/* <Route path="/tanstack" element={<Tanstack />} /> */}
            <Route path="/stateManager" element={<StateManager />} />
            <Route path="/materialUI" element={<MaterialUI />} />
            <Route path="/Apollo" element={<Apollo />} />
            <Route path="/about" element={<About />} />
            <Route path="/framerMotion" element={<FramerMotion />} />
            {/* <Route path="/reactSpring" element={<ReactSpring />} /> */}
            <Route path="/gsap" element={<Gsap />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/navigate/*" element={<Navi />} />
            <Route path="/portals/*" element={<Portals />} />
            <Route path="*" element={<NotFound />} /> 404
          </Routes>
        </ReactSuspense>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
