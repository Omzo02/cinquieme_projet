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
      {/* Slideshow (carrousel des images) */}
      <div className="carrousel-container">
        <Slideshow images={property.pictures} />
      </div>

      {/* Détails de la propriété */}
      <div className="property-details">
        {/* Conteneur pour le titre et le propriétaire */}
        <div className="title-host-container">
          <article className="property-info">
            <div className="locality">
              <h1 className="property-title">{property.title}</h1>
              <p className="property-location">{property.location}</p>
            </div>
            <div className="tags">
              <Tags tags={property.tags} />
            </div>
          </article>

          {/* Conteneur pour le propriétaire et les notes */}
          <article className="host-ratings">
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

            <div className="ratings-container">
              <Ratings rating={property.rating} />
            </div>
          </article>
        </div>

        {/* Les boutons Collapse */}
        <div className="collapse-buttons-container">
          <div className="collapse-left">
            <Collapse
              title="Description"
              content={property.description}
              width="100%"
            />
          </div>
          <div className="collapse-right">
            <Collapse
              title="Équipements"
              content={property.equipments}
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
