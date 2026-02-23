# Jds Log

Hello, dev! Here's a lib for logs, you need to import the lib

```sh
npm i @jdslibs/log
```

Here's a example:

```js
log.success("API success conected on port 3000!")
```

Return:

```sh
[V] 10:10:10 API success conected on port 3000!
```

And have a veeeeeeery logs for you use!

Example:
```ts
import { log } from "@jdslibs/log"

log.error("ERROR 404")
log.api("GET /")
log.db("Can't connect to DB")
// and so much
```


<bold>Comunidade Joaodacarrossa Co. (C) All rights reserved.</bold>
<bold>The author lib LOG is Joaodacarrossa.</bold>
