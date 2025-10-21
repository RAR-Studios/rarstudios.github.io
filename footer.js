class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #5c3a21;
                    color: #f5e8d5;
                    padding: 2rem;
                    text-align: center;
                    margin-top: auto;
                }
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .footer-links {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-bottom: 1rem;
                }
                .footer-links a {
                    color: #f5e8d5;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                .footer-links a:hover {
                    color: #b78d65;
                }
                .copyright {
                    opacity: 0.8;
                    font-size: 0.9rem;
                }
            </style>
            <footer>
                <div class="footer-content">
                    <div class="footer-links">
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div class="copyright">
                        &copy; ${new Date().getFullYear()} Golden Threads. All rights reserved.
                    </div>
                </div>
            </footer>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);
