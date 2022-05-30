import "./FormComment.css";
const axios = require("axios").default;

export default function FormComment(userId) {
  function formHandler(e) {
    e.preventDefault();
    const newComment = {
      name: e.target.name.value,
      email: e.target.email.value,
      body: e.target.body.value
    };
    const sendComment = async () => {
      try {
        const resp = await axios.post(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, newComment);
        console.log(resp.data);
      } catch (err) {
        console.log("errror");
      }
    };
    sendComment();
  }
  return (
    <form onSubmit={formHandler} className="Form">
      <div className="form-group row">
        <label htmlFor="tinametle" className="col-sm-2 col-form-label">
        Имя:{" "}
        </label>
        <div className="col-sm-8">
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Введите имя"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="email" className="col-sm-2 col-form-label">
        Email:{" "}
        </label>
        <div className="col-sm-8">
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            placeholder="Введите email"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="body" className="col-sm-2 col-form-label">
        Текст:{" "}
        </label>
        <div className="col-sm-8">
          <textarea
            type="text"
            name="body"
            id="body"
            className="form-control"
            placeholder="Введите комментарий"
          />
        </div>
      </div>
      <div className="col-sm-10">
        <button type="submit" className="btn btn-primary">
        Отправить
        </button>
      </div>
    </form>
  );
}
