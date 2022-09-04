## 認証の設計



## APIドキュメント

### Store - ストア関連のAPI
```
- method: POST
- path: /stores
- description: ログインしているユーザーが確認可能なストアの一覧
```

```
- method: POST
- path: /stores
- description: ストアを開設
```

```
- method: GET
- path: /stores/{storeId}
- description: ストアを1件取得
```

```
- method: PUT
- path: /stores/{storeId}
- description: ストア更新
```

### Product - 商品関連のAPI

```
- method: GET
- path: /stores/{storeId}/products
- description: ストアの商品一覧
```

```
- method: POST
- path: /stores/{storeId}/products
- description: ストアに商品を追加
```

```
- method: GET
- path: /products/{productId}
- description: 商品を1件取得
```

```
- method: PUT
- path: /products/{productId}
- description: 商品更新
```

### Order - 商品注文関連のAPI

```
- method: GET
- path: /stores/{storeId}/orders
- description: ストアの商品一覧
```

```
- method: POST
- path: /stores/{storeId}/orders
- description: ストアに商品を追加
```

```
- method: GET
- path: /products/{productId}
- description: 商品の注文内容1件を取得
```

```
- method: PUT
- path: /products/{productId}
- description: 商品の注文内容を更新する
```

```
- method: POST
- path: /products/{productId}/accept
- description: 商品の注文状況を「提供済み」に変更する
```

```
- method: POST
- path: /products/{productId}/cancel
- description: 商品の注文状況を「キャンセル済み」に変更する
```

```
- method: POST
- path: /products/{productId}/restore
- description: 商品の注文状況を「提供待ち」に変更する
```

### Collaborator - 共同管理人関連のAPI

```
- method: GET
- path: /stores/{storeId}/users/
- description: ストアの共同管理人一覧
```

```
- method: POST
- path: /stores/{storeId}/users/{userId}
- description: ストアに共同管理人を追加
```

```
- method: DELETE
- path: /stores/{storeId}/users/{userId}
- description: ストアに共同管理人から削除
```

```
- method: DELETE
- path: /stores/{storeId}/users/me
- description: 自身をストアに共同管理人から削除
```

### Sales - 売上関連のAPI

```
- method: GET
- path: /stores/{storeId}/sales_timeline
- description: ストアの商品一覧
```

### Auth - 

```
- method: GET
- path: /users/me
- description: ユーザ本人取得
```

```
- method: GET
- path: /users/userId
- description: ユーザ1件取得
```

```
- method: PUT
- path: /users/userId
- description: ユーザ1件更新
```