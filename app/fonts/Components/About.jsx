import './About.css'
import Car from "/Carl.png"

const About = () => {
  return (
    <>
    <div className='slide-car'>🚗</div>
    <div className='About-section'>
      <h1>About us</h1>
    <div className="About-container">
      <div className="About-info">
        <h2>Transnamic Rentors</h2>
        <p> your trusted partner for convenient, reliable, and affordable car rentals. We are dedicated to helping you hit the road in comfort and style, whether you need a vehicle for a quick day trip, a family vacation, or an extended business journey.

Founded with a passion for customer service, we believe that renting a car should be a smooth, stress-free experience. With a diverse fleet of well-maintained vehicles, including compact cars, SUVs, luxury models, and vans, we offer options to fit any need or budget. Our seamless online booking platform allows you to reserve the perfect vehicle in just a few clicks, while our flexible rental plans provide the freedom to choose what works best for you.
</p>
      </div>
      <div className="About-image">
        <img src={Car} alt="" />
      </div>
    </div>

    </div></>
  )
}

export default About