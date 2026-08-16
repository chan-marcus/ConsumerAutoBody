import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import img21 from '../../imports/o__21_.jpg';
import img20 from '../../imports/o__20_.jpg';
import img19 from '../../imports/o__19_.jpg';
import img18 from '../../imports/o__18_.jpg';
import img17 from '../../imports/o__17_.jpg';
import img16 from '../../imports/o__16_.jpg';
import img15 from '../../imports/o__15_.jpg';
import img14 from '../../imports/o__14_.jpg';
import img13 from '../../imports/o__13_.jpg';
import img2015a from '../../imports/20150708_173455__1_.jpg';
import img2015b from '../../imports/20150710_110729.jpg';
import img34 from '../../imports/o__34_.jpg';
import img33 from '../../imports/o__33_.jpg';
import img32 from '../../imports/o__32_.jpg';
import img3 from '../../imports/3.jpg';
import img4 from '../../imports/4.jpg';
import img12 from '../../imports/12.jpg';
import img9 from '../../imports/9.jpg';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const images = [
    { url: img21, alt: 'Collision repair completed at Consumer Auto Body, San Francisco' },
    { url: img20, alt: 'Auto body repair and paint refinishing — Consumer Auto Body SF' },
    { url: img19, alt: 'Vehicle panel repair and color match — Mission District auto body shop' },
    { url: img18, alt: 'Car door dent repair and repaint — Consumer Auto Body San Francisco' },
    { url: img17, alt: 'Front end collision damage repair — Consumer Auto Body SF' },
    { url: img16, alt: 'Full vehicle repaint — Consumer Auto Body, 923 Valencia Street SF' },
    { url: img15, alt: 'Rear bumper repair and refinishing — San Francisco auto body' },
    { url: img14, alt: 'Side panel collision repair — Consumer Auto Body Mission District' },
    { url: img13, alt: 'Auto body restoration work — Consumer Auto Body San Francisco' },
    { url: img2015a, alt: 'Vehicle paint correction and detailing — Consumer Auto Body SF' },
    { url: img2015b, alt: 'Frame and structural repair — Consumer Auto Body San Francisco' },
    { url: img34, alt: 'Hood and fender repair — Consumer Auto Body Mission District SF' },
    { url: img33, alt: 'Car scratch and dent removal — Consumer Auto Body San Francisco' },
    { url: img32, alt: 'Complete collision restoration — Consumer Auto Body SF' },
    { url: img3, alt: 'Auto paint and body work — Consumer Auto Body San Francisco' },
    { url: img4, alt: 'Bumper replacement and color match — Consumer Auto Body SF' },
    { url: img12, alt: 'Vehicle body repair finished result — Consumer Auto Body San Francisco' },
    { url: img9, alt: 'Professional auto body repair — Consumer Auto Body, Mission District SF' },
  ];

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev! - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev! + 1));
  };

  return (
    <section className="py-16 bg-neutral-100 relative overflow-hidden" id="gallery" style={{ backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.02) 25%, transparent 25%), linear-gradient(225deg, rgba(0, 0, 0, 0.02) 25%, transparent 25%), linear-gradient(45deg, rgba(0, 0, 0, 0.02) 25%, transparent 25%), linear-gradient(315deg, rgba(0, 0, 0, 0.02) 25%, transparent 25%)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 0, 30px -30px, 0 0' }}>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Work</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-4 text-white hover:text-cyan-400 transition-colors"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 text-white hover:text-cyan-400 transition-colors"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <img
            src={images[selectedImage].url}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
