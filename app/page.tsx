"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { useState } from "react"

export default function SinglePageSite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  // Partner brand logos data
  const partnerLogos = [
    {
      name: "DOSS",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/doss%20white-sYbrsIvkSuUOqHE9iNkLATuMUbo2Re.png",
    },
    {
      name: "WWF",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wwf%20white-Lb48l70fbDnmJVa9kpKqCz9bf9NP0L.png",
    },
    {
      name: "JNE",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jne%20white-TiY4dnQI9IZXeXx8HN3GIOEri77827.png",
    },
    {
      name: "BI",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bi%20white-QlQ2ZYNhAo8ozq4DQvd61c4RXF6bKH.png",
    },
    {
      name: "UNSIQ",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unsiq%20white-JSMnDi7phomIc5Xbpo5DLmJjVsbgmx.png",
    },
    {
      name: "DOSS",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/doss%20white-sYbrsIvkSuUOqHE9iNkLATuMUbo2Re.png",
    },
    {
      name: "WWF",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wwf%20white-Lb48l70fbDnmJVa9kpKqCz9bf9NP0L.png",
    },
    {
      name: "JNE",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jne%20white-TiY4dnQI9IZXeXx8HN3GIOEri77827.png",
    },
  ]

  return (
    <div className="min-h-screen flowing-gradient relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="gradient-overlay fixed inset-0 pointer-events-none"></div>

      {/* Navigation - Seamlessly integrated */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center z-10"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frameless%20white-mMFTKm6IkmWaojqBdliUYgn4dLDHqK.png"
                alt="Frameless Creative Media Agency"
                width={140}
                height={36}
                className="h-9 w-auto"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="hidden md:flex items-center space-x-12 z-10"
            >
              <button
                onClick={() => scrollToSection("home")}
                className="text-white/90 hover:text-white transition-all duration-300 font-light text-lg tracking-wide hover-lift"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white/90 hover:text-white transition-all duration-300 font-light text-lg tracking-wide hover-lift"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white/90 hover:text-white transition-all duration-300 font-light text-lg tracking-wide hover-lift"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-white/90 hover:text-white transition-all duration-300 font-light text-lg tracking-wide hover-lift"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white/90 hover:text-white transition-all duration-300 font-light text-lg tracking-wide hover-lift"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-white/15 backdrop-blur-sm text-white border-0 hover:bg-white/25 rounded-full px-8 py-3 font-medium text-lg transition-all duration-300 hover-lift soft-glow"
              >
                Get in Touch
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:hidden text-white z-10 hover-lift"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden mt-8 space-y-6 z-10 relative bg-black/20 backdrop-blur-md rounded-2xl p-6"
            >
              <button
                onClick={() => scrollToSection("home")}
                className="block text-white/90 hover:text-white transition-colors duration-300 font-light text-xl"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-white/90 hover:text-white transition-colors duration-300 font-light text-xl"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-white/90 hover:text-white transition-colors duration-300 font-light text-xl"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block text-white/90 hover:text-white transition-colors duration-300 font-light text-xl"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-white/90 hover:text-white transition-colors duration-300 font-light text-xl"
              >
                Contact
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section - Full screen with seamless integration */}
      <section id="home" className="min-h-screen flex items-center justify-center px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mb-6"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frameless%20white-mMFTKm6IkmWaojqBdliUYgn4dLDHqK.png"
              alt="Frameless Creative Media Agency"
              width={500}
              height={120}
              className="mx-auto h-24 md:h-28 w-auto mb-4 opacity-90"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold text-white mb-12 leading-none tracking-tight lg:text-4xl"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            Creative Media Agency
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="text-2xl md:text-3xl text-white/80 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
          >
            We craft visual stories that transcend boundaries and inspire action through exceptional filmmaking and
            creative design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection("portfolio")}
              size="lg"
              className="bg-white text-black hover:bg-white/90 text-xl px-12 py-6 h-auto rounded-full font-semibold shadow-2xl transition-all duration-300 hover-lift soft-glow"
            >
              View Our Work
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="ghost"
              className="text-white/90 hover:text-white hover:bg-white/10 text-xl px-12 py-6 h-auto rounded-full font-light border border-white/30 hover:border-white/50 transition-all duration-300 hover-lift"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Partners Section - Seamlessly integrated */}
      <section className="py-24 px-8 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl text-white/90 mb-6 tracking-wide font-bold">Our Great Work With</h2>
          </motion.div>

          {/* Single horizontal row marquee */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex animate-marquee-flow whitespace-nowrap">
                {/* First set of logos */}
                {partnerLogos.map((partner, index) => (
                  <div key={`first-${index}`} className="mx-12 flex items-center justify-center min-w-[140px] h-20">
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 w-full h-full flex items-center justify-center border border-white/10 hover-lift">
                      {partner.logo ? (
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          width={100}
                          height={50}
                          className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                      ) : (
                        <span className="text-white/80 font-medium text-lg">{partner.name}</span>
                      )}
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {partnerLogos.map((partner, index) => (
                  <div key={`second-${index}`} className="mx-12 flex items-center justify-center min-w-[140px] h-20">
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 w-full h-full flex items-center justify-center border border-white/10 hover-lift">
                      {partner.logo ? (
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          width={100}
                          height={50}
                          className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                      ) : (
                        <span className="text-white/80 font-medium text-lg">{partner.name}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle gradient fade edges */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* About Section - Seamlessly integrated */}
      <section id="about" className="py-32 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-12 text-white leading-tight">We are storytellers</h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed font-light">
                At Frameless, we believe in the power of visual narrative. Our team of creative professionals
                specializes in crafting compelling content that resonates with audiences and drives meaningful
                engagement.
              </p>
              <p className="text-xl text-white/80 leading-relaxed font-light">
                From concept to execution, we deliver premium video production, brand storytelling, and digital
                experiences that leave lasting impressions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover-lift">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JNE.jpg-MG49Eh5BqvN5hXxsX0HHOpEBdY9akB.jpeg"
                  alt="Behind-the-scenes film production with JNE commercial shoot"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Horizontal Carousel */}
      <section id="services" className="py-32 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">Our Services</h2>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto font-light">
              We specialize in creating premium visual content across multiple disciplines
            </p>
          </motion.div>

          {/* Horizontal Scrolling Carousel */}
          <div className="relative">
            <div className="flex overflow-x-auto scrollbar-hide gap-8 pb-4">
              {[
                {
                  title: "Brand Films",
                  description:
                    "Cinematic storytelling that captures your brand's essence and connects with audiences on an emotional level.",
                  thumbnail:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wide1.jpg-EnnpZs8BiEHZG7yuOREnbO3uD08s5S.jpeg",
                  category: "Storytelling",
                },
                {
                  title: "Commercial Production",
                  description:
                    "High-impact advertising content that drives results and amplifies your message across all platforms.",
                  thumbnail: "/placeholder.svg?height=400&width=300",
                  category: "Advertising",
                },
                {
                  title: "Digital Experiences",
                  description:
                    "Interactive content and immersive experiences that engage modern audiences in meaningful ways.",
                  thumbnail: "/placeholder.svg?height=400&width=300",
                  category: "Interactive",
                },
                {
                  title: "Music Videos",
                  description:
                    "Creative visual interpretation that amplifies the artist's message and style through compelling imagery.",
                  thumbnail: "/placeholder.svg?height=400&width=300",
                  category: "Music",
                },
                {
                  title: "Documentary Films",
                  description:
                    "Authentic storytelling that reveals the human side of compelling narratives and real stories.",
                  thumbnail: "/placeholder.svg?height=400&width=300",
                  category: "Documentary",
                },
                {
                  title: "Corporate Videos",
                  description:
                    "Professional content that showcases your company's vision, values, and achievements effectively.",
                  thumbnail: "/placeholder.svg?height=400&width=300",
                  category: "Corporate",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-80 group cursor-pointer"
                >
                  {/* Video Thumbnail Card */}
                  <div className="relative aspect-[3/4] bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover-lift mb-6 group-hover:shadow-2xl transition-all duration-500">
                    <Image
                      src={service.thumbnail || "/placeholder.svg"}
                      alt={service.title}
                      width={320}
                      height={400}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center px-6">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                        <p className="text-white text-sm leading-relaxed">{service.description}</p>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Service Info */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                      {service.description.slice(0, 80)}...
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Gradient Fade Edges */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black/30 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black/30 to-transparent pointer-events-none"></div>
          </div>

          {/* View All Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button
              size="lg"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 rounded-full px-8 py-3 font-medium text-lg transition-all duration-300 hover-lift"
            >
              View All Services
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section - Seamlessly integrated */}
      <section id="portfolio" className="py-32 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">Featured Work</h2>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto font-light">
              A curated selection of our most impactful projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Luxury Brand Campaign",
                category: "Commercial",
                description: "A cinematic brand film showcasing premium craftsmanship and attention to detail.",
              },
              {
                title: "Tech Startup Launch",
                category: "Brand Film",
                description: "Dynamic storytelling that captures innovation and forward-thinking vision.",
              },
              {
                title: "Fashion Collection",
                category: "Fashion Film",
                description: "Artistic visual narrative highlighting texture, movement, and style.",
              },
              {
                title: "Corporate Documentary",
                category: "Documentary",
                description: "Authentic storytelling that reveals the human side of business success.",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (index % 2) * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-video bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden mb-8 relative group-hover:bg-white/10 transition-all duration-500 border border-white/10 hover-lift">
                  <iframe
                    src="https://www.youtube.com/embed/c4tvnyK88Dg?start=14&autoplay=0&mute=1&controls=1&rel=0&modestbranding=1"
                    title="Featured Video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="space-y-4">
                  <span className="text-sm text-white/60 uppercase tracking-wider font-medium">{project.category}</span>
                  <h3 className="text-3xl font-bold text-white group-hover:text-white/90 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-lg font-light">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Seamlessly integrated */}
      <section id="contact" className="py-32 px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">Let's Create Together</h2>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto font-light">
              Ready to bring your vision to life? We'd love to hear about your project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-white/10 hover-lift"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-lg font-medium text-white/90 mb-3">First Name</label>
                  <Input
                    placeholder="John"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 rounded-2xl h-14 text-lg hover:bg-white/10 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-white/90 mb-3">Last Name</label>
                  <Input
                    placeholder="Doe"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 rounded-2xl h-14 text-lg hover:bg-white/10 transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-lg font-medium text-white/90 mb-3">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 rounded-2xl h-14 text-lg hover:bg-white/10 transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-white/90 mb-3">Project Type</label>
                <Input
                  placeholder="Brand Film, Commercial, etc."
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 rounded-2xl h-14 text-lg hover:bg-white/10 transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-white/90 mb-3">Message</label>
                <Textarea
                  placeholder="Tell us about your project..."
                  className="min-h-[140px] bg-white/5 border-white/20 text-white placeholder:text-white/50 rounded-2xl text-lg hover:bg-white/10 transition-colors duration-300"
                />
              </div>
              <Button
                size="lg"
                className="w-full bg-white text-black hover:bg-white/90 rounded-2xl text-xl py-6 font-semibold transition-all duration-300 hover-lift soft-glow"
              >
                Send Message
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </form>

            <div className="mt-16 grid md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 hover-lift">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-3 text-xl">Email</h3>
                <p className="text-white/80 text-lg">info@framelesscreative.com</p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 hover-lift">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-3 text-xl">Phone</h3>
                <p className="text-white/80 text-lg">0859-1067-23181</p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 hover-lift">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-3 text-xl">Office/Studio 1.0 </h3>
                <p className="text-white/80 text-lg">Jl.Lurah Sudarto Ruko 04 Wonosobo 56319     </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Seamlessly integrated */}
      <footer className="py-16 px-8 text-center relative z-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/60 text-lg">© 2025 Frameless Creative Media Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
