import { useParams } from 'react-router-dom'
import logements from '../datas/logements.json'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)

  if (!logement) {
    return <p>Logement non trouvé</p>
  }

  return (
    <div className="logement-details">
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>

      {/* Détails supplémentaires */}
      <h3>Hôte : {logement.host.name}</h3>
      <img src={logement.host.picture} alt={logement.host.name} />

      <h3>Équipements :</h3>
      <ul>
        {logement.equipments.map((equipement, index) => (
          <li key={index}>{equipement}</li>
        ))}
      </ul>

      <h3>Tags :</h3>
      <ul>
        {logement.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  )
}

export default Logement
