import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

export default function HomePage () {
  return (
    <div className='homePage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>
            Find real Estate & Get Your Dream Place 
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, quasi. Iste odio ad, voluptas cupiditate repellendus
            eveniet impedit odit illo doloremque laboriosam perspiciatis quae
            earum ipsa, ullam fugit ratione adipisci.
          </p>
          <SearchBar />
          <div className='boxes'>
            <div className='box'>
              <h1>16+</h1>
              <h2>Yeaers of Experience</h2>
            </div>
            <div className='box'>
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className='box'>
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='imgContainer'>
        <img src='/bg.png' alt='' />
      </div>
    </div>
  )
}
