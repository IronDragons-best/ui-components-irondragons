import type { Meta, StoryObj } from '@storybook/react'
import { TabsComponent } from '@/components/tabs/Tabs'
import { useState } from 'react'
import { Tabs } from 'radix-ui'

const meta: Meta<typeof TabsComponent> = {
  title: 'Components/Tabs',
  component: TabsComponent,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0D0D0D' }],
    },
  },
}

export default meta

type Story = StoryObj<typeof TabsComponent>

/* Default Tab */
export const DefaultTabs: Story = {
  args: {
    fullWidth: false,
    tabs: [
      { id: 'tab1', label: 'Tab 1 ' },
      { id: 'tab2', label: 'Tab 2' },
    ],
  },
  render: args => {
    const [activeTab, setActiveTab] = useState(args.tabs[0].id)

    return (
      <TabsComponent {...args} value={activeTab} onValueChange={setActiveTab}>
        {args.tabs.map(tab => (
          <Tabs.Content key={tab.id} value={tab.id}>
            <div style={{ color: 'white' }}>Контент: {tab.label}</div>
          </Tabs.Content>
        ))}
      </TabsComponent>
    )
  },
}

/* Disabled Tab */
export const DisabledTab: Story = {
  args: {
    fullWidth: false,
    tabs: [{ id: 'tab1', label: 'Tabs', disabled: true }],
  },
  render: args => {
    const [activeTab, setActiveTab] = useState('tab1')

    return (
      <TabsComponent {...args} value={activeTab} onValueChange={setActiveTab}>
        <Tabs.Content value="tab1">
          <div style={{ color: 'white' }}>Неактивен</div>
        </Tabs.Content>
      </TabsComponent>
    )
  },
}
