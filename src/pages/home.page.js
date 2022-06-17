

export class HomePage extends HTMLElement {

constructor () {
    super();
}

connectedCallback() {
    this.innerHTML = `
    <h1>Yo soy la home page</h1>
    `;
    
}
}
customElements.define("home-page", HomePage)
