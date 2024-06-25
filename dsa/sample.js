class Queue{
  constructor(){
    this.items = []
    this.frontIndex = 0
    this.backIndex = 0
  }

  enque(item){
    this.items[this.backIndex] = item
    this.backIndex++
    return item
  }

  dequeue(){
    const item = this.items[this.frontIndex]
    delete this.items[this.frontIndex]
    this.frontIndex++
    return item
  }

  peek(){
    return this.items[this.frontIndex]
  }

  isEmpty(){
    return this.items.length === 0
  }
}