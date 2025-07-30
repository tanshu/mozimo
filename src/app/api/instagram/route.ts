import { NextResponse } from 'next/server';

// Instagram Basic Display API configuration
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN || 'IGQWRQSUY4b3RQWU9ZARHlVVUFDaWxJZAWFOUVllM0NxMk1zSHJ5X2JGc2dpRUxyTjBaeDNhUm0yaFZAQeUotVU9VUmFEQkJxU25CdFp3bURSZAGtnLXhCZAHVId21SWUNiNjVzc0pjZAlhPNDRxTDFzZAEQ0ZAXoyVlpUaHcZD';

interface InstagramPostData {
  id: string;
  caption?: string;
  media_type: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

export async function GET() {
  try {
    if (!INSTAGRAM_ACCESS_TOKEN) {
      return NextResponse.json(
        { error: 'Instagram access token not configured' },
        { status: 500 }
      );
    }

    // First, get the user ID using the access token
    const userResponse = await fetch(
      `https://graph.instagram.com/me?fields=id,username&access_token=${INSTAGRAM_ACCESS_TOKEN}`
    );

    if (!userResponse.ok) {
      const errorText = await userResponse.text();
      console.error('Failed to fetch user info:', errorText);
      
      // Check if token is expired
      if (errorText.includes('Session has expired') || errorText.includes('code":190')) {
        return NextResponse.json(
          { 
            error: 'Instagram access token has expired',
            details: 'The access token needs to be refreshed. Please generate a new token from Instagram Developer Console.',
            code: 'TOKEN_EXPIRED'
          },
          { status: 401 }
        );
      }
      
      throw new Error('Failed to authenticate with Instagram');
    }

    const userData = await userResponse.json();
    console.log('Instagram user data:', userData);

    // Fetch user's media (posts)
    const mediaResponse = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=6`
    );

    if (!mediaResponse.ok) {
      const errorText = await mediaResponse.text();
      console.error('Failed to fetch media:', errorText);
      
      // Check if token is expired
      if (errorText.includes('Session has expired') || errorText.includes('code":190')) {
        return NextResponse.json(
          { 
            error: 'Instagram access token has expired',
            details: 'The access token needs to be refreshed. Please generate a new token from Instagram Developer Console.',
            code: 'TOKEN_EXPIRED'
          },
          { status: 401 }
        );
      }
      
      throw new Error('Failed to fetch Instagram posts');
    }

    const mediaData = await mediaResponse.json();
    console.log('Instagram media data:', mediaData);
    
    // Process and format the posts
    const posts = mediaData.data.map((post: InstagramPostData) => ({
      id: post.id,
      caption: post.caption || '',
      mediaUrl: post.media_type === 'VIDEO' ? (post.thumbnail_url || post.media_url) : post.media_url,
      permalink: post.permalink,
      mediaType: post.media_type,
      timestamp: post.timestamp
    }));

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Instagram API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Instagram posts', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 