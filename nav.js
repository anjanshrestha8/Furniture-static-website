class nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header>
    <section class="header-section">
    <div class="header">
      <div class="logo">
        <img src="./static/images/icons/logo.jpeg" alt="" />  
      </div>
      <div class="navigation">
        <nav>
          <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./gallery.html">Gallery</a></li>
            <li><a href="./about.html">About</a></li>
            <li><a href="./contact.html">Contact </a></li>
          </ul>
        </nav>
      </div>
      <div class="connect">
                <div><a href=""><img src="./static/images/icons/ig.png" alt=""></a></div>
                <div><a href=""><img src="./static/images/icons/ig.png" alt=""></a></div>
                <li onclick="showSidebar()" style="list-style: none;"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="44" viewBox="0 -960 960 960" width="44"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
      </div>
    </div>
    <!-- Responsive navbar -->
    </div>
    <div>
      <nav>
        <ul class="sidebar">
          <li><a href="./index.html">Home</a></li><br>
          <li><a href="./gallery.html">Gallery</a></li><br>
          <li><a href="./about.html">About</a></li><br>
          <li><a href="./contact.html">Contact </a></li><br>
        </ul>
      </nav>
    </div>
  </div>
  <script defer>
  function showSidebar() {
    const navElement = document.querySelector('nav-element');
    const sidebar = navElement.shadowRoot.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }
</script>


  </section>
  </header>
    `;
  }
}


customElements.define("nav-element", nav);

