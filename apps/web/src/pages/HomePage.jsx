import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Image, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Midnight City RP - Premier GTA V Roleplay Server</title>
        <meta name="description" content="Join Midnight City RP, the ultimate GTA V roleplay experience with immersive law enforcement, emergency services, and civilian gameplay." />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1698897175977-f85b4b8b6d0f"
              alt="Midnight City skyline with neon lights"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
          </div>

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-['Orbitron'] text-primary neon-glow-cyan mb-6" style={{ letterSpacing: '-0.02em' }}>
                Midnight City RP
              </h1>
              <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Experience the most immersive GTA V roleplay server. Join our community of dedicated players in law enforcement, emergency services, and civilian roles.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 neon-border-cyan font-semibold text-lg px-8 py-6 transition-all duration-200 active:scale-95"
                >
                  <Link to="/applications">
                    <FileText className="mr-2 h-5 w-5" />
                    Apply Now
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary/10 neon-border-purple font-semibold text-lg px-8 py-6 transition-all duration-200 active:scale-95"
                >
                  <Link to="/gallery">
                    <Image className="mr-2 h-5 w-5" />
                    View Gallery
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10 neon-border-pink font-semibold text-lg px-8 py-6 transition-all duration-200 active:scale-95"
                >
                  <a href="https://discord.gg/midnightcityrpv3" target="_blank" rel="noopener noreferrer">
                    <Users className="mr-2 h-5 w-5" />
                    Join Discord
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 neon-border-pink font-semibold text-lg px-8 py-6 transition-all duration-200 active:scale-95"
                >
                  <a href="https://discord.gg/midnightcityrpv3" target="_blank" rel="noopener noreferrer">
                    <Heart className="mr-2 h-5 w-5" />
                    Support Server
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2 neon-border-cyan">
              <motion.div
                className="w-1.5 h-1.5 bg-primary rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
