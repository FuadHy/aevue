import React from 'react'

interface props {
    Icon: React.ElementType;
    title: string;
    active?: boolean;
}
export default function SidebarItem({Icon, title, active}: props): React.ReactElement {
  return (
    <div className={`flex items-center gap-2 p-2 cursor-pointer hover:bg-activeBg ${active ? 'bg-activeBg' : ''}`}>
        <Icon style={{fontSixe: 20, color: active ? '#1a76d2' : '#00000090'}} />
        <h3 className={`${active ? 'text-[#1a76d2] font-bold' : 'text-[#00000090]'}`}>{title}</h3>
    </div>
  )
}
