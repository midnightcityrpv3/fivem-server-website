import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Heart } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Applications', path: '/applications' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/30 neon-border-cyan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold font-['Orbitron'] text-primary neon-glow-cyan transition-all duration-200 hover:scale-105">
              Midnight City RP
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-primary neon-glow-cyan font-semibold'
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 neon-border-cyan font-semibold transition-all duration-200 active:scale-95"
              >
                <a href="https://discord.gg/midnightcityrpv3" target="_blank" rel="noopener noreferrer">
                  Join Discord
                </a>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 neon-border-pink font-semibold transition-all duration-200 active:scale-95"
              >
                <a href="https://discord.gg/midnightcityrpv3" target="_blank" rel="noopener noreferrer">
                  <Heart className="mr-2 h-4 w-4" />
                  Support Server
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-primary">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-primary/30 neon-border-cyan">
              <div className="flex flex-col space-y-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-all duration-200 ${
                      isActive(link.path)
                        ? 'text-primary neon-glow-cyan font-semibold'
                        : 'text-foreground/80 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-4 pt-4 border-t border-primary/20">
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90 neon-border-cyan font-semibold transition-all duration-200 active:scale-95"
                  >
                    <a href="https://discord.gg/midnightcityrpv3" target="_blank" rel="noopener noreferrer">
                      Join Discord
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 neon-border-pink font-semibold transition-all duration-200 active:scale-95"
                  >
                    <a href="https://discord.gg/midnightcityrpv3" target="_blank" rel="noopener noreferrer">
                      <Heart className="mr-2 h-4 w-4" />
                      Support Server
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
