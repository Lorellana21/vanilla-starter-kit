export class OtherPage extends HTMLElement {
    
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
          <h1>Otra page</h1>
          `;
    }
  }
  customElements.define("other-page", OtherPage);
  