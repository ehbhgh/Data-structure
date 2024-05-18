import ArrayQueue from "../ArraryQueue";

export const QueueTestDemo = () => {
  const queue = new ArrayQueue<string>();
  //添加队列
  queue.enqueue("111");
  queue.enqueue("222");
  queue.enqueue("333");

  //移除队列
  console.log(queue.dequeue(), "移除队列1");
  console.log(queue.dequeue(), "移除队列2");

  //查看队列第一个元素
  console.log(queue.peek(), "查看队列第一个元素");

  //查看队列长度
  console.log(queue.size, "查看队列长度");

  //查看队列是否为空
  console.log(queue.isEmpty(), "查看队列是否为空");
};
