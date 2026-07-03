function Gallery() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1583258292688-d0213df4a3a8?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1610348725531-843dff163e2c?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1580913461163-05531a186937?auto=format&fit=crop&w=500&q=80"
  ];

  return (
    <section id="gallery" className="bg-slate-50 py-20 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full inline-block">
            Our Store Views
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Gallery
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Take a visual tour inside our neighborhood grocery aisles.
          </p>
        </div>

        {/* 6 Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((src, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-sm aspect-square bg-slate-200 border border-slate-100"
            >
              <img 
                src={src} 
                alt={`store-gallery-interior-${index}`} 
                className="h-full w-full object-cover object-center transform transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-orange-950/15 opacity-0 group-hover:opacity-100 transition duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;
