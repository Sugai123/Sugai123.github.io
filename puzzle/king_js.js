function getName() {
  var name = prompt("请输入你的名字");
  alert(name + "，你好！")
  document.getElementById("names").innerHTML = "尊敬的" + name +"，是时候开始寻找潜藏在我们之中的卷王了！";
}

function startGame() {
  alert("游戏已经开始，可以从下面选择第一天的考察对象！")

  document.getElementById('day1').style.display="block";
  document.getElementById('startGame').style.display="none";
}

function choice1(a) {
  for (var i = 0; i < 1; i++) {
    if (10<a<19) {
      if (a==11) {
        var result="第一天，你发现小汗躺在床上，看上去是在玩手机。你在思考的时候不小心发出了很小的声音，小汗顺手收起手机对你说：“哎呀，谁在那儿放炮仗呢！”"
      }
      if (a==12) {
        var result="第一天，你发现小牙在走廊里来回走，一会转头看向窗外，一会又看向教室里。忽然，他回头向你展示了标志性的微笑。你走到窗边，没发现什么特殊的。"
      }
      if (a==13) {
        var result="第一天，你发现小怜有些疲惫。小怜躺在床上对你说：“嘤嘤嘤，人家想睡觉，可以关灯吗？”你把灯关上后不久听见小怜的床上传来刷抖音的背景音乐声，不是非常吵，但能听得很清楚。"
      }
      alert(result)
      document.getElementById("result1").innerHTML = result;
      document.getElementById('day2').style.display="block";
      var a = 0;
      break;
    }
    else {
      alert("出错了！")
    }
  }
}

function choice2(a) {
  for (var i = 0; i < 1; i++) {
    if (20<a<29) {
      if (a==21) {
        var result="第二天，你不知道小汗去了哪儿，但你发现了小汗发的朋友圈，包含聚餐的图片和定位，有不少人给他点赞。"
      }
      if (a==22) {
        var result="第二天，你不知道小牙去了哪儿，但你发现群里正在激烈讨论某校内活动，有一张其他人拍的人偶照片，露出来的鞋是小牙经常穿的鞋。"
      }
      if (a==23) {
        var result="第二天，你不知道小怜去了哪儿，但你发现了他的朋友圈，内容是“学习好累啊……该好好休息一段时间了”，定位是学校附近的某娱乐场所，有两三个人点赞。"
      }
      alert(result)
      document.getElementById("result2").innerHTML = result;
      document.getElementById('day3').style.display="block";
      var a = 0;
      break;
    }
  }
}

function choice3(a) {
  for (var i = 0; i < 1; i++) {
    if (30<a<39) {
      if (a==31) {
        var result="第三天，小汗在宿舍里疯狂敲打笔记本键盘，发现你之后他大声说：“没见过写论文啊？”"
      }
      if (a==32) {
        var result="第三天，小牙拿着一本小说站了起来，随后给了你一个标志性的呲牙笑：“我去图书馆还书。”然后大摇大摆地走了出去。"
      }
      if (a==33) {
        var result="第三天，小怜戴着无线耳机不规则地打着节拍，仿佛若有所思。突然，他全身放松下来，拿掉耳机，有气无力地垂在椅子上，看了两分钟手机后又戴上了耳机。"
      }
      alert(result)
      document.getElementById("result3").innerHTML = result;
      document.getElementById('day4').style.display="block";
      break;
    }
  }
}

function choice4(a) {
  for (var i = 0; i < 1; i++) {
    if (40<a<49) {
      if (a==41) {
        var result="答错了，小汗并不是卷王！"
        document.getElementById('again').style.display="block";
      }
      if (a==42) {
        var result="答错了，小牙并不是卷王！"
        document.getElementById('again').style.display="block";
      }
      if (a==43) {
        var result="答对了，小怜就是卷王！"
      }
      alert(result)
      document.getElementById("result4").innerHTML = result;
      break;
    }
  }
}

function check() {

}
