
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const products = [
    {
      title: "BigView RTX 5090",
      description: "Ultimate gaming performance with ray tracing",
      specs: "24GB GDDR6X, 10,240 CUDA Cores",
      price: "$1,999",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "BigView Titan AI",
      description: "Professional AI workstation accelerator",
      specs: "48GB HBM3, 21,504 CUDA Cores",
      price: "$4,999",
      gradient: "from-green-600 to-blue-600"
    },
    {
      title: "BigView Gaming Pro",
      description: "High-performance gaming at accessible price",
      specs: "16GB GDDR6, 7,680 CUDA Cores",
      price: "$899",
      gradient: "from-blue-600 to-purple-600"
    }
  ];

  const features = [
    {
      title: "Next-Gen Architecture",
      description: "Revolutionary GPU architecture delivering unprecedented performance"
    },
    {
      title: "AI-Powered Gaming",
      description: "Advanced AI upscaling and optimization for ultimate gaming experience"
    },
    {
      title: "Professional Workflows",
      description: "Accelerate content creation, AI development, and scientific computing"
    },
    {
      title: "Sustainable Technology",
      description: "Energy-efficient designs with reduced environmental impact"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-16 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent animate-fade-in">
            BigView Tech
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-300">
            Unleashing the Future of GPU Technology
          </p>
          <p className="text-lg text-gray-400 mb-12 animate-fade-in delay-500">
            Revolutionary graphics processing units for gaming, AI, and professional workloads
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 text-lg">
              <Link to="/products">Explore Products</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 text-lg">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Flagship Products
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the pinnacle of GPU technology with our latest innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105">
                <CardHeader>
                  <div className={`w-full h-48 bg-gradient-to-br ${product.gradient} rounded-lg mb-4 flex items-center justify-center`}>
                    <div className="w-24 h-16 bg-black/30 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">GPU</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-white">{product.title}</CardTitle>
                  <CardDescription className="text-gray-400">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{product.specs}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Why Choose BigView Tech
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-black/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of gamers, creators, and professionals who trust BigView Tech
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-3 text-lg">
              <Link to="/contact">Contact Sales</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-3 text-lg">
              <Link to="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
