import { html, css, LitElement } from 'lit-element';

export class InteraImg extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--intera-img-text-color, #000);
      }

      .img-title{
        font-family:georgia,garamond,serif;
        font-size:20px;
        font-style:bold;
        //text-align: center;
        border-style: solid;
        border-color: grey;
        background-color: LightGray;
        width= 200px;
        height = 200px;
      }

      .border{
        border-style: solid;
        border-color: black;
        width= 350px;
        height = 200px;
        
      }

      .img-credit{
        font-family:georgia,garamond,serif;
        font-size:15px;
        font-style:bold;
        margin: 10px;
        border-style: solid;
        border-color: grey;
        background-color: LightGray;
      }

      .para{
        text-align:center;
      }


      
    `;



    
  }

  static get properties() {
    return {
      title: { type: String },
      caption: {type: String},
    };
  }

  

  constructor() {
    super();
    this.source = "https://www.dogsforgood.org/app/uploads/2019/06/Georgie-web.jpg";
    this.titles = 'This is the picture.'
    this.caption = 'This is the caption.'
    this.credit = 'Penn State probably did this.'
    this.border ='';
    this.alt = '';
    //this.background = color;
  }


  render() {
    return html`

      <img 
      display: block;
      margin-left: auto;
      margin-right: auto;
        class= "border"
        width= "350px" 
        height = "200px" 
        src = ${this.source}
        alt = ${this.alt}
      />

   

    <div class = "img-title">
        ${this.titles}
        <br>
        ${this.caption}
        </div>
        

    <div class = "img-credit">
      ${this.credit}
      ${this.border}
     
    </div>


    
        
    `;
  }


  
}



  