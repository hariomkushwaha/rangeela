import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slideshow.styles.css';

const slideImages = [
  'https://i.ytimg.com/vi/NAGTxSz-thM/maxresdefault.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbATFaH97_175NPCietb13yMgsuFWCmLLRZBFRQ_w7rM7kh1pKlc9qEzS3XIzIKdYCMA&usqp=CAU',
  'https://wallpapercave.com/wp/wp5793899.jpg'
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Ladies Suit</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span className="title">Ethnic Wear</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Jeans</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;