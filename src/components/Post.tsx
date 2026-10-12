import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import CommentsIcon from '../../assets/comments-icon.svg';
import HeartIcon from '../../assets/heart-icon.svg';
import ShareIcon from '../../assets/messenger-icon.svg';
import ProfilePlaceholder from '../../assets/profile-placeholder-icon.svg';

export interface PostProps {
  user_name: string;
  npo_name: string;
  location_id: number;
  post_text: string;
  image_link: string;
  num_likes: number;
}

export default function Post({
  user_name,
  npo_name,
  location_id,
  post_text,
  image_link,
  num_likes,
}: PostProps) {
  return (
    <View style={styles.postContainer}>
      <View style={styles.headerRow}>
        <ProfilePlaceholder width={36} height={36} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.boldText}>
            {user_name} <Text style={styles.normalText}>at {npo_name}</Text>
          </Text>
          <Text style={styles.locationText}>Location ID: {location_id}</Text>
        </View>
      </View>

      {image_link ? (
        <Image source={{ uri: image_link }} style={styles.postImage} />
      ) : null}

      <Text style={styles.bodyText}>{post_text}</Text>

      <View style={styles.actionRow}>
        <View style={styles.actionGroup}>
          <HeartIcon width={24} height={24} />
          <Text style={styles.statText}>{num_likes} Likes</Text>
        </View>

        <View style={styles.actionGroup}>
          <CommentsIcon width={24} height={24} />
          <Text style={styles.statText}>View Comments</Text>
        </View>

        <ShareIcon width={24} height={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#EFEFEF',
    backgroundColor: '#FFFFFF',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerTextContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  normalText: {
    fontWeight: 'normal',
  },
  locationText: {
    color: '#666666',
    fontSize: 13,
    marginTop: 2,
  },
  postImage: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 12,
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
    color: '#333333',
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  actionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statText: {
    fontSize: 14,
    fontWeight: '500',
  },
});
