
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const productCategories = [
    {
      category: "Gaming GPUs",
      description: "High-performance graphics cards for gaming enthusiasts",
      products: [
        {
          name: "BigView RTX 5090",
          price: "$1,999",
          specs: ["24GB GDDR6X", "10,240 CUDA Cores", "2.8 GHz Boost", "Ray Tracing Gen 4"],
          features: ["4K Gaming", "VR Ready", "RGB Lighting"],
          gradient: "from-purple-600 to-blue-600"
        },
        {
          name: "BigView RTX 5080",
          price: "$1,299",
          specs: ["16GB GDDR6X", "8,704 CUDA Cores", "2.6 GHz Boost", "Ray Tracing Gen 4"],
          features: ["1440p Gaming", "DLSS 4.0", "Low Latency"],
          gradient: "from-blue-600 to-purple-600"
        },
        {
          name: "BigView Gaming Pro",
          price: "$899",
          specs: ["16GB GDDR6", "7,680 CUDA Cores", "2.4 GHz Boost", "Ray Tracing Gen 3"],
          features: ["1080p Gaming", "Energy Efficient", "Quiet Cooling"],
          gradient: "from-green-600 to-blue-600"
        }
      ]
    },
    {
      category: "Workstation Cards",
      description: "Professional graphics solutions for content creation",
      products: [
        {
          name: "BigView Titan AI",
          price: "$4,999",
          specs: ["48GB HBM3", "21,504 CUDA Cores", "2.9 GHz Boost", "NVLink Support"],
          features: ["AI Training", "8K Video", "Certified Drivers"],
          gradient: "from-green-600 to-blue-600"
        },
        {
          name: "BigView Creator Pro",
          price: "$2,499",
          specs: ["32GB GDDR6X", "12,288 CUDA Cores", "2.7 GHz Boost", "Error Correction"],
          features: ["Video Editing", "3D Rendering", "CAD Design"],
          gradient: "from-blue-600 to-green-600"
        }
      ]
    },
    {
      category: "Data Center Solutions",
      description: "Enterprise-grade accelerators for AI and HPC",
      products: [
        {
          name: "BigView H200",
          price: "Contact Sales",
          specs: ["141GB HBM3e", "32,768 CUDA Cores", "4.9TB/s Memory", "PCIe Gen5"],
          features: ["Large Language Models", "Scientific Computing", "Multi-GPU Scaling"],
          gradient: "from-purple-600 to-green-600"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
              GPU Products
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our complete lineup of graphics processing units designed for gaming, professional work, and enterprise applications
            </p>
          </div>
        </section>

        {/* Product Categories */}
        {productCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  {category.category}
                </h2>
                <p className="text-lg text-gray-400">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product, productIndex) => (
                  <Card key={productIndex} className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                    <CardHeader>
                      <div className={`w-full h-48 bg-gradient-to-br ${product.gradient} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="relative z-10 text-center">
                          <div className="w-20 h-12 bg-black/40 rounded-lg flex items-center justify-center mb-2">
                            <span className="text-white font-bold text-sm">GPU</span>
                          </div>
                          <div className="flex gap-1">
                            {product.features.slice(0, 3).map((feature, i) => (
                              <Badge key={i} variant="secondary" className="text-xs bg-black/40 text-white">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-xl text-white">{product.name}</CardTitle>
                      <CardDescription className="text-green-400 text-lg font-semibold">
                        {product.price}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Specifications</h4>
                        <ul className="space-y-1">
                          {product.specs.map((spec, i) => (
                            <li key={i} className="text-sm text-gray-400">• {spec}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.features.map((feature, i) => (
                            <Badge key={i} variant="outline" className="border-purple-500/50 text-purple-300">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 flex gap-2">
                        <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                          Learn More
                        </Button>
                        <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10">
                          Compare
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Need Help Choosing the Right GPU?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our experts are here to help you find the perfect graphics solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                Contact Sales
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                Product Comparison
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
