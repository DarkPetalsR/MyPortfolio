import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const toSphericalCoords = (lng, lat, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (-lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
};

const GlobeMesh = ({ geojson, globeRadius }) => {
  const groupRef = useRef();

  useFrame(() => {
    groupRef.current.rotation.y += 0.001;
  });

  const lines = [];

  geojson.features.forEach((feature) => {
    const geom = feature.geometry;

    const drawLines = (coordinates) => {
      coordinates.forEach((ring) => {
        const points = ring.map(([lng, lat]) =>
          toSphericalCoords(lng, lat, globeRadius)
        );
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        const material = new THREE.LineBasicMaterial({
          color: new THREE.Color("#9b00ff"), // 🎨 More purple
          transparent: true,
          opacity: 1,
        });

        lines.push(
          <line geometry={geometry} material={material} key={Math.random()} />
        );
      });
    };

    if (geom.type === "Polygon") {
      drawLines(geom.coordinates);
    } else if (geom.type === "MultiPolygon") {
      geom.coordinates.forEach((polygon) => drawLines(polygon));
    }
  });

  return (
    <group ref={groupRef}>
      {/* Transparent globe */}
      <mesh>
        <sphereGeometry args={[globeRadius, 64, 64]} />
        <meshBasicMaterial color="#220022" transparent opacity={0.3} />
      </mesh>

      {/* Glowing country outlines */}
      {lines}
    </group>
  );
};

const Globe = () => {
  const [geojson, setGeojson] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json"
    )
      .then((res) => res.json())
      .then((data) => setGeojson(data));
  }, []);

  return (
    <div className="w-full h-screen absolute top-0 left-0 z-0">
      <Canvas camera={{ position: [0, 0, 300], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={3} color="#9b00ff" /> {/* consistent purple */}
        <Suspense fallback={null}>
          {geojson && <GlobeMesh geojson={geojson} globeRadius={100} />}
        </Suspense>
        <EffectComposer>
          <Bloom intensity={1.5} luminanceThreshold={0} luminanceSmoothing={0.9} />
        </EffectComposer>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Globe;
