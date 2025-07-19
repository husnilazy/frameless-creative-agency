"use client"

import { motion } from "framer-motion"
import { Award, Users, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light mb-8 text-gray-900"
          >
            About Frameless
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            We are a collective of creative minds passionate about visual storytelling and pushing the boundaries of
            what's possible in media production.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light mb-8 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2018, Frameless emerged from a simple belief: that great stories deserve exceptional visual
                treatment. We started as a small team of filmmakers and designers who shared a passion for creating
                content that moves people.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we've grown into a full-service creative agency, but our core mission remains unchanged – to
                craft visual experiences that resonate, inspire, and drive meaningful connections between brands and
                their audiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden"
            >
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="/placeholder.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our values shape every project we undertake and every relationship we build
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Innovation",
                description:
                  "We constantly push creative boundaries, exploring new techniques and technologies to deliver cutting-edge visual experiences.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Collaboration",
                description:
                  "We believe the best work comes from true partnership with our clients, understanding their vision and bringing it to life together.",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence",
                description:
                  "Every frame matters. We're committed to delivering the highest quality work that exceeds expectations and stands the test of time.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6 text-gray-700">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-light mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
