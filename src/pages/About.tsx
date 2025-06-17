
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
        </div>

        {/* Main Story */}
        <section className="mb-16">
          <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-600">My Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Hi, My name is Kiefer Court. I am originally from Marshall County in western Kentucky,
                but I currently live in Louisville, Kentucky. I graduated from the University of Louisville in May of 2025
                with a Bachelor of Arts in Computer Science and a Certificate in Applied Geospatial Technologies.
                I could see myself working in a variety of fields, including software development, web development,
                Geographic Information Systems (GIS), or even cybersecurity.
              </p>
              
              <p>
                I started my computer science journey in high school, where I was able to pass both the 
                AP Computer Science A and AP Computer Science Principles exams. This lead me to become a computer science major
                at the University of Louisville. However, I also developed a passion for GIS during my time there,
                which led me to pursue a Certificate in Applied Geospatial Technologies. My coding experience compliments
                my GIS skills well, allowing me to automate workflows that may take days or weeks to complete manually.
              </p>

              <p>
                <h2 className="text-2xl font-semibold text-blue-600 mt-10 mb-4 border-b pb-1 border-blue-200 dark:border-blue-800">
                  GIS
                </h2>
                I currently work as a GIS Analyst at the Paducah McCracken County Joint Sewer Agency 
                where I spent two summers as an intern while in school. I manage sewer utilities on arcPro and arcGIS Online.
                Some of my relevant coursework from the University of Louisville includes Web Mapping, GIS Programming, GIS &amp; Urban Demography, Advanced GIS,
                Software Engineering, Python &amp; Data Analytics, Design of Operating Systems, Data Structures,
                Mobile Device Programming. I feel very confident in my ability to work with GIS software and tools, and I am always looking for ways to improve my skills.
              </p>

              <h2 className="text-2xl font-semibold text-blue-600 mt-10 mb-4 border-b pb-1 border-blue-200 dark:border-blue-800">
                  Computer Science
                </h2>

              <p>
                As of today I have been coding for over 5 years starting in high school. I have experioence in
                virtually every major programming language, including Python, Java, C++, C#, JavaScript, TypeScript, HTML, CSS, SQL, and more.
                I have worked on a vaariety of projects while in school, along with some personal projects. While I have no work experience
                specific to computer science, I do use python wuite a bit in my current job to automate workflows and processes. On top of
                that I have a strong desire to learn and grow in the field of computer science, and I am always looking for new challenges to tackle.
                I pride myself as a good learner, for instance I taught myself how to make React websites like the one you are currently viewing. I see 
                myself as extremely qualified for an entry level software development (or related field) position, 
                and I am eager to apply my skills in a professional setting.
              </p>

              <h2 className="text-2xl font-semibold text-blue-600 mt-10 mb-4 border-b pb-1 border-blue-200 dark:border-blue-800">
                  Cybersecurity
                </h2>

              <p>
                I see cybersecurity as a great field to get into, and I have a strong interest in it. My dad works in IT
                and my uncle works in cybersecurity, so I have been exposed to it from a young age. I am currently working on
                the CompTIA Security+ certification, which I hope to complete by the end of 2025.
                I have a strong understanding of networking, operating systems, and security principles, and I am always looking for ways to improve my skills.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Soft Skills</h2>
          <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Now manually listed */}
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Teamwork</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Problem Solving</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Communication</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Adaptability</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Time Management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Critical Thinking</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Interests */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center">Beyond Code</h2>
          <div className="grid md:grid-cols-2 gap-6">

            {/* Interest 1 */}
            
            <Card className="hover-scale group transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                    <div className="text-blue-600 dark:text-blue-400">🏈</div>
                  </div>
                  <CardTitle className="text-lg">Sports</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  I love both playing and watching sports. I grew up playing soccer and tennis. I still enjoy playing both
                  recreationally and was a member of the UofL club tennis team. I am also very into pickleball and play often.
                  I am a huge fan of the Louisville Cardinals, and I love going to games with friends and family.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Interest 2 */}
            <Card className="hover-scale group transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                    <div className="text-blue-600 dark:text-blue-400">🌲</div>
                  </div>
                  <CardTitle className="text-lg">Outdoors</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  I love spending time outdoors. Name any outdoor activity and I will probably enjoy it. My favorites
                  include hiking, camping, and fishing. I have been to many national parks and state parks around the country
                  and even in Canada. My favorites include Acadia in Maine, Banff in Canada, and Crater Lake in Oregon.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Interest 3 */}
            <Card className="hover-scale group transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                    <div className="text-blue-600 dark:text-blue-400">🎧</div>
                  </div>
                  <CardTitle className="text-lg">Music</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Whether it’s coding or commuting, I always have music on. I’m especially into alternative rock and chill beats.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Interest 4 */}
            <Card className="hover-scale group transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                    <div className="text-blue-600 dark:text-blue-400">🎧</div>
                  </div>
                  <CardTitle className="text-lg">Music</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Whether it’s coding or commuting, I always have music on. I’m especially into alternative rock and chill beats.
                </CardDescription>
              </CardContent>
            </Card>
            
          </div>
        </section>

        {/* Fun Facts 
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
        */}

      </div>
    </div>
  );
};

export default About;
