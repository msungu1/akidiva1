import { useEffect, useRef } from "react";
// Assuming you have this hook or a similar one for persisting functions
import { usePersistFn } from "@/hooks/usePersistFn"; 
import { cn } from "@/lib/utils";

// 1. REMOVED: declare global and interface MapViewProps

const API_KEY = import.meta.env.VITE_FRONTEND_FORGE_API_KEY;
const FORGE_BASE_URL =
  import.meta.env.VITE_FRONTEND_FORGE_API_URL ||
  "https://forge.butterfly-effect.dev";
const MAPS_PROXY_URL = `${FORGE_BASE_URL}/v1/maps/proxy`;

function loadMapScript() {
  return new Promise(resolve => {
    const script = document.createElement("script");
    // Added the callback parameter which is often required by the Maps API
    script.src = `${MAPS_PROXY_URL}/maps/api/js?key=${API_KEY}&v=weekly&libraries=marker,places,geocoding,geometry`;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.onload = () => {
      resolve(null);
    };
    script.onerror = () => {
      console.error("Failed to load Google Maps script");
    };
    document.head.appendChild(script);
  });
}

export function MapView({
  className,
  initialCenter = { lat: -0.9984, lng: 34.4729 }, // Defaulted to Migori, Kenya area
  initialZoom = 12,
  onMapReady,
}) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const init = usePersistFn(async () => {
    // Check if google is already loaded to avoid multiple script injections
    if (!window.google) {
      await loadMapScript();
    }
    
    if (!mapContainer.current) {
      console.error("Map container not found");
      return;
    }

    // Use window.google directly
    map.current = new window.google.maps.Map(mapContainer.current, {
      zoom: initialZoom,
      center: initialCenter,
      mapTypeControl: true,
      fullscreenControl: true,
      zoomControl: true,
      streetViewControl: true,
      mapId: "DEMO_MAP_ID", // Note: Advanced markers require a valid Map ID
    });

    if (onMapReady) {
      onMapReady(map.current);
    }
  });

  useEffect(() => {
    init();
  }, [init]);

  return (
    <div 
      ref={mapContainer} 
      className={cn("w-full h-[400px] rounded-xl overflow-hidden", className)} 
    />
  );
}