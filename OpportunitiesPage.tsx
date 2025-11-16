import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Search, Filter, MapPin, Clock, DollarSign, GraduationCap, Briefcase, BookOpen, Building, Calendar } from "lucide-react";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Opportunity {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  type: 'internship' | 'job' | 'course';
  location: string;
  duration: string;
  salary?: string;
  price?: string;
  description: string;
  requirements: string[];
  postedBy: {
    name: string;
    avatar: string;
    role: string;
    isAlumni: boolean;
  };
  postedDate: string;
  deadline: string;
  image?: string;
  skills: string[];
}

const opportunities: Opportunity[] = [
  {
    id: '1',
    title: 'Software Engineering Internship',
    company: 'Google',
    companyLogo: 'G',
    type: 'internship',
    location: 'Mountain View, CA',
    duration: '12 weeks',
    salary: '$8,000/month',
    description: 'Join our team to work on cutting-edge technologies and contribute to products used by billions of people worldwide. This internship offers mentorship, real-world projects, and networking opportunities.',
    requirements: ['Computer Science or related field', 'Proficiency in Python/Java/C++', 'Strong problem-solving skills'],
    postedBy: {
      name: 'Sarah Chen',
      avatar: 'SC',
      role: 'Senior Software Engineer',
      isAlumni: true
    },
    postedDate: '2 days ago',
    deadline: 'March 15, 2025',
    image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBpbnRlcm5zaGlwfGVufDF8fHx8MTc1ODIwNjg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    skills: ['Python', 'Machine Learning', 'Algorithms']
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'Spotify',
    companyLogo: 'S',
    type: 'job',
    location: 'New York, NY',
    duration: 'Full-time',
    salary: '$120,000 - $150,000',
    description: 'Build and maintain scalable web applications that enhance user experience for millions of music lovers. Work with modern technologies in an agile environment.',
    requirements: ['3+ years experience', 'React/Node.js expertise', 'Experience with microservices'],
    postedBy: {
      name: 'Stanford Career Center',
      avatar: 'CC',
      role: 'Career Services',
      isAlumni: false
    },
    postedDate: '1 week ago',
    deadline: 'April 1, 2025',
    image: 'https://images.unsplash.com/photo-1664651205193-bfb6bfdd3b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwc3RhcnR1cCUyMGpvYiUyMGNhcmVlcnxlbnwxfHx8fDE3NTgyMDY4OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    skills: ['React', 'Node.js', 'TypeScript']
  },
  {
    id: '3',
    title: 'Advanced Machine Learning Course',
    company: 'Stanford University',
    companyLogo: 'SU',
    type: 'course',
    location: 'Online + Campus',
    duration: '16 weeks',
    price: '$2,500',
    description: 'Comprehensive course covering deep learning, neural networks, and AI applications. Includes hands-on projects and industry case studies.',
    requirements: ['Basic programming knowledge', 'Linear algebra background', 'Statistics fundamentals'],
    postedBy: {
      name: 'Dr. Andrew Ng',
      avatar: 'AN',
      role: 'Professor',
      isAlumni: false
    },
    postedDate: '3 days ago',
    deadline: 'February 28, 2025',
    image: 'https://images.unsplash.com/photo-1739956802238-2f37aefec7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGNvdXJzZXMlMjBlZHVjYXRpb258ZW58MXx8fHwxNzU4MjA2ODkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    skills: ['Machine Learning', 'Deep Learning', 'Python']
  },
  {
    id: '4',
    title: 'Data Science Internship',
    company: 'Meta',
    companyLogo: 'M',
    type: 'internship',
    location: 'Seattle, WA',
    duration: '10 weeks',
    salary: '$7,500/month',
    description: 'Work on data-driven insights to improve user experience across Facebook, Instagram, and WhatsApp. Collaborate with cross-functional teams on impactful projects.',
    requirements: ['Statistics/Data Science background', 'Python/R proficiency', 'SQL knowledge'],
    postedBy: {
      name: 'Mike Johnson',
      avatar: 'MJ',
      role: 'Data Science Manager',
      isAlumni: true
    },
    postedDate: '5 days ago',
    deadline: 'March 20, 2025',
    skills: ['Data Science', 'Python', 'SQL']
  },
  {
    id: '5',
    title: 'UX Design Bootcamp',
    company: 'Design Institute',
    companyLogo: 'DI',
    type: 'course',
    location: 'San Francisco, CA',
    duration: '12 weeks',
    price: '$3,200',
    description: 'Intensive bootcamp covering user research, wireframing, prototyping, and design systems. Portfolio development and career support included.',
    requirements: ['Basic design interest', 'Creative portfolio', 'Design software familiarity'],
    postedBy: {
      name: 'Emma Wilson',
      avatar: 'EW',
      role: 'Lead UX Designer',
      isAlumni: true
    },
    postedDate: '1 week ago',
    deadline: 'March 10, 2025',
    skills: ['UI/UX Design', 'Figma', 'User Research']
  },
  {
    id: '6',
    title: 'Product Manager',
    company: 'Airbnb',
    companyLogo: 'A',
    type: 'job',
    location: 'Remote',
    duration: 'Full-time',
    salary: '$140,000 - $180,000',
    description: 'Lead product strategy for our host platform, working closely with engineering, design, and data teams to build features that empower millions of hosts worldwide.',
    requirements: ['5+ years PM experience', 'Technical background preferred', 'Strong analytical skills'],
    postedBy: {
      name: 'Career Services',
      avatar: 'CS',
      role: 'University Career Center',
      isAlumni: false
    },
    postedDate: '2 weeks ago',
    deadline: 'April 15, 2025',
    skills: ['Product Management', 'Strategy', 'Analytics']
  }
];

export function OpportunitiesPage() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'internship':
        return <GraduationCap className="h-4 w-4" />;
      case 'job':
        return <Briefcase className="h-4 w-4" />;
      case 'course':
        return <BookOpen className="h-4 w-4" />;
      default:
        return <Briefcase className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'internship':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'job':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'course':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="flex-1 max-w-6xl mx-auto p-6 space-y-6 bg-background">
      {/* Header */}
      <Card className="shadow-sm border-0 bg-white">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Opportunities</h1>
              <p className="text-muted-foreground">Discover internships, jobs, and courses from top companies and institutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center p-4 bg-accent/50 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-lg font-semibold text-primary">156</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </div>
              <div className="text-center p-4 bg-accent/50 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-lg font-semibold text-primary">89</div>
                <div className="text-sm text-muted-foreground">Jobs</div>
              </div>
              <div className="text-center p-4 bg-accent/50 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="text-lg font-semibold text-primary">234</div>
                <div className="text-sm text-muted-foreground">Courses</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filters */}
      <Card className="shadow-sm border-0 bg-white">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search opportunities, companies, skills..."
                className="pl-10 h-11 bg-input-background border-0 rounded-lg focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex gap-3">
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="internship">Internships</SelectItem>
                  <SelectItem value="job">Jobs</SelectItem>
                  <SelectItem value="course">Courses</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="onsite">On-site</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" className="border-primary/20 hover:bg-accent">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Opportunities List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">Featured Opportunities</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-primary/20 hover:bg-accent">
              Latest
            </Button>
            <Button variant="outline" size="sm" className="border-primary/20 hover:bg-accent">
              Deadline Soon
            </Button>
            <Button variant="outline" size="sm" className="border-primary/20 hover:bg-accent">
              High Salary
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {opportunities.map((opportunity) => (
            <Card key={opportunity.id} className="shadow-sm border-0 bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <Badge className={`${getTypeColor(opportunity.type)} border`}>
                            {getTypeIcon(opportunity.type)}
                            <span className="ml-1 capitalize">{opportunity.type}</span>
                          </Badge>
                          {opportunity.postedBy.isAlumni && (
                            <Badge variant="secondary" className="bg-accent text-accent-foreground border-0">
                              Alumni Post
                            </Badge>
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{opportunity.title}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Building className="h-4 w-4" />
                            <span className="font-medium">{opportunity.company}</span>
                          </div>
                        </div>
                      </div>
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-primary/10 text-primary font-medium">
                          {opportunity.companyLogo}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    <p className="text-sm text-foreground leading-relaxed">{opportunity.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{opportunity.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{opportunity.duration}</span>
                      </div>
                      {opportunity.salary && (
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{opportunity.salary}</span>
                        </div>
                      )}
                      {opportunity.price && (
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{opportunity.price}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Due: {opportunity.deadline}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {opportunity.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-accent text-accent-foreground border-0">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-primary/10 text-primary text-xs">
                            {opportunity.postedBy.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium text-foreground">{opportunity.postedBy.name}</p>
                          <p className="text-xs text-muted-foreground">{opportunity.postedBy.role} • {opportunity.postedDate}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="border-primary/20 text-muted-foreground hover:bg-accent">
                          Save
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </div>

                  {opportunity.image && (
                    <div className="w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={opportunity.image}
                        alt={opportunity.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="text-center pt-6">
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          Load More Opportunities
        </Button>
      </div>
    </div>
  );
}