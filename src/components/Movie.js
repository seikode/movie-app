import {Link} from "react-router-dom";

function Movie({ coverImg, title, genres,url }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2><Link to={url}>{title}</Link></h2>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}


export default Movie;
