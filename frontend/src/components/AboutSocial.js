const AboutSocial = () => {
  return (
    <aside className="col-md-4 mt-5 blog-sidebar">
      <div className="p-3 mb-3 bg-light rounded">
        <h4 className="font-italic">About</h4>
        <p className="mb-0">
          Hola, bienvenido a mi Blog, soy Fabián y este es un repositorio con
          mis escritos sobre diversos tópicos. Encontrarás información,
          experimentación, opinión y algo de humor.
        </p>
      </div>

      <div className="p-3">
        <h4 className="font-italic">Social</h4>
        <ol className="list-unstyled">
          <li>
            <a href="#" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Facebook
            </a>
          </li>
        </ol>
      </div>
    </aside>
  );
};

export default AboutSocial;
