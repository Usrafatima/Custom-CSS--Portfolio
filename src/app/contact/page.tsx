import './contact.css'

export default function Contact(){
    return(
        <div>
   
    <div>
    <h1  className="heading1">Contact</h1>
    <h3 className='feel-para'>Feel free to contact</h3>
    <form action="#" method="post" id="mainform">
    <div className="form-group1">
      {/* <label htmlFor="name" className="name">Full Name</label> */}
      <input type="text"  id="name" name="name" required placeholder='Enter your Name'   className="form-input1" />
    </div>
    
    <div className="form-group2">
      {/* <label htmlFor="email" className='email'>Email</label> */}
      <input type="text" id="email" name="email" placeholder='Email address'  className="form-input2" />
    </div>
    
    <div className="form-group3">
      {/* <label htmlFor="msg" className='msg'>Message</label> */}
      <textarea id="message" name="message" rows={5}  placeholder='Message'  className="form-input3"></textarea>
    </div>

   <button className="contact-button">SUBMIT</button>



  </form>
  </div>
  </div>
)
}