
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Clock, ShoppingCart, CheckCircle, ArrowRight } from 'lucide-react';

const PhLanding = () => {
  const [heroForm, setHeroForm] = useState({ name: '', email: '' });
  const [footerEmail, setFooterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(true);

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch('/api/whitelist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: heroForm.name, email: heroForm.email })
      });
      setHeroForm({ name: '', email: '' });
    } catch (error) {
      console.error('Hero form submission error:', error);
    }
    
    setIsSubmitting(false);
  };

  const handleFooterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch('/api/whitelist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: footerEmail })
      });
      setFooterEmail('');
      setStickyVisible(false);
    } catch (error) {
      console.error('Footer form submission error:', error);
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 bg-gradient-to-br from-red-600 via-red-700 to-red-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Scarcity Badge */}
            <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm mb-6">
              🔥 Only 50 beta seats • 13 left
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Stop Answering 200<br />
              WhatsApp Messages<br />
              a Day.
            </h1>
            
            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Our AI turns every chat into a paid order—before you can finish your coffee.
            </p>
            
            {/* Value Props */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-white">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-400" />
                <span className="font-medium">24/7 auto-reply</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-400" />
                <span className="font-medium">Buy/FAQ intent tags</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-400" />
                <span className="font-medium">Push to Shopify</span>
              </div>
            </div>
            
            {/* Hero Form */}
            <div className="max-w-md mx-auto mb-8">
              <form onSubmit={handleHeroSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={heroForm.name}
                  onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                  required
                  className="h-14 text-lg bg-white/95 border-white/30 focus:bg-white"
                />
                <Input
                  type="email"
                  placeholder="Work Email"
                  value={heroForm.email}
                  onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                  required
                  className="h-14 text-lg bg-white/95 border-white/30 focus:bg-white"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg bg-green-600 hover:bg-green-700 text-white font-bold"
                >
                  {isSubmitting ? 'Processing...' : 'Get Early Access →'}
                </Button>
              </form>
            </div>
            
            {/* Social Proof */}
            <p className="text-red-200 text-sm">
              Loved by PH brands like <span className="font-semibold text-white">Tote&Go</span> and <span className="font-semibold text-white">GadgetLab</span>
            </p>
          </div>
        </div>
      </section>

      {/* Pain Magnifier */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-8">
              The Hidden Cost of Slow WhatsApp Response
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-red-900/30 rounded-xl border border-red-700">
              <div className="text-4xl font-bold text-red-400 mb-2">42%</div>
              <p className="text-red-100">of PH shoppers drop off after 10 min wait</p>
            </div>
            <div className="text-center p-6 bg-red-900/30 rounded-xl border border-red-700">
              <div className="text-4xl font-bold text-red-400 mb-2">3h</div>
              <p className="text-red-100">Store owners spend daily copy-pasting order details</p>
            </div>
            <div className="text-center p-6 bg-red-900/30 rounded-xl border border-red-700">
              <div className="text-4xl font-bold text-red-400 mb-2">₱780</div>
              <p className="text-red-100">Average lost basket per missed chat</p>
            </div>
          </div>
          
          {/* Chat Screenshot Mockup */}
          <div className="max-w-sm mx-auto bg-gray-800 rounded-2xl p-4 border border-red-700">
            <div className="bg-green-600 text-white p-3 rounded-lg mb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <span className="font-medium">Customer</span>
              </div>
              <p className="text-sm">Hi, is this dress available in size M? How much shipping to Cebu?</p>
              <div className="text-xs text-green-200 mt-1">12:45 PM</div>
            </div>
            <div className="text-center py-4">
              <div className="flex items-center justify-center gap-2 text-red-400">
                <MessageCircle size={16} />
                <span className="text-sm font-medium">Customer left chat</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">15 minutes ago</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three steps to never miss a sale again
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={32} className="text-green-600" />
              </div>
              <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Connect WhatsApp in 2 min
              </h3>
              <p className="text-gray-600">No coding required</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-green-600" />
              </div>
              <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI auto-replies & tags intent
              </h3>
              <p className="text-gray-600">In less than 5 seconds</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShoppingCart size={32} className="text-green-600" />
              </div>
              <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Orders push to Shopify/HubSpot
              </h3>
              <p className="text-gray-600">See only hot carts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini-Case Proof */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
            "We cut response time from 12 min to 12 sec and recovered ₱112k in abandoned carts within the first week."
          </blockquote>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">MT</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Mark Tan</div>
              <div className="text-gray-600">Founder @ BlueTote.ph</div>
            </div>
          </div>
          <div className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-bold text-lg">
            +37% qualified orders
          </div>
        </div>
      </section>

      {/* Offer & Risk Reversal */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            7-day free run • No card required
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Keep every peso you earn.
          </p>
          <div className="bg-yellow-400 text-black p-6 rounded-xl font-bold text-lg">
            No qualified order in 24h? We extend beta 7 days free.
          </div>
        </div>
      </section>

      {/* Sticky Footer CTA */}
      {stickyVisible && (
        <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white p-4 shadow-2xl z-50">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleFooterSubmit} className="flex flex-col sm:flex-row gap-4 items-center">
              <Input
                type="email"
                placeholder="Your work email"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                required
                className="flex-1 h-12 bg-white text-black border-0"
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold h-12 px-8 whitespace-nowrap"
              >
                {isSubmitting ? 'Processing...' : 'Claim My Spot (13 left)'}
              </Button>
              <button 
                type="button"
                onClick={() => setStickyVisible(false)}
                className="text-red-200 hover:text-white ml-2"
              >
                ✕
              </button>
            </form>
            <div className="flex justify-center gap-4 mt-2 text-xs text-red-200">
              <span>GDPR</span>
              <span>•</span>
              <span>Made for PH stores</span>
              <span>•</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhLanding;
