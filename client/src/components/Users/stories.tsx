import { Story, Meta } from '@storybook/react/types-6-0'

import Users from '.'

export default {
  title: 'Users',
  component: Users
} as Meta

export const Basic: Story = (args) => <Users {...args} />
