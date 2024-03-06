class nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header>
    <section class="header">
    <div class="logo"></div>
    <div class="navigation">
      <nav>
        <ul>
          <li><a href="./index.html">Home</a></li>
          <li><a href="./gallery.html">Gallery</a></li>
          <li><a href="./about.html">About</a></li>
          <li><a href="./contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  </section>
  </header>
    `;
  }
}
customElements.define("nav-element", nav);
