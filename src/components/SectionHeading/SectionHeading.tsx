type SectionHeadingProps = {
  title: string;
  text?: string;
};

export function SectionHeading({ title, text }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
