---
author: 葛涛宁
---

# 最简单的程序

在 [这一节](./intro-the-first-program.md) 中，我们已经编写过如下代码：

```java
public class Example {
  public static void main(String[] args) {
    System.out.println("This is a Java example");
  }
}
```

本节我们主要对该程序进行简要的分析。

## 类 —— Java 程序最小的组成单位

在任何 Java 程序中，我们始终可以见到类似如下的定义：

```java
public class Example {  }
```

该代码定义了一个名为 `Example` 的类（class）。在 Java 中，类是最小的单位，程序是由一个个小的类组成。

其中，`public` 是指该类是公共的，`class` 是指该类是一个类，`Example` 是指该类的名字。

在 Java 里定义一个类的形式如下：

```text
[修饰符] class [类名] {  }
```

**修饰符** 将在后续 **面向对象** 的章节中讲解。类名通常遵循 **大驼峰命名法**，即首字母大写，其余字母小写，如果有多个单词，则每个单词的首字母大写，其余字母小写。例如，以下为规范的类名：

```text
Example
MyClass
AClass
```

## 方法
