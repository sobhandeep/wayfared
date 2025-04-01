<FlatList
  style={styles.container1}
  showsVerticalScrollIndicator={false}
  nestedScrollEnabled={true}
  data={tripDetails?.tripPlan?.itinerary}
  keyExtractor={(item, index) => index.toString()}
  ListHeaderComponent={(
    <>
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
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled={true}
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
              nestedScrollEnabled={true}
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
      </View>
    </>
  )}
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