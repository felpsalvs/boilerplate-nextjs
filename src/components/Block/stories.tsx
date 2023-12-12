import { Meta, StoryObj } from '@storybook/react'
import Block, { BlockProps } from '.'

export default {
  title: 'Block',
  component: Block
} as Meta

export const Default: StoryObj<BlockProps> = (args: any) => <Block {...args} />

Default.args = {
  href: '#',
  title: 'title',
  description: 'description'
}
