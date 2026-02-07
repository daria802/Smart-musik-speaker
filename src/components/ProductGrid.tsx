import { ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Resonance Pro Speaker',
    price: 399,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1548617335-c1b176388c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHNwZWFrZXIlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2OTM3MTE4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.8,
    category: 'Smart Speaker'
  },
  {
    id: 2,
    name: 'Wireless Premium Headphones',
    price: 299,
    image: 'https://images.unsplash.com/photo-1765279339828-bb765f3631c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBwcmVtaXVtfGVufDF8fHx8MTc2OTM3MTE4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.9,
    category: 'Headphones'
  },
  {
    id: 3,
    name: 'Ultra Earbuds Pro',
    price: 199,
    originalPrice: 249,
    image: 'https://images.unsplash.com/photo-1695634463848-4db4e47703a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJidWRzJTIwbW9kZXJufGVufDF8fHx8MTc2OTM3MTE4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.7,
    category: 'Earbuds'
  },
  {
    id: 4,
    name: 'Soundbar Elite',
    price: 599,
    image: 'https://images.unsplash.com/photo-1608538770329-65941f62f9f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VuZGJhciUyMHNsZWVrfGVufDF8fHx8MTc2OTM3MTE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.9,
    category: 'Soundbar'
  },
  {
    id: 5,
    name: 'Portable Speaker Mini',
    price: 149,
    image: 'https://images.unsplash.com/photo-1617766722883-b4f223ec6e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMHNwZWFrZXIlMjBibGFja3xlbnwxfHx8fDE3NjkzNzExODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.6,
    category: 'Portable'
  },
  {
    id: 6,
    name: 'Studio Headphones',
    price: 349,
    image: 'https://images.unsplash.com/photo-1765279339828-bb765f3631c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBwcmVtaXVtfGVufDF8fHx8MTc2OTM3MTE4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.8,
    category: 'Headphones'
  },
  {
    id: 7,
    name: 'Smart Speaker Mini',
    price: 249,
    image: 'https://images.unsplash.com/photo-1548617335-c1b176388c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHNwZWFrZXIlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2OTM3MTE4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.7,
    category: 'Smart Speaker'
  },
  {
    id: 8,
    name: 'Premium Earbuds',
    price: 179,
    originalPrice: 229,
    image: 'https://images.unsplash.com/photo-1695634463848-4db4e47703a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJidWRzJTIwbW9kZXJufGVufDF8fHx8MTc2OTM3MTE4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.5,
    category: 'Earbuds'
  },
];

function ProductCard({ product }: { product: Product }) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <div className="group relative bg-[#0A0A0A] border border-[#F8F9FA]/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#00E5FF]/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-[#0A0A0A]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-[#00E5FF]/20 backdrop-blur-sm border border-[#00E5FF]/50 px-3 py-1 rounded-full">
          <span className="text-xs text-[#00E5FF]">{product.category}</span>
        </div>

        {/* Sale Badge */}
        {product.originalPrice && (
          <div className="absolute top-3 right-3 bg-[#00E5FF] px-3 py-1 rounded-full">
            <span className="text-xs text-[#0A0A0A] font-semibold">
              SALE
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-[#F8F9FA] font-semibold mb-1">{product.name}</h3>
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-[#00E5FF] text-[#00E5FF]" />
            <span className="text-sm text-[#F8F9FA]/70">{product.rating}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-[#00E5FF]">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-[#F8F9FA]/40 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className={`w-full py-2.5 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
            isAdding
              ? 'bg-[#00E5FF] text-[#0A0A0A] scale-95'
              : 'bg-[#F8F9FA]/10 text-[#F8F9FA] hover:bg-[#00E5FF] hover:text-[#0A0A0A]'
          }`}
        >
          <ShoppingCart size={18} />
          <span>{isAdding ? 'Added!' : 'Add to Cart'}</span>
        </button>
      </div>
    </div>
  );
}

export function ProductGrid() {
  return (
    <section id="products" className="py-20 px-6 bg-gradient-to-b from-[#0A0A0A] to-[#0A0A0A]/95">
      <div className="max-w-[1140px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Our <span className="text-[#00E5FF]">Collection</span>
          </h2>
          <p className="text-[#F8F9FA]/70 text-lg max-w-2xl mx-auto">
            Discover our premium range of smart audio devices, engineered for perfection
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
