import { GEMINI_API } from './../constants/Keys'

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = GEMINI_API;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        { text: "Generate a travel plan for Location: London, UK for 7 Days and 6 Nights for Family with a Moderate Budget with Flight Details, Flight Prices with booking url, Hotel option list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descripion and Places to visit with PlaceName, Place Details, place image url, geo coordinates, ticket pricing, time to travel each of the location, for 7 Days and 6 Nights with each day plan with best time to visit in JSON format" },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `{
          "flights": {
          "airline_options": [
          {
          "airline": "British Airways", 
          "url": "https://www.britishairways.com/"
          }, 
          {
          "airline": "EasyJet", 
          "url": "https://www.easyjet.com/"
          }, 
          {
          "airline": "Ryanair", 
          "url": "https://www.ryanair.com/"
          }], 
          "booking_url": 
          "https://www.skyscanner.net/", 
          "details": "Flights to and from London (e.g., Heathrow - LHR, Gatwick - LGW)", 
          "estimated_price": "£300-£800 per person (round trip, economy)"}, 
          "hotels": [
          {
          "address": "20-24 Great Windmill St, London W1F 9LN, UK", 
          "description": "Modern hotel in a central location, close to Piccadilly Circus and theatreland. Offers compact but comfortable rooms.", 
          "geo_coordinates": 
          {
          "latitude": 51.5099, 
          "longitude": -0.1295, 
          "hotel_name": "The Z Hotel Piccadilly", 
          "image_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/327138502.jpg?k=a0d312218958542d359f9e34473f640154d0a23c900c5471035e2b433f1c1835&o=&hp=1", 
          "price": "£100-£200/night", 
          "rating": "4-star"
          }}, 
          {
          "address": "South Bank, Westminster Bridge Rd, London SE1 7PB, UK", 
          "description": "Good location near the London Eye, with views of the Thames and Houses of Parliament. Offers comfortable and spacious rooms.", 
          "geo_coordinates": 
          {
          "latitude": 51.5011, 
          "longitude": -0.1153, 
          "hotel_name": "Premier Inn London County Hall", 
          "image_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/382346946.jpg?k=b1f9e3c4c5b201ab24f16020a46d8d1d02223db72e0b5715db28c9f1b68e0507&o=&hp=1", 
          "price": "£120-£250/night", "rating": "4-star"}}], 
          "itinerary": [
          [{
          "day": 1,
          "theme": "Arrival and Central London",
          activities: [
          {
          "details": "Witness the Changing of the Guard ceremony (check timings beforehand).",
          geo-coordinates: {
          "latitude": 51.5014,
          "longitude": -0.1419 
          },
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Buckingham_Palace_Exterior.jpg/1280px-Buckingham_Palace_Exterior.jpg",
          "place_name": "Buckingham Palace",
          "ticket_price": "Free (ceremony); tours available at a cost.",
          "travel_time": "Varies depending on transportation."
          },
          {
          "details": "Visit the historic Abbey where coronations and royal weddings take place.",
          geo-coordinates: {
          "latitude": 51.5031,
          "longitude": -0.1277 
          },
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Westminster_Abbey_2007.jpg/1280px-Westminster_Abbey_2007.jpg",
          "place_name": "Westminster Abbey",
          "ticket_price": "£22-30",
          "travel_time": "Walking distance from Buckingham Palace."
          },
          ]
          },
          {
          "day": 2,
          "theme": "Museums and Parks",
          activities: [
          {
          "details": "Explore history and art from around the world; free entry.",
          geo-coordinates: {
          "latitude": 51.519,
          "longitude": -0.1278 
          },
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/British_Museum_2016-10-07.jpg/1280px-British_Museum_2016-10-07.jpg",
          "place_name": "British Museum",
          "ticket_price": "Free",
          "travel_time": "Public Transport from Westminster Abbey."
          },
          {
          "details": "Relax, walk, or bike through London's largest Royal Park.",
          geo-coordinates: {
          "latitude": 51.5074,
          "longitude": -0.1627 
          },
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Hyde_Park_in_London_01.jpg/1280px-Hyde_Park_in_London_01.jpg",
          "place_name": "Hyde Park",
          "ticket_price": "Free",
          "travel_time": "Public Transport from the British Museum.",
          "best_time_to_visit": "Spring for pleasant park weather"
          },
          ]
          },
          {
          "day": 3,
          "theme": "Iconic Landmarks",
          activities: [
          {
          "details": "Discover the historic castle, home to the Crown Jewels.",
          geo-coordinates: {
          "latitude": 51.508,
          "longitude": -0.0755 
          },
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Tower_of_London_2009.jpg/1280px-Tower_of_London_2009.jpg",
          "place_name": "Tower of London",
          "ticket_price": "£30",
          "travel_time": "Tube from Hyde Park"
          },
          {
          "details": "Walk across this iconic bridge for stunning city views.",
          geo-coordinates: {
          "latitude": 51.5055,
          "longitude": -0.076 
          },
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tower_Bridge_from_the_South_Bank_in_2017.jpg/1280px-Tower_Bridge_from_the_South_Bank_in_2017.jpg",
          "place_name": "Tower Bridge",
          "ticket_price": "Free (to walk)",
          "travel_time": "Walking distance from Tower of London.",
          "best_time_to_visit": "Anytime, although evening illuminations can add special charm"
          },
          ]
          },
          {
          "day": 4,
          "theme": "Shopping and Theatre",
          activities: [
          {
          "details": "Explore this famous shopping street with department stores and high street brands.",
          geo-coordinates: {
          "latitude": 51.514,
          "longitude": -0.1351
          },
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Oxford_Street_towards_Marble_Arch_%282011%29.jpg/1280px-Oxford_Street_towards_Marble_Arch_%282011%29.jpg",
          "place_name": "Oxford Street",
          "ticket_price": "Varies depending on purchases.",
          "travel_time": "Tube from Tower Bridge."
          },
          {
          "details": "Enjoy a classic West End show in the evening (book tickets in advance).",
          geo-coordinates: {
          "latitude": 51.511,
          "longitude": -0.124 
          },
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Shaftesbury_Avenue_London.JPG/1280px-Shaftesbury_Avenue_London.JPG",
          "place_name": "West End Theatre",
          "ticket_price": "£25-£100+",
          "travel_time": "Walking distance from Oxford Street.",
          "best_time_to_visit": "Anytime, but check show times for theatre"
          },
          ]
          },
          {
          "day": 5,
          "theme": "South Bank and London Eye",
          activities: [
          {
          "details": "Take a ride on this giant Ferris wheel for panoramic city views.",
          geo-coordinates: {
          "latitude": 51.5033,
          "longitude": -0.1195
          },
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/London_Eye_%28cropped%29.jpg/1280px-London_Eye_%28cropped%29.jpg",
          "place_name": "London Eye",
          "ticket_price": "£30-£40",
          "travel_time": "Walking distance from your hotel."
          },
          {
          "details": "Explore the cultural hub along the South Bank, including street performers and art installations.",
          geo-coordinates: {
          "latitude": 51.505,
          "longitude": -0.115 
          },
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Southbank_Centre_from_Westminster_Bridge.jpg/1280px-Southbank_Centre_from_Westminster_Bridge.jpg",
          "place_name": "Southbank Centre",
          "ticket_price": "Free (entry), events vary in cost.",
          "travel_time": "Walking distance from London Eye",
          "best_time_to_visit": "Summer evenings for nice river weather"
          },
          ]
          },
          {
          "day": 6,
          "theme": "Day Trip Option (e.g., Windsor Castle)",
          activities: [
          {
          "details": "(Optional day trip) Visit the Queen's residence and explore the historic castle.",
          geo-coordinates: {
          "latitude": 51.483,
          "longitude": -0.607
          },
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/WindsorCastle.JPG/1280px-WindsorCastle.JPG",
          "place_name": "Windsor Castle",
          "ticket_price": "£26-28",
          "travel_time": "Train from London Paddington (approx. 1 hour).",
          "best_ttime_to_visit": "Any time, consider train schedules"
          }
          ]
          },
          {
          "day": 7,
          "theme": "Departure",
          activities: [
          {
          "details": "Transfer to your chosen airport (LHR, LGW, STN, etc.) for your flight home.",
          geo-coordinates: {
          "latitude": "",
          "longitude": ""
          },
          "image_url": "",
          "place_name": "Departure from London Airport",
          "ticket_price": "",
          "travel_time": "Varies depending on airport and transport method.",
          "best_ttime_to_visit": "Anytime"
          }
          ]
          }],  
          "trip_details": 
          {
          "budget": "Moderate", 
          "duration": "7 Days 6 Nights", 
          "location": "London, UK", 
          "travel_dates": "09 Jan 2025 - 15 Jan 2025", 
          "travelers": "Family (Specify Number)"
          }}`
        },
      ],
    },
  ],
});