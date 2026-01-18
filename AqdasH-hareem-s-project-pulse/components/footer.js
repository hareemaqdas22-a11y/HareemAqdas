class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .footer-link:hover {
          text-decoration: underline;
        }
      </style>
      <footer class="bg-gradient-to-b from-gray-50 to-white py-12 px-6 border-t border-gray-200">
<div class="max-w-4xl mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-6 md:mb-0">
              <h3 class="text-xl font-semibold mb-2">Hareem Aqdas</h3>
              <p class="text-gray-600">Project Management & Delivery</p>
            </div>
            <div class="flex space-x-6">
              <a href="https://www.linkedin.com/in/hareem-aqdas-515718192" target="_blank" rel="noopener noreferrer" class="footer-link text-gray-700 flex items-center">
                <i data-feather="linkedin" class="w-5 h-5 mr-1"></i> LinkedIn
              </a>
              <a href="https://x.com/AqdasHareem" target="_blank" rel="noopener noreferrer" class="footer-link text-gray-700 flex items-center">
                <i data-feather="twitter" class="w-5 h-5 mr-1"></i> Twitter
              </a>
              <a href="mailto:aqdas.hareem98@gmail.com" class="footer-link text-gray-700 flex items-center">
<i data-feather="mail" class="w-5 h-5 mr-1"></i> Email
              </a>
            </div>
</div>
          <div class="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© ${new Date().getFullYear()} Hareem Aqdas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);