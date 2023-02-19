import { LitElement, html, css } from 'lit';

export class StudentCard extends LitElement {
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
    this.version = 'STARTING';
  }

  render() {
    return html`
    <button id="copy" class="buttons">Copy</button>

<button id="toggleBackGroundColor" class = "buttons">Change Background Color</button>

<button id="changeTitle" class = "buttons">Change Title</button>

<button id="deleteButton" class = "buttons">Delete Last Instance</button>

<section class="all">
<header class ="name">
  <h1 id = "mainTitle" class="title">Me When The Code Works</h1>
  </header>
   <p>
My face when he code finaly decides to work.  This is Bryce.  He looks so cool.
  </p>
<section class="content">
  <img src = "https://cdn.discordapp.com/attachments/1062806966021402684/1063160172773654659/IMG_9420.png">
    
    <button id = "detailsBtn" class="detailsButton">Details</button>
    </a>
  
   </section>
  
</section>
    `;
  }
}

customElements.define('student-card', StudentCard);