import './Banner.scss';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import bannerHome from '../../assets/images/banner-home.png';
import bannerLogement from '../../assets/images/banner-logement.png';

export default function Banner() {
  const [aboutPage, setAboutPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setAboutPage(location.pathname === '/about');
  }, [location]);

  const bannerImage = aboutPage ? bannerLogement : bannerHome;

  return (
    <section className="banner">
      <img src={bannerImage} alt={aboutPage ? 'Banner About' : 'Banner Home'} />
      {!aboutPage && <h2>Chez vous, partout et ailleurs</h2>}
    </section>
  );
}
