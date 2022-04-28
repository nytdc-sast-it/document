# Java 简介

## 语言历史

Java 是由 [Sun 公司](https://en.wikipedia.org/wiki/Sun_Microsystems)（现已被 [Oracle](https://www.oracle.com/)
收购）开发的编程语言。于 1996 年 1 月 23 日正式发布 1.0 版本。

在上个世纪 90 年代时，一些语言的设计师不再想用 C/C++ 来开发项目。因为在 C/C++ 中有着许许多多很麻烦的事情。
例如，在 C/C++ 中开辟内存后需要手动对其进行管理，有着比较难以使用的**指针**等。可以说，Java 的诞生主要是由于对于 C/C++ 语言的不满。
其没有 C/C++ 中的指针，加入 **垃圾回收机制** 使得开发者们不需要手动进行内存管理，并且加入了 **虚拟机机制** 使得其几乎完全支持跨平台。
最初这门编程语言命名为 C++--，但由于创始人后来觉得两门语言的设计理念差别有一点大，故命名为 **Oak** ，待编程语言准备发布时，
发现 Oak 商标已被使用，最终命名为 Java。

Java 是一门 **面向对象** 的编程语言，其 **对象** 的思想主要是来自 [Smalltalk](https://zh.wikipedia.org/wiki/Smalltalk)
这门编程语言。Smalltalk 这门编程语言认为任何东西都必须是对象。

## 市场需求

Java 在世界范围内的受欢迎程度始终位于前列，这一点可以查看 [TIOBE 编程语言排行榜](https://www.tiobe.com/tiobe-index/)。
相应的，市场上对于 Java 工程师的需求量也是巨大的，可以通过各大招聘网站查看。

## Java 发版节奏

早期的 Java 版本（1.1 ~ 1.4）使用带小数点的数字来代表主版本号，从 Java 5 开始使用整数来代表主版本号。

如今 Java 发布节奏如下：

- 每 6 个月发布一个新版本。
- 发布的版本包含一些试用功能，可以让用户体验和指出问题，但这些功能未来不一定会保留。
- 有 **短期支持版** （Short-Term-Support, STS）和 **长期支持版** （Long-Term-Support, LTS）。
  LTS 版一般较长时间的维护支持，而 STS 版一般只有6个月（当一个新版本发布时，上一个 STS 版将停止支持）。

短期支持版和长期支持版都可能包含一些试用性质的功能，同时，试用功能也有不同的类型：

- 实验（Experimental）阶段：该功能处于早期阶段。
- 预览（Preview）阶段：该功能已实现，但可能有所调整。
- 孵化（Incubating）阶段：目前还不是 Java 的一部分，需要主动获取。如 [Loom Project](https://openjdk.java.net/projects/loom/)。

## Java 三大版本

Java 主要由 3 大版本：

- **Java SE**（Java Standard Edition），Java 标准版。提供标准的 JVM 和标准库。
- **Java EE**（Java Enterprise Edition），Java 企业版。在 Java SE 的基础上加入了大量的 API 和类库，
  使其方便 **Web 应用**、**数据库** 等服务的开发。企业版所使用的 Java 虚拟机与 Java  标准版完全相同。
  该版本于 2018 年由 Oracle 公司移交给了 [Eclipse 基金会](https://www.eclipse.org/org/foundation/)
  管理，同时因为商标的原因改名为 [Jakarta EE](https://jakarta.ee/)。
- **Java ME**（Java Micro Edition），Java 微型版。该版本是 Java 的一种瘦身版，主要是针对嵌入式设备。

## Java 三个名词

Java 有 3 个名词。

- JDK：Java Development Kit
- JRE：Java Runtime Environment
- JVM：Java Virtual Machine

下图清晰地显示了这 3 者的关系（图源 [廖雪峰官网](https://www.liaoxuefeng.com/) ）：

```ascii
  ┌─    ┌──────────────────────────────────┐
  │     │     Compiler, debugger, etc.     │
  │     └──────────────────────────────────┘
 JDK ┌─ ┌──────────────────────────────────┐
  │  │  │    ┌─────┐                       │
  │ JRE │    │ JVM │ + Runtime Library     │
  │  │  │    └─────┘                       │
  └─ └─ └──────────────────────────────────┘
        ┌───────┐┌───────┐┌───────┐┌───────┐
        │Windows││ Linux ││ macOS ││others │
        └───────┘└───────┘└───────┘└───────┘
```
