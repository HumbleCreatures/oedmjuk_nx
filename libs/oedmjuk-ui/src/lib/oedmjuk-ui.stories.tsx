import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OedmjukUi } from './oedmjuk-ui';

export default {
  component: OedmjukUi,
  title: 'OedmjukUi',
} as ComponentMeta<typeof OedmjukUi>;

const Template: ComponentStory<typeof OedmjukUi> = (args) => (
  <OedmjukUi {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
