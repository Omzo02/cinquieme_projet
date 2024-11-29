import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logements from '../../datas/logements.json'; // Données des logements
import Slideshow from '../../components/slideshow/Slideshow';
import Collapse from '../../components/collapse/Collapse';
import Ratings from '../../components/ratings/Ratings';
import Tags from '../../components/tags/Tags';
import './Property.scss';

const Property = () => {
  const { id } = useParams();
  const property = logements.find((logement) => logement.id === id);

  if (!property) {
    return <Navigate to="/error" />;
  }

  return (
    <div className="property">
      <Slideshow images={property.pictures} />
      <div className="property-details">
        <h1 className="property-title">{property.title}</h1>
        <p className="property-location">{property.location}</p>

        {/* Div Host avec image et nom */}
        <div className="host">
          <div className="host-info">
            <div className="host-picture">
              <img src={property.host.picture} alt={property.host.name} />
            </div>
            <div className="host-name">
              <strong>{property.host.name}</strong>
            </div>
          </div>
        </div>

        <div className="tags-ratings">
          <div className="tags-container">
            <Tags tags={property.tags} />
          </div>
          <div className="ratings-container">
            <Ratings rating={property.rating} />
          </div>
        </div>
      </div>

      <div className="collapse-buttons-container">
        <div className="collapse-left">
          <Collapse title="Description" content={property.description} />
        </div>
        <div className="collapse-right">
          <Collapse
            title="Équipements"
            content={property.equipments.join(', ')}
          />
        </div>
      </div>
    </div>
  );
};

export default Property;
