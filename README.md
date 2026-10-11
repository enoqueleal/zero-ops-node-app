# Zero Ops Node Sample App

Aplicação Node.js (Express) de exemplo para teste de deploy — terceiro projeto de exemplo, ao lado de
`zero-ops-sample-app` (Java/Spring Boot) e `zero-ops-lambda-app` (Java/Lambda), para validar o deploy
via zero-ops num runtime diferente (Node, detectado automaticamente pelo Nixpacks via `package.json`).

## O que tem aqui

| Rota | Tipo | Descrição |
|---|---|---|
| `GET /` e `GET /home` | Página (HTML) | Landing page simples confirmando que o deploy funcionou. |
| `GET /api` | REST | Retorna `{"status": "API is running"}` — endpoint simples para confirmar que o deploy está de pé via `curl`. |
| `GET /health` | REST | Retorna `{"status": "UP"}` — endpoint de health check. |

Sem banco de dados, sem AWS SDK — só `express`.

## Como rodar

```bash
npm install
npm start
```

Por padrão sobe em `http://localhost:3000`.

## Variáveis de ambiente

| Variável | Padrão | Descrição |
|---|---|---|
| `PORT` | `3000` | Porta HTTP em que a aplicação sobe. |
