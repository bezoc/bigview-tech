
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const contactMethods = [
    {
      title: "Sales Inquiries",
      description: "Get pricing and product information",
      contact: "sales@bigviewtech.com",
      phone: "+1 (555) 123-4567",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Technical Support",
      description: "Product support and troubleshooting",
      contact: "support@bigviewtech.com",
      phone: "+1 (555) 234-5678",
      gradient: "from-blue-600 to-green-600"
    },
    {
      title: "Partnership Opportunities",
      description: "Business development and partnerships",
      contact: "partnerships@bigviewtech.com",
      phone: "+1 (555) 345-6789",
      gradient: "from-green-600 to-purple-600"
    },
    {
      title: "Media & Press",
      description: "Press releases and media inquiries",
      contact: "press@bigviewtech.com",
      phone: "+1 (555) 456-7890",
      gradient: "from-purple-600 to-green-600"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Tech Valley Drive, San Francisco, CA 94105",
      phone: "+1 (555) 100-2000",
      type: "Headquarters"
    },
    {
      city: "Austin",
      address: "456 Innovation Blvd, Austin, TX 78701",
      phone: "+1 (555) 100-2001",
      type: "R&D Center"
    },
    {
      city: "Seattle",
      address: "789 Gaming Way, Seattle, WA 98101",
      phone: "+1 (555) 100-2002",
      type: "Gaming Division"
    },
    {
      city: "New York",
      address: "321 Business Plaza, New York, NY 10001",
      phone: "+1 (555) 100-2003",
      type: "Sales Office"
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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Have questions about our GPUs? Need technical support? Want to explore partnership opportunities? We're here to help.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
                  <CardDescription className="text-gray-400">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white">First Name</Label>
                      <Input id="firstName" className="bg-black/50 border-gray-700 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white">Last Name</Label>
                      <Input id="lastName" className="bg-black/50 border-gray-700 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input id="email" type="email" className="bg-black/50 border-gray-700 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white">Company</Label>
                    <Input id="company" className="bg-black/50 border-gray-700 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType" className="text-white">Inquiry Type</Label>
                    <Select>
                      <SelectTrigger className="bg-black/50 border-gray-700 text-white">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-700">
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="press">Media/Press</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea 
                      id="message" 
                      rows={5} 
                      className="bg-black/50 border-gray-700 text-white" 
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-3">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Methods */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Methods</h2>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${method.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white font-bold text-sm">📧</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-1">{method.title}</h3>
                            <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                            <div className="space-y-1">
                              <p className="text-purple-400">{method.contact}</p>
                              <p className="text-green-400">{method.phone}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Response Times */}
              <Card className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-500/30">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Response Times</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sales Inquiries</span>
                    <span className="text-green-400 font-semibold">&lt; 4 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Technical Support</span>
                    <span className="text-blue-400 font-semibold">&lt; 12 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">General Inquiries</span>
                    <span className="text-purple-400 font-semibold">&lt; 24 hours</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-16 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Global Offices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {offices.map((office, index) => (
                <Card key={index} className="bg-black/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="w-full h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <CardTitle className="text-lg text-white">{office.city}</CardTitle>
                    <CardDescription className="text-purple-400">{office.type}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-gray-300 text-sm">{office.address}</p>
                    <p className="text-green-400">{office.phone}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-lg text-white">How can I get technical support for my BigView GPU?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Contact our technical support team at support@bigviewtech.com or call +1 (555) 234-5678. We provide 24/7 support for all our products.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Do you offer volume discounts for enterprise customers?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Yes, we offer competitive volume pricing for enterprise customers. Contact our sales team to discuss your specific requirements and get a custom quote.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-lg text-white">How can I become a BigView Tech partner?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">We're always looking for strategic partners. Contact partnerships@bigviewtech.com to explore opportunities for technology partnerships, distribution, or integration.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
