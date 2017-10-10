class Products {
  constructor(id, name, price, inventory) {
    //saving data here
    //{id: Number, name: String, price: Number, inventory: Number}
    this.id = id;
    this.name = name;
    this.price = price;
    this.inventory = inventory;
  }

  getMethod() {
    //does some method
  }
};

module.exports = Products;