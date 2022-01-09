export const genCompId = () => {
  return Number(
    (Math.random() * 9 + 1 * 10000).toFixed(0) + Date.now(),
  ).toString(36);
};

export const findCompById = (tree: Record<string, any>, compId: string) => {
  const current = tree;
  const queue = new Array<Record<string, any>>();
  queue.push(current);
  while (queue.length) {
    const head = queue[queue.length - 1];

    if (head.componentId === compId) {
      return head;
    }
    // TODOS:为了偷懒不写类型，没跟取head放一起
    queue.pop();
    if (head.children && head.children.length) {
      queue.push(...head.children);
    }
  }
  return null;
};
