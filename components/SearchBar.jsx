import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { styles } from '@/styles/SearchBarStyles';

export default function SearchBar ({ apiKey, onPlaceSelected }) {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchSuggestions = async (text) => {
    if (!text) {
      setSuggestions([]);
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json`, 
        {
          params: {
            input: text,
            key: apiKey,
            language: 'en',
          }
        }
      )
      setSuggestions(response.data.predictions);
    } catch (error) {
      console.error('Error fetching suggestions:', error)
    } finally {
      setLoading(false)
    }
  }
  const fetchPlaceDetails = async (place) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json`, 
        {
          params: {
            placeid: place.place_id,
            key: apiKey,
            language: 'en',
          }
        }
      );

      if (response.data.status === 'OK') {
        const placeDetails = response.data.result;
        onPlaceSelected(place, placeDetails);
      } else {
        console.warn('Place details not found');
      }
    } catch (error) {
      console.error('Error fetching place details:', error);
    }
  }
  const handleSelect = (place) => {
    setQuery(place.description)
    setSuggestions([])
    fetchPlaceDetails(place)
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Search for a place"
        value={query}
        onChangeText={(text) => {
          setQuery(text);
          fetchSuggestions(text);
        }}
      />
      {loading && <Text style={styles.loading}>Loading...</Text>}
      <FlatList
        data={suggestions}
        ItemSeparatorComponent={null} 
        keyExtractor={(item) => item.place_id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelect(item)}>
            <Text style={styles.suggestion}>{item.description}</Text>
          </TouchableOpacity>
        )}
        style={[
          styles.suggestionsContainer,
          suggestions?.length > 0 ? {borderWidth: 1} : null
        ]}
      />
    </View>
  )
}