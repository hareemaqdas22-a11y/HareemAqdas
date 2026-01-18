class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .navbar {
          transition: all 0.3s ease;
        }
        .navbar.scrolled {
          background-color: rgba(255, 255, 255, 0.95);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .nav-link {
          position: relative;
          transition: all 0.3s ease;
          color: #1a1a1a;
        }
        #mobile-menu {
          transition: all 0.3s ease;
          max-height: 0;
          overflow: hidden;
        }
        #mobile-menu.show {
          max-height: 500px;
        }
</style>
      <nav class="navbar fixed w-full z-50 py-4 px-6 md:px-12">
        <div class="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#" class="text-xl font-semibold flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
            <span class="mr-2">👋</span> Hareem Aqdas
          </a>
<div class="hidden md:flex space-x-2">
            <a href="#about" class="nav-link font-medium bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors">About</a>
            <a href="#services" class="nav-link font-medium bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors">Services</a>
            <a href="#experience" class="nav-link font-medium bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors">Experience</a>
            <a href="#work" class="nav-link font-medium bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors">Approach</a>
            <a href="#contact" class="nav-link font-medium bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors">Contact</a>
</div>
<button class="md:hidden focus:outline-none" id="mobile-menu-button">
            <i data-feather="menu"></i>
          </button>
        </div>
        <div class="md:hidden hidden bg-white w-full py-4 px-6 transition-all duration-300 ease-in-out" id="mobile-menu">
<div class="flex flex-col space-y-2">
            <a href="#about" class="nav-link font-medium bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors">About</a>
            <a href="#services" class="nav-link font-medium bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors">Services</a>
            <a href="#experience" class="nav-link font-medium bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors">Experience</a>
            <a href="#work" class="nav-link font-medium bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors">Approach</a>
            <a href="#contact" class="nav-link font-medium bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors">Contact</a>
</div>
</div>
      </nav>
      <script>
        feather.replace();
      </script>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);
