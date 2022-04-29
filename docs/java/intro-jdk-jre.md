# JDK、JRE

在刚接触 Java 时，常常会听到 **JDK**、**JRE** 等术语。他们主要作用如下：

- JRE：Java Runtime Environment，Java运行时环境。用于提供运行 Java 的必要工具。
  主要含有 JVM、运行类库。
- JDK：Java Development Kit，Java 开发工具包。除了提供 Java 运行时环境以外，
  还提供了开发 Java 必要的工具，如 **编译器**、**调试器** 等。

JDK 包含了 JRE。想要将 Java 程序源代码编译成 Java 字节码，必须使用 JDK。

:::tip
粗略地讲，JDK = JRE + javac 等工具，所以作为程序员你需要安装 JDK，如果你想把开发程序让别人用，那么对方需要至少安装 JRE。
:::
