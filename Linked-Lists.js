"use strict";
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const fistNode = new Node(value, this.head);
    this.head = fistNode;
    this.length++;
  }

  prepend(value) {
    if (!this.head) return null;

    let current = this.head;
    const lastNode = new Node(value, null);
    for (let i = 0; i < this.length; i++) {
      current = current.next;
      if (current.next === null) {
        current.next = lastNode;
        this.length++;
        return current;
      }
    }
  }

  size() {
    if (!this.length) return null;
    return this.length;
  }

  headElement() {
    return this.head;
  }

  tail() {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      current = current.next;
      if (current.next === null) return console.log(current);
    }
  }

  at(index) {
    if (!this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  pop() {
    let current = this.head;
    let previous;
    //console.log(current.next.next);
    for (let i = 0; i < this.length; i++) {
      if (current.next === null) {
        this.length--;
        return (previous.next = null);
      }
      previous = current;
      current = current.next;
    }
  }

  contains(val) {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (current.value === val) return true;
      current = current.next;
    }
    return false;
  }

  find(val) {
    let index = this.length;
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (current.value === val) return index;
      current = current.next;
      index--;
    }
    return null;
  }

  toString() {
    let current = this.head;
    let string = "";
    for (let i = 0; i < this.length; i++) {
      !current.next
        ? (string += `(${current.value})`)
        : (string += `(${current.value}) -> `);
      current = current.next;
    }
    return string;
  }
}

const x = new linkedList();
x.append(100);
x.append(200);
x.append(300);
x.append(400);
x.prepend(20);
x.prepend(30);
x.pop();
x.tail();
console.log(x.toString());
