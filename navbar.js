class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background-color: rgba(245, 232, 213, 0.95);
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    transition: all 0.3s ease;
                    border-bottom: 1px solid rgba(183, 141, 101, 0.3);
                }
                .logo {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #5c3a21;
                    text-decoration: none;
                }
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    align-items: center;
                }
                .nav-links li {
                    position: relative;
                }
                .nav-links a {
                    color: #5c3a21;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s;
                    font-size: 1.1rem;
                }
                .nav-links a:hover {
                    color: #b78d65;
                }
                .dropdown {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    background-color: rgba(245, 232, 213, 0.98);
                    border: 1px solid rgba(183, 141, 101, 0.3);
                    border-radius: 0.25rem;
                    padding: 0.5rem 0;
                    min-width: 180px;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .dropdown li {
                    padding: 0.5rem 1rem;
                }
                .nav-links li:hover .dropdown {
                    opacity: 1;
                    visibility: visible;
                }
                .dropdown a {
                    display: block;
                    padding: 0.25rem 0;
                    font-size: 1rem;
                }
                .has-dropdown::after {
                    content: '⌄';
                    margin-left: 0.25rem;
                    font-size: 0.8rem;
                }
            </style>
            <nav>
                <a href="/" class="logo">Golden Threads</a>
                <ul class="nav-links">
                    <li><a href="#about">About</a></li>
                    <li class="has-dropdown">
                        <a href="#services">Services</a>
                        <ul class="dropdown">
                            <li><a href="#premade">Pre-made</a></li>
                            <li><a href="#custom">Made to Order</a></li>
                            <li><a href="#repair">Repair</a></li>
                        </ul>
                    </li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        `;
    }
}
customElements.define('custom-navbar', CustomNavbar);
