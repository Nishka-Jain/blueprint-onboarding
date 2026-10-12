import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { fetchAllRows } from '../../api/supabase/queries/query';
import Post, { PostProps } from '../components/Post';

export default function App() {
  const [postData, setPostData] = useState<PostProps[] | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedPosts = await fetchAllRows();
        setPostData(fetchedPosts);
      } catch (error) {
        console.error(error);
      }
    }
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          {postData == null ? (
            <Text style={{ textAlign: 'center', marginTop: 50 }}>
              Loading posts...
            </Text>
          ) : (
            postData.map((post, index) => (
              <Post
                key={index}
                user_name={post.user_name}
                npo_name={post.npo_name}
                location_id={post.location_id}
                post_text={post.post_text}
                image_link={post.image_link}
                num_likes={post.num_likes}
              />
            ))
          )}
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
});
