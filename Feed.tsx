import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FeedPost {
  id: string;
  author: {
    name: string;
    avatar: string;
    title: string;
    time: string;
  };
  content: {
    text: string;
    image?: string;
    type: 'text' | 'image' | 'article' | 'event';
  };
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
  isLiked: boolean;
  isBookmarked: boolean;
}

const feedPosts: FeedPost[] = [
  {
    id: '1',
    author: {
      name: 'Dr. Sarah Martinez',
      avatar: 'SM',
      title: 'Professor at MIT',
      time: '2h ago'
    },
    content: {
      text: 'Exciting news! Our new AI research lab is officially open. We\'re looking for passionate graduate students to join our team working on natural language processing and machine learning applications in education. 🚀',
      image: 'https://images.unsplash.com/flagged/photo-1574098335395-18cf525e45d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBzdHVkeXxlbnwxfHx8fDE3NTgxODM5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      type: 'image'
    },
    engagement: {
      likes: 156,
      comments: 23,
      shares: 12
    },
    isLiked: false,
    isBookmarked: true
  },
  {
    id: '2',
    author: {
      name: 'TechEd Conference',
      avatar: 'TC',
      title: 'Official Event',
      time: '4h ago'
    },
    content: {
      text: '🎯 Registration is now open for TechEd 2025! Join 1000+ educators, students, and tech professionals for 3 days of learning, networking, and innovation. Early bird pricing ends next week.',
      type: 'text'
    },
    engagement: {
      likes: 89,
      comments: 15,
      shares: 34
    },
    isLiked: true,
    isBookmarked: false
  },
  {
    id: '3',
    author: {
      name: 'Marcus Thompson',
      avatar: 'MT',
      title: 'Full Stack Developer',
      time: '6h ago'
    },
    content: {  
      text: 'Just finished building my first React Native app! The learning curve was steep but totally worth it. Here\'s my setup and the challenges I faced along the way. Would love to hear about your mobile development experiences!',
      image: 'https://images.unsplash.com/photo-1653564142048-d5af2cf9b50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTgxMDkyODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      type: 'image'
    },
    engagement: {
      likes: 243,
      comments: 67,
      shares: 19
    },
    isLiked: true,
    isBookmarked: false
  },
  {
    id: '4',
    author: {
      name: 'Learning Hub',
      avatar: 'LH',
      title: 'Educational Platform',
      time: '8h ago'
    },
    content: {
      text: '💡 Study Tip Tuesday: The Pomodoro Technique can boost your productivity by 25%! Try studying for 25 minutes, then take a 5-minute break. Repeat 4 times, then take a longer 30-minute break. What study techniques work best for you?',
      image: 'https://images.unsplash.com/photo-1753613648191-4771cf76f034?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4MTAzNDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      type: 'image'
    },
    engagement: {
      likes: 312,
      comments: 45,
      shares: 78
    },
    isLiked: false,
    isBookmarked: true
  },
  {
    id: '5',
    author: {
      name: 'Jessica Park',
      avatar: 'JP',
      title: 'CS Graduate Student',
      time: '12h ago'
    },
    content: {
      text: 'Amazing experience at the campus career fair today! Met representatives from 15+ tech companies and had some great conversations about internship opportunities. To fellow students: don\'t forget to follow up with the connections you make!',
      image: 'https://images.unsplash.com/photo-1693011142814-aa33d7d1535c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU4MjAwNDI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      type: 'image'
    },
    engagement: {
      likes: 187,
      comments: 28,
      shares: 15
    },
    isLiked: false,
    isBookmarked: false
  }
];

export function Feed() {
  return (
    <div className="flex-1 max-w-2xl mx-auto p-6 space-y-6 bg-background">
      {/* Create Post */}
      <Card className="shadow-sm border-0 bg-white">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-primary/10 text-primary font-medium">AJ</AvatarFallback>
            </Avatar>
            <div className="flex-1 bg-input-background rounded-full px-6 py-3 cursor-pointer hover:bg-muted/50 transition-colors border">
              <p className="text-muted-foreground">What's on your mind, Alex?</p>
            </div>
          </div>
          <div className="flex justify-between mt-6 pt-4 border-t space-x-2">
            <Button variant="ghost" size="sm" className="flex-1 hover:bg-accent rounded-lg py-3">
              <span className="mr-2">📷</span>Photo
            </Button>
            <Button variant="ghost" size="sm" className="flex-1 hover:bg-accent rounded-lg py-3">
              <span className="mr-2">🎥</span>Video
            </Button>
            <Button variant="ghost" size="sm" className="flex-1 hover:bg-accent rounded-lg py-3">
              <span className="mr-2">📅</span>Event
            </Button>
            <Button variant="ghost" size="sm" className="flex-1 hover:bg-accent rounded-lg py-3">
              <span className="mr-2">📝</span>Article
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Feed Posts */}
      {feedPosts.map((post) => (
        <Card key={post.id} className="shadow-sm border-0 bg-white hover:shadow-md transition-shadow">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-primary/10 text-primary font-medium">{post.author.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-foreground">{post.author.name}</h4>
                  <p className="text-sm text-muted-foreground">{post.author.title}</p>
                  <p className="text-xs text-muted-foreground">{post.author.time}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="hover:bg-accent rounded-lg">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-foreground">{post.content.text}</p>
            
            {post.content.image && (
              <div className="rounded-xl overflow-hidden border">
                <ImageWithFallback
                  src={post.content.image}
                  alt="Post content"
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center space-x-6">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`flex items-center space-x-2 hover:bg-accent rounded-lg px-3 py-2 ${post.isLiked ? 'text-red-500' : 'text-muted-foreground'}`}
                >
                  <Heart className={`h-4 w-4 ${post.isLiked ? 'fill-current' : ''}`} />
                  <span className="font-medium">{post.engagement.likes}</span>
                </Button>
                
                <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-muted-foreground hover:bg-accent rounded-lg px-3 py-2">
                  <MessageCircle className="h-4 w-4" />
                  <span className="font-medium">{post.engagement.comments}</span>
                </Button>
                
                <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-muted-foreground hover:bg-accent rounded-lg px-3 py-2">
                  <Share className="h-4 w-4" />
                  <span className="font-medium">{post.engagement.shares}</span>
                </Button>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm"
                className={`hover:bg-accent rounded-lg p-2 ${post.isBookmarked ? 'text-primary' : 'text-muted-foreground'}`}
              >
                <Bookmark className={`h-4 w-4 ${post.isBookmarked ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}