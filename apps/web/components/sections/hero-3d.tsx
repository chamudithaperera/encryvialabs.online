"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-data";

function OrbScene() {
  return (
    <>
      <ambientLight intensity={0.9} />
      <pointLight position={[0, 2.4, 2.5]} intensity={2.5} color="#ffb31d" />
      <pointLight position={[0, -2.5, 2.2]} intensity={2.2} color="#c9b2ff" />
      <directionalLight position={[-4, 2, 3]} intensity={1.2} color="#ffffff" />

      <Float speed={1.15} rotationIntensity={0.25} floatIntensity={0.8}>
        <mesh>
          <sphereGeometry args={[1.9, 96, 96]} />
          <meshPhysicalMaterial
            color="#d7c7ff"
            transparent
            opacity={0.16}
            roughness={0.04}
            metalness={0.05}
            transmission={0.9}
            clearcoat={1}
            clearcoatRoughness={0.06}
          />
        </mesh>
      </Float>

      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.9}>
        <mesh>
          <torusGeometry args={[1.55, 0.08, 80, 180]} />
          <meshStandardMaterial color="#fff2c2" emissive="#ff8e1a" emissiveIntensity={1.6} />
        </mesh>
      </Float>

      <Float speed={1.25} rotationIntensity={0.35} floatIntensity={0.65}>
        <mesh position={[0, 0, 0.45]}>
          <sphereGeometry args={[0.92, 64, 64]} />
          <meshPhysicalMaterial
            color="#f0eaff"
            roughness={0.02}
            metalness={0.08}
            transmission={0.94}
            clearcoat={1}
            clearcoatRoughness={0.04}
          />
        </mesh>
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} />
    </>
  );
}

function HeroTopNav() {
  const items = ["Services", "Solutions", "Career", "Company", "Blog"];
  return (
    <nav className="flex w-full items-center justify-between gap-4 border-b border-white/8 px-5 py-4 sm:px-8">
      <div className="flex items-center gap-2 text-white">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[11px] font-black text-black">E</span>
        <span className="text-sm font-semibold tracking-wide">{site.name}</span>
      </div>
      <div className="hidden items-center gap-8 md:flex">
        {items.map((item) => (
          <span key={item} className="text-xs font-medium uppercase tracking-[0.16em] text-white/75">
            {item}
          </span>
        ))}
      </div>
      <Button href="/contact" className="shrink-0 px-4 py-2 text-xs uppercase tracking-[0.18em]">
        Contact us
      </Button>
    </nav>
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
    <section className="px-4 pb-8 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1520px]">
        <div className="overflow-hidden rounded-[2.25rem] border border-black/10 bg-[#0a0505] text-white shadow-[0_40px_120px_rgba(0,0,0,0.34)]">
          <div className="relative isolate overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,181,29,0.32),_transparent_24%),radial-gradient(circle_at_50%_58%,_rgba(122,68,255,0.23),_transparent_28%),radial-gradient(circle_at_bottom,_rgba(240,94,57,0.22),_transparent_26%),linear-gradient(180deg,_#130807_0%,_#090505_56%,_#0b0606_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_25%,transparent_75%,rgba(255,255,255,0.04))]" />
            <HeroTopNav />

            <div className="relative grid min-h-[760px] place-items-center px-5 py-10 sm:px-8 sm:py-14">
              <div className="absolute inset-x-0 top-20 mx-auto h-[420px] w-[420px] rounded-full bg-[#ff9d20]/20 blur-[120px]" />
              <div className="absolute inset-x-0 bottom-24 mx-auto h-[360px] w-[360px] rounded-full bg-[#7a44ff]/26 blur-[120px]" />

              <div className="relative grid w-full place-items-center">
                <div className="relative flex w-full flex-col items-center gap-8">
                  <div className="grid place-items-center">
                    <div className="absolute inset-[-40px] rounded-full bg-[radial-gradient(circle,rgba(255,227,160,0.52),transparent_56%)] blur-2xl" />
                    <div className="absolute inset-[-12px] rounded-full border border-white/25 opacity-80" />
                    <div className="absolute inset-[-24px] rounded-full border border-[#c9b2ff]/55 opacity-70" />
                    <div className="absolute inset-[-44px] rounded-full border border-[#ff9f4d]/25 opacity-60" />

                    <div className="relative h-[340px] w-[340px] sm:h-[430px] sm:w-[430px] lg:h-[500px] lg:w-[500px]">
                      {supportsWebGL && !reducedMotion ? (
                        <Canvas camera={{ position: [0, 0, 4.1], fov: 45 }}>
                          <OrbScene />
                        </Canvas>
                      ) : (
                        <div className="grid h-full w-full place-items-center rounded-full border border-white/15 bg-[radial-gradient(circle,_rgba(255,255,255,0.18),_rgba(16,8,8,0.12)_50%,_transparent_72%)]" />
                      )}
                      <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,transparent_42%,rgba(255,255,255,0.14)_68%,rgba(255,255,255,0.06)_80%,transparent_92%)]" />
                    </div>
                  </div>

                  <div className="absolute inset-x-0 top-1/2 z-20 mx-auto -translate-y-1/2 px-6 text-center sm:px-10">
                    <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/75 backdrop-blur">
                      <Sparkles className="h-4 w-4 text-[#ffb31d]" />
                      AI-powered websites, software, security, and cloud systems
                    </p>
                    <h1 className="max-w-3xl text-5xl font-light tracking-tight text-white sm:text-6xl lg:text-7xl">
                      Protect your digital business today
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                      Encryvia Labs builds modern websites, software platforms, mobile apps, databases, cloud systems, and AI-assisted delivery experiences with a premium engineering-led feel.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                      <Button href="/contact">
                        Contact us <ArrowRight className="h-4 w-4" />
                      </Button>
                      <Button href="/services" variant="outline">
                        Explore services
                      </Button>
                    </div>
                  </div>

                  <p className="absolute bottom-8 left-1/2 max-w-xl -translate-x-1/2 px-4 text-center text-[11px] uppercase tracking-[0.28em] text-white/52">
                    Secure your network with our innovative technologies
                  </p>
                </div>
              </div>

              <div className="absolute left-5 top-28 hidden max-w-56 rounded-[1.4rem] border border-white/12 bg-white/5 p-4 backdrop-blur-xl lg:block">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/55">Signal</p>
                <p className="mt-2 text-sm leading-6 text-white/78">Dark premium surfaces, warm glow, and a focused 3D centrepiece.</p>
              </div>
              <div className="absolute bottom-24 right-5 hidden max-w-60 rounded-[1.4rem] border border-white/12 bg-white/5 p-4 backdrop-blur-xl lg:block">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/55">Motion</p>
                <p className="mt-2 text-sm leading-6 text-white/78">Subtle orbit and halo animation with reduced-motion support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
