import React from 'react'
import Card from './Card'
import users from '../../assets/images/users.png'
import reports from '../../assets/images/reports.png'
import posts from '../../assets/images/posts.png'

const Cards: {title: string, value: string, image: any}[] = [
    {
        title: 'Total Users',
        value: '60 Million',
        image: users
    },
    {
        title: 'Total Reports',
        value: '10,000',
        image: reports
    },
    {
        title: 'Total Posts',
        value: '1.5 Billion',
        image: posts
    }
]

export default function CardContainer() {
  return (
    <div className='flex w-full items-center gap-4'>
        { Cards.map(cardData => (
            <Card title={cardData.title} value={cardData.value} image={cardData.image} />
        )) }
    </div>
  )
}
