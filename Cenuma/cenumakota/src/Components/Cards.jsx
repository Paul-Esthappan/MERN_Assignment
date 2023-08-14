import React, { useState } from 'react';
import { API_KEY_HERE, imgURL } from '../Constants/Constant';
import Card from 'react-bootstrap/Card';
import './Cards.css';
import { useEffect } from 'react';
import YouTube from 'react-youtube';
import AxiousURL from './AxiousURL'

function Cards(props) {
  const [apidata, setApidata] = useState([]);
  const [videoURL, setvideoURL] = useState("")
  const [closevideo, setclosevideo] = useState(false)

  useEffect(() => {
    async function fechdata() {
      AxiousURL.get(`${props.URL}`)
        .then((response) => {
          setApidata(response.data.results);
          console.log(response.data.results)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
      }
      return fechdata
  
  
  }, [props]);



 
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleVideo = (id)=>{
    setclosevideo(!closevideo)
    AxiousURL.get(`movie/${id}/videos?api_key=${API_KEY_HERE}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setvideoURL(response.data.results[0])
      }
    })
  }

  const closevideotab = () =>{
    setvideoURL("")
    setclosevideo(!closevideo)
  }


  return (
    <div> 
      <div>
      <h5 style={{padding: '2px 5px'}}>{props.title}</h5>
      </div>
    <div className="cardcontainer">
      
      {apidata.map((dis) => (
        <Card
          key={dis.id}
          className='carrd'
          style={{ width: '18rem' }}

        >
          {dis.backdrop_path && (
          <Card.Img onClick={()=>handleVideo(dis.id)} variant="top" src={`${imgURL}${dis.backdrop_path}`} />
          )}
          <Card.Body>
            <Card.Title>{dis.title}</Card.Title>
          </Card.Body> 
        </Card>
        
      ))}
    </div>
    <button onClick={closevideotab} className={closevideo ? 'closebutton' : 'hideclosebutton'}>{closevideo ? "Close X" : ""}</button>
    {videoURL && <YouTube className={closevideo ? "showvideo" : "closevideo" } videoId={videoURL.key} opts={opts}  />}
    </div>
  );
}

export default Cards;