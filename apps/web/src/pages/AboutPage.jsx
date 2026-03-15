import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Users, BookOpen, Zap } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const AboutPage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Professional departments',
      description: 'Join LSPD, BCSO, SAST, or SAFD with realistic training and operations.',
    },
    {
      icon: Users,
      title: 'Active community',
      description: 'Connect with dedicated roleplayers who value immersion and realism.',
    },
    {
      icon: BookOpen,
      title: 'Rich lore',
      description: 'Explore a detailed world with ongoing storylines and character development.',
    },
    {
      icon: Zap,
      title: 'Regular events',
      description: 'Participate in scheduled operations, training sessions, and community events.',
    },
  ];

  const rules = [
    'Maintain character at all times during roleplay sessions',
    'Respect all community members and staff decisions',
    'Follow department protocols and chain of command',
    'No metagaming, powergaming, or fail roleplay',
    'Use realistic communication and actions',
    'Report rule violations to staff immediately',
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Midnight City RP</title>
        <meta name="description" content="Learn about Midnight City RP, our community values, server lore, and roleplay rules. Join a professional GTA V roleplay experience." />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-['Orbitron'] text-primary neon-glow-cyan mb-4" style={{ letterSpacing: '-0.02em' }}>
              About Midnight City RP
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A premier GTA V roleplay community dedicated to providing immersive, realistic experiences for law enforcement, emergency services, and civilian players.
            </p>
          </motion.div>

          {/* Server Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-20"
          >
            <div className="bg-card border border-primary/30 rounded-2xl p-8 neon-border-cyan">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Midnight City RP was founded to create a space where dedicated roleplayers can experience authentic law enforcement and emergency services gameplay. We prioritize realism, professionalism, and community engagement in every aspect of our server.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our departments operate with real-world protocols, training programs, and rank structures. Whether you're patrolling the streets of Los Santos, responding to emergencies in Blaine County, or maintaining order on state highways, you'll find a welcoming community committed to quality roleplay.
              </p>
            </div>
          </motion.section>

          {/* Features Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What we offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-card border border-secondary/30 rounded-xl p-6 neon-border-purple transition-all duration-300 hover:-translate-y-1"
                >
                  <feature.icon className="h-12 w-12 text-secondary mb-4 neon-glow-purple" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Lore Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-20"
          >
            <div className="bg-card border border-accent/30 rounded-2xl p-8 neon-border-pink">
              <h2 className="text-3xl font-bold text-foreground mb-6">Server lore</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In the neon-lit streets of Midnight City, law and order hang in delicate balance. As crime syndicates expand their influence and civilian unrest grows, the city's law enforcement and emergency services stand as the last line of defense.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Los Santos Police Department patrols the urban core, while the Blaine County Sheriff's Office maintains order in the rural territories. State Troopers monitor the highways connecting these regions, and the Fire Department responds to emergencies across all jurisdictions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every shift brings new challenges. Every call could change lives. In Midnight City, your choices matter, your actions have consequences, and your story is yours to write.
              </p>
            </div>
          </motion.section>

          {/* Rules */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Community rules</h2>
            <div className="bg-card border border-primary/30 rounded-2xl p-8 neon-border-cyan">
              <ul className="space-y-4">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary font-bold mr-3 text-xl">{index + 1}.</span>
                    <span className="text-muted-foreground leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
