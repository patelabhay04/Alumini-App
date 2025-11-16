import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Search, Users, UserPlus, MapPin, Building } from "lucide-react";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface NetworkConnection {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  avatar: string;
  mutualConnections: number;
  skills: string[];
  connectionType: 'suggestion' | 'sent' | 'received';
}

const networkSuggestions: NetworkConnection[] = [
  {
    id: '1',
    name: 'Dr. Emily Chen',
    title: 'AI Research Scientist',
    company: 'Google DeepMind',
    location: 'London, UK',
    avatar: 'EC',
    mutualConnections: 15,
    skills: ['Machine Learning', 'Deep Learning', 'Python'],
    connectionType: 'suggestion'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    title: 'Senior Software Engineer',
    company: 'Microsoft',
    location: 'Seattle, WA',
    avatar: 'MR',
    mutualConnections: 8,
    skills: ['React', 'TypeScript', 'Cloud Computing'],
    connectionType: 'suggestion'
  },
  {
    id: '3',
    name: 'Sarah Kim',
    title: 'Product Manager',
    company: 'Spotify',
    location: 'Stockholm, Sweden',
    avatar: 'SK',
    mutualConnections: 12,
    skills: ['Product Strategy', 'Data Analysis', 'User Research'],
    connectionType: 'suggestion'
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    title: 'Professor of Computer Science',
    company: 'Carnegie Mellon University',
    location: 'Pittsburgh, PA',
    avatar: 'JW',
    mutualConnections: 23,
    skills: ['Cybersecurity', 'Cryptography', 'Blockchain'],
    connectionType: 'suggestion'
  },
  {
    id: '5',
    name: 'Priya Patel',
    title: 'UX Designer',
    company: 'Figma',
    location: 'San Francisco, CA',
    avatar: 'PP',
    mutualConnections: 6,
    skills: ['UI/UX Design', 'Prototyping', 'Design Systems'],
    connectionType: 'suggestion'
  },
  {
    id: '6',
    name: 'Alex Thompson',
    title: 'Data Scientist',
    company: 'Tesla',
    location: 'Austin, TX',
    avatar: 'AT',
    mutualConnections: 9,
    skills: ['Data Science', 'Machine Learning', 'Statistical Analysis'],
    connectionType: 'suggestion'
  },
  {
    id: '7',
    name: 'Maria Garcia',
    title: 'DevOps Engineer',
    company: 'Amazon',
    location: 'Remote',
    avatar: 'MG',
    mutualConnections: 4,
    skills: ['AWS', 'Kubernetes', 'CI/CD'],
    connectionType: 'suggestion'
  },
  {
    id: '8',
    name: 'David Chang',
    title: 'Startup Founder',
    company: 'EduTech Innovations',
    location: 'New York, NY',
    avatar: 'DC',
    mutualConnections: 18,
    skills: ['Entrepreneurship', 'EdTech', 'Leadership'],
    connectionType: 'suggestion'
  }
];

export function NetworkPage() {
  return (
    <div className="flex-1 max-w-4xl mx-auto p-6 space-y-6 bg-background">
      {/* Network Stats Header */}
      <Card className="shadow-sm border-0 bg-white">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Your Network</h1>
              <p className="text-muted-foreground">Grow your professional connections and discover opportunities</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">1,234</div>
                <div className="text-sm text-muted-foreground">Connections</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">856</div>
                <div className="text-sm text-muted-foreground">Following</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">2,891</div>
                <div className="text-sm text-muted-foreground">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">45</div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Users className="h-4 w-4 mr-2" />
                View All Connections
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filters */}
      <Card className="shadow-sm border-0 bg-white">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for people, companies, skills..."
                className="pl-10 h-11 bg-input-background border-0 rounded-lg focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-primary/20 hover:bg-accent">
                All
              </Button>
              <Button variant="outline" size="sm" className="border-primary/20 hover:bg-accent">
                Alumni
              </Button>
              <Button variant="outline" size="sm" className="border-primary/20 hover:bg-accent">
                Same Company
              </Button>
              <Button variant="outline" size="sm" className="border-primary/20 hover:bg-accent">
                Same Field
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Suggested Connections */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">People you may know</h2>
          <Button variant="ghost" className="text-primary hover:bg-accent">
            See all
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {networkSuggestions.map((person) => (
            <Card key={person.id} className="shadow-sm border-0 bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-primary/10 text-primary font-medium text-lg">
                      {person.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="space-y-2">
                      <div>
                        <h3 className="font-semibold text-foreground truncate">{person.name}</h3>
                        <p className="text-sm text-muted-foreground truncate">{person.title}</p>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Building className="h-3 w-3 mr-1 text-primary" />
                          <span className="truncate">{person.company}</span>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1 text-primary" />
                          <span className="truncate">{person.location}</span>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Users className="h-3 w-3 mr-1 text-primary" />
                          <span>{person.mutualConnections} mutual connections</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {person.skills.slice(0, 2).map((skill, index) => (
                          <Badge key={index} variant="secondary" className="bg-accent text-accent-foreground border-0 text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {person.skills.length > 2 && (
                          <Badge variant="secondary" className="bg-muted text-muted-foreground border-0 text-xs">
                            +{person.skills.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <UserPlus className="h-4 w-4 mr-1" />
                    Connect
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-primary/20 text-muted-foreground hover:bg-accent"
                  >
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="text-center pt-6">
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          Load More Suggestions
        </Button>
      </div>
    </div>
  );
}