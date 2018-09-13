


$(function(){

//小米闪购
    let num = 0;
    let left = 248;
    $(".shopping_top .right_left").click(function(){
        num++;
        if(num >= 4){
            num =4;
        }
        $(".shopping_list ul").animate({'left':`-${num*left}`},200);
    });
    $(".shopping_top .right_right").click(function(){
        num--;
        if(num<=0){
            num =0;
        }
        $(".shopping_list ul").animate({'left':`-${num*left}`},200);
    });
})








// JS方法
window.onload = function(){
//第一部分benner
 //侧导航
    let aside =  document.getElementsByClassName("aside")[0];
    let box = document.getElementsByClassName("div1"); 


    let li = aside.getElementsByClassName("li11");

    for(let i = 0;i<li.length;i++){
        li[i].onmouseenter  = function(){
            box[i].style.width= "992px";
            box[i].style.dispaly  = "flex";
        }
        li[i].onmouseleave  = function(){
            box[i].style.width = "0";
            box[i].style.dispaly = "none";
    
        }
    }
//nav选项卡
    let nav = document.querySelectorAll(".nav_box .nav ul li"); 
    let nav1 = document.querySelectorAll(".nav1 .nav1li");
    nav.forEach((value,index)=>{
        value.onmouseenter=function(){
            // nav1[index].style.display = "block";
            animate(nav1[index],{height:230});
        }
        value.onmouseleave = function(){

            animate(nav1[index],{height:0});
        }
    });
 //轮播图
    let banner = document.querySelector(".banner");
    let list = document.querySelectorAll(".banner .imgBox li a");
    let circle = document.querySelectorAll(".banner .circleBtn div");
    let leftBtn = document.querySelector(".banner .leftBtn");
    let right = document.querySelector(".banner .rightBtn");

    let now = next = 0;
    let width = parseInt(getComputedStyle(list[now],null).width);
    
    let t = setInterval(move,2000);

    let flag = true;

    //小点点击
    circle.forEach(function(value,index){
        value.onclick = function(){
            if(now == index){
                return;
            }else if(now>index){
                list[index].style.left = "0px";
                list[next].style.left = `${width}px`;
                circle[index].classList.add("btn");
                circle[now].classList.remove("btn");
            }else if(now<index){
                list[index].style.left = "0px";
                list[next].style.left = `${-width}px`;
                circle[now].classList.remove("btn");
                circle[index].classList.add("btn");
            }
            next = now = index;
        }
    });
    //左右点击
    leftBtn.onclick = function(){
        if(now == 0){
            return;
        }

        if(!flag){
            return;
        }
        flag = false;
        movel();
    }

    right.onclick = function(){
        if(now == list.length-1){
            return;
        }
        if(!flag){
            return;
        }
        flag = false;
        move();
    }
    //鼠标移入停止
    banner.onmouseenter = function(){
        clearInterval(t);
    }
    banner.onmouseleave = function(){
        t = setInterval(move,2000);
    }

    //右向左移动 
    function move(){

        next++;
        if(next == list.length){
            next = 0;
        }

        list[next].style.left = `${width}px`;
        animate(list[now],{left:-width},function(){
            flag = true;
        });
        animate(list[next],{left:0});
        circle[now].classList.remove("btn");
        circle[next].classList.add("btn");

        now = next;
    }
    //右向左移动
    function movel(){
        next --;
        if(next == -1){
            next = list.length-1;
        }
        list[next].style.left = `${-width}px`;
        animate(list[now],{left:width},function(){
            flag = true;
        });
        animate(list[next],{left:0});
        circle[now].classList.remove("btn");
        circle[next].classList.add("btn");

        now = next;
    }




//  let imgBox = document.getElementsByClassName("banner")[0].getElementsByClassName("imgBox")[0];
//  let list = imgBox.getElementsByTagName("li");
//  let circle1 = document.getElementsByClassName("circleBtn")[0].getElementsByTagName("div");

//  let t = setInterval(move,2000);
//  let num = 0;

//  imgBox.onmouseenter = function(){
//      clearInterval(t);
//  }
//  imgBox.onmouseleave = function(){
//      t = setInterval(move,2000);
//  }


//  let rigtht = document.getElementsByClassName("banner")[0].getElementsByClassName("rightBtn")[0];
//  let left = document.getElementsByClassName("banner")[0].getElementsByClassName("leftBtn")[0];
// //左右移动
//  rigtht.onmouseenter = function(){
//      clearInterval(t);
        
//  }
//  rigtht.onmouseleave = function(){
//      t = setInterval(move,2000);
//  }
//  left.onmouseenter = function(){
//      clearInterval(t);
        
//  }
//  left.onmouseleave = function(){
//      t = setInterval(move,2000);
//  }
//  rigtht.onclick = function(){
//      move();
//  }
//  left.onclick = function(){
//      movel();
//  }

// //。。。。。的点击
//  for(let i =0;i<circle1.length;i++){
//      circle1[i].onmouseenter = function(){
//          clearInterval(t);
//      }
//      circle1[i].onmouseleave = function(){
//          t = setInterval(move,2000);
//      }
//      circle1[i].onclick=function(){
//          for(let j=0;j<list.length;j++){
//              list[j].getElementsByTagName("a")[0].style.zIndex = "5";
//              circle1[j].style.zIndex = "10";
//              circle1[j].style.background = "";
//          }
//          list[i].getElementsByTagName("a")[0].style.zIndex = "10";
//          circle1[i].style.zIndex = "15";
//          circle1[i].style.background = "#f8efe2";
//          num = i;
//      }

//  }
    
//  circle1.onclick=function(){
//      for(let i =0;i<circle1.length;i++){
//          list[i].style.zIndex = "10";
//      }
//  }
    
// //左移动
//  function movel(){
//      num--;
//      if(num<0){
//          num = list.length-1;
//      }
//      for(let i=0;i<list.length;i++){
//          list[i].getElementsByTagName("a")[0].style.zIndex = "5";
            
//          if(i != num){
//              // circle1[i].className = "";
//          }
//          circle1[i].style.zIndex = "10";
//          circle1[i].style.background = "";
//      }
//      // circle1[num].className = "btn1";
//      // let btn = document.getElementsByClassName("btn1")[0];
//      list[num].getElementsByTagName("a")[0].style.zIndex = "10";
//      circle1[num].style.zIndex = "15";
//      circle1[num].style.background = "#f8efe2";
//  }
// //右移动
//  function move(){
//      num++;
//      if(num==list.length){
//          num = 0;
//      }
//      for(let i=0;i<list.length;i++){
//          list[i].getElementsByTagName("a")[0].style.zIndex = "5";
//          circle1[i].style.zIndex = "10";
//          circle1[i].style.background = "";
//      }
//      list[num].getElementsByTagName("a")[0].style.zIndex = "10";
//      circle1[num].style.zIndex = "15";
//      circle1[num].style.background = "#f8efe2";      
//  }




//轮播图结束 正导航
    let jiadian = document.getElementsByClassName("jiadian")[0];
    let zhineng = document.getElementsByClassName("zhineng")[0];
    let dapei   = document.getElementsByClassName("dapei")[0];
    let peijian = document.getElementsByClassName("peijian")[0];
    let zhoubian = document.getElementsByClassName("zhoubian")[0];

    fn(jiadian);
    fn(zhineng);
    fn(dapei);
    fn(peijian);
    fn(zhoubian);
    function fn(wys){
        let more = wys.getElementsByClassName("more")[0].getElementsByTagName("span");
        let right = wys.getElementsByClassName("right");

        for(let i = 0;i<more.length;i++){
            more[i].onmouseenter = function(){
                for(let j=0;j<right.length;j++){
                    right[j].style.zIndex = "5"; 
                    console.log(right[j].style.zIndex);
                }
                right[i].style.zIndex = "10";
            }
            
        }
    }
//内容
    let nr1 = document.querySelector(".bottom .nr1");
    let nr1s = document.querySelectorAll(".bottom .nr1 li");
    let nr1Btn = document.querySelectorAll(".bottom .nr .wheel_nr1 div");
    let nr1leftBtn = document.querySelector(".bottom .nr .leftBtn1");
    let nr1rightBtn = document.querySelector(".bottom .nr .rightBtn1");

    let nr2s = document.querySelectorAll(".bottom .nr2 li");
    let nr2Btn = document.querySelectorAll(".bottom .nr .wheel_nr2 div");
    let nr2leftBtn = document.querySelector(".bottom .nr .leftBtn2");
    let nr2rightBtn = document.querySelector(".bottom .nr .rightBtn2");
    
    let nr4 = document.querySelector(".bottom .nr4");
    let nr4s = document.querySelectorAll(".bottom .nr4 li");
    let nr4Btn = document.querySelectorAll(".bottom .nr .wheel_nr4 div");
    let nr4leftBtn = document.querySelector(".bottom .nr .leftBtn4");
    let nr4rightBtn = document.querySelector(".bottom .nr .rightBtn4");

    let nr3s = document.querySelectorAll(".bottom .nr3 li");
    let nr3Btn = document.querySelectorAll(".bottom .nr .wheel_nr3 div");
    let nr3leftBtn = document.querySelector(".bottom .nr .leftBtn3");
    let nr3rightBtn = document.querySelector(".bottom .nr .rightBtn3");

    lunbotu(nr1s,nr1Btn,nr1leftBtn,nr1rightBtn);
    lunbotu(nr2s,nr2Btn,nr2leftBtn,nr2rightBtn);
    lunbotu(nr3s,nr3Btn,nr3leftBtn,nr3rightBtn);
    lunbotu(nr4s,nr4Btn,nr4leftBtn,nr4rightBtn);
    

    function lunbotu(nrs,nrBtn,nrleftBtn,nrrightBtn){
        let nrNow = nrNext = 0;
        let nrWidth = parseInt(getComputedStyle(nrs[0],null).width);
        let flag = true;
        //小点点击事件
        nrBtn.forEach(function(value,index){
            value.onclick = function(){
                if(nrNow ==index){
                    return;
                }else if(nrNow<index){
                    nrs[index].style.left = nrWidth+"px";
                    animate(nrs[nrNow],{left:-nrWidth});
                    animate(nrs[index],{left:0});
                    nrBtn[nrNow].classList.remove("btn");
                    nrBtn[index].classList.add("btn");
                }else{
                    nrs[index].style.left = -nrWidth+"px";
                    animate(nrs[nrNow],{left:nrWidth});
                    animate(nrs[index],{left:0});
                    nrBtn[nrNow].classList.remove("btn");
                    nrBtn[index].classList.add("btn");
                }
                nrNow = nrNext = index;
            }
        });
        //左右点击移动
        nrleftBtn.onclick = function(){
            if(nrNow == 0){
                return
            }
            if(!flag){
                return;
            }
            flag =false;
            nr1movel();
        }
        nrrightBtn.onclick = function(){
            if(nrNow == nrs.length-1){
                return;
            }
            if(!flag){
                return;
            }
            flag = false;
            
            nr1move();
        }
        //左向右移动
        function nr1movel(){
            nrNext--;
            if(nrNext == -1){
                nrNext = nrs.length-1;
            }

            nrs[nrNext].style.left= -nrWidth+"px";
            animate(nrs[nrNow],{left:nrWidth},function(){
                flag =true;
            });
            animate(nrs[nrNext],{left:0});
            nrBtn[nrNow].classList.remove("btn");
            nrBtn[nrNext].classList.add("btn");

            nrNow = nrNext;
        }
        //右向左移动
        function nr1move(){
            nrNext++;
            if(nrNext == nrs.length){
                nrNext = 0;
            }

            nrs[nrNext].style.left= nrWidth+"px";
            animate(nrs[nrNow],{left:-nrWidth},function(){
                flag =true;
            });
            animate(nrs[nrNext],{left:0});
            nrBtn[nrNow].classList.remove("btn");
            nrBtn[nrNext].classList.add("btn");

            nrNow = nrNext;
        }
    }















    // let nrNow = nrNext = 0;
    // let nrWidth = parseInt(getComputedStyle(nr1s[0],null).width);
    // //小点点击事件
    // nr1Btn.forEach(function(value,index){
    //  value.onclick = function(){
    //      if(nrNow ==index){
    //          return;
    //      }else if(nrNow<index){
    //          nr1s[index].style.left = nrWidth+"px";
    //          animate(nr1s[nrNow],{left:-nrWidth});
    //          animate(nr1s[index],{left:0});
    //          nr1Btn[nrNow].classList.remove("btn");
    //          nr1Btn[index].classList.add("btn");
    //      }else{
    //          nr1s[index].style.left = -nrWidth+"px";
    //          animate(nr1s[nrNow],{left:nrWidth});
    //          animate(nr1s[index],{left:0});
    //          nr1Btn[nrNow].classList.remove("btn");
    //          nr1Btn[index].classList.add("btn");
    //      }
    //      nrNow = nrNext = index;
    //  }
    // });
    // //左右点击移动
    // nr1leftBtn.onclick = function(){
    //  nr1movel();
    // }
    // nr1rightBtn.onclick = function(){
    //  nr1move();
    // }
    // //左向右移动
    // function nr1movel(){
    //  nrNext--;
    //  if(nrNext == -1){
    //      nrNext = nr1s.length-1;
    //  }

    //  nr1s[nrNext].style.left= -nrWidth+"px";
    //  animate(nr1s[nrNow],{left:nrWidth});
    //  animate(nr1s[nrNext],{left:0});
    //  nr1Btn[nrNow].classList.remove("btn");
    //  nr1Btn[nrNext].classList.add("btn");

    //  nrNow = nrNext;
    // }
    // //右向左移动
    // function nr1move(){
    //  nrNext++;
    //  if(nrNext == nr1s.length){
    //      nrNext = 0;
    //  }

    //  nr1s[nrNext].style.left= nrWidth+"px";
    //  animate(nr1s[nrNow],{left:-nrWidth});
    //  animate(nr1s[nrNext],{left:0});
    //  nr1Btn[nrNow].classList.remove("btn");
    //  nr1Btn[nrNext].classList.add("btn");

    //  nrNow = nrNext;
    // }




}