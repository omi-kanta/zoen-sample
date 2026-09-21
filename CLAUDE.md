# 造園サイト デザインサンプル
友人の造園会社のトップページ案を6パターン作り、比較してもらうためのサンプルプロジェクト。

## 構成
- app/page.tsx … 6案の一覧（ギャラリー）
- app/top1, top2, top3, top4, top5, top6/page.tsx … 各デザイン案
- components/top1, top2, top3, top4, top5, top6/ … 案ごとにコンポーネントを分離（共有しない）
- top6 は top3 ベース。季節セクション削除・サービス一覧・口コミ・代表紹介を追加

## ルール
- Next.js 15 (App Router) / TypeScript / Tailwind CSS のみ。CMSはまだ入れない
- 各案はレイアウト・トーン・フォントを明確に変える
- レスポンシブ必須（友人はスマホでも見る）
- 画像はダミー（public/ かUnsplash。使う場合はnext.config.tsに許可ドメインを追加）
- layout.tsx で noindex を設定（サンプルなので検索に出さない）

## 掲載セクション（各案共通）
ヒーロー / 強み / 施工事例 / サービス / 施工の流れ / 法人のお客様へ / お問い合わせ
