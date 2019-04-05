class Cat {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  say(){
    console.log("cat");
    console.log(this.height);
    console.log(this.width);
  }
}

export { Cat as default }
