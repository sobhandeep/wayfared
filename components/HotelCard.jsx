import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import {GOOGLE_CLOUD_API} from './../constants/Keys'
import { StarRatingDisplay } from 'react-native-star-rating-widget';

export default function HotelCard({ item, cardTitle, cardPrice, cardImage, card }) {
  const [photoUri, setPhotoUri] = useState('')
  
  useEffect(() => {
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
          setPhotoUri(
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoReference}&key=${GOOGLE_CLOUD_API}`
          );
        } else {
          setPhotoUri('https://www.instant.space/images/hotel-placeholder.png')
        }
      } catch (error) {
        console.error('Error fetching photo reference:', error.message);
        setPhotoUri('https://www.instant.space/images/hotel-placeholder.png')
      }
    };
    fetchPhotoReference(item.hotel_name);
  }, [item]);

  return (
    <View 
      style={card}
    >
      <Image
        source={{ uri: photoUri }}
        style={cardImage}
      />
      <View>
        <Text 
          style={cardTitle}
          numberOfLines={1} 
          ellipsizeMode="tail"
      >
          {item.hotel_name}
        </Text>
        <StarRatingDisplay rating={parseFloat(item.rating)} starSize={18}/>
        <Text
          style={cardPrice}
        >
          💵 {item.price}
        </Text>
      </View>
    </View>
  );
}