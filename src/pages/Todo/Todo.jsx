import { TodoActions } from '../../components/TodoActions';

export const Todo = () => {
  return (
    <>
      <TodoActions />
      <section className="todo-section">
        <div className="container">
          <div className="todo-content__front">
            <h2 className="todo__title">Actual tasks:</h2>
            <ul className="todo__list">
              <li className="todo__item">
                <button className="check-button icon" />
                <label>To do 1</label>
              </li>
              <li className="todo__item todo__item--active">
                <button className="check-button check-button--completed icon" />
                <label>To do 2</label>
              </li>
              <li className="todo__item">
                <button className="check-button icon" />
                <label>To do 3</label>
              </li>
              <li className="todo__item">
                <button className="check-button icon" />
                <label>To do 4</label>
              </li>
              <li className="todo__item">
                <button className="check-button icon" />
                <label>To do 5</label>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
