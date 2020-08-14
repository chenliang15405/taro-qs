# ts记录

1. 如果不确定属性的个数，那么接口中定义的时候可以指定不确定的属性个数：

   ```js
   // 表示可以有多个属性，name必须要有
    interface Istate {
        name: string,
        [propName: string]: any  // 指定名称是字符串，该属性的类型为any
    }
   ```

2. 定义联合类型，可以取值为多个类型中的一个

   ```js
   // name 可以设置为string或者number
    interface Istate {
        name: string|number,
    }
   ```

3. 只读属性、可选属性

   ```js
   // name 可以设置为string或者number
    interface Istate {
        name?: string|number, //可选属性
        readonly age: number // 只读属性
    }
   ```

4. 数组类型：定义泛型： Array<元素类型> 
    可以这样定义：`var arr: number[] = [1, 2, 3]`
    也可以这样定义： `var arr2:Array<number> = [1, 2, 3]`

5. 接口定义函数类型：

    ```js
    interface IFun {
        (name: string, age: number): number //表示定义函数的类型
    }
    var func: IFun = function(name, age) {
        return 123
    }


    // 也可以定义声明类型函数
    function func(name: string, age: number): number {
        return 123;
    }
    ```

6. 类型断言

   ```js
   function getStr(name: string|number) {
       // 将name类型断言为一定为string类型，虽然定义了联合类型的参数
       return (<string>name).length
       // 也可以使用 as 语法， 并且`tsx`中只能使用as语法
       return (name as string).length
   }
   ```

7. 类型别名：

   ```js
    type strType = string // 也可以用来定义类型
    var str1: strType = '1'

    type muchType = string|number|boolean //定义联合类型


    // 可以使用type 限定字符串的取值
    type enumStr = '男' | '女' // 该类型的字符串只能取这两个值的其中一个

   ```

8. ts中的枚举

    ```js
    enum Days {
        mon,
        tue,
        wen
    }

    Days[1] == 'mon'  // 可以直接取值

    Days.mon === 'mon' // 判断是否相等的数据

    ```

9. 类的修饰符

    ```js
    public 默认类的修饰符为public
    private 可以修饰属性为私有的，访问不到
    protected 子类可以访问

    static修饰，可以直接类名调用

    如果使用子类继承父类，那么其中的方法和属性都可以访问（除了private）
    ```

10. 泛型

    ```js
    // 使用泛型定义函数，在调用的时候指定该泛型的类型
    function createArray<T>(length: number, value: T): Array<T> {
        let arr = []
        return arr
    }
    // 指定泛型
    createArray<string>(3, '1')

    // 通过接口定义泛型
    interface Icreate {
        <T>(name: string, value: T): Array<T>
    }

    var func:Icreate

    func = function<T>(name:string, value:T):T[]{
        return []
    }

    ```

11. 将js转换为ts
    - 安装ts依赖： `npm install typescript --save`
    - 增加ts配置文件: `ts.config`
    - 将js文件的后缀更改`ts`

12. react中给组件中props和state指定类型

    ```js
    // 在泛型中指定类型，第一个是props，第二个是state类型，如果不指定类型，还是需要占位，使用{}占位
    class Index extends Component<IProps, Istate>{

    }
    ```

13. ts中如果需要向子组件中传递函数，为了不报错，需要在子组件中定义propTypes才可以

14. 如果指定的事件中需要传递参数，那么需要在触发事件的时候，加上箭头函数指定，否则页面加载的时候就直接触发了

15. 指定函数的类型：

    ```js
    let sum: (x: number, y: number) => number = function(x: number, y: number) {
        return x + y;
    }
    // 也可这样
    interface Fn{
        (x: number, y: number): boolean;
        //左边表示函数的输入类型，右边表示输出类型
    }
    const fn: Fn = function(x: number, y: number){
        return x > y
    }

    ```
