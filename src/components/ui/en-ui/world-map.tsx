"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export function WorldMap({
  dots = [
    // Global connections showcasing different regions
    { 
      start: { lat: 33.7128, lng: -73.0060, label: "New York" },
      end: { lat: 37.8566, lng: 2.3522, label: "Paris" }
    },
    { 
      start: { lat: 22.6762, lng: 140.6503, label: "Tokyo" },
      end: { lat: 30.7749, lng: -122.4194, label: "San Francisco" }
    },
    { 
      start: { lat: -50.8688, lng: 152.2093, label: "Sydney" },
      end: { lat: -13.3521, lng: 103.8198, label: "Singapore" }
    },
    { 
      start: { lat: 50.7558, lng: 37.6173, label: "Moscow" },
      end: { lat: 29.9042, lng: 114.4074, label: "Beijing" }
    },
    { 
      start: { lat: -34.5505, lng: -49.6333, label: "São Paulo" },
      end: { lat: -53.6037, lng: -58.3816, label: "Buenos Aires" }
    },
    { 
      start: { lat: 50.5074, lng: -1.9278, label: "London" },
      end: { lat: 6.2048, lng: 56.2708, label: "Dubai" }
    }
  ],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [mapSvg, setMapSvg] = useState<string>("");
  const [isLowPerformance, setIsLowPerformance] = useState<boolean>(false);
  
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  
  // Check device performance on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLowPerformance(
        window.navigator.hardwareConcurrency < 4 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      );
    }
  }, []);
  
  // Recalculate map only when theme changes
  useEffect(() => {
    const generateMap = () => {
      const map = new DottedMap({ height: 100, grid: "diagonal" });
      
      const svgMap = map.getSVG({
        radius: 0.22,
        color: currentTheme === "dark" ? "#FFFFFF40" : "#00000040",
        shape: "circle",
        backgroundColor: "transparent",
      });
      
      setMapSvg(svgMap);
    };

    generateMap();
  }, [currentTheme]);

  // Memoize the project point function to avoid recalculating
  const projectPoint = useMemo(() => {
    return (lat: number, lng: number) => {
      // Improved coordinate projection
      const x = (lng + 180) * (800 / 360);
      // Adjust y-coordinate calculation for better accuracy
      const y = (90 - lat) * (400 / 180);
      return { x, y };
    };
  }, []);

  // Memoize the curve path creation
  const createCurvedPath = useMemo(() => {
    return (
      start: { x: number; y: number },
      end: { x: number; y: number }
    ) => {
      // Detect if path crosses the map boundary (for paths that should wrap around the world)
      const isCrossingDateLine = Math.abs(start.x - end.x) > 400;
      
      if (isCrossingDateLine) {
        // For paths crossing the date line, create two curved paths
        // This simulates the connection going around the other side of the globe
        const startX = start.x < end.x ? start.x : end.x;
        const startY = start.x < end.x ? start.y : end.y;
        const endX = start.x > end.x ? start.x : end.x;
        const endY = start.x > end.x ? start.y : end.y;
        
        // Path to left edge
        const midX1 = (startX + 0) / 2;
        const midY1 = Math.min(startY, startY) - 50;
        const path1 = `M ${startX} ${startY} Q ${midX1} ${midY1} 0 ${startY}`;
        
        // Path from right edge
        const midX2 = (800 + endX) / 2;
        const midY2 = Math.min(endY, endY) - 50;
        const path2 = `M 800 ${endY} Q ${midX2} ${midY2} ${endX} ${endY}`;
        
        return { isSplit: true, path1, path2 };
      }
      
      // Normal curve calculation for paths that don't cross the date line
      const dx = end.x - start.x;
      const dy = end.y - start.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Adjust curve height based on distance
      const curveHeight = distance * 0.2;
      
      const midX = (start.x + end.x) / 2;
      const midY = Math.min(start.y, end.y) - curveHeight;
      
      return { 
        isSplit: false, 
        path: `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}` 
      };
    };
  }, []);

  // Memoize projected dots to prevent recalculations on every render
  const projectedDots = useMemo(() => {
    return dots.map(dot => {
      const startPoint = projectPoint(dot.start.lat, dot.start.lng);
      const endPoint = projectPoint(dot.end.lat, dot.end.lng);
      return {
        startPoint,
        endPoint,
        startLabel: dot.start.label,
        endLabel: dot.end.label,
        path: createCurvedPath(startPoint, endPoint)
      };
    });
  }, [dots, projectPoint, createCurvedPath]);

  // Generate a unique color for each connection pair
  const getConnectionColor = useMemo(() => {
    return (index: number) => {
      const colors = [
        "#ef4444", // Sky blue (default)
        "#ef4444", // Red
        "#ef4444", // Orange
        "#ef4444", // Lime
        "#ef4444", // Cyan
        "#ef4444", // Violet
        "#ef4444"  // Pink
      ];
      
      return colors[index % colors.length];
    };
  }, []);

  // Memoize theme-dependent values
  const themeStyles = useMemo(() => {
    return {
      labelBgColor: currentTheme === "dark" ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.7)",
      labelTextColor: currentTheme === "dark" ? "white" : "black"
    };
  }, [currentTheme]);

  // Show loading state while map is generating
  if (!mapSvg) {
    return (
      <div className="flex gap-3 px-4 mt-20 flex-col w-full justify-center items-center">
        <div className="min-w-[700] lg:min-w-auto md:min-w-auto lg:max-w-[1200px] w-full aspect-[2/1] bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
          <span>Loading map...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3 px-4 mt-20 flex-col w-full justify-center items-center">
        <div className="text-center">
            <h1 className="text-[1.5rem] lg:text-3xl font-bold">The world is waiting for you</h1>
            <p className="font-medium pt-2 pb-3 text-[13px] text-center lg:text-[16px]">With Avaris Airlines, the world is closer than ever.</p>
        </div>
        <div className="min-w-[700] lg:min-w-auto md:min-w-auto lg:max-w-[1200px] w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans overflow-hidden">
        <Image
          src={`data:image/svg+xml;utf8,${encodeURIComponent(mapSvg)}`}
          className="h-full w-full pointer-events-none select-none"
          alt="world map"
          height={495}
          width={1056}
          draggable={false}
          priority
        />
        
        <svg
            ref={svgRef}
            viewBox="0 0 800 400"
            className="w-full h-full absolute inset-0 pointer-events-none select-none z-10"
        >
            {/* Paths between points */}
            {projectedDots.map((dot, i) => {
              const connectionColor = getConnectionColor(i);
              
              return (
                <g key={`path-group-${i}`}>
                  <defs>
                    <linearGradient id={`path-gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={currentTheme === "dark" ? "#000000" : "#ffffff"} stopOpacity="0" />
                      <stop offset="5%" stopColor={connectionColor} stopOpacity="1" />
                      <stop offset="95%" stopColor={connectionColor} stopOpacity="1" />
                      <stop offset="100%" stopColor={currentTheme === "dark" ? "#000000" : "#ffffff"} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {dot.path.isSplit ? (
                    // For paths that cross the date line (split into two parts)
                    <>
                      <motion.path
                        d={dot.path.path1}
                        fill="none"
                        stroke={`url(#path-gradient-${i})`}
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: isLowPerformance ? 0.5 : 1.5,
                          delay: isLowPerformance ? 0.1 * i : 0.2 * i,
                          ease: "easeOut",
                        }}
                      />
                      <motion.path
                        d={dot.path.path2}
                        fill="none"
                        stroke={`url(#path-gradient-${i})`}
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: isLowPerformance ? 0.5 : 1.5,
                          delay: isLowPerformance ? 0.1 * i : 0.2 * i,
                          ease: "easeOut",
                        }}
                      />
                    </>
                  ) : (
                    // Normal paths
                    <motion.path
                      d={dot.path.path}
                      fill="none"
                      stroke={`url(#path-gradient-${i})`}
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: isLowPerformance ? 0.5 : 1.5,
                        delay: isLowPerformance ? 0.1 * i : 0.2 * i,
                        ease: "easeOut",
                      }}
                    />
                  )}
                </g>
              );
            })}

            {/* Points for start and end locations */}
            {projectedDots.map((dot, i) => {
              const connectionColor = getConnectionColor(i);
              
              return (
                <g key={`points-group-${i}`}>
                  {/* Start point */}
                  <g key={`start-${i}`}>
                    {/* Base circle */}
                    <circle
                      cx={dot.startPoint.x}
                      cy={dot.startPoint.y}
                      r="4"
                      fill={connectionColor}
                      strokeWidth="0"
                    />
                    
                    {/* Animated pulse - conditional based on device performance */}
                    {!isLowPerformance && (
                      <circle
                        cx={dot.startPoint.x}
                        cy={dot.startPoint.y}
                        r="4"
                        fill={connectionColor}
                        opacity="0.7"
                      >
                        <animate
                          attributeName="r"
                          from="4"
                          to="12"
                          dur="1.5s"
                          begin="0s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          from="0.7"
                          to="0"
                          dur="1.5s"
                          begin="0s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                    
                    {/* Label for start point */}
                    {dot.startLabel && (
                      <g>
                        <rect 
                          x={dot.startPoint.x - (dot.startLabel.length * 3)}
                          y={dot.startPoint.y - 25}
                          width={dot.startLabel.length * 6}
                          height="15"
                          rx="3"
                          fill={themeStyles.labelBgColor}
                          strokeWidth="0"
                        />
                        <text
                          x={dot.startPoint.x}
                          y={dot.startPoint.y - 14}
                          textAnchor="middle"
                          fill={themeStyles.labelTextColor}
                          fontSize="9"
                          fontWeight="bold"
                        >
                          {dot.startLabel}
                        </text>
                      </g>
                    )}
                  </g>
                  
                  {/* End point */}
                  <g key={`end-${i}`}>
                    {/* Base circle */}
                    <circle
                      cx={dot.endPoint.x}
                      cy={dot.endPoint.y}
                      r="4"
                      fill={connectionColor}
                      strokeWidth="0"
                    />
                    
                    {/* Animated pulse - conditional based on device performance */}
                    {!isLowPerformance && (
                      <circle
                        cx={dot.endPoint.x}
                        cy={dot.endPoint.y}
                        r="4"
                        fill={connectionColor}
                        opacity="0.7"
                      >
                        <animate
                          attributeName="r"
                          from="4"
                          to="12"
                          dur="1.5s"
                          begin="0s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          from="0.7"
                          to="0"
                          dur="1.5s"
                          begin="0s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                    
                    {/* Label for end point */}
                    {dot.endLabel && (
                      <g>
                        <rect 
                          x={dot.endPoint.x - (dot.endLabel.length * 3)}
                          y={dot.endPoint.y - 25}
                          width={dot.endLabel.length * 6}
                          height="15"
                          rx="3"
                          fill={themeStyles.labelBgColor}
                          strokeWidth="0"
                        />
                        <text
                          x={dot.endPoint.x}
                          y={dot.endPoint.y - 14}
                          textAnchor="middle"
                          fill={themeStyles.labelTextColor}
                          fontSize="9"
                          fontWeight="bold"
                        >
                          {dot.endLabel}
                        </text>
                      </g>
                    )}
                  </g>
                </g>
              );
            })}
        </svg>
        </div>
    </div>
  );
}