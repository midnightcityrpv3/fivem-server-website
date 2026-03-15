import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/30 neon-border-cyan mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold font-['Orbitron'] text-primary neon-glow-cyan mb-4">
              Midnight City RP
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Experience the ultimate GTA V roleplay server with immersive law enforcement, emergency services, and civilian gameplay.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/applications" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Applications
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li className="pt-2">
                <a 
                  href="https://discord.gg/midnightcityrpv3" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 font-semibold transition-all duration-200 neon-glow-pink inline-block"
                >
                  Support Server
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Join Our Community</h4>
            <a
              href="https://discord.gg/midnightcityrpv3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 neon-border-cyan font-semibold transition-all duration-200 active:scale-95"
            >
              Discord Server
            </a>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Midnight City RP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
