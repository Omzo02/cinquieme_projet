import React from 'react';
import Banner from '../../components/banner/Banner';
import Card from '../../components/card/Card';
import logements from '../../datas/logements.json';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home-cards">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
