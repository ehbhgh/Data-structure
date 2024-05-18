
import { IListInterface } from "@/types/IList";

//继承链表的接口
export interface IQueueInterface<T> extends IListInterface<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
}
