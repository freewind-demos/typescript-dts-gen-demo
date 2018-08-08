Dts-Gen for JavaScript File Demo
=================================

使用[dts-gen](https://github.com/Microsoft/dts-gen)为JavaScript文件生成`.d.ts`类型声明文件。
```
npm install
npx dts-gen --expression-file hello.js
```

将会生成`hello.d.ts`

注意
---

dts-gen不分析源代码，而是在运行时对JavaScript对象进行探测，再生成类型文件。
优点是对于任意类型的JavaScript文件和模块都适用，缺点是生成的结果不太准确，不过可以当作基础再修改。