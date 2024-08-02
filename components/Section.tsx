interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
  }
  
  export default function Section({ id, title, children, className }: SectionProps) {
    return (
      <section id={id} className={`py-12 px-4 md:px-6 lg:px-8 ${className}`}>
        <h2 className="text-3xl text-blue-600 font-bold mb-6">{title}</h2>
        {children}
      </section>
    );
  }
  