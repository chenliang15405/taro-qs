### 关于redux和vuex的状态管理的流程

> 对于两个框架的状态管理，基本概念都是相似的，无非就是调用的api和如何定义不同，流程和理念基本相同。
> 状态管理组件的数据流程：

**vuex:** 
    1. 定义store，保存状态
    2. 定义mutation，同步修改state中数据
    3. 定义action, 用于异步来修改数据，其实就是异步处理完之后，再调用mutation，mutation再修改state
    4. 组件中可以通过dispatch来调用action

**redux:**
    1. 定义state，保存状态
    2. 定义reducer，用于同步修改state中数据
    3. 定义action，用于异步处理数据，并提交数据到reducer，reducer修改state
    4. 组件中通过dispatch来调用action

基本上对组件中操作的逻辑和处理都可以放在action中异步处理，然后再去修改state，组件中只管理组件自己的私有状态即可

**为什么不直接修改state,需要通过mutation或者reducer来修改**
    这是因为state中的数据都是公共管理状态，多个组件公用的状态数据，如果可以直接修改，那么A组件直接修改了state中的一个属性，然后B组件之后又修改了，那么state中的保存的那个属性就不是A修改的了，就是B组件获取的旧值，造成数据错乱。  
    所以需要通过mutation或者reducer来保证数据的同步修改，提交函数和数据到mutation或者reducer，它们必须是同步的，所以可以使用提交的需要修改的数据和s  tate中目前最新的数据进行合并，来达到state中所有的数据都是最新的，保证数据的正确。
    但是对mutation或者reducer中的修改，有时候需要异步进行修改，那么这个时候就需要通过action来帮助，组件中先通过dispatch来分发一个action，action异步处理完成之后，再调用mutation或者reducer来同步修改state中的数据。
