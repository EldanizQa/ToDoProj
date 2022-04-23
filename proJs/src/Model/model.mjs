export default class Model {
  constructor() {
    this.array = [];
  }
  newTask(addTask) {
    this.array = [...this.array, addTask];
    console.log(this.array);
  }

  deleteTask(selectIndex) {
    this.array = this.array.filter((el, index) => index !== selectIndex);
  }

  sortTask() {
    this.array = this.array.sort((a, b) =>
      a.toLowerCase() < b.toLowerCase() ? -1 : 1
    );
  }
  sortTaskReverse() {
    this.array = this.array.sort((a, b) =>
      a.toLowerCase() < b.toLowerCase() ? 1 : -1
    );
  }
  changeTask(index, addTask) {
    this.array[index] = addTask;
  }
}