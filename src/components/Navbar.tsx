import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-4">
      <div className="d-flex justify-content-between align-items-center w-100">
        <Navbar.Brand href="" className="d-flex align-items-center">
          <img
            alt="Logo VertAI"
            src="/img/Logo_VertAI.png"
            className="logo-navbar"
          />
          <span className="d-none d-lg-block ms-2">Translate</span>
        </Navbar.Brand>
        <Button variant="primary" className="ms-auto">
          Iniciar Sesión
        </Button>
      </div>
    </Navbar>
  )
}
