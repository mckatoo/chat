import { Story, Meta } from '@storybook/react/types-6-0'

import Chat from '.'

export default {
  title: 'Chat',
  component: Chat
} as Meta

export const Basic: Story = (args) => <Chat {...args} />
