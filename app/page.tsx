'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.5,
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    description: 'Fitness tracking smartwatch with heart rate monitor and GPS'
  },
  {
    id: 3,
    name: 'Laptop Stand',
    price: 49.99,
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.3,
    description: 'Ergonomic aluminum laptop stand with adjustable height'
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    price: 129.99,
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    description: 'RGB backlit mechanical keyboard with tactile switches'
  },
  {
    id: 5,
    name: 'Wireless Mouse',
    price: 39.99,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.4,
    description: 'Ergonomic wireless mouse with precision tracking'
  },
  {
    id: 6,
    name: 'USB-C Hub',
    price: 59.99,
    image: 'https://images.pexels.com/photos/1228651/pexels-photo-1228651.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    description: '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader'
  }
];

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handlePurchaseNow = (product: Product) => {
    const phone = '918943473450';

    const text = [
      'Hello, I want to purchase the following product:',
      '',
      `Product: ${product.name}`,
      `Description: ${product.description}`,
      '',
      `Price: $${product.price}`,
    ].join('\n');

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Products</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Categories</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Deals</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">About</a>
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden md:inline-flex p-2 rounded-lg hover:bg-slate-100 transition-colors">
                <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <button
                className="inline-flex md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                onClick={() => setMobileNavOpen((prev) => !prev)}
                aria-label="Toggle navigation menu"
              >
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileNavOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {mobileNavOpen && (
            <div className="md:hidden pb-3 space-y-2">
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Products</a>
                <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Categories</a>
                <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Deals</a>
                <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">About</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium text-slate-700">{product.rating}</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <p className="text-2xl font-bold text-slate-900">${product.price}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  className="w-full gap-2"
                  size="lg"
                  onClick={() => handlePurchaseNow(product)}
                >
                  <ShoppingCart className="h-4 w-4" />
                  Purchase Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-slate-600">
            © 2024 Tech Store. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
