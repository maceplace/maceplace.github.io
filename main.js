class MyHeader extends HTMLElement {
    connectedCallback() {
            this.innerHTML = `
            <nav class="navbar" role="navigation">
            <div class="navbar-start navbar-part">
              <a class="navbar-item" href="https://macestudios.ru">
                <img src="assets/logo/IconNavbar.svg" height="40px">
              </a>
            </div>
            <div class="navbar-end">
              <a class="navbar-item" href="https://www.tiktok.com/@macestudiosgames" target="_blank">
                <img src="assets/branding/tiktok-logo.svg" height="32px">
              </a>
              <a class="navbar-item" href="https://www.youtube.com/@MacePlace" target="_blank">
                <img src="assets/branding/yt-logo.svg" height="32px">
              </a>
              <a class="navbar-item" href="https://vk.com/macestudios" target="_blank">
                <img src="assets/branding/vk-logo.svg" height="32px">
              </a>
            </div>
            </nav>
        `
    }
}

customElements.define('my-header', MyHeader)