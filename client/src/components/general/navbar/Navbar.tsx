import './Navbar.css';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <>
            <div className="col-2 p-0 h-100 pt-3">
                <nav className="d-flex flex-column flex-shrink-0 p-3 h-100">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none ps-4">
                        <img src="/img/general/logo.svg" className="img w-75" />
                    </a>
                    <ul className="nav nav-pills flex-column mt-5 mb-auto fw-medium">
                        <li className="nav-item mb-4">
                            <a href="#" className="nav-link" aria-current="page">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <div className="pe-3 ps-4 mb-2 nav-title">
                                <span className={`${styles['nav-section-title']} ps-3`}>WORKSPACE</span>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-body-emphasis">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                <span>My presentations</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-body-emphasis mb-5">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                <span>Shared with me</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-body-emphasis">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                <span>Templates</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-body-emphasis">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                <span>Help & support</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-body-emphasis">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                <span>Trash</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navbar;