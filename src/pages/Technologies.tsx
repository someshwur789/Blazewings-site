
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Technologies = () => {
  const techCategories = [
    {
      category: "Programming Languages",
      technologies: ["Python", "JavaScript", "TypeScript", "Node.js", "React", "Next.js"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      category: "DevOps & Infrastructure",
      technologies: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "AWS"],
      color: "bg-green-100 text-green-800"
    },
    {
      category: "Cloud Platforms",
      technologies: ["Amazon Web Services", "EC2", "S3", "Lambda", "RDS", "CloudWatch"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      category: "Automation & AI",
      technologies: ["n8n", "Zapier", "OpenAI", "LangChain", "TensorFlow", "PyTorch"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      category: "Databases",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB", "Elasticsearch"],
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      category: "Frontend Technologies",
      technologies: ["React", "Vue.js", "Angular", "Tailwind CSS", "Material-UI", "Webpack"],
      color: "bg-pink-100 text-pink-800"
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Docker Certified Associate",
    "Kubernetes Application Developer",
    "Terraform Associate"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Technologies</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              We work with industry-standard tools and cutting-edge technologies to deliver exceptional results
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage modern, reliable, and scalable technologies to build robust solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className={`${category.color} hover:scale-105 transition-transform duration-200`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development Methodology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our approach to software development ensures quality, efficiency, and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Agile Development</h3>
              <p className="text-gray-600 text-sm">
                Iterative development with regular feedback and adaptation
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Test-Driven Development</h3>
              <p className="text-gray-600 text-sm">
                Quality assurance through comprehensive testing strategies
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">DevOps Integration</h3>
              <p className="text-gray-600 text-sm">
                Seamless integration and deployment automation
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Monitoring</h3>
              <p className="text-gray-600 text-sm">
                Ongoing performance monitoring and optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Professional Certifications
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Our team maintains industry certifications to ensure expertise in the latest technologies
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <span className="text-white font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
