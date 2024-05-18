//新建链表接口
export interface IListInterface<T>{
    peek(): T | undefined;
    isEmpty(): boolean;
    get size(): number;
}

