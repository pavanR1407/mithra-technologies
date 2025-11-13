import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group p-6 bg-card rounded-xl border border-border hover-lift shadow-soft">
      <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-gradient-hero transition-smooth">
        <Icon className="text-primary group-hover:text-primary-foreground transition-smooth" size={28} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
