import { Button, Empty, Layout, List, Rate, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react'
import { useFetch } from '../components/fecthData';
import { useNavigate, useParams } from 'react-router-dom';
import { CloseOutlined } from "@ant-design/icons";

type PlaceProps = {
        name: string;
        image: string;
        attractions: string[];
        adventure: string[];
        best_time: string;
    }    
const Place: React.FC = () => {
    
const navigate = useNavigate();
const { id } = useParams<{ id: string }>();    
const [place, setPlace] = useState<PlaceProps>()    
const { data } = useFetch<PlaceProps[]>("/data/destinations.json");
useEffect(() => {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    if(data)setPlace(data.find((item) => item.name === id));
    console.log(place);
    
}, [data]); 


if (!place) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;

return (
  <Layout style={{ minHeight: "100vh", padding: "20px" }}>
     <div style={{ textAlign: "right", marginBottom: "10px" }}>
        <Button style={{ opacity: 0.8 }} icon={<CloseOutlined  />} onClick={()=> navigate("/")}>
          
        </Button>
      </div>
    <Content style={{ maxWidth: "800px", margin: "auto", textAlign: "center" }}>
      <Typography.Title>{place.name}</Typography.Title>
      <img src={place.image} alt={place.name} min-width={300} width="100%" height={400} style={{ objectFit: "cover", borderRadius: 10 }} />
      
      <Typography.Title level={3}>Best Time to Visit</Typography.Title>
      <Typography.Paragraph>{place.best_time}</Typography.Paragraph>

      <Typography.Title level={3}>Top Attractions</Typography.Title>
      <List
        bordered
        dataSource={place.attractions as String[]}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />

      <Typography.Title level={3}>Adventures</Typography.Title>
      <List
        bordered
        dataSource={place.adventure as String[]  }
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
      <div  >
      <Typography.Title>rate the place</Typography.Title><Rate defaultValue={2} />
      </div>
      {/* {data && <img src={data[0].image} alt="" width="100%" height={400} style={{ objectFit: "cover", borderRadius: 10 }}/>} */}
    </Content>
  </Layout>
  );
};

export default Place;
