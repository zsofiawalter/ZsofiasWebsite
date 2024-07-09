function Section({
  children,
  title,
  addtlClass,
}: {
  children: JSX.Element[];
  title?: string;
  addtlClass?: string;
}) {
  return (
    <section className={title + " " + addtlClass}>
      {title && <h3>{title}</h3>}
      {children}
    </section>
  );
}

export default Section;
