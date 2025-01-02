export const SelectTravellerList = [
  {
    id: 1,
    title: 'Just Me',
    description: 'A solo traveller in exploration',
    people: '1 Person',
    icon: '✈️'
  },
  {
    id: 2,
    title: 'Couple',
    description: 'Two travellers in a tendem',
    people: '2 Person',
    icon: '🥂'
  },
  {
    id: 3,
    title: 'Family',
    description: 'A group of fun loving adventurers',
    people: '3 to 5 Person',
    icon: '🏡'
  },
  {
    id: 4,
    title: 'Friends',
    description: 'A bunch of thrill seekers',
    people: '5 to 10 Person',
    icon: '⛵'
  }
]

export const SelectBudgetOptions = [
  {
    id: 1,
    title: 'Cheap',
    description: 'Stay conscious of cost.',
    icon: '💵'
  },
  {
    id: 2,
    title: 'Moderate',
    description: 'Keep costs on average side.',
    icon: '💰'
  },
  {
    id: 3,
    title: 'Luxury',
    description: "Don't worry about cost.",
    icon: '💸'
  }
]

export const PROMT_TEMPLATE = `Generate a travel plan for Location: {location} for {totalDays} Days and {totalNights} Nights starting from {startDate} to {endDate} for {traveller} with a {budget} Budget with Flight Details, Flight Prices with booking url, Hotel option list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descripion and Places to visit with PlaceName, Place Details, place image url, geo coordinates, ticket pricing, time to travel each of the location, for {totalDays} Days and {totalNights} Nights with each day plan with best time to visit in JSON format`