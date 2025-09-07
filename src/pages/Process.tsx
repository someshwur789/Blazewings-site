
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, FileSearch, Code, Rocket, HeadphonesIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Process = () => {
  const processSteps = [
    {
      step: 1,
      icon: MessageSquare,
      title: "Consult",
      description: "Understand the client's needs",
      details: [
        "Initial consultation and requirement gathering",
        "Business analysis and goal identification",
        "Stakeholder interviews and workshops",
        "Technical feasibility assessment"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      icon: FileSearch,
      title: "Plan",
      description: "Define scope and architecture",
      details: [
        "Project scope and timeline definition",
        "System architecture design",
        "Technology stack selection",
        "Resource allocation and planning"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      step: 3,
      icon: Code,
      title: "Develop",
      description: "Agile, test-driven execution",
      details: [
        "Agile development methodology",
        "Regular sprint reviews and demos",
        "Continuous integration and testing",
        "Code reviews and quality assurance"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      step: 4,
      icon: Rocket,
      title: "Deploy",
      description: "Secure, automated production release",
      details: [
        "Automated deployment pipelines",
        "Security scanning and compliance",
        "Performance optimization",
        "Production monitoring setup"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      step: 5,
      icon: HeadphonesIcon,
      title: "Support",
      description: "Post-deployment maintenance and iteration",
      details: [
        "Ongoing technical support",
        "Performance monitoring and optimization",
        "Feature enhancements and updates",
        "Regular maintenance and security updates"
      ],
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Development</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to deployment
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Five-Step Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our structured approach ensures every project is delivered on time, within budget, and exceeds expectations
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-16 top-32 w-0.5 h-16 bg-gray-300"></div>
                )}
                
                <div className={`flex flex-col lg:flex-row items-start lg:items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Step Number and Icon */}
                  <div className="flex-shrink-0">
                    <div className={`relative w-32 h-32 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <step.icon className="h-12 w-12 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <span className="text-sm font-bold text-gray-900">{step.step}</span>
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                          {step.title}
                          <ArrowRight className="h-5 w-5 text-gray-400" />
                        </CardTitle>
                        <CardDescription className="text-lg text-gray-600">
                          {step.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Process Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our methodology has been refined through experience and delivers consistent results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Agile methodology ensures rapid development cycles and early value delivery
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Focus</h3>
              <p className="text-gray-600">
                Test-driven development and continuous quality assurance throughout the process
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Regular communication and feedback loops keep clients involved and informed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Experience our proven development process and bring your ideas to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-100 hover:text-blue-700 text-lg px-8 py-3">
              <Link to="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button asChild size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              <Link to="/contact">
              View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
