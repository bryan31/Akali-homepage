# 降级处理

只需要加上`@AkaliFallback`注解。任意方法均可获得降级功能。



举例：某一个方法需要调用外部的接口，但是外部的接口性能不佳，耗时高。当并发一高时，线程池就会吃满，线程池队列也会逐渐堆积从而导致超时，或者丢弃，严重时会拖垮整个系统。

这时，我们只要对这个方法加上`@AkaliFallback`标注，即可解决。



```java
@AkaliFallback(grade = FlowGradeEnum.FLOW_GRADE_THREAD, count = 100)
public String sayHi(String name){
  return "hi,"+name;
}

public String sayHiFallback(String name){
  return "fallback str";
}
```



以上注解表示了，当这个方法的同时运行的线程超过100个时，触发降级，降级会自动调用`原方法名+Fallback`方法名(并且参数要一致)，当降级触发后会直接返回`fallback str`，当线程数小于100时，框架也会自动摘除降级，还是输出`hi,xxxx`。



如果你的类中没有定义fallback方法，那么触发降级时会报错，当然你可以在降级方法中去抛错，来让上游系统知道你这个方法已经达到了瓶颈。