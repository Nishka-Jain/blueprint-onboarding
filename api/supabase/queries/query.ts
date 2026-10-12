import { PostProps } from '../../../src/components/Post';
import supabase from '../client';

// Example query to fetch all rows from your_table_name
export async function fetchAllRows(): Promise<PostProps[]> {
  const { data, error } = await supabase.from('Posts').select('*');

  if (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }

  return data as PostProps[];
}
