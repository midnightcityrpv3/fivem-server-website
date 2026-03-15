import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ApplicationForm from '@/components/ApplicationForm.jsx';

const ApplicationsPage = () => {
  const departments = [
    {
      id: 'LSPD',
      name: 'Los Santos Police Department',
      question: 'Why do you want to join law enforcement?',
      description: 'Serve and protect the citizens of Los Santos with honor and integrity.',
    },
    {
      id: 'BCSO',
      name: 'Blaine County Sheriff\'s Office',
      question: 'Describe your patrol experience',
      description: 'Maintain law and order across the vast territories of Blaine County.',
    },
    {
      id: 'SAST',
      name: 'San Andreas State Troopers',
      question: 'What attracts you to highway patrol?',
      description: 'Ensure safety on state highways and major roadways.',
    },
    {
      id: 'SAFD',
      name: 'San Andreas Fire Department',
      question: 'Emergency response experience?',
      description: 'Respond to fires, medical emergencies, and rescue operations.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Applications - Midnight City RP</title>
        <meta name="description" content="Apply to join LSPD, BCSO, SAST, or SAFD in Midnight City RP. Submit your application to become part of our law enforcement and emergency services teams." />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-['Orbitron'] text-primary neon-glow-cyan mb-4 text-center" style={{ letterSpacing: '-0.02em' }}>
              Department Applications
            </h1>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto leading-relaxed">
              Choose a department below and submit your application. Our recruitment team will review your submission and contact you via Discord.
            </p>

            <Tabs defaultValue="LSPD" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-muted/50 border border-primary/30 neon-border-cyan mb-8">
                {departments.map((dept) => (
                  <TabsTrigger
                    key={dept.id}
                    value={dept.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:neon-glow-cyan font-semibold transition-all duration-200"
                  >
                    {dept.id}
                  </TabsTrigger>
                ))}
              </TabsList>

              {departments.map((dept) => (
                <TabsContent key={dept.id} value={dept.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-card border border-primary/30 rounded-2xl p-8 neon-border-cyan"
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-2">{dept.name}</h2>
                    <p className="text-muted-foreground mb-8">{dept.description}</p>
                    <ApplicationForm department={dept.id} departmentQuestion={dept.question} />
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ApplicationsPage;
