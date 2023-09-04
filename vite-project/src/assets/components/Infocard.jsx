import "./Infocard.css";


@param { { name: string, imageUrl: string, description: string, wikipediaLink: string} } properties

export function InfoCard(properties) {
  const { name, imageUrl, description, wikipediaLink } = properties;

  return (
    <article>
      <h3>{name}</h3>
      <img className="gecko-image" src={imageUrl} alt="Image of gecko" />
      <p>{description}</p>
      <a href={wikipediaLink}>More Info!</a>
    </article>
  );
}
