
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const timeline = [
    { year: "2015", event: "BigView Tech founded with vision to revolutionize GPU technology" },
    { year: "2017", event: "First GPU architecture development begins" },
    { year: "2019", event: "Launch of BigView Gaming series - breakthrough in price/performance" },
    { year: "2021", event: "Introduction of AI-accelerated workstation cards" },
    { year: "2023", event: "Revolutionary BigView RTX series with advanced ray tracing" },
    { year: "2024", event: "Leading the industry with next-gen GPU architecture" }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Founder",
      background: "Former NVIDIA architect with 15+ years in GPU design",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      background: "Ex-AMD lead engineer specializing in high-performance computing",
      gradient: "from-blue-600 to-green-600"
    },
    {
      name: "Emily Watson",
      role: "VP of Engineering",
      background: "Silicon design expert with expertise in AI acceleration",
      gradient: "from-green-600 to-purple-600"
    },
    {
      name: "David Kim",
      role: "Head of Gaming Division",
      background: "Gaming industry veteran with deep understanding of user needs",
      gradient: "from-purple-600 to-green-600"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible in GPU technology, constantly innovating to deliver breakthrough performance."
    },
    {
      title: "Performance Excellence",
      description: "Every product we create is optimized for maximum performance, ensuring our customers get the best value."
    },
    {
      title: "User-Centric Design",
      description: "We design our GPUs with users in mind, focusing on real-world applications and user experience."
    },
    {
      title: "Sustainable Future",
      description: "We're committed to developing energy-efficient solutions that reduce environmental impact."
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
              About BigView Tech
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We're a team of passionate engineers and innovators dedicated to creating the world's most advanced GPU technology. Our mission is to empower gamers, creators, and professionals with cutting-edge graphics processing solutions.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/30">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-white mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-300 leading-relaxed">
                  To democratize high-performance computing by creating GPU technology that's not just powerful, but accessible, efficient, and innovative. We believe that everyone deserves access to cutting-edge graphics processing, whether you're a gamer seeking the ultimate experience, a creator bringing visions to life, or a researcher pushing the boundaries of AI.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 px-4 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{item.year}</span>
                  </div>
                  <div className="flex-1">
                    <Card className="bg-black/50 border-gray-800">
                      <CardContent className="p-6">
                        <p className="text-gray-300">{item.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className={`w-full h-48 bg-gradient-to-br ${member.gradient} rounded-lg mb-4 flex items-center justify-center`}>
                      <div className="w-20 h-20 bg-black/30 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white">{member.name}</CardTitle>
                    <CardDescription className="text-purple-400 font-semibold">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm">{member.background}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-900/20 to-green-900/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-black/50 border-gray-800 hover:border-green-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">500+</div>
                <div className="text-gray-400">Engineers</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">50M+</div>
                <div className="text-gray-400">GPUs Shipped</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">15+</div>
                <div className="text-gray-400">Global Offices</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">99%</div>
                <div className="text-gray-400">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
