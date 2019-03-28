### 问题： 
App.vue中keep-alive后，二级路由页面空白 2019.03.20 v 1.1.0
### 原因：   
keep-alive 内组件被缓存，不再执行mounted()钩子，导致二级路由无法初始化  
### 解决： 
将mounted()钩子替换为activated()钩子  
activated() 在keep-alive 组件激活时调用。组件重新激活时


### 问题
swiperUser 组件click时间失效
### 原因
猜测：轮播组件设置loop设置为true的时候，会在头尾动态创建slide，新创建的slide的点击事件不能正确绑定
### 解决
暂时：设置loop：fasle

### 问题
数据已经在组件中渲染完成，但控制台报错undefined
### 原因
props 对象的属性未初始化，ajax还未获取到数值
### 解决
对依赖该数据的组件 添加v-if指令