import React from 'react'
import logements from '../datas/logements.json' // Import des logements
import '../styles/components/Card.scss'

const Card = () => (
  <section className="card-section">
    <div className="card-container">
      {logements.map((logement) => (
        <article className="card" key={logement.id}>
          <img src={logement.cover} alt={logement.title} />
          <h2>{logement.title}</h2>
        </article>
      ))}
    </div>
  </section>
)

export default Card
