
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plane, Package, Clock, Check, AlertTriangle } from "lucide-react";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [trackingResult, setTrackingResult] = useState<null | {
    status: "delivered" | "transit" | "processing" | "not-found";
    details: {
      orderNumber: string;
      currentLocation?: string;
      estimatedDelivery?: string;
      updates?: {
        date: string;
        status: string;
        location: string;
      }[];
    };
  }>(null);
  
  const handleTrackingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingNumber.trim()) return;
    
    setIsSearching(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // For demo purposes, let's simulate different tracking statuses based on input
      if (trackingNumber.includes("DEL")) {
        setTrackingResult({
          status: "delivered",
          details: {
            orderNumber: trackingNumber,
            updates: [
              {
                date: "April 15, 2025",
                status: "Delivered",
                location: "São Luis, Brazil"
              },
              {
                date: "April 13, 2025",
                status: "Out for delivery",
                location: "São Luis, Brazil"
              },
              {
                date: "April 12, 2025",
                status: "Arrived at local facility",
                location: "São Luis, Brazil"
              },
              {
                date: "April 10, 2025",
                status: "Shipped",
                location: "Amsterdam, Netherlands"
              },
              {
                date: "April 9, 2025",
                status: "Order processed",
                location: "Amsterdam, Netherlands"
              }
            ]
          }
        });
      } else if (trackingNumber.includes("TR")) {
        setTrackingResult({
          status: "transit",
          details: {
            orderNumber: trackingNumber,
            currentLocation: "Frankfurt, Germany",
            estimatedDelivery: "April 18, 2025",
            updates: [
              {
                date: "April 14, 2025",
                status: "In transit",
                location: "Frankfurt, Germany"
              },
              {
                date: "April 13, 2025",
                status: "Departed",
                location: "Amsterdam, Netherlands"
              },
              {
                date: "April 12, 2025",
                status: "Shipped",
                location: "Amsterdam, Netherlands"
              },
              {
                date: "April 11, 2025",
                status: "Order processed",
                location: "Amsterdam, Netherlands"
              }
            ]
          }
        });
      } else if (trackingNumber.includes("PR")) {
        setTrackingResult({
          status: "processing",
          details: {
            orderNumber: trackingNumber,
            estimatedDelivery: "April 20, 2025",
            updates: [
              {
                date: "April 14, 2025",
                status: "Order processed",
                location: "Amsterdam, Netherlands"
              }
            ]
          }
        });
      } else {
        setTrackingResult({
          status: "not-found",
          details: {
            orderNumber: trackingNumber
          }
        });
      }
      
      setIsSearching(false);
    }, 1500);
  };
  
  const resetTracking = () => {
    setTrackingNumber("");
    setTrackingResult(null);
  };

  const renderTrackingResult = () => {
    if (!trackingResult) return null;
    
    switch (trackingResult.status) {
      case "delivered":
        return (
          <div className="bg-green-50 border border-green-200 rounded-sm p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-100 rounded-full p-3">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-playfair text-lg font-bold text-green-800">Package Delivered</h3>
                <p className="font-montserrat text-sm text-green-700">
                  Order #{trackingResult.details.orderNumber} has been delivered
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {trackingResult.details.updates?.map((update, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 relative">
                    <div className={`h-4 w-4 rounded-full ${index === 0 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    {index !== trackingResult.details.updates!.length - 1 && (
                      <div className="absolute top-4 bottom-0 left-1.5 w-0.5 bg-gray-200 h-full"></div>
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="font-montserrat text-sm font-medium">{update.status}</p>
                    <p className="font-montserrat text-xs text-gray-500">{update.date} - {update.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case "transit":
        return (
          <div className="bg-blue-50 border border-blue-200 rounded-sm p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Plane className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-playfair text-lg font-bold text-blue-800">Package In Transit</h3>
                <p className="font-montserrat text-sm text-blue-700">
                  Currently in {trackingResult.details.currentLocation}
                </p>
                <p className="font-montserrat text-sm text-blue-700">
                  Estimated delivery: {trackingResult.details.estimatedDelivery}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {trackingResult.details.updates?.map((update, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 relative">
                    <div className={`h-4 w-4 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                    {index !== trackingResult.details.updates!.length - 1 && (
                      <div className="absolute top-4 bottom-0 left-1.5 w-0.5 bg-gray-200 h-full"></div>
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="font-montserrat text-sm font-medium">{update.status}</p>
                    <p className="font-montserrat text-xs text-gray-500">{update.date} - {update.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case "processing":
        return (
          <div className="bg-amber-50 border border-amber-200 rounded-sm p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-amber-100 rounded-full p-3">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-playfair text-lg font-bold text-amber-800">Order Processing</h3>
                <p className="font-montserrat text-sm text-amber-700">
                  Your order is being prepared for shipping
                </p>
                <p className="font-montserrat text-sm text-amber-700">
                  Estimated shipping: {trackingResult.details.estimatedDelivery}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {trackingResult.details.updates?.map((update, index) => (
                <div key={index} className="flex">
                  <div className="mr-4">
                    <div className="h-4 w-4 rounded-full bg-amber-500"></div>
                  </div>
                  <div className="pb-6">
                    <p className="font-montserrat text-sm font-medium">{update.status}</p>
                    <p className="font-montserrat text-xs text-gray-500">{update.date} - {update.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case "not-found":
        return (
          <div className="bg-red-50 border border-red-200 rounded-sm p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 rounded-full p-3">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-playfair text-lg font-bold text-red-800">Order Not Found</h3>
                <p className="font-montserrat text-sm text-red-700">
                  We couldn't find any information for tracking number {trackingResult.details.orderNumber}
                </p>
                <p className="font-montserrat text-sm text-red-700 mt-2">
                  Please check the tracking number and try again, or contact our customer service.
                </p>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center">
            Track Your <span className="text-luxury-gold">Order</span>
          </h1>
          
          <div className="bg-luxury-beige/20 p-8 rounded-sm mb-12">
            <h2 className="font-playfair text-2xl font-bold mb-6">Enter Your Tracking Number</h2>
            
            <form onSubmit={handleTrackingSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="e.g., TR12345 or DEL67890"
                  className="flex-grow font-montserrat"
                  disabled={isSearching}
                />
                <Button 
                  type="submit" 
                  variant="gold"
                  disabled={isSearching || !trackingNumber.trim()}
                  className="font-montserrat min-w-28"
                >
                  {isSearching ? "Searching..." : "Track"}
                </Button>
              </div>
            </form>
            
            <div className="flex items-center mt-4">
              <Package className="h-4 w-4 text-gray-400 mr-2" />
              <p className="font-montserrat text-xs text-gray-500">
                For demo, try tracking numbers containing "DEL" (delivered), "TR" (in transit), or "PR" (processing)
              </p>
            </div>
          </div>
          
          {isSearching ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-luxury-gold border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="font-montserrat text-sm mt-4">Tracking your package...</p>
            </div>
          ) : trackingResult ? (
            <div className="space-y-6">
              {renderTrackingResult()}
              <div className="text-center">
                <Button 
                  variant="outline" 
                  onClick={resetTracking}
                  className="font-montserrat"
                >
                  Track Another Package
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="flex justify-center mb-6">
                <div className="bg-luxury-beige/40 p-4 rounded-full">
                  <Plane className="h-12 w-12 text-luxury-gold" />
                </div>
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Fast Shipping to Brazil, Netherlands and Worldwide</h3>
              <p className="font-montserrat text-sm text-gray-600 max-w-lg mx-auto">
                At Africanstyle Inkanyezi, we pride ourselves on fast and reliable shipping. Track your order anytime to see its current status and estimated delivery date.
              </p>
              <div className="flex justify-center space-x-4 mt-6">
                <span className="text-3xl">🇧🇷</span>
                <span className="text-3xl">🇳🇱</span>
                <span className="text-3xl">✈️</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Tracking;
