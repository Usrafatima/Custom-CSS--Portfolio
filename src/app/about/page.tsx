import './about.css'

import Image from 'next/image';
import html from '../public/html.png';
import css from '../public/css-3.png';
import js from '../public/js.png';
import react from '../public/react.png';
import nextjs from '../public/nextjs.png';
import git from '../public/git.png';
import figma from '../public/figma.png';




export default function About(){
    return(
        <div>
        <h1 id='about'  className="main-head">ABOUT ME</h1>
        <p className="about-para">
          Hi! I am Yusra, a passionate front-end developer with a focus on creating engaging and user-friendly web
          experiences. Currently pursuing a Bachelors degree in Statistics with Finance, I love combining analytical
          skills with creative design. I am always eager to learn new technologies and enhance my coding skills, and I am
          currently exploring tools like Figma and Tailwind CSS. My portfolio showcases a variety of projects that
          highlight my abilities and dedication to delivering high-quality work. When I am not coding, I enjoy
          brainstorming innovative ideas and staying updated on the latest trends in web development.
        </p>
  
        <div className="container-2">
          
          <h2 className="explore">EXPLORE</h2>
       
        </div>
        <h1 className="design">DESIGN</h1>
        <p className="design-para">
          I offer complete website design services tailored to your unique needs and preferences.<br /> Whether you have a
          clear vision or need guidance, I’m here to bring your ideas to life.<br /> I can build your site from scratch,
          ensuring every detail aligns with your goals, or work <br />
          collaboratively, consulting with you throughout the process. With my skills and dedication.
        </p>
       
        <h2 className="develop">DEVELOPMENT</h2>
        <p className="develop-para">
          I provide comprehensive website development services, ensuring a seamless and responsive <br />experience across
          all devices. Whether you need a custom-built solution from scratch <br />
          or improvements to an existing site, I work closely with you to understand your requirements<br /> and implement
          features that enhance functionality and user engagement. 
        </p>
     
        <h2 className="maintenence">MAINTENANCE</h2>
        <p className="maint-para">
          I offer ongoing website maintenance services to keep your site running smoothly, secure, and up-to-date.<br />
          From regular updates and security checks to performance optimization and troubleshooting, I ensure <br/>
          your website stays responsive and performs at its best. I’m available to address any issues promptly, make<br/>
          necessary updates, and implement improvements as your business evolves. With my maintenance <br/>
          support, you can focus on your goals  while your website remains in excellent condition.
        </p>
  
        <h1 id='skills'  className="skills">Skills</h1>
        <div className="logos">
          <Image src={html} width={100} height={100} alt="html-logo" className="html" />
          <Image src={css} width={100} height={100} alt="css-logo" className="css" />
          <Image src={js} width={125} height={100} alt="js-logo" className="js" />
          <Image src={react} width={100} height={100} alt="react-logo" className="react" />
          <Image src={nextjs} width={100} height={100} alt="nextjs-logo" className="nextjs" />
          <Image src={git} width={100} height={100} alt="git-logo" className="git" />
          <Image src={figma} width={70} height={100} alt="figma-logo" className="figma" />
        </div>
        </div>
    )
}