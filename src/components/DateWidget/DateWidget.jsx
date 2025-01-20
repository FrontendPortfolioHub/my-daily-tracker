export const DateWidget = () => {
  const [day, month, year] = new Date().toLocaleDateString().split('.');

  return (
    <section className="date-widget">
      <div className="container">
        <div className="date-widget__content">
          <div className="date-widget__item day">{day}</div>
          <p>:</p>
          <div className="date-widget__item month">{+month < 10 ? `0${month}` : month}</div>
          <p>:</p>
          <div className="date-widget__item year">{year}</div>
        </div>
      </div>
    </section>
  );
};
