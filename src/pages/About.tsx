
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Target, Eye, Users, Calendar, MapPin } from "lucide-react";

const About = () => {
  const directors = [
    { name: "Murugesan Gopinath", role: "Director" },
    { name: "Niranjan Murugeson", role: "Director" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blaze Wings Technology</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Empowering businesses with innovative technology solutions since 2025
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Blaze Wings Technology Pvt Ltd was incorporated on <strong>April 29, 2025</strong>, 
                as a registered private limited company under <strong>RoC Coimbatore</strong>. 
                From day one, we've been committed to delivering cutting-edge technology solutions 
                that drive business transformation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began with a powerful vision: to bridge the gap between 
                traditional business operations and modern technology capabilities. Today, we stand 
                as a trusted partner for organizations looking to embrace digital transformation.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Incorporated: April 29, 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>RoC: Coimbatore</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <Building2 className="h-32 w-32 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-16 h-16 flex items-center justify-center">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-lg">
                  To empower businesses with modern, reliable, and cost-effective software solutions 
                  that drive growth, efficiency, and innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full w-16 h-16 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-lg">
                  To become a trusted partner in the global tech ecosystem by delivering value 
                  through automation, innovation, and cloud-native development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600">Meet the visionaries behind Blaze Wings Technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {directors.map((director, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full w-20 h-20 flex items-center justify-center">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{director.name}</CardTitle>
                  <p className="text-blue-600 font-medium">{director.role}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
