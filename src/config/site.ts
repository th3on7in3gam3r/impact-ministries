import pastorRobert from '../assets/pastor-robert.png'
import churchImage from '../assets/church.jpg'

export const siteConfig = {
  address: {
    line1: '52 B Cummings Park',
    city: 'Woburn',
    state: 'MA',
    zip: '01801',
    country: 'United States',
  },
  phone: '(617) 631-3970',
  phoneTel: '+16176313970',
  email: 'Impactministriesint2022@gmail.com',
  youtube: 'https://www.youtube.com/@ImpactMinistriesInternational',
  mapsEmbed:
    'https://www.google.com/maps?q=52+B+Cummings+Park,+Woburn,+MA+01801&hl=en&z=15&output=embed',
} as const

export const pastor = {
  name: 'Pastor Robert Lugoloobi',
  title: 'Senior Pastor',
  yearsOfMinistry: 25,
  wife: 'Lillian Kaggwa',
  yearsMarried: 18,
  children: [
    { name: 'Moses Kasirye', label: 'First Born' },
    { name: 'Joshua Gita', label: 'Second Born' },
    { name: 'David Ssendagire', label: 'Third Born' },
  ],
  image: pastorRobert,
  bio: `Pastor Robert Lugoloobi has devoted 25 years to the field of ministry, faithfully preaching the Gospel and shepherding God's people. With a heart for evangelism, discipleship, and community transformation, he leads Impact Ministries International Inc. with passion and integrity.`,
} as const

export const images = {
  church: churchImage,
  pastor: pastorRobert,
} as const

export const formattedAddress = `${siteConfig.address.line1}\n${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`

export const addressLines = [
  siteConfig.address.line1,
  `${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
] as const
