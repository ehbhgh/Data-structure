import { IQueueInterface } from "./IQueue";
class ArrayQueue<T> implements IQueueInterface<T> {
  //通过保存链表
  private data: T[] = [];
  enqueue(item: T): void {
    this.data.push(item);
  }
  dequeue(): T | undefined {
    return this.data.shift();
  }
  peek(): T | undefined {
    return this.data[0];
  }
  isEmpty(): boolean {
    return this.data.length === 0;
  }
  get size(): number {
    return this.data.length;
  }
}

export default ArrayQueue;
