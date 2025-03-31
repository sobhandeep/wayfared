import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, Linking, ImageBackground } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import axios from 'axios'
import { styles } from '@/styles/TripDetailsStyles'
import { GOOGLE_CLOUD_API, SEARCH_ENGINE_ID } from '@/constants/Keys'
import HotelCard from '@/components/HotelCard'
import ItineraryCard from '@/components/ItineraryCard'
import { Ionicons } from '@expo/vector-icons'

export default function TripDetails() {
  const {trip} = useLocalSearchParams()
  const [tripDetails, setTripDetails] = useState([])
  const router = useRouter()
  useEffect(()=> {
    setTripDetails(JSON.parse(trip))
  }, [])
  const fetchWebsiteUsingGoogle = async (airlineName) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1`,
        {
          params: {
            key: GOOGLE_CLOUD_API,
            cx: SEARCH_ENGINE_ID,
            q: `${airlineName} official website`,
          },
        }
      );
      const website = response.data.items[0].formattedUrl
      return website.toString()
    } catch (error) {
      console.error('Error fetching website:', error)
      return null
    }
  }
  const getAirlineLogoUrl = (airlineName) => {
    const domain = `${airlineName.replace(/\s+/g, '').toLowerCase()}.com`;
    return `https://logo.clearbit.com/${domain}`;
  };
  return (
    <View
      style={styles.container}
    >
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <ImageBackground
        source={{uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${tripDetails.photoRef}&key=${GOOGLE_CLOUD_API}`}}
        style={styles.imageContainer}
        imageStyle={styles.primaryImage}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name='arrow-back' size={30} />
        </TouchableOpacity>
      </ImageBackground>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container1}
      >
        <View>
          <Text
            style={styles.headerText}
          >
            {tripDetails?.destination}
          </Text>
          <Text
            style={styles.dateText}
          >
            {tripDetails?.startDate} - {tripDetails?.endDate}
          </Text>
          <Text
              style={styles.detailsText}
            >
              🚌 {tripDetails.traveller}
            </Text>
            <Text
              style={styles.subHeaderText}
            >
            ✈️ Flights
            </Text>
            {
              tripDetails?.tripPlan?.flights?.airline_options && (
                <FlatList
                  horizontal
                  nestedScrollEnabled
                  showsHorizontalScrollIndicator={false}
                  data={tripDetails?.tripPlan?.flights?.airline_options}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => {
                        fetchWebsiteUsingGoogle(item.airline ? item.airline : item).then((website) => {
                          if (website) {
                            Linking.openURL(website);
                          }
                        });
                      }}
                    >
                      <Image
                        source={{ uri: getAirlineLogoUrl(item.airline ? item.airline : item) }}
                        style={styles.cardImage}
                      />
                      <Text style={styles.cardTitle}>{item.airline ? item.airline : item}</Text>
                    </TouchableOpacity>
                  )}
                  style={styles.flatListContainer}
                />
              )
            }
        </View>
        <View
          style={styles.container2}
        >
          <Text
            style={styles.detailsText}
          >
            {tripDetails?.tripPlan?.flights?.details}
          </Text>
          <Text
            style={styles.detailsText}
          >
            {
              tripDetails?.tripPlan?.flights?.estimated_price ? `Estimated Price: ${tripDetails?.tripPlan?.flights?.estimated_price}` : null
            }
          </Text>
          <TouchableOpacity
            style={styles.flightBookButton}
            onPress={()=> {
              Linking.openURL(`${tripDetails?.tripPlan?.flights?.booking_url}`).catch((err) => {
                console.error('Failed to open URL:', err);
              });
            }}
          >
            <Text
              style={styles.flightBookButtonText}
            >
              Book Here
            </Text>
          </TouchableOpacity>
          <Text
            style={styles.subHeaderText}
          >
            🏨 Hotels
          </Text>
          {
            tripDetails?.tripPlan?.hotels && (
              <FlatList
                horizontal
                nestedScrollEnabled
                showsHorizontalScrollIndicator={false}
                data={tripDetails?.tripPlan?.hotels}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <HotelCard
                    item={item}
                    cardTitle={styles.cardTitle}
                    cardImage={styles.cardImage}
                    card={styles.card}
                    cardPrice={styles.cardPrice}
                  />
                )}
                style={styles.flatListContainer}
              />
            )
          }
          <Text
            style={styles.subHeaderText}
          >
          🗺️ Itinerary
          </Text>
          {
            tripDetails?.tripPlan?.itinerary && (
              <FlatList
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled
                data={tripDetails?.tripPlan?.itinerary}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <ItineraryCard
                    item={item}
                    itineraryCard={styles.itineraryCard}
                    cardTitle={styles.cardTitle}
                    itineraryCardImage={styles.itineraryCardImage}
                    detailsText={styles.detailsText}
                  />
                )}
              />
            )
          }
        </View>
      </ScrollView>
    </View>
  )
}