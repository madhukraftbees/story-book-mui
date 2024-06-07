// src/components/Button.stories.js
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from './Button';

export default {
    title: 'Button',
    component: Button,
  }; // <-- Add a semicolon here
  

const Template: Story = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click me',
};
