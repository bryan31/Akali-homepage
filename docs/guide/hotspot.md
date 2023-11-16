# 热点处理

只需要加上`@AkaliHot`这个标注，任意方法均可以获得热点检测，并在热点期间用热点数据进行返回，在热点过后，又会自动调用原本业务逻辑。



举例：比如有一个商品查询的业务，传入SkuCode，返回商品信息。当某个商品进行促销时，访问的量就会增加，但是对于相同的SkuCode而言，其短时间窗口内返回的SkuInfo是一致的，我们的目标是当某个商品sku被大量查询时，框架能够在短时间内把这个商品sku提为热点数据，并通过对其进行缓存返回来降低对下游业务的压力。而当热点值过后，框架又能够自动摘除这个热点值，使其按照原有方式进行查询。

其本质相当于实时的监测了热点，并对其热点数据做了一个短时间内的缓存。



以下示例代表了：当相同的skuCode在5秒内超过50次调用时，会自动把这个skuCode的值提为热点，并用最后一次的返回值直接返回。当调用低于5秒50次调用时，框架会自动的摘除掉这个热点。使其正常的调用你原有代码进行逻辑计算并返回。这一切都是自动的。



```java
@AkaliHot(grade = FlowGradeEnum.FLOW_GRADE_QPS, count = 50, duration = 5)
public SkuInfo getSkuInfo(String skuCode){
  //do your biz and return sku info
}
```



其中`grade`参数除了有以`QPS`作为维度统计，还有以`Thread`个数作为维度统计。比如：

```java
@AkaliHot(grade = FlowGradeEnum.FLOW_GRADE_THREAD, count = 50, duration = 5)
public SkuInfo getSkuInfo(String skuCode){
  //do your biz and return sku info
}
```



这就代表了，如果某个skuCode在5秒之内有超过50个线程正在运行，那么就提为热点，并用热点数据直接返回。