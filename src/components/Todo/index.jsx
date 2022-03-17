import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import List from './List';
import Form from './Form';
import '../../assets/css/main.css';

function Index() {

  function popupAction(action) {
    const popup = document.querySelector('.popup');
    const popupContainer = document.querySelector('.popup__container');

    if (action == 'show') {
      popup.classList.add('active');
      popupContainer.classList.add('active');
    }
    else if (action == 'hide') {
      popup.classList.remove('active');
      popupContainer.classList.remove('active');
    }
  }

  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <div className="container todo">
        <div className="row">
          <div className="col-sm-12">
            <div className="todo__content">
              <div className='todo__header mb-4'>
                <h1 className='todo__title'>To Do List</h1>
                <button className="btn btn-success" onClick={() => popupAction('show')}>Görev Ekle<i className="fa fa-plus ms-2"></i></button>
              </div>

              <List todoList={todoList} />

            </div>
          </div>
        </div>
      </div>

      <div className="popup">
        <div className="popup__container">
          <div className="popup__header">
            <div className="popup__head">
              Görev Ekle
            </div>
            <div className="popup__close" onClick={() => popupAction('hide')}>
              <i className="fa fa-times"></i>
            </div>
          </div>
          <div className="popup__body">
            <div className="container popup__form">

              <Form todoList={todoList} addTodo={ setTodoList }/>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index