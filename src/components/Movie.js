import { Link } from "react-router-dom";

function Movie({ coverImg, title, genres, url }) {
  return (
    <div className="flex flex-col gap-5 my-8 items-center text-lg">
      <img src={coverImg} alt={title} width={250} />
      <h2>
        <Link to={url} className="underline">
          {title}
        </Link>
      </h2>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
