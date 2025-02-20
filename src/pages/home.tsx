// import { Carousel } from 'antd'
import { useEffect, useState } from 'react'
// import { useFetch } from '../components/fecthData';

export default function Home() {
    // const contentStyle: React.CSSProperties = {
    //     height: '160px',
    //     color: '#fff',
    //     lineHeight: '160px',
    //     textAlign: 'center',
    //     background: '#364d79',
    //   };
      const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://drive.google.com/uc?id=1ikdv-ksA-vcvb-O1kGn0LQ43ghNU3CVk")
      .then((response) => response.json()) // Use `.text()` if the file is not JSON
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div >
        {data && data.toString()}
    </div>
  )
}
