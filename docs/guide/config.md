# 配置

Akali只有2个配置

```yaml
akali:
  hot-cache-seconds: 60
  enable-log: true
```

其中`hot-cache-seconds`只在热点场景下生效，表示热点缓存多久，在这个时间后，会自动被移除掉。如果热点一直存在，那么在配置时间后，会重新更新缓存。默认为60秒。

`enable-log`表示触发热点或者触发降级后，要不要输出日志来提醒，默认为开。