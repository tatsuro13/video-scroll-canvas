var totalImages = 665;
var images = [];

//画像を配列にすべてPUSH
for(var i = 3; i< totalImages+3; i++){
  var fileName = 'Run_';
  if(i < 10) fileName += '00';
  else if(i < 100) fileName += '0';
  fileName += i + '.jpg';
  var img = new Image;
  img.src = 'http://sixth-project.com/codepen/canvas_scroll/' + fileName;
  images.push(img);
}

var canv = document.getElementById('canvas');
var context = canv.getContext('2d');

var currentLocation = 0;

var setImage = function(newLocation){
  context.drawImage(images[newLocation],0,0,1280,720);
};

//マウスホイールの回転量取得
var wheelDistance = function(evt){
  if(!evt) evt = event;
  var w = evt.wheelDelta, d = evt.detail;
  // console.log("w:::"+w+"   d:"+d);
  if(d){
    if(w)return w/d/40*d>0?1:-1; //opera
    else return -d/3;
  }else return w/120;
};

//Gecko 固有 Firefox用　マウスホイールの回転量取得
var wheelDirection = function(evt){
  if(!evt) evt = event;
  console.log("evt.detail:::"+evt.detail);
  return (evt.detail < 0) ? 1: (evt.detail >0)? 1: -1;
};

//マウスイベント
var MouseWheelHandler = function(e){
  e.preventDefault(); //No scroll

  var distance = wheelDistance(e);
  var direction = wheelDirection(e);
  // console.log("distance::"+distance);
  // console.log("direction::"+direction);
　　
　//フレームの数量調整
  currentLocation -= Math.round(distance*2);
  // console.log("currentLocation::"+currentLocation)
  if(currentLocation < 0) currentLocation = 0;
  if(currentLocation >= images.length) currentLocation = images.length - 1;

  // console.log("currentLocation", currentLocation.distance);

  setImage(currentLocation);
};

//キャンバスをブラウザいっぱいの中央に設置+リサイズ対応
var canvasFillWin = function(e){
  var h = 720;
  var w = 1280;
  var ratio = h/w;
  var winW = $(window).width();
  var winH = $(window).height();
  var winRatio = winH / winW;

  if(winRatio > ratio) {
    $(canv)
      .width(winH / ratio)
      .height(winH)
      .css({
        marginLeft: - winH / ratio / 2 + "px",
        left: "50%",
        top: "0",
        marginTop: "0"
      });
  } else {
    $(canv)
      .width(winW)
      .height(winW * ratio)
      .css({
        marginLeft: "0",
        left: "0",
        top: "50%",
        marginTop: - winW * ratio / 2 + "px"
      });
  }
};

//各イベントリスナー
window.addEventListener("mousewheel",
  MouseWheelHandler,false);

//Gecko
window.addEventListener("DOMMouseScroll",
  MouseWheelHandler,false);

window.addEventListener("resize",
  canvasFillWin,false);

setImage(1);
canvasFillWin();