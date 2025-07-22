"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Youtube, Linkedin, Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function FramelessCreativeAgency() {
  // Brand logos for marquee
  const brandLogos = [
    { name: "Unsiq", logo: "/logos/unsiq-white.png" },
    { name: "Doss", logo: "/logos/doss-white.png" },
    { name: "BI", logo: "/logos/bi-white.png" },
    { name: "JNE", logo: "/logos/jne-white.png" },
    { name: "WWF", logo: "/logos/wwf-white.png" },
    { name: "Unsiq", logo: "/logos/unsiq-white.png" },
    { name: "Doss", logo: "/logos/doss-white.png" },
    { name: "BI", logo: "/logos/bi-white.png" },
  ]

  // Services data
  const services = [
    {
      title: "Company Profile Videos",
      description: "Showcase your company with storytelling visuals.",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Company+Profile",
    },
    {
      title: "Short Films",
      description: "Bring ideas to life with cinematic narratives.",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Short+Films",
    },
    {
      title: "Digital & Commercial Ads",
      description: "Impactful ads for brands and products.",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Commercial+Ads",
    },
    {
      title: "Music Videos",
      description: "Visuals that amplify your music.",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Music+Videos",
    },
  ]

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen cinematic-gradient relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frameless-qv9XJoD5ZPs5EOj2Yumrfc6ZTo3AET.png"
                alt="Frameless Creative"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </motion.div>

            {/* Navigation Items */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:flex items-center gap-8"
            >
              <button
                onClick={() => scrollToSection("home")}
                className="text-white/90 hover:text-orange-400 transition-all duration-300 font-medium tracking-wide hover:glow"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white/90 hover:text-orange-400 transition-all duration-300 font-medium tracking-wide hover:glow"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("class-filmmaking")}
                className="text-white/90 hover:text-orange-400 transition-all duration-300 font-medium tracking-wide hover:glow"
              >
                Class Filmmaking
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-white/90 hover:text-orange-400 transition-all duration-300 font-medium tracking-wide hover:glow"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white/90 hover:text-orange-400 transition-all duration-300 font-medium tracking-wide hover:glow"
              >
                Contact
              </button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frameless-qv9XJoD5ZPs5EOj2Yumrfc6ZTo3AET.png"
              alt="Frameless Creative Media Agency"
              width={600}
              height={150}
              className="mx-auto h-24 md:h-32 lg:h-40 w-auto"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light mb-12"
          >
            Crafting stories through Film, Ads, Music Videos & More
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("services")}
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold text-lg px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-orange glow-button"
            >
              Explore Our Work
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Brand Logos Marquee */}
      <section className="py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Trusted by Industry Leaders</h2>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee-smooth whitespace-nowrap">
              {/* First set */}
              {brandLogos.map((brand, index) => (
                <div key={`first-${index}`} className="mx-8 flex items-center justify-center min-w-[180px]">
                  <div className="bg-transparent rounded-2xl p-8 hover:bg-black/20 transition-all duration-500 border-0">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      width={140}
                      height={70}
                      className="opacity-90 hover:opacity-100 transition-opacity duration-300 h-auto max-h-16 w-auto max-w-[140px] object-contain brightness-0 invert"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {brandLogos.map((brand, index) => (
                <div key={`second-${index}`} className="mx-8 flex items-center justify-center min-w-[180px]">
                  <div className="bg-transparent rounded-2xl p-8 hover:bg-black/20 transition-all duration-500 border-0">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      width={140}
                      height={70}
                      className="opacity-90 hover:opacity-100 transition-opacity duration-300 h-auto max-h-16 w-auto max-w-[140px] object-contain brightness-0 invert"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tighter">
              Our Services
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Professional video production services that bring your vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 backdrop-blur-sm border-white/10 hover:border-orange-500/50 transition-all duration-500 group service-card hover:shadow-orange-glow">
                  <CardContent className="p-0">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg h-80 md:h-96">
                      <Image
                        src={service.thumbnail || "/placeholder.svg"}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => setIsVideoModalOpen(true)}
                          className="w-24 h-24 bg-orange-500/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500/50 transition-all duration-300 hover:scale-110"
                        >
                          <Play className="w-12 h-12 text-white ml-1" />
                        </button>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed text-base">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Filmmaking Section */}
      <section id="class-filmmaking" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
              Class Filmmaking
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
              Join our filmmaking class and master the art of visual storytelling. Learn from industry professionals and
              create compelling content.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-lg px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-orange-glow glow-button"
            >
              Join Our Class
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tighter">
              Our Portfolio
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Discover our latest projects and creative achievements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 backdrop-blur-sm border-white/10 hover:border-orange-500/50 transition-all duration-500 group service-card hover:shadow-orange-glow">
                  <CardContent className="p-0">
                    <div className="aspect-video relative overflow-hidden rounded-lg">
                      <Image
                        src={`/placeholder.svg?height=300&width=400&text=Project+${item}`}
                        alt={`Project ${item}`}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => setIsVideoModalOpen(true)}
                          className="w-16 h-16 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                        >
                          <Play className="w-8 h-8 text-white ml-1" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Directors Section */}
      <section className="py-32 px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tighter">
              Meet Our Directors
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              The creative minds behind our most compelling visual stories
            </p>
          </motion.div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
            {[
              {
                name: "Husni Lazy",
                handle: "@husnilazy",
                photo: "/placeholder.svg?height=400&width=300&text=Sarah+Chen",
                signature: "SC",
              },
              {
                name: "Wildan Allaam",
                handle: "@wildanallaam",
                photo: "/placeholder.svg?height=400&width=300&text=Marcus+Rodriguez",
                signature: "MR",
              },
            ].map((director, index) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all duration-500 director-card">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      src={director.photo || "/placeholder.svg"}
                      alt={director.name}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Digital Signature Overlay */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-orange-500/30">
                      <span className="text-orange-400 font-bold text-sm">{director.signature}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{director.name}</h3>
                    <p className="text-orange-400/80 font-mono text-sm tracking-wider">{director.handle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {[
                {
                  name: "Husni Lazy",
                  handle: "@husnilazy",
                  photo: "/placeholder.svg?height=400&width=300&text=Sarah+Chen",
                  signature: "SC",
                },
                {
                  name: "Wildan Allaam",
                  handle: "@wildanallaam",
                  photo: "/placeholder.svg?height=400&width=300&text=Marcus+Rodriguez",
                  signature: "MR",
                },
              ].map((director, index) => (
                <motion.div
                  key={director.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-64 group"
                >
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all duration-500 director-card">
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <Image
                        src={director.photo || "/placeholder.svg"}
                        alt={director.name}
                        width={300}
                        height={400}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* Digital Signature Overlay */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-orange-500/30">
                        <span className="text-orange-400 font-bold text-sm">{director.signature}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-black text-white mb-2 tracking-tight">{director.name}</h3>
                      <p className="text-orange-400/80 font-mono text-sm tracking-wider">{director.handle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-6 bg-gradient-to-t from-black/80 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white/80 text-sm mb-4 md:mb-0">
              ©2025 Frameless Creative Project PT — All Rights Reserved
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/60 hover:text-orange-400 transition-colors duration-300 hover:glow">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-orange-400 transition-colors duration-300 hover:glow">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-orange-400 transition-colors duration-300 hover:glow">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* YouTube Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl aspect-video">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-16 right-0 text-white hover:text-orange-400 transition-colors duration-300 z-10 text-2xl"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/OwO-S4wXlnQ?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
