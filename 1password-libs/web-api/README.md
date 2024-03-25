# 1Password Web API

## Installation

```bash
npm install @1password/web-api
```

## Usage

```js
import { action } from "@1password/web-api";
let CTX = new action.Context({
	env: "prd",
	host: "my.1password.com",
	server: "1password.com",
});
```
