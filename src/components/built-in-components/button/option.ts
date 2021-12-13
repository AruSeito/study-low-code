import Button from './index';

// DSL - 数据结构
// 用来描述你的视图信息/行为（业务逻辑）
export const option = {
  c: Button,
  key: 'v-btn',
  label: '按钮',
  icon: '',
  desc: '这是一个按钮',
  category: 'form',
  attrs: {
    size: 'normal',
    value: '确定',
  },
  style: {
    width: 80,
    height: 36,
  },
};
