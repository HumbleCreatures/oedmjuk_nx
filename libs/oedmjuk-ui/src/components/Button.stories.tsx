import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>click me</Button>
);

export const EnabledState = Template.bind({});
export const DisabledState = Template.bind({});
EnabledState.args = {};
DisabledState.args = { disabled: true };
