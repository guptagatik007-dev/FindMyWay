import './Home.css';
import compass from '../assets/compass.svg';
import foldedMap from '../assets/folded-map.svg';
import globeSearch from '../assets/globe-search.svg';
import destinationCar from '../assets/destination-car.svg';
import satellite from '../assets/satellite.svg';
import directionSign from '../assets/direction-sign.svg';
import mobileNavigation from '../assets/mobile-navigation.svg';

function Home() {
  return (
    <main className="home-content">
      <div className="home-decorations" aria-hidden="true">
        <img className="decor decor-left-1" src={compass} alt="" />
        <img className="decor decor-left-2" src={foldedMap} alt="" />
        <img className="decor decor-left-3" src={globeSearch} alt="" />
        <img className="decor decor-right-1" src={destinationCar} alt="" />
        <img className="decor decor-right-2" src={satellite} alt="" />
        <img className="decor decor-right-3" src={directionSign} alt="" />
        <img className="decor decor-right-4" src={mobileNavigation} alt="" />
      </div>
      <div className="home-copy">
        <h1>Navigation Solutions</h1>
        <button className="campus-button" type="button">
          Get for my campus <span aria-hidden="true">&rarr;</span>
        </button>
        <p>
          We provide navigation solutions for indoor environments, helping people find their way through buildings with confidence and ease. Our solutions make it simpler to locate rooms, offices, facilities, and important destinations in hospitals, schools, campuses, shopping centers, and other complex spaces.
        </p>
        <section className="services" aria-labelledby="services-title">
          <h2 id="services-title">What we provide</h2>
          <div className="service-grid">
            <article className="service-card">
              <span className="service-number">01</span>
              <h3>Wi-Fi mapping</h3>
              <p>We map indoor Wi-Fi signals to help identify locations and improve wayfinding across your building.</p>
            </article>
            <article className="service-card">
              <span className="service-number">02</span>
              <h3>GPS support</h3>
              <p>We use GPS where it is available to connect outdoor arrival points with indoor directions.</p>
            </article>
            <article className="service-card">
              <span className="service-number">03</span>
              <h3>Indoor navigation</h3>
              <p>We create clear routes for rooms, offices, facilities, and other important destinations.</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
