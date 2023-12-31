import { Link, useNavigate } from 'react-router-dom';

/** bring in array of writings stored in project directory */
import { writings } from '../../services/writings.js';

export default function Arts() {
  const navigate = useNavigate();
  /**
   * map through objects in writings
   * to display the alias of each
   * as a linked list item; assign
   * a reference to the result,
   * which is displayed below in
   * the ul element
   */

  const list = writings.map((writing) => (
    <li key={ writing.id }>
      <Link
        className="text-2xl subpixel-antialiased"
        to={`/${writing.alias}`}
      >
        {writing.alias}
      </Link>
    </li>
  ));

  function handleHomeNav() {
    navigate('/');
  }

  return (
    <section className="max-w-full w-10/12 mx-auto fadein px-6">
      <button onClick={ handleHomeNav } className="absolute top-6 right-6 subpixel-antialiased homelink" to="/">home</button>
      <h1 className="text-7xl sm:text-8xl font-light subpixel-antialiased mt-8">arts</h1>
      <div className="w-full max-w-xl mx-auto">
        <article className="w-full mx-auto my-6">
          <h2 className="subtitle w-full text-2xl text-center py-4 subpixel-antialiased underline underline-offset-4 decoration-1">le fog</h2>
          <iframe style={{ borderRadius: '0.75rem' }} src="https://open.spotify.com/embed/artist/4NrRxIaVhlouvojuHGq62y?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
        </article>

        <article className="w-full mx-auto my-6">
          <h2 className="subtitle w-full text-2xl text-center py-4 subpixel-antialiased underline underline-offset-4 decoration-1">
            writings
          </h2>
          <ul
            className="w-full mx-auto text-center grid grid-flow-row"
          >{list}</ul>
        </article>
      </div>
    </section>
  );
}
