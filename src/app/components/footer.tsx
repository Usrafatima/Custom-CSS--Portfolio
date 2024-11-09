import './footer.css';
import Image from 'next/image';
import githubwhite from '../public/githubwhite.png';
import linkedinwhite from '../public/linkedinwhite.png';
import cv from '../public/cv.png';
export default function Footer(){
    return(
        <div className='border'>
          <div className='logos'>
              <a href='https://github.com/Usrafatima' target="_blank" rel="noopener noreferrer">
        <Image
        src={githubwhite}
        width={100 }  
        height={100}   
       alt="github-logo"
        className='gitwhite'
      />
      </a>
      <a href='https://www.linkedin.com/in/yusra-fatima-66b49b2b8/' target="_blank" rel="noopener noreferrer">
         <Image
        src={linkedinwhite}
        width={100 }  
        height={100}   
       alt="link-logo"
        className='linkwhite'
      />
      </a>
      <a href="/CV.pdf" download="Yusra_CV">
      <Image
        src={cv}
        width={30 }  
        height={100}   
       alt="cv-logo"
        className='cv'
      />
      </a>
      <p className='lastline'>@ 2024 Yusra Fatima    All Rights Reserved</p>
      </div>
      </div>
    )
}