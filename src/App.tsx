import React, { useState } from 'react';
import { ThemeToggle } from './components/theme-toggle';
import { RideBooking } from './components/ride-booking';
import { MapComponent } from './components/map-component';
import { DriverInfo } from './components/driver-info';
import { useLocation } from './hooks/use-location';
import { Car, MapPin } from 'lucide-react';

interface Driver {
  id: string;
  name: string;
  rating: number;
  eta: string;
  location: {
    lat: number;
    lng: number;
  };
}

function App() {
  const [hasRide, setHasRide] = useState(false);
  const [driver, setDriver] = useState<Driver | null>(null);
  const [destination, setDestination] = useState<string>('');
  const { location, error } = useLocation();

  const handleBookRide = (dest: string) => {
    setDestination(dest);
    
    // Simulate finding a driver
    setTimeout(() => {
      const mockDriver: Driver = {
        id: '1',
        name: 'John Smith',
        rating: 4.8,
        eta: '5 mins',
        location: {
          lat: location?.lat || 37.7749,
          lng: location?.lng || -122.4194
        }
      };
      
      setDriver(mockDriver);
      setHasRide(true);
    }, 2000);
  };

  const handleCancelRide = () => {
    setHasRide(false);
    setDriver(null);
    setDestination('');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">CabBook</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Booking Interface */}
          <div className="space-y-6">
            {/* Location Display */}
            <div className="bg-card rounded-lg p-4 border">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Current Location</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {location ? `${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}` : 'Getting location...'}
              </p>
              {error && (
                <p className="text-sm text-destructive mt-1">{error}</p>
              )}
            </div>

            {/* Ride Booking or Driver Info */}
            {!hasRide ? (
              <RideBooking onBookRide={handleBookRide} />
            ) : (
              <DriverInfo driver={driver} destination={destination} onCancel={handleCancelRide} />
            )}
          </div>

          {/* Right Panel - Map */}
          <div className="h-[500px] lg:h-[600px]">
            <MapComponent 
              userLocation={location}
              driverLocation={driver?.location}
              destination={destination}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;