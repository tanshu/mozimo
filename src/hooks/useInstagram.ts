import { useState, useEffect } from 'react';

interface InstagramPost {
  id: string;
  caption: string;
  mediaUrl: string;
  permalink: string;
  mediaType: string;
  timestamp: string;
}

interface InstagramData {
  posts: InstagramPost[];
}

interface InstagramError {
  error: string;
  details?: string;
  code?: string;
}

export function useInstagram() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isTokenExpired, setIsTokenExpired] = useState(false);

  useEffect(() => {
    async function fetchInstagramPosts() {
      try {
        setLoading(true);
        setError(null);
        setIsTokenExpired(false);
        
        const response = await fetch('/api/instagram');
        
        if (!response.ok) {
          const errorData: InstagramError = await response.json();
          
          if (errorData.code === 'TOKEN_EXPIRED') {
            setIsTokenExpired(true);
            setError('Instagram connection expired. Please contact support to refresh the connection.');
          } else {
            setError(errorData.error || 'Failed to fetch Instagram posts');
          }
          return;
        }
        
        const data: InstagramData = await response.json();
        setPosts(data.posts);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    }

    fetchInstagramPosts();
  }, []);

  return { posts, loading, error, isTokenExpired };
} 