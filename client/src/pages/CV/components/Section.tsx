function Section({
  children,
  title,
}: {
  children: JSX.Element[];
  title: string;
}) {
  return (
    <section className={title}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export default Section;
