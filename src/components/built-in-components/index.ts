import { option } from './button/option';

// TODO 这里添加各种组件就行了
export const componentList = [option];

export const options = componentList.reduce((acc:Record<string,any>, next) => {
  acc[next.key] = next;
  return acc;
}, {});
