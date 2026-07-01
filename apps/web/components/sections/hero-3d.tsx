"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { site, trustBullets } from "@/lib/site-data";

function Scene() {
  return (
    <>
      <ambientLight intensity={1.4} />
      <directionalLight position={[2, 3, 4]} intensity={2.2} />
      <directionalLight position={[-3, -2, -1]} intensity={0.8} color="#f18f14" />
      <Float speed={1.2} rotationIntensity={0.45} floatIntensity={0.6}>
        <mesh position={[-1.4, 0.2, 0.4]}>
          <icosahedronGeometry args={[0.8, 1]} />
          <meshPhysicalMaterial
            color="#8fe3b1"
            transparent
            opacity={0.52}
            roughness={0.12}
            metalness={0.05}
            transmission={0.85}
            clearcoat={1}
          />
        </mesh>
      </Float>
      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.7}>
        <mesh position={[1.2, -0.2, 0.1]}>
          <torusKnotGeometry args={[0.58, 0.18, 96, 16]} />
          <meshStandardMaterial color="#f18f14" metalness={0.35} roughness={0.18} />
        </mesh>
      </Float>
      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh position={[0.1, 1.15, -0.2]}>
          <sphereGeometry args={[0.36, 48, 48]} />
          <meshPhysicalMaterial
            color="#f05e39"
            transparent
            opacity={0.75}
            roughness={0.15}
            transmission={0.5}
          />
        </mesh>
      </Float>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]}>
        <ringGeometry args={[1.25, 1.65, 64]} />
        <meshBasicMaterial color="#dcf9e8" transparent opacity={0.38} />
      </mesh>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}

export function Hero3D() {
  const reducedMotion = useReducedMotion();
  const [supportsWebGL, setSupportsWebGL] = useState(true);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    setSupportsWebGL(Boolean(context));
  }, []);

  return (
    <section className="relative overflow-hidden bg-mesh-white">
      <div className="container grid min-h-[88vh] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sun-100 bg-sun-50 px-4 py-2 text-sm text-slate-700 shadow-sm">
            <Sparkles className="h-4 w-4 text-sun-600" />
            AI-powered websites, software, mobile apps, cloud, and security
          </div>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Encryvia Labs designs and builds modern websites, software platforms, mobile apps, secure databases, cloud systems, and AI-powered solutions for ambitious businesses.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">
              Book a discovery call <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/services" variant="outline">
              Explore our services
            </Button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {trustBullets.slice(0, 4).map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-white/80 p-4 shadow-sm">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
                <p className="text-sm leading-6 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute -left-6 top-8 hidden lg:block">
            <GlassCard className="max-w-64 animate-float-slow">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun-700">Delivery signal</p>
              <p className="mt-2 text-sm text-slate-700">Secure, readable systems with practical AI where it actually helps.</p>
            </GlassCard>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-lift">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-sun-50/70" />
            <div className="relative aspect-[4/5] min-h-[520px] p-4 sm:p-6">
              {supportsWebGL && !reducedMotion ? (
                <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }}>
                  <Scene />
                </Canvas>
              ) : (
                <div className="flex h-full items-center justify-center rounded-[1.5rem] border border-dashed border-border bg-white/80 p-10 text-center">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Secure data motif</p>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
                      A lightweight abstract visual representing encrypted systems, stable delivery, and AI-assisted workflows.
                    </p>
                  </div>
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] bg-gradient-to-tr from-white/10 via-transparent to-white/40" />
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Focus</p>
              <p className="mt-2 text-sm font-medium text-ink">Engineering-led delivery</p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Tone</p>
              <p className="mt-2 text-sm font-medium text-ink">Premium, clear, and calm</p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">AI</p>
              <p className="mt-2 text-sm font-medium text-ink">Practical, not decorative</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
