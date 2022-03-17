import { useState, useEffect } from 'react';

const todoForm = {
    author: "",
    status: {
        text: '',
        class: ''
    },
    description: ""
};


function Index({ addTodo, todoList }) {

    const [form, setForm] = useState(todoForm);

    useEffect(() => {
        setForm(todoForm);
    }, [todoList])

    const onChangeForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const onChangeSelect = (e) => {
        const selectKey = e.target.querySelector('option:checked').getAttribute("data-key");
        let classText = '';
        if (selectKey == "1") {
            classText = 'success';
        }
        else if (selectKey == "2") {
            classText = 'warning';
        }
        else if (selectKey == "3") {
            classText = 'danger';
        }

        setForm({
            ...form, 'status': {
                'text': e.target.value,
                'class': classText
            }
        });
    }

    const formSubmit = (e) => {
        e.preventDefault();

        if (form.author == '' || form.status.text == '' || form.description == '') {
            return false;
        }
        else {
            addTodo([...todoList, form]);

            const popup = document.querySelector('.popup');
            const popupContainer = document.querySelector('.popup__container');
            popup.classList.remove('active');
            popupContainer.classList.remove('active');
        }

    }

    return (
        <form>
            <div className="row">
                <div className="col-sm-6 popup__form-item">
                    <label htmlFor="">Yazar</label>
                    <input type="text" className="form-control" name='author' value={form.author} onChange={onChangeForm} />
                </div>
                <div className="col-sm-6 popup__form-item">
                    <label htmlFor="">Öncelik Durumu</label>
                    <select name="status" id="" className="form-control" value={form.status} onChange={onChangeSelect}>
                        <option data-key="" >Öncelik Durumu Seçiniz</option>
                        <option data-key="3">Yüksek Öncelikli</option>
                        <option data-key="2">Orta Öncelikli</option>
                        <option data-key="1">Düşük Öncelikli</option>
                    </select>
                </div>
                <div className="col-sm-12 popup__form-item">
                    <label htmlFor="">Görev Açıklaması</label>
                    <textarea className="form-control" name='description' value={form.description} onChange={onChangeForm}></textarea>
                </div>
                <div className="col-sm-12 popup__form-item text-center">
                    <button className="btn btn-success btn-sm px-3 py-2" onClick={formSubmit}><i className="fa fa-plus me-2"></i>Görev Ekle</button>
                </div>
            </div>
        </form>
    )
}

export default Index