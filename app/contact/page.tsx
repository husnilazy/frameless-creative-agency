"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
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
            Let's Talk
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to start your next project? We'd love to hear from you and discuss how we can bring your vision to
            life.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light mb-8 text-white">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Company</label>
                  <Input placeholder="Your Company" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Project Type</label>
                  <Input placeholder="Brand Film, Commercial, etc." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                  <Textarea placeholder="Tell us about your project..." className="min-h-[120px]" />
                </div>
                <Button size="lg" className="w-full bg-orange-600 hover:bg-orange-700">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:pl-12"
            >
              <h2 className="text-3xl font-light mb-8 text-white">Get in touch</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">Email</h3>
                    <p className="text-gray-300">hello@framelesscreative.com</p>
                    <p className="text-gray-300">projects@framelesscreative.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">Studio</h3>
                    <p className="text-gray-300">
                      123 Creative District
                      <br />
                      Los Angeles, CA 90028
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-black/30 rounded-lg">
                <h3 className="text-xl font-light mb-4 text-white">Response Time</h3>
                <p className="text-gray-300 leading-relaxed">
                  We typically respond to all inquiries within 24 hours. For urgent projects, please call us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
