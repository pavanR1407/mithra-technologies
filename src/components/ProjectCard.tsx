import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ProjectCard = ({ icon: Icon, title, description, features }: ProjectCardProps) => {
  return (
    <Card className="hover-lift shadow-soft border-border">
      <CardHeader>
        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
          <Icon className="text-primary-foreground" size={24} />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
