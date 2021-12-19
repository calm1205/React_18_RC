# Build environment

### Install Docker
Dockerをインストールします。

### Build Docker

```bash
docker compose up

# Background起動
docker compose up -d
```

### Enter the console

```bash
docker compose exec node bash
```

### npm install

```bash
npm install
# nodeコンテナのusr/src/appディレクトリで実行
```

### Access to localhost
```
http://localhost:8080/
```

# Environment Settings

### pre commit
prettierのフォーマットとeslintの静的構文チェックが実行されます。

execute prettier format and eslint check.

### pre push
prettierのフォーマットとeslintの静的構文チェックが実行されます。

execute prettier format and eslint check.

### GitHub Actions
Jestのテストが実行されます。

execute Jest test by npm run test.

# Atomic Design
