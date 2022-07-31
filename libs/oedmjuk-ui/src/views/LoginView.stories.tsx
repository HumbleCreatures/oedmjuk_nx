import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginView } from './LoginView';

export default {
  component: LoginView,
  title: 'Views/LoginView',
} as ComponentMeta<typeof LoginView>;

const Template: ComponentStory<typeof LoginView> = () => (
  <LoginView />
);

export const InitState = Template.bind({});
InitState.args = {};
