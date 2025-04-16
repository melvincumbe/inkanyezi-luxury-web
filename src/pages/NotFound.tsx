import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="font-playfair text-6xl font-bold mb-6">404</h1>
          <p className="font-montserrat text-xl text-gray-600 mb-8">
            The page you are looking for could not be found.
          </p>
          <Button 
            variant="gold"
            className="font-montserrat"
            asChild
          >
            <Link to="/">
              Return to Homepage
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
