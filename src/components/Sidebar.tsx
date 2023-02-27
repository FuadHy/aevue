import React from 'react'
import SidebarItem from './SidebarItem'
import { Apps } from '@mui/icons-material'
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SummarizeIcon from '@mui/icons-material/Summarize';

export default function Sidebar() {
  return (
    <div className='flex flex-col w-1/6 h-full bg-white pt-8 gap-4 shadow-sm'>
        <SidebarItem Icon={Apps} title="Dashboard" active />
        <SidebarItem Icon={PersonIcon} title="Users" />
        <SidebarItem Icon={NotificationsIcon} title="Notifications" />
        <SidebarItem Icon={SummarizeIcon} title="Reports" />
    </div>
  )
}
