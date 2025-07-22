"use client"

import { motion } from "framer-motion"
import { Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  const projects = [
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
    {
      title: "Product Showcase",
      category: "Commercial",
      description: "Clean, minimalist approach to highlighting product features and benefits.",
    },
    {
      title: "Music Video",
      category: "Music Video",
      description: "Creative visual interpretation that amplifies the artist's message and style.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-600 pt-20">
      {/* Hero Section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light mb-8 text-white"
          >
            Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            A curated selection of our most impactful projects, showcasing our commitment to exceptional visual
            storytelling.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (index % 2) * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-6 relative">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  >
                    <source src="/placeholder.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 uppercase tracking-wider">{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-light text-white group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-orange-800 to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-white">Let's create your next project</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your vision to life? We'd love to hear about your project and explore how we can help tell
            your story.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            Start a Conversation
          </Button>
        </motion.div>
      </section>
    </div>
  )
}
