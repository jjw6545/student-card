import { LitElement, html, css } from 'lit';

const Bryce = new URL('../assets/bryce-image.png', import.meta.url).href;

export class StudentCard extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
        reflect: true
      },
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
    `;
  };

  constructor() {
    super();
    this.paragraph = "Details ";
    this.name = "BRYYYYYCCCEEEEEE"
  }

  render() {
    return html`

<div class="all">
<header class ="name">
  <h1 class="title">${this.name}</h1>
  </header>
   <details class="header">
          <summary>${this.paragraph}</summary>
          <div>
          <ul>
        <li>My face when he code finaly decides to work.  This is Bryce.  He looks so cool.</li>
      </ul>
          </div>
        </details>
<section class="content">
  <img src = "${Bryce}">
    </a>
   </section>
  </div>
    `;
  }
}

customElements.define('student-card', StudentCard);