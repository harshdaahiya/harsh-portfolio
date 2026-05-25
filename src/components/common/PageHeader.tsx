interface PageHeaderProps {
  heading: string;
  description: string;
}

export default function PageHeader({ heading, description }: PageHeaderProps) {
  return (
    <div className="">
      <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
        {heading}
      </h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
