"use client";

import Link from "next/link";
import {
  X,
  Zap,
  Scan,
  History,
  CircleHelp,
  Signal,
  Wifi,
  BatteryFull,
} from "lucide-react";
import Image from "next/image";

export default function CameraView() {
  return (
    <div className="bg-black overflow-hidden h-screen w-full relative text-white">
      {/* Full Screen Camera View (Placeholder Image) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="https://picsum.photos/seed/receipt/1080/1920"
          alt="Camera Preview"
          fill
          className="object-cover grayscale-[0.2] brightness-75"
          unoptimized
        />
      </div>

      {/* Interface Shell Overlay */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Top Header */}
        <header className="flex justify-between items-center w-full px-5 py-6 mt-4">
          <Link
            href="/"
            className="p-2 transition-colors duration-200 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full"
          >
            <X className="w-6 h-6" />
          </Link>
          <h1 className="font-bold text-lg uppercase tracking-tight drop-shadow-md">
            Digitalizar Recibo
          </h1>
          <button className="p-2 transition-colors duration-200 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-yellow-400">
            <Zap className="w-6 h-6 fill-current" />
          </button>
        </header>

        {/* Document Guide Overlay */}
        <main className="flex-grow relative flex flex-col items-center justify-center pointer-events-none px-6">
          {/* Semi-transparent guide box */}
          <div className="w-[90%] md:w-[60%] md:max-w-md aspect-[3/4] border-2 border-white/80 rounded-xl flex items-center justify-center relative shadow-[0_0_0_9999px_rgba(0,0,0,0.6)] box-border">
            {/* Corner Indicators */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-sm"></div>
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-sm"></div>
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-sm"></div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-sm"></div>

            {/* Scanning Line Effect */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-blue-500 shadow-[0_0_15px_#3b82f6] opacity-80 animate-pulse"></div>

            <p className="text-white text-sm font-medium text-center px-6 bg-black/60 backdrop-blur-sm py-2 rounded-full mt-auto mb-10 pb-2">
              Posicione o comprovante dentro do quadro
            </p>
          </div>

          {/* Visual Cue for Alignment */}
          <div className="mt-8 flex items-center gap-2 bg-black/60 px-5 py-2.5 rounded-full backdrop-blur-md border border-white/10">
            <Scan className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-semibold text-white tracking-wide uppercase">
              Auto-enquadramento ativo
            </span>
          </div>
        </main>

        {/* Camera Controls */}
        <section className="pb-12 pt-8 px-10 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between w-full max-w-xl mx-auto">
          {/* Gallery Preview */}
          <div className="w-14 h-14 rounded-xl border-2 border-white/30 overflow-hidden bg-slate-800 relative cursor-pointer hover:border-white/60 transition-colors">
            <Image
              src="https://picsum.photos/seed/thumb/100/100"
              alt="Recent Scan"
              fill
              className="object-cover"
            />
          </div>

          {/* Shutter Button */}
          <Link
            href="/nova-despesa/detalhes"
            className="relative flex items-center justify-center w-[84px] h-[84px] group block"
          >
            {/* Outer Ring */}
            <div className="absolute inset-0 border-[3px] border-white rounded-full transition-transform duration-150 group-hover:scale-105 group-active:scale-95"></div>
            {/* Inner Circle */}
            <div className="w-[70px] h-[70px] bg-white rounded-full transition-transform duration-150 group-active:scale-90 flex items-center justify-center shadow-lg">
              <div className="w-[60px] h-[60px] border border-black/10 rounded-full"></div>
            </div>
          </Link>

          {/* Mode Switch */}
          <button className="flex flex-col items-center justify-center text-white/80 hover:text-white transition-colors w-14">
            <History className="w-7 h-7" />
            <span className="text-[10px] font-bold uppercase mt-1">
              Histórico
            </span>
          </button>
        </section>
      </div>

      {/* Floating Help Button */}
      <div className="absolute top-24 right-5 z-20">
        <button className="w-10 h-10 bg-black/40 text-white backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/20 hover:bg-black/60">
          <CircleHelp className="w-6 h-6" />
        </button>
      </div>

      {/* Status Bar Simulation (Mobile aesthetic) */}
      <div className="absolute top-0 left-0 w-full h-7 px-5 flex justify-between items-center text-white z-50 pointer-events-none drop-shadow-md bg-gradient-to-b from-black/40 to-transparent">
        <span className="text-[11px] font-bold tracking-wider">14:32</span>
        <div className="flex items-center gap-1.5">
          <Signal className="w-3.5 h-3.5" />
          <Wifi className="w-3.5 h-3.5" />
          <BatteryFull className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
