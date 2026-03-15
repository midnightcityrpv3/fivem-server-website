import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const GalleryModal = ({ isOpen, onClose, images, currentIndex, onNavigate }) => {
  const handlePrevious = () => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    onNavigate((currentIndex + 1) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl bg-background border-primary/30 neon-border-cyan p-0">
        <div className="relative">
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
          
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-background/80 hover:bg-background text-foreground neon-border-cyan transition-all duration-200"
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            onClick={handlePrevious}
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground neon-border-cyan transition-all duration-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={handleNext}
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground neon-border-cyan transition-all duration-200"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 px-4 py-2 rounded-lg neon-border-cyan">
            <p className="text-sm text-foreground font-medium">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;
