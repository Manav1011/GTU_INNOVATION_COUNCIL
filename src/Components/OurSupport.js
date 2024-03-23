const OurSupport = () => {
  return (
    <section className="grid gap-6 my-6 md:grid-cols-1">
      <div className="p-6 max-w-2xl mb-3 bg-sky-100 bg-opacity-20 shadow-lg rounded-lg">
        <dl className="space-y-2">
          <dt className="text-xl leading-snug font-extrabold text-white truncate mb-1 sm:mb-0">Ideation of Project</dt>
          <dd className="text-5xl font-light md:text-6xl">89%</dd>
        </dl>
      </div>
      <div className="p-6 max-w-2xl mb-3 bg-sky-100 bg-opacity-20 shadow-lg rounded-lg">
        <dl className="space-y-2">
        <dt className="text-xl leading-snug font-extrabold text-white truncate mb-1 sm:mb-0">Conceptual Analysis</dt>
          <dd className="text-5xl font-light md:text-6xl">74%</dd>
        </dl>
      </div>
      <div className="p-6 max-w-2xl mb-3 bg-sky-100 bg-opacity-20 shadow-lg rounded-lg">
        <dl className="space-y-2">
        <dt className="text-xl leading-snug font-extrabold text-white truncate mb-1 sm:mb-0">
            Strategy Building
          </dt>
          <dd className="text-5xl font-light md:text-6xl">95%</dd>
        </dl>
      </div>
    </section>
  );
}

export default OurSupport;
