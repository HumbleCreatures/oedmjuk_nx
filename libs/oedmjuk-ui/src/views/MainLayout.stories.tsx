import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainLayoutView } from './MainLayoutView';

export default {
  component: MainLayoutView,
  title: 'Views/MainLayout',
} as ComponentMeta<typeof MainLayoutView>;

const Template: ComponentStory<typeof MainLayoutView> = () => (
  <MainLayoutView />
);

export const InitState = Template.bind({});
InitState.args = {};
