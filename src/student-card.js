import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker";


const Bryce = new URL('../assets/bryce-image.png', import.meta.url).href;

export class StudentCard extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
        reflect: true
      },
      description: {
        type: String,
        reflect: true
      },
      opened: {
        type: Boolean,
        reflect: true
      }
    }
  }
  static get styles () {
    return css`
    .buttons{
   padding: 5px;
   color: blue;
}
.buttons:hover{
  background-color: orange;
}
.buttons:focus {
  background-color: orange; 
}
.all{
  display: inline-block;
  border-width: 5px;
  width: 400px;
  max-width: 500px;
  margin: auto;
  margin-top: 10px;
}
.title{
  text-align: center;
  font-size: 40px;
}
.name{
  text-align: center;
}
.content{
   text-align: center;
}
img {
  width: 300px;
}
p {
/*   text-align: left;  */
  text-indent: 5%;
  font-size: 18px;
}
.detailsButton {
  margin: 12px;
  position: center; 
  color: blue;
}
  @media (min-width: 500px) and (max-width: 800px) {
    
    .detailsButton {
      display: none;
    }
@media (max-width: 500px) {
  .all{
    transform: scale(0.8);
  }
}
  }
    `;
  };

  constructor() {
    super();
    this.paragraph = "Details ";
    this.name = "BRYYYCCCEEEE";
    this.description = "My face when he code finaly decides to work.  This is Bryce.  He looks so cool.";
    this.topText = "Hi";
    this.bottomText = "Hi";
    this.opened = false;
  }
  toggleEvent(e) {
    const state =
      this.shadowRoot.querySelector("details").getAttribute("open") === ''
        ? true
        : false;
    this.opened = state;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'opened') {
        this.dispatchEvent(
          new CustomEvent('open-changed', {
            composed: true,
            bubbles: true,
            canelable: false,
            detail: {
              value: this[propName]
            },
          })
        );
      }
    });
  }


  render() {
    return html`
<div class="all">
<header class ="name">
  <h1 class="title">${this.name}</h1>
  </header>
   <details class="header" .open="${this.opened}" @toggle="${this.toggleEvent}">
          <summary>${this.paragraph}</summary>
          <div>
            <slot></slot>
          </div>
        </details>
  <section class="content">
  <meme-maker
          image-url="${Bryce}"
          top-text="${this.topText}"
          bottom-text="${this.bottomText}"
        ></meme-maker>
   </section>
  </div>
    `;
  }
}

customElements.define('student-card', StudentCard);
