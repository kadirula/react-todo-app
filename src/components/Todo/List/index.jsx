import React from 'react';
import user1 from '../../../assets/files/img/user/user-1.png';

function Index({ todoList }) {

  const removeTodo = (e) => {
    const todo = e.target.closest('.todo__table-tr');
    todo.remove();
  }

  const doneTodo = (e) => {
    const todo = e.target.closest('.todo__table-tr');
    todo.classList.add('done');
    const doneTodoBtn = todo.querySelector('button.todo__btn-check');
    doneTodoBtn.setAttribute('disabled', 'disabled');
  }

  return (
    <div>
      <table className="table todo__table">
        <thead>
          <tr className="todo__table-tr">
            <th>Kullanıcı</th>
            <th width="50%">Görev</th>
            <th>Öncelik</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {
             todoList.map((todo, index) => ( 
              <tr className="todo__table-tr todo__table-tr--border" key={index}>
                <td>
                  <div className="todo__table-flex">
                    <img src={user1} className="todo__user-img" alt="" />
                    <span className="todo__user-name ms-3">{todo.author}</span>
                  </div>
                </td>
                <td>
                  <p className="todo__desc">
                    {todo.description}
                  </p>
                </td>
                <td>
                  <label htmlFor="" className={`todo__priority todo__priority--${todo.status.class}`}>{todo.status.text}</label>
                </td>
                <td>
                  <button className="btn btn-sm todo__btn todo__btn-check" onClick={doneTodo}>
                    <i className="fa fa-check text-warning"></i>
                    <div className="btn-hover-text">
                      Tamamlandı
                    </div>
                  </button>
                  <button className="btn btn-sm todo__btn todo__btn-remove" onClick={removeTodo}>
                    <i className="fa fa-trash text-danger"></i>
                    <div className="btn-hover-text">
                      Kaldır
                    </div>
                  </button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default Index