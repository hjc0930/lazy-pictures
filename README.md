## lazy-pictures
基于`IntersectionObserver`构造函数编写的React图片懒加载组件
## 使用
```bash
npm i lazy-pictures
```
## 示例
```tsx
import Loader from 'lazy-pictures';
import aPng from './assets/1.jpg';

export default () => {
  return (
    <div style={{ display: 'flex', width: '100%', minWidth: "1200px" }}>
      <h1 style={{ width: '3000px', height: '600px' }}>1</h1>
      <Loader style={{ width: '200px' }} src={aPng} />
    </div>
  );
};
```
