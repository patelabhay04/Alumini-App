import { Search, Home, Users, Briefcase, Calendar, Heart } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-primary tracking-tight cursor-pointer" onClick={() => onPageChange('home')}>educon</h1>
          
          <nav className="hidden md:flex items-center space-x-1">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-accent ${currentPage === 'home' ? 'bg-accent text-primary' : ''}`}
              onClick={() => onPageChange('home')}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-accent ${currentPage === 'network' ? 'bg-accent text-primary' : ''}`}
              onClick={() => onPageChange('network')}
            >
              <Users className="h-4 w-4" />
              <span>Network</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-accent ${currentPage === 'opportunities' ? 'bg-accent text-primary' : ''}`}
              onClick={() => onPageChange('opportunities')}
            >
              <Briefcase className="h-4 w-4" />
              <span>Opportunities</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-accent">
              <Calendar className="h-4 w-4" />
              <span>Events</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-accent text-primary">
              <Heart className="h-4 w-4" />
              <span>Donation</span>
            </Button>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search students, courses, opportunities..."
              className="pl-10 h-10 bg-input-background border-0 rounded-lg focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </div>
    </header>
  );
}