import { html, css, LitElement } from 'lit-element';

export class InteraImg extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--intera-img-text-color, #000);
      }

      .img-title {
        font-family: georgia, garamond, serif;
        font-size: 20px;
        font-style: bold;
        text-align: center;
        border-style: solid;
        border-color: grey;
        background-color: LightGray;
        width: var(--intra-img-width, 250px);
        margin: 0 auto;
      }

      .border {
        border-style: solid;
        border-color: black;
        width: var(--intra-img-width, 250px);
        display: block;
        margin: 0 auto;
      }
      .img-credit {
        font-family: georgia, garamond, serif;
        font-size: 15px;
        font-style: bold;
        border-style: solid;
        margin: 0 auto;
        border-color: grey;
        background-color: LightGray;
        width: var(--intra-img-width, 250px);
      }
      .para {
        text-align: center;
      }
    `;
  }

  static get properties() {
    return {
      source: { type: String },
      title: { type: String },
      caption: { type: String },
      credit: { type: String },
      border: { type: String },
      alt: { type: String },
    };
  }

  constructor() {
    super();
    this.source = '';
    this.title = '';
    this.caption = '';
    this.credit = '';
    this.alt = '';
  }

  render() {
    return html` <img class="border" src="${this.source}" alt="${this.alt}" />
      <div class="img-title">
        ${this.title}
        <br />
        ${this.caption}
      </div>
      <div class="img-credit">${this.credit}</div>`;
  }
}
