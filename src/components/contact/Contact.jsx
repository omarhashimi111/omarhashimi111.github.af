import "./contact.scss"

function Contact() {

  function handleSubmit(e){
    e.preventDefault()
  }

  return (
    <div className='contact' id="contact">

      <div className="left">
        <img src="assets/Contact-Us.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact
