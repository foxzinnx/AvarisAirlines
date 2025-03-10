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

// Dados padrão movidos para fora do componente para evitar recriações
const DEFAULT_DOTS = [
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
];

// Funções utilitárias movidas para fora do componente
const projectPoint = (lat: number, lng: number) => {
  const x = (lng + 180) * (800 / 360);
  const y = (90 - lat) * (400 / 180);
  return { x, y };
};

const createCurvedPath = (
  start: { x: number; y: number },
  end: { x: number; y: number }
) => {
  // Detecta se o caminho cruza o limite do mapa
  const isCrossingDateLine = Math.abs(start.x - end.x) > 400;
  
  if (isCrossingDateLine) {
    const startX = start.x < end.x ? start.x : end.x;
    const startY = start.x < end.x ? start.y : end.y;
    const endX = start.x > end.x ? start.x : end.x;
    const endY = start.x > end.x ? start.y : end.y;
    
    const midX1 = (startX + 0) / 2;
    const midY1 = Math.min(startY, startY) - 50;
    const path1 = `M ${startX} ${startY} Q ${midX1} ${midY1} 0 ${startY}`;
    
    const midX2 = (800 + endX) / 2;
    const midY2 = Math.min(endY, endY) - 50;
    const path2 = `M 800 ${endY} Q ${midX2} ${midY2} ${endX} ${endY}`;
    
    return { isSplit: true, path1, path2 };
  }
  
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  const curveHeight = distance * 0.2;
  
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - curveHeight;
  
  return { 
    isSplit: false, 
    path: `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}` 
  };
};

// Array de cores pré-definido para evitar recriações
const CONNECTION_COLORS = ["#ef4444"];

export function WorldMap({
  dots = DEFAULT_DOTS,
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [mapSvg, setMapSvg] = useState<string>("");
  const [isLowPerformance, setIsLowPerformance] = useState<boolean>(false);
  const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false);
  
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  
  // Verifica desempenho do dispositivo na montagem
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLowPerformance(
        window.navigator.hardwareConcurrency < 4 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      );
    }
  }, []);
  
  // Gera o mapa com lazy-loading
  useEffect(() => {
    let isMounted = true;

    // Usar requestIdleCallback se disponível ou setTimeout como fallback
    const scheduleMapGeneration = (callback: () => void) => {
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        (window as any).requestIdleCallback(callback);
      } else {
        setTimeout(callback, 200);
      }
    };

    scheduleMapGeneration(() => {
      if (!isMounted) return;
      
      try {
        const map = new DottedMap({ height: 100, grid: "diagonal" });
        
        const svgMap = map.getSVG({
          radius: 0.22,
          color: currentTheme === "dark" ? "#FFFFFF40" : "#00000040",
          shape: "circle",
          backgroundColor: "transparent",
        });
        
        setMapSvg(svgMap);
        setIsMapLoaded(true);
      } catch (error) {
        console.error("Erro ao gerar o mapa:", error);
        // Fallback em caso de erro
        setIsMapLoaded(true);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [currentTheme]);

  // Projeção dos pontos feita uma única vez
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
  }, [dots]);

  // Obter cor de conexão (simplificado)
  const getConnectionColor = (index: number) => {
    return CONNECTION_COLORS[index % CONNECTION_COLORS.length];
  };

  // Estilos baseados no tema
  const themeStyles = useMemo(() => {
    return {
      labelBgColor: currentTheme === "dark" ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.7)",
      labelTextColor: currentTheme === "dark" ? "white" : "black"
    };
  }, [currentTheme]);

  // Esqueleto do componente durante o carregamento
  if (!isMapLoaded) {
    return (
      <div className="flex gap-3 px-4 mt-20 flex-col w-full justify-center items-center">
        <div className="text-center">
            <h1 className="text-[1.5rem] lg:text-3xl font-bold">O Mundo Espera por Você</h1>
            <p className="font-medium pt-2 pb-3 text-[13px] text-center lg:text-[16px]">Com a Avaris Airlines, o mundo está mais perto do que nunca.</p>
        </div>
        <div className="min-w-[700] lg:min-w-auto md:min-w-auto lg:max-w-[1200px] w-full aspect-[2/1] bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="animate-pulse">Carregando mapa...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3 px-4 mt-20 flex-col w-full justify-center items-center">
        <div className="text-center">
            <h1 className="text-[1.5rem] lg:text-3xl font-bold">O Mundo Espera por Você</h1>
            <p className="font-medium pt-2 pb-3 text-[13px] text-center lg:text-[16px]">Com a Avaris Airlines, o mundo está mais perto do que nunca.</p>
        </div>
        <div className="min-w-[700] lg:min-w-auto md:min-w-auto lg:max-w-[1200px] w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans overflow-hidden">
        {mapSvg && (
          <Image
            src={`data:image/svg+xml;utf8,${encodeURIComponent(mapSvg)}`}
            className="h-full w-full pointer-events-none select-none"
            alt="world map"
            height={495}
            width={1056}
            draggable={false}
            priority
            loading="eager"
          />
        )}
        
        <svg
            ref={svgRef}
            viewBox="0 0 800 400"
            className="w-full h-full absolute inset-0 pointer-events-none select-none z-10"
        >
            {/* Caminhos entre pontos */}
            {projectedDots.map((dot, i) => {
              const connectionColor = getConnectionColor(i);
              const animationDuration = isLowPerformance ? 0.5 : 1.5;
              const animationDelay = isLowPerformance ? 0.1 * i : 0.2 * i;
              
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
                    // Caminhos que cruzam a linha de data (divididos em duas partes)
                    <>
                      <motion.path
                        d={dot.path.path1}
                        fill="none"
                        stroke={`url(#path-gradient-${i})`}
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: animationDuration,
                          delay: animationDelay,
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
                          duration: animationDuration,
                          delay: animationDelay,
                          ease: "easeOut",
                        }}
                      />
                    </>
                  ) : (
                    // Caminhos normais
                    <motion.path
                      d={dot.path.path}
                      fill="none"
                      stroke={`url(#path-gradient-${i})`}
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: animationDuration,
                        delay: animationDelay,
                        ease: "easeOut",
                      }}
                    />
                  )}
                </g>
              );
            })}

            {/* Pontos para locais de início e fim */}
            {projectedDots.map((dot, i) => {
              const connectionColor = getConnectionColor(i);
              
              return (
                <g key={`points-group-${i}`}>
                  {/* Ponto inicial */}
                  <g key={`start-${i}`}>
                    {/* Círculo base */}
                    <circle
                      cx={dot.startPoint.x}
                      cy={dot.startPoint.y}
                      r="4"
                      fill={connectionColor}
                      strokeWidth="0"
                    />
                    
                    {/* Pulso animado - condicional baseado no desempenho do dispositivo */}
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
                    
                    {/* Etiqueta para ponto inicial */}
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
                  
                  {/* Ponto final */}
                  <g key={`end-${i}`}>
                    {/* Círculo base */}
                    <circle
                      cx={dot.endPoint.x}
                      cy={dot.endPoint.y}
                      r="4"
                      fill={connectionColor}
                      strokeWidth="0"
                    />
                    
                    {/* Pulso animado - condicional baseado no desempenho do dispositivo */}
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
                    
                    {/* Etiqueta para ponto final */}
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