# video-scroll-canvas
<canvas>に動画を1フレームごとにスライスしてdrawImageしたものをマウスホイールで制御

----
## DEMO
see [DEMO](https://codepen.io/tatsuro13/pen/XdYWda)

> 現在はスクロール（マウスホイール）のみで動作するパララックス的なアレ。今後はモバイルにも対応する予定。ちょっとだけｊQuery(ver2)依存

----
## usage
1. var totalImagesにバラバラにした枚数のjpgの合計数値-3を入れる
2. currentLocationでフレームの細かさは調整。数字を大きくするとその分フレームは飛び飛びに。

