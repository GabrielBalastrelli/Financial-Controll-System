export default class Transaction {
  #name;
  #value;
  #transactionDate;
  #updateAt;
  constructor(name, value) {
    this.#name = name;
    this.#value = value;
    this.#transactionDate = new Date().toLocaleDateString('pt-br', {
      dateStyle: 'medium',
    });
  }

  get name() {
    return this.#name;
  }

  get transactionDate() {
    return this.#transactionDate;
  }

  get value() {
    return this.#value;
  }

  set value(newValue) {
    this.#value = newValue;
  }
}
