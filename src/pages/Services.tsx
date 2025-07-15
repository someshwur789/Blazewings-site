
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Settings, Cloud, Bot, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom business platforms and enterprise applications built with modern technologies",
      features: [
        "Custom business platforms",
        "Web & enterprise applications",
        "Scalable backend systems",
        "API development & integration",
        "Mobile-responsive solutions"
      ],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Settings,
      title: "DevOps Solutions",
      description: "Streamline your development and deployment processes with automation",
      features: [
        "CI/CD pipelines",
        "Docker, Kubernetes, Jenkins",
        "GitHub Actions automation",
        "Infrastructure as Code",
        "Monitoring & logging"
      ],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "Reliable, scalable, and secure cloud solutions for modern businesses",
      features: [
        "AWS-based deployment",
        "Monitoring and security",
        "Hybrid cloud systems",
        "Serverless architecture",
        "Cost optimization"
      ],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Bot,
      title: "AI Workflows & Automation",
      description: "Intelligent automation solutions to streamline your business processes",
      features: [
        "n8n, Zapier, OpenAI integration",
        "Task automation systems",
        "Chatbot development",
        "Domain-specific LLM pipelines",
        "Process optimization"
      ],
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive technology solutions to transform your business operations and drive growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <CardHeader className="relative">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}></div>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${service.gradient} rounded-lg`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 text-base mt-4">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Blaze Wings Technology?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional value through our expertise, innovation, and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-16 h-16 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Expertise</h3>
              <p className="text-gray-600">
                Deep technical knowledge across modern technologies and best practices
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full w-16 h-16 flex items-center justify-center">
                <Settings className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Agile Approach</h3>
              <p className="text-gray-600">
                Flexible, iterative development process ensuring rapid delivery and adaptation
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full w-16 h-16 flex items-center justify-center">
                <Bot className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Focus</h3>
              <p className="text-gray-600">
                Cutting-edge solutions leveraging AI, automation, and cloud technologies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Let's discuss your project requirements and how we can help you achieve your goals
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
            <Link to="/contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
