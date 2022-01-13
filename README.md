# low-code

## 使用说明

1. `git clone https://github.com/AruSeito/study-low-code.git` 克隆该项目

2. 根目录执行`npm install`安装依赖

3. `npm run start` 运行程序

4. localhost:3000 即可查看

## 扩展说明

### 组件扩展

1. 在`src/components`下增加`parser-xxxx.tsx`来转换自己的插件。参数只需要传进来`jsonScheme`

2. 在`src/components/index.ts`下增加解析器（后续可能会优化成自动导入）


```js
// jsonScheme格式
jsonScheme = {
  "page": {
    "type": "Container", //根容器
    "children": [
      {
        "type": "Container", // 类型
        "props":{} // 传到组件上的参数
        "children": [  // 子类
          {
            "type": "CButton",
          },
          { 
            "type": "CInput" 
          }
        ]
      }
    ]
  }
}
```

### 配置面板扩展

待优化，目前需要每种类型搞一个tsx文件，后续会优化成只需要写json传入就渲染指定的。

## TODOS

- [x] 物料堆 

- [x] 画布/渲染引擎

- [x] 配置面板

- [x] 拖拽物料堆到画布

- [ ] 画布内组件的拖拽

- [ ] 拖拽时位置高亮

- [ ] 选中时边框高亮

- [ ] 配置面板json化

## 过程记录

[实现简易的可视化拖动生成页面](https://aruseito.github.io/article/71eb139c/)