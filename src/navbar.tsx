
import { Header } from 'antd/es/layout/layout';
import './navbar.css'
import SearchBar from './components/searchBar';
import { Menu } from 'antd';

    type NavbarProps = {
        selectedTab: string;
        setSelectedTab: (tab: string) => void;
      };
      const Navbar: React.FC<NavbarProps> = ({  setSelectedTab }) => {

  return (
    <Header style={{ display: "flex", alignItems: "center",justifyContent: "space-between" ,background:"transparent" }}>
         <div >
         <h1
            style={{
                fontWeight: "bold",
                fontSize: "x-large",
                display: "table-caption",
                background: "linear-gradient(90deg, #ff8a00, #e52e71)",
                WebkitBackgroundClip: "text",
                color: "transparent",
            }}
            >
            🌍 Explore The World
        </h1>
         </div>
          <div className='search'>
          <SearchBar />
          </div>
         <Menu mode="horizontal"  onClick={(e) => setSelectedTab(e.key)} defaultSelectedKeys={["home"]} style={{ flex: 1, justifyContent: "flex-end" ,background:"transparent",color:"white" }}>
           <Menu.Item className='item' key="home">Home</Menu.Item>
           <Menu.Item className='item' key="destinations">Destinations</Menu.Item>
           <Menu.Item className='item' key="contact">Contact</Menu.Item>
         </Menu>
         
       </Header>
   
  );
};

export default Navbar;