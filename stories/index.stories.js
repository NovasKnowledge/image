import { html } from 'lit-html';
import '../intera-img.js';

export default {
  title: 'InteraImg',
  component: 'intera-img',
  argTypes: {
    title: { control: 'text' },
    counter: { control: 'number' },
    textColor: { control: 'color' },
  },
};

function Template({ title = 'Hello world', counter = 5, textColor, slot }) {
  return html`
    <intera-img
      style="--intera-img-text-color: ${textColor || 'black'}"
      .title=${title}
      .counter=${counter}
    >
      ${slot}
    </intera-img>
  `;
}

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'My title',
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  counter: 123456,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
