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

export const formattedAddress = `${siteConfig.address.line1}\n${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`

export const addressLines = [
  siteConfig.address.line1,
  `${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
] as const
