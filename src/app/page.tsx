import './home.css';


// import design from '../public/design.png';
import Image from 'next/image';

import girl from './public/girl.png'; 

export default function Home() {
  return (
    <div className="hero">
      <p className="para">Hi, I am</p>
      <h1 className="main-heading">Yusra Fatima</h1>
      <h2 className="h2">Front-end developer</h2>

      <Image
        src={girl}
        width={300}
        height={900}
        alt="Girl Image"
        className="girl"
      />
     <div className='box'>
      <h1 className='itberries'>IT Berries</h1>
      <p className='it-para'>Yusra is a front-end developer passionate about creating engaging and user-friendly web experiences. 
        With a focus on clean design and intuitive interfaces, she blends technical skills with creativity to deliver effective solutions. 
        Yusra is currently pursuing a Bachelors degree in Statistics with Finance, which enhances her analytical thinking. 
        </p>
        
       <button  className='read-btn'>Read more</button>
     </div>
   
    

    </div>
  );
}
