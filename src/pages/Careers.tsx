
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior GPU Architect",
      department: "Hardware Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "8+ years",
      description: "Lead the design and development of next-generation GPU architectures. Work with cutting-edge technology to push the boundaries of graphics processing.",
      requirements: ["PhD in Computer Engineering or related field", "Experience with GPU architecture design", "Knowledge of CUDA programming", "Leadership experience"],
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "AI/ML Software Engineer",
      department: "Software Engineering",
      location: "Austin, TX",
      type: "Full-time",
      experience: "5+ years",
      description: "Develop AI acceleration software and optimize machine learning workloads for BigView GPUs. Work on cutting-edge AI applications.",
      requirements: ["MS in Computer Science or AI", "Experience with PyTorch/TensorFlow", "CUDA programming expertise", "Deep learning optimization"],
      gradient: "from-green-600 to-blue-600"
    },
    {
      title: "Gaming Solutions Architect",
      department: "Gaming Division",
      location: "Seattle, WA",
      type: "Full-time",
      experience: "6+ years",
      description: "Design gaming-focused GPU features and work with game developers to optimize performance. Shape the future of gaming technology.",
      requirements: ["BS in Computer Science or Game Development", "Game engine experience", "Graphics programming", "Performance optimization"],
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Hardware Validation Engineer",
      department: "Quality Assurance",
      location: "Portland, OR",
      type: "Full-time",
      experience: "4+ years",
      description: "Ensure the reliability and performance of BigView GPUs through comprehensive testing and validation processes.",
      requirements: ["BS in Electrical Engineering", "Hardware testing experience", "Automation scripting", "Debug and analysis skills"],
      gradient: "from-purple-600 to-green-600"
    },
    {
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time",
      experience: "5+ years",
      description: "Drive go-to-market strategies for GPU products. Work closely with engineering and sales teams to position products effectively.",
      requirements: ["MBA or equivalent experience", "Tech marketing background", "Product launch experience", "Competitive analysis skills"],
      gradient: "from-green-600 to-purple-600"
    },
    {
      title: "DevRel Engineer",
      department: "Developer Relations",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Engage with developer community, create technical content, and support developers using BigView GPU technologies.",
      requirements: ["BS in Computer Science", "Developer community experience", "Technical writing skills", "Public speaking experience"],
      gradient: "from-blue-600 to-green-600"
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Industry-leading salaries plus equity participation in BigView Tech's success"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision coverage for you and your family"
    },
    {
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and skill development programs"
    },
    {
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and generous PTO policy"
    },
    {
      title: "Innovation Time",
      description: "20% time for personal projects and exploration of new technologies"
    },
    {
      title: "Cutting-Edge Tech",
      description: "Work with the latest hardware and software technologies in the industry"
    }
  ];

  const departments = [
    { name: "Hardware Engineering", count: 15, color: "purple" },
    { name: "Software Engineering", count: 12, color: "blue" },
    { name: "Gaming Division", count: 8, color: "green" },
    { name: "AI Research", count: 6, color: "purple" },
    { name: "Quality Assurance", count: 5, color: "blue" },
    { name: "Marketing", count: 4, color: "green" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Be part of the team that's shaping the future of GPU technology. We're looking for passionate individuals who want to make a difference in gaming, AI, and computing.
            </p>
          </div>
        </section>

        {/* Open Positions by Department */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Open Positions
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {departments.map((dept, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800 text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-white mb-1">{dept.count}</div>
                    <div className="text-sm text-gray-400">{dept.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <CardTitle className="text-xl text-white mb-2">{job.title}</CardTitle>
                        <CardDescription className="text-purple-400">{job.department}</CardDescription>
                      </div>
                      <div className={`w-16 h-16 bg-gradient-to-br ${job.gradient} rounded-lg flex items-center justify-center`}>
                        <span className="text-white font-bold text-xs">JOB</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="border-blue-500/50 text-blue-300">{job.location}</Badge>
                      <Badge variant="outline" className="border-green-500/50 text-green-300">{job.type}</Badge>
                      <Badge variant="outline" className="border-purple-500/50 text-purple-300">{job.experience}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">{job.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Requirements</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="text-sm text-gray-400">• {req}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                        Apply Now
                      </Button>
                      <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
              Why Work at BigView Tech
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-black/50 border-gray-800 hover:border-green-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Our Culture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white font-bold">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Innovation Driven</h3>
                <p className="text-gray-400">We encourage bold ideas and provide the resources to turn them into reality</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white font-bold">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Collaborative</h3>
                <p className="text-gray-400">Cross-functional teams working together to solve complex challenges</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-purple-600 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white font-bold">🌟</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Excellence</h3>
                <p className="text-gray-400">We strive for excellence in everything we do, from products to people</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Shape the Future?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Don't see the perfect role? We're always looking for exceptional talent. Send us your resume!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                Send Resume
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                Learn About Culture
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
