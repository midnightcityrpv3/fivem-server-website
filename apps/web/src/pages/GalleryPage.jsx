import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GalleryModal from '@/components/GalleryModal.jsx';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1607896426171-99097eb60cb6',
      alt: 'Police patrol vehicle on city streets at night',
    },
    {
      url: 'https://images.unsplash.com/photo-1702486587242-0d39966cbe43',
      alt: 'Emergency response team in action',
    },
    {
      url: 'https://images.unsplash.com/photo-1533972751724-9135a8410a4c',
      alt: 'Law enforcement officers coordinating operations',
    },
    {
      url: 'https://images.unsplash.com/photo-1692827355562-c76b024de0b2',
      alt: 'Fire department responding to emergency call',
    },
    {
      url: 'https://images.unsplash.com/photo-1638811695040-dfe6b9f6af76',
      alt: 'Sheriff patrol in Blaine County',
    },
    {
      url: 'https://images.unsplash.com/photo-1629085253367-90da794099f9',
      alt: 'State troopers on highway patrol',
    },
  ];

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Gallery - Midnight City RP</title>
        <meta name="description" content="View screenshots and highlights from Midnight City RP. See our law enforcement, emergency services, and roleplay community in action." />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-['Orbitron'] text-primary neon-glow-cyan mb-4 text-center" style={{ letterSpacing: '-0.02em' }}>
              Server Gallery
            </h1>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto leading-relaxed">
              Explore screenshots from our roleplay sessions. Click any image to view it in full size.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-primary/30 neon-border-cyan cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-foreground text-sm font-medium">Click to view full size</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <GalleryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        images={images}
        currentIndex={selectedImage || 0}
        onNavigate={setSelectedImage}
      />

      <Footer />
    </>
  );
};

export default GalleryPage;
