export const TodoActions = () => {
  return (
    <section className="todo-actions">
      <div className="container">
        <ul className="todo-actions__list">
          <li className="todo-actions__item add-button icon"></li>
          <li className="todo-actions__item view-button icon"></li>
          <li className="todo-actions__item edit-button icon"></li>
          <li className="todo-actions__item complete-button icon"></li>
          <li className="todo-actions__item remove-button icon"></li>
        </ul>
      </div>
    </section>
  );
}