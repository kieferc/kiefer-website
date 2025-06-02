
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Calendar, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";

const Resume = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines.",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Implemented microservices architecture"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions LLC",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create user-friendly interfaces.",
      achievements: [
        "Delivered 15+ successful projects",
        "Reduced development time by 30%",
        "Improved code quality through peer reviews"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Creative Agency",
      location: "New York, NY",
      period: "2019 - 2020",
      description: "Specialized in creating responsive and interactive user interfaces using React and Vue.js. Worked closely with designers to implement pixel-perfect designs.",
      achievements: [
        "Increased user engagement by 25%",
        "Implemented responsive design patterns",
        "Optimized website loading speeds"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      period: "2015 - 2019",
      gpa: "3.8/4.0"
    }
  ];

  const skills = {
    "Frontend": ["React", "TypeScript", "Vue.js", "HTML/CSS", "Tailwind CSS"],
    "Backend": ["Node.js", "Python", "Express", "Django", "REST APIs"],
    "Database": ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    "Tools & Others": ["Git", "Docker", "AWS", "Jenkins", "Agile/Scrum"]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Resume</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Download my complete resume or explore my experience below.
          </p>
          <Button size="lg" className="group">
            <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
            Download PDF Resume
          </Button>
        </div>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover-scale transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-lg">{exp.title}</CardTitle>
                      <CardDescription className="text-base font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:text-right">
                      <div className="flex items-center sm:justify-end">
                        <Calendar className="mr-1 h-3 w-3" />
                        {exp.period}
                      </div>
                      <div className="flex items-center sm:justify-end mt-1">
                        <MapPin className="mr-1 h-3 w-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          {education.map((edu, index) => (
            <Card key={index} className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <CardDescription className="text-base font-medium text-primary">
                      {edu.school}
                    </CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:text-right">
                    <div className="flex items-center sm:justify-end">
                      <Calendar className="mr-1 h-3 w-3" />
                      {edu.period}
                    </div>
                    <div className="mt-1 font-medium">GPA: {edu.gpa}</div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="hover-scale transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
