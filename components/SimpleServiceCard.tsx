interface SimpleServiceCardProps {
  title: string;
  description: string;
}

const SimpleServiceCard = ({ title, description }: SimpleServiceCardProps) => {
  return (
    <div className="rounded-md shadow p-6 hover:border hover:border-primary border border-gray-50 transition-all duration-200">
      <h3 className="text-xl font-semibold text-primary heading-secondary mb-4">
        {title}
      </h3>
      
      <p className="text-secondary leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};

export default SimpleServiceCard;