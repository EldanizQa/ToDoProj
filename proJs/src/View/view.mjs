export default class View {
  constructor() {
    this.maindiv = null;
    this.input = null;
    this.textbtn = null;
    this.form = null;
    this.ul = null;
    this.li = null;
    this.root = document.getElementById("root");
  }

  init(){

  this.maindiv = this.createDiv({
    id: "maindiv",
  });

  this.form = this.createForm({
    class: "form",
  });

  this.plusbtn = this.createDiv({
    text: '+',
    class: 'plusbtn',
  });

  this.textbtn = this.createButton({
    text: 'Добавить',
    class:'textbtn',
  });

  this.input = this.createInput({
    type: 'input',
    class: 'input',
    name: 'inputName',
  });

  this.addbtn = this.createButton({
    class: 'addbtn',
  });

  this.lable = this.createDiv({
    text: 'To-Do List',
    class: 'lableText',
  });

  this.ul = this.createUl({
    class:'ulList',
  });

  this.buttonSort = this.createButton({
    class: "button-sort",
    id: "buttonSort",
    type: "button",
  });

  this.imageSort = this.createImage({
    id: "imageSort",
    src: "./assets/images/Group74.png",
  });


  this.form.appendChild(this.maindiv);
  this.form.appendChild(this.lable);
  this.buttonSort.appendChild(this.imageSort); 
  this.lable.appendChild(this.buttonSort);
  this.lable.appendChild(this.input);

  this.form.appendChild(this.ul);
  
  this.form.appendChild(this.addbtn);
  this.buttonSort.appendChild(this.imageSort);


  this.addbtn.appendChild(this.plusbtn);

  this.addbtn.appendChild(this.textbtn);
  
  this.root.appendChild(this.form);
}

changeImage() {
  this.imageSort.src = "./assets/images/Group90.png";
}
changeImageDefault() {
  this.imageSort.src = "./assets/images/Group74.png";
}

  createDiv (props) {
    const div = document.createElement("div");
    props.text && (div.innerText = props.text);
    props.id && (div.id = props.id)
    props.class && (div.className = props.class)
    return div;
  }

  createForm(props) {
    const form = document.createElement("form");

    props.class && (form.className = props.class)

    return form;
  }

  createInput(props) {
    const input = document.createElement("input");

    props.type && (input.type = props.type);
    props.name && (input.name = props.name);
    props.value && (input.value = props.value);
    props.class && (input.className = props.class);
    props.id && (input.id = props.id);
  
    return input;
  }

  createButton(props) {
    const button = document.createElement("button");
  
    props.text && (button.innerText = props.text);
    props.class && (button.className = props.class);
    props.id && (button.id = props.id);
  
    return button;
  }

  createUl(props) {
    const ul = document.createElement("ul");

    props.id && (ul.id = props.id);

    return ul;
  }

  createLi(props) {
    const li = document.createElement("li");

    props.text && (li.innerText = props.text);
    props.class && (li.className = props.class);

    return li;
  }

  createImage(props) {
    const img = document.createElement("img");

    props.id && (img.id = props.id);
    props.src && (img.src = props.src);

    return img;
  }

}