import profilePic from './assets/profile_pic.jpg'

function Card() {
  return (
    <div className="card">
        <img className="card-image"src={profilePic} alt="profile picture"></img>
        <h2 className='card-title'>Lilit Bakhshetsyan</h2>
        <p className='card-text'>I am a student at YSU and I love cats</p>
    </div>
  );
}

export default Card;