import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import CommentsIcon from '../../assets/comments-icon.svg';
import HeartIcon from '../../assets/heart-icon.svg';
import ShareIcon from '../../assets/messenger-icon.svg';
import ProfilePlaceholder from '../../assets/profile-placeholder-icon.svg';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <View style={styles.postHeader}>
            <ProfilePlaceholder width={40} height={40} />
            <Text style={styles.headerTextContainer}>
              <Text style={styles.usernameText}>
                <Text style={{ fontWeight: 'bold' }}>neha32</Text> at{' '}
                <Text style={{ fontWeight: 'bold' }}>Mission Bit</Text>
              </Text>{' '}
              <Text style={styles.locationText}>San Francisco, CA</Text>
            </Text>
          </View>

          <Image
            source={{
              uri: 'https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg',
            }}
            style={styles.postImage}
          />

          <View style={styles.postBody}>
            <Text style={styles.captionText}>
              This past weekend, I taught at Mission Bit. I was working with a
              group of high school students who were building their first web
              pages. I really enjoyed being able to help guide 10 students on
              learning CS fundament. als through a project! They were all really
              eager to learn, and I'm glad I signed up. Highly recommend to any
              other software engineers interested in volunteering! Sign-up here:
              https://missionbit.org/get-involved/volunteer-with-us/
            </Text>
          </View>

          <View style={styles.statsRow}>
            <Text style={styles.statsText}>3 likes</Text>
            <Text style={styles.statsText}>View 2 comments</Text>
          </View>
          <View style={styles.actionRow}>
            <View style={styles.leftIcons}>
              <HeartIcon width={24} height={24} />
              <CommentsIcon style={{ marginLeft: 12 }} width={24} height={24} />
            </View>
            <ShareIcon width={24} height={24} />
          </View>

          <Text style={styles.dateText}>February 1</Text>
          <View style={styles.divider} />

          <View style={styles.postHeader}>
            <ProfilePlaceholder width={40} height={40} />
            <View style={styles.headerTextContainer}>
              <Text style={styles.usernameText}>
                <Text style={{ fontWeight: 'bold' }}>aiden_ugh</Text> at{' '}
                <Text style={{ fontWeight: 'bold' }}>Boys and Girls Club</Text>
              </Text>
              <Text style={styles.locationText}>Oakland, CA</Text>
            </View>
          </View>

          <View style={styles.postBody}>
            <Text style={styles.captionText}>
              I recently volunteered at my local Boys and Girls Club!
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    position: 'relative',
    borderWidth: 1,
    borderColor: 'black',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTextContainer: {
    marginLeft: 12,
    flexDirection: 'column',
  },
  usernameText: {
    fontSize: 14,
    color: '#000',
  },
  locationText: {
    fontSize: 12,
    color: '#A3A3A3',
    marginTop: 2,
  },
  postImage: {
    width: 370,
    height: 250,
    marginTop: 8,
    marginBottom: 12,
    borderRadius: 10,
    alignSelf: 'center',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  leftIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postBody: {
    paddingHorizontal: 16,
    paddingBottom: 4,
  },
  captionText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#000',
    marginBottom: 12,
  },
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  statsText: {
    fontSize: 12,
    color: '#666',
    marginRight: 16,
  },
  dateText: {
    fontSize: 10,
    color: '#A3A3A3',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    width: '100%',
  },
});
