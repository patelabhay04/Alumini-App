import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MapPin, Building, Calendar, Link as LinkIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProfileSidebar() {
  return (
    <div className="w-80 p-6 space-y-6 bg-sidebar border-r">
      <Card className="shadow-sm border-0 bg-white">
        <CardHeader className="pb-4">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600178572204-6ac8886aae63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4MTM0OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-primary/10"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Alex Johnson</h3>
              <p className="text-sm text-muted-foreground">Computer Science Student</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <Building className="h-4 w-4 text-primary" />
              <span>Stanford University</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>California, USA</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              <span>Joined September 2024</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <LinkIcon className="h-4 w-4 text-primary" />
              <span className="text-primary hover:underline cursor-pointer">alexjohnson.dev</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-sm text-foreground leading-relaxed">Passionate about AI, machine learning, and educational technology. Always looking to connect with fellow learners!</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-accent text-accent-foreground border-0">Machine Learning</Badge>
            <Badge variant="secondary" className="bg-accent text-accent-foreground border-0">React</Badge>
            <Badge variant="secondary" className="bg-accent text-accent-foreground border-0">Python</Badge>
            <Badge variant="secondary" className="bg-accent text-accent-foreground border-0">Data Science</Badge>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center text-sm border-t pt-4">
            <div>
              <div className="font-semibold text-lg text-primary">1,234</div>
              <div className="text-muted-foreground">Connections</div>
            </div>
            <div>
              <div className="font-semibold text-lg text-primary">567</div>
              <div className="text-muted-foreground">Posts</div>
            </div>
            <div>
              <div className="font-semibold text-lg text-primary">89</div>
              <div className="text-muted-foreground">Projects</div>
            </div>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Edit Profile</Button>
        </CardContent>
      </Card>

      <Card className="shadow-sm border-0 bg-white">
        <CardHeader className="pb-4">
          <h4 className="font-semibold text-foreground">Suggested Connections</h4>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { name: "Sarah Chen", role: "UX Designer", mutual: 5 },
            { name: "Mike Roberts", role: "Software Engineer", mutual: 12 },
            { name: "Emma Wilson", role: "Data Scientist", mutual: 8 }
          ].map((person, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-primary">{person.name[0]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate text-foreground">{person.name}</p>
                <p className="text-xs text-muted-foreground truncate">{person.role}</p>
                <p className="text-xs text-muted-foreground">{person.mutual} mutual connections</p>
              </div>
              <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">Connect</Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}