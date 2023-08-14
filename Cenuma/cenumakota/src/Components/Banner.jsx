import React, { useEffect, useState } from 'react';
import { API_KEY_HERE, imgURL, tendingmovies } from '../Constants/Constant';
import AxiousURL from './AxiousURL'
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css';
import { Button } from 'react-bootstrap';
import YouTube from 'react-youtube'

function Banner() {

 
  const [apidata, setApidata] = useState([]);
  const [overview, setoverview] = useState(false)
  const [videoURL, setvideoURL] = useState("")
  const [playvideo, setplayvideo] = useState(false)

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  const toggleOverview = () => {
    setoverview(!overview);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await AxiousURL.get(`${tendingmovies}`);
        setApidata(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);


  const handleVideo = (id)=>{
    setplayvideo(!playvideo)
    AxiousURL.get(`movie/${id}/videos?api_key=${API_KEY_HERE}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setvideoURL(response.data.results[0])
      }
    })
  }


  return (
    <div className="carousel-container">
      <Carousel>
        {apidata.map((dis) => (
          <Carousel.Item key={dis.id}>
            <img
              className="d-block w-100"
              src={`${imgURL}${dis.backdrop_path}`}
              alt={dis.title}
            />
            <Carousel.Caption>
              <h1>{dis.title}</h1>
              <Button variant="dark" onClick={toggleOverview}>{overview ? 'Close X' : 'Details'}</Button>
              <Button variant="dark" onClick={()=>handleVideo(dis.id)}>
                {playvideo ? 'Close X' : 'Play'}
              </Button>
                <YouTube className={playvideo ? 'showvideo' : 'hidevideo'} videoId={videoURL.key} opts={opts}/>
              <p className={overview ? 'showover' : 'hideover'}>{dis.overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}


export default Banner;
