
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Coffee, Music, Camera } from "lucide-react";
import Navigation from "@/components/Navigation";

const About = () => {
  const interests = [
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Coffee Enthusiast",
      description: "I believe great code starts with great coffee. Always exploring new brewing methods and local roasters."
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Music Production",
      description: "Creating electronic music in my spare time. There's something magical about crafting both code and beats."
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Photography",
      description: "Capturing moments and landscapes. Photography helps me see the world from different perspectives."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Open Source",
      description: "Contributing to the developer community through open source projects and mentoring."
    }
  ];

  const values = [
    "Clean, maintainable code",
    "User-centered design",
    "Continuous learning",
    "Team collaboration",
    "Innovation through simplicity"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        {/* Main Story */}
        <section className="mb-16">
          <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">My Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Hi! I'm John, a passionate full-stack developer with over 5 years of experience creating 
                digital experiences that matter. My journey into tech started during college when I built 
                my first website for a local business—seeing how technology could solve real problems 
                sparked a passion that continues to drive me today.
              </p>
              
              <p>
                I specialize in modern web technologies, with a strong focus on React, TypeScript, and 
                Node.js. But beyond the technical skills, I'm deeply committed to writing clean, 
                maintainable code and creating user experiences that are both beautiful and functional.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new coffee shops, producing music, or 
                hiking with my camera in hand. I believe that diverse experiences outside of tech 
                make me a better developer—they provide fresh perspectives and creative solutions 
                to complex problems.
              </p>
              
              <p>
                I'm always excited to work on projects that challenge me to grow and learn new things. 
                Whether it's implementing a complex feature, optimizing performance, or collaborating 
                with a great team, I bring enthusiasm and dedication to everything I do.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">What I Value</h2>
          <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Interests */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center">Beyond Code</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <Card key={index} className="hover-scale group transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <div className="text-blue-600 dark:text-blue-400">
                        {interest.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{interest.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {interest.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Fun Facts */}
        <section className="mt-16">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-xl text-center">Fun Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-muted-foreground">Cups of coffee</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-muted-foreground">Projects completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">5</div>
                  <div className="text-sm text-muted-foreground">Years of experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
