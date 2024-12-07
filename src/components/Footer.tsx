import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Agrega los íconos a la biblioteca
library.add(faGithub, faLinkedin);

export function Footer() {
  return (
    <footer className="footer bg-light mt-5 py-4">
      <div className="custom-container">
        <div className="footer-top">
          <div className="row">
            {/* Primera columna: Recursos */}
            <div className="col-md-4">
              <h5>Recursos</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="https://github.com/nicolasanhueza/Api-Translate-Chatgpt.git" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted">
                    Documentación de la API
                  </a>
                </li>
              </ul>
            </div>
            {/* Segunda columna: Productos */}
            <div className="col-md-4">
              <h5>Productos</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="" className="text-decoration-none text-muted">
                    VertAI Pro (Próximamente)
                  </a>
                </li>
                <li>
                  <a href="https://github.com/nicolasanhueza/Api-Translate-Chatgpt" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted">
                    API de traducción
                  </a>
                </li>
              </ul>
            </div>
            {/* Tercera columna: La compañía */}
            <div className="col-md-4">
              <h5>La compañía</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.linkedin.com/in/nicolas-sanhueza-jaque/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="" className="text-decoration-none text-muted">
                    Aportes (Próximamente)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom d-flex justify-content-between align-items-center mt-3">
          <div className="d-flex align-items-center">
            <img
              src="/img/Logo_VertAI.png"
              alt="Logo VertAI"
              className="footer-logo"
            />
            <span className="ms-3 text-muted footer-text-small">
              © 2024 VertAI. Todos los derechos reservados.
            </span>
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/nicolas-sanhueza-jaque/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" className="social-icon" />
            </a>
            <a href="https://github.com/nicolasanhueza" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'github']} size="2x" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}