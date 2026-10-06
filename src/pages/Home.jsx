import './Home.css';
import navigationIcon1 from '../assets/navigation_icon_1.png';
import navigationIcon2 from '../assets/navigation_icon_2.png';
import navigationIcon3 from '../assets/navigation_icon_3.png';
import navigationIcon4 from '../assets/navigation_icon_4.png';
import navigationIcon5 from '../assets/navigation_icon_5.png';
import navigationIcon6 from '../assets/navigation_icon_6.png';
import navigationIcon7 from '../assets/navigation_icon_7.png';

function Home() {
  return (
    <main className="home-content">
      <div className="home-decorations" aria-hidden="true">
        <img className="decor decor-left-1" src={navigationIcon1} alt="" />
        <img className="decor decor-left-2" src={navigationIcon2} alt="" />
        <img className="decor decor-left-3" src={navigationIcon3} alt="" />
        <img className="decor decor-right-1" src={navigationIcon4} alt="" />
        <img className="decor decor-right-2" src={navigationIcon5} alt="" />
        <img className="decor decor-right-3" src={navigationIcon6} alt="" />
        <img className="decor decor-right-4" src={navigationIcon7} alt="" />
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
