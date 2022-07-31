import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputField } from './InputField';

export default {
  component: InputField,
  title: 'Components/InputField',
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args}/>
);

export const InitState = Template.bind({});
export const ErrorState = Template.bind({});
ErrorState.args = { errorMessage: 'Bad user', placeholder: 'The input goes here.', label: 'Some text'};
InitState.args = { placeholder: 'The input goes here.', label: 'Some text'};
