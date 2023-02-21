import { html } from 'lit';
import '../src/student-card.js';

export default {
  title: 'StudentCard',
  component: 'student-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <student-card
      style="--student-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </student-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
