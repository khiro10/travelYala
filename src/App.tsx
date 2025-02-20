
import './App.css'
import Navbar from './navbar';
import { Content } from 'antd/es/layout/layout';
import { useState } from 'react';
import Destination from './pages/destination';

import Home from './pages/home';
import AboutUs from './pages/aboutUs';


const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  const renderContent = () => {
    switch (selectedTab) {
      case "home":
        return <Home />;
      case "destinations":
        return <Destination />;
      case "contact":
        return <AboutUs />;
      default:
        return <Home />;
    }
  };
 return (<div>
       <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
       <Content style={{ padding: "20px", textAlign: "center" }}>
            {renderContent()}
        </Content>
 </div>)
};

export default App
