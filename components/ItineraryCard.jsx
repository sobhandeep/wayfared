import { View, Text, FlatList, Image } from 'react-native'
import axios from 'axios';
import {GOOGLE_CLOUD_API} from './../constants/Keys'
import React, { useEffect, useState } from 'react'

export default function ItineraryCard({item, itineraryCard, cardTitle, itineraryCardImage, detailsText}) {
  const fetchPhotoReference = async (place) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json`,
        {
          params: {
            query: place,
            key: GOOGLE_CLOUD_API,
          },
        }
      );

      const photoReference = response?.data?.results?.[0]?.photos?.[0]?.photo_reference
      if (photoReference) {
        return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoReference}&key=${GOOGLE_CLOUD_API}`
        
      } else {
        return 'https://www.zairatoursafrica.com/index/wp-content/themes/zaira-tours/assets/images/placeholder.png'
      }
    } catch (error) {
      console.error('Error fetching photo reference:', error.message);
     return 'https://www.instant.space/images/hotel-placeholder.png'
    }
  };
  const ImageItem = ({ name }) => {
    const [imageUri, setImageUri] = useState(null);
    const placeholderImage = require('./../assets/images/placeholder.png');
    useEffect(() => {
      const fetchImage = async () => {
        const uri = await fetchPhotoReference(name);
        setImageUri(uri);
      };
  
      fetchImage();
    }, [name]);
    return (
      <Image 
        source={imageUri ? { uri: imageUri } : placeholderImage} 
        style={itineraryCardImage} 
      />
    );
  };
  return (
    <View
      style={itineraryCard}
    >
      <Text
        style={cardTitle}
      >
        Day {item.day}
      </Text>
      <Text
        style={detailsText}
      >
        {item.theme}
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        data={item?.activities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <ImageItem
              name={item?.place_name}
            />
            <Text
              style={cardTitle}
            >
              {item.place_name}
            </Text>
            <Text
              style={detailsText}
            >
              {`${item.place_details}\nTicket: ${item.ticket_pricing}\nTravel Time: ${item.travel_time}`}
            </Text>
          </View>
        )}
      />
    </View>
  )
}