// 导入组件，组件必须声明 name
import MyComp from './main'

// 为组件添加 install 方法，用于按需引入
MyComp.install = function (Vue) {
    Vue.component(MyComp.name, MyComp)
}

export default MyComp