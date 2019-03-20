### 问题： 
App.vue中keep-alive后，二级路由页面空白 2019.03.20 v 1.1.0
### 原因：   
keep-alive 内组件被缓存，不再执行mounted()钩子，导致二级路由无法初始化  
### 解决： 
将mounted()钩子替换为activated()钩子  
activated() 在keep-alive 组件激活时调用。组件重新激活时


