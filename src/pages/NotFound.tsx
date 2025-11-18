import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! Pagina niet gevonden</p>
        <Link to="/" className="text-primary hover:text-primary/80 underline">
          Terug naar Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;