import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { NetworkPage } from "./components/NetworkPage";
import { OpportunitiesPage } from "./components/OpportunitiesPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'network':
        return <NetworkPage />;
      case 'opportunities':
        return <OpportunitiesPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      {renderCurrentPage()}
    </div>
  );
}