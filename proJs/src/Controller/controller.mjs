export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  toDoFunction() {
    this.view.ul.innerText = "";
    this.model.array.forEach((item, index) => {
      this.taskText = this.view.createInput({
        type: "text",
        class: "input_text",
        id: "taskText",
        // name: "inputName",
        value: item,
      });

      this.taskText.addEventListener("keyup", (event) => {
        this.model.changeTask(index, event.target.value);
      });

      this.buttonDelete  = this.view.createButton({
        text: "x",
        id: "deletebtn"
      });

      this.li = this.view.createLi({
        class: "addNewTask",
      });

      this.li.appendChild(this.taskText);
      this.li.appendChild(this.buttonDelete );
      this.view.ul.appendChild(this.li);

      this.buttonDelete .addEventListener("click", () => {
        this.model.deleteTask(index);
        this.toDoFunction();
        if (this.view.ul.innerHTML === "") {
          this.view.ul.className = "";
        }
      });
    });
  }
init() {
  this.view.init();
  this.view.form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const addTask = data.get("inputName");
    if (addTask !== "") {
      this.view.ul.className = "ulList";
      this.model.newTask(addTask);
      this.toDoFunction();

      this.view.input.value = "";
    }
  });
  this.view.buttonSort.addEventListener("click", (event) => {
      this.model.sortTask();
      event.target.classList.toggle("button-sort");
      if (event.target.className !== "button-sort") {
        this.model.sortTaskReverse();
        this.view.changeImage();
      } else {
        this.model.sortTask();
        this.view.changeImageDefault();
      }
      this.toDoFunction();

    });
}
}



// this.view.buttonSort.addEventListener("click", (event) => {
//   this.model.sortTask();
//   event.target.classList.toggle("button-sort");
//   if (event.target.className !== "button-sort") {
//     this.model.sortTaskReverse();
//     this.view.changeImage();
//   } else {
//     this.model.sortTask();
//     this.view.changeImageDefault();
//   }
//   this.renderItems();

  // this.view.sortbtn.addEventListener("click", () => {
  //   this.model.sortTask();
  //   event.target.classList.toggle("sortbtn");
  //     if (event.target.className !== "sortbtn") {
  //       this.model.sortTaskReverse();
  //       this.view.changeImage();
  //     }if  ((event.target.className === "sortbtn")) {
  //       this.model.sortTask();
  //       this.view.changeImageDefault();
  //     }
  //   this.toDoFunction();
  // });