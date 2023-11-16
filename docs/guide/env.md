# Spring环境

Akali只针对于Springboot，Spring环境，并且所有标注了`@AkaliHot`或者`@AkaliFallback`的类一定得注册到spring上下文中。

Akali在springboot中会自动扫描所有标注的类，您无需做任何配置，在spring中，你需要配置：

```xml
<bean class="com.yomahub.akali.strategy.FallbackStrategy"/>
<bean class="com.yomahub.akali.strategy.MethodHotspotStrategy"/>
<bean class="com.yomahub.akali.spring.AkaliScanner"/>
```