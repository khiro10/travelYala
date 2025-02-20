import { Card, Col, Empty, Rate, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import ShowPlace from './showInfo';
import { useFetch } from '../components/fecthData';

export default function Destination() {

    const navigate = useNavigate();

    type PlaceProps = {
            name: string;
            image: string;
            attractions: string[];
            adventure: string[];
            best_time: string;
        }
    const [destinations, setDestinations] = useState<PlaceProps[]>()
      
      const [open, setOpen] = React.useState<boolean>(false);
      const [loading, setLoading] = React.useState<boolean>(true);
      // const [selected, setSelected] = React.useState<PlaceProps>()
       
      
      const { data } = useFetch<[]>("/data/destinations.json");
       useEffect(() => {
       if(data){ setDestinations(data)
        setLoading(false)}
       }, [data]);
      // const showLoading = () => {
      //   setOpen(true);
      //   setLoading(true);
        
      //   // Simple loading mock. You should add cleanup logic in real world.
      //   setTimeout(() => {
      //     setLoading(false);
      //   }, 2000);
      // };
    
    //   <Empty
    //   image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    //   styles={{ image: { height: 60 } }}
    //   description={
    //     <Typography.Text>
    //       Customize <a href="#API">Description</a>
    //     </Typography.Text>
    //   }
    // >
    //   <Button type="primary">Create Now</Button>
    // </Empty>

    
    if (!destinations) return (<Card><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /></Card>);

        return (
          <div>
          <Row gutter={[16, 16]} className="list">
            
            {destinations && destinations.map((place, index) => (
              <>
              <Col xs={24} sm={12} md={8} key={index} onClick={()=> navigate(`/link/${place.name}`)} >
                <Card 
                    hoverable
                    style={{ width: 240,height: 360 , cursor: 'pointer',alignItems: 'center', justifyContent: 'center' }}
                    cover={<img alt={place.name} src={place.image} onError={(e:any) => e.target.src = "imgs/0.jpg"}  style={{ width: 240,height: 240 }}/>}
                >
                    <Card.Meta title={place.name} />
                    <br />
                    <Rate disabled defaultValue={2} />
                </Card>
              </Col>
             <ShowPlace place={place} loading={loading} setLoading={setLoading} open={open} setOpen={setOpen} />
              </>
            ))}
        </Row>
        
          </div>  
          
  )
}
