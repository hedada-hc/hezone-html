var v = new Vue({
	el:"#app",
	data:{
		message:"test hello vue!",
		luck:[
			{"qihao":751810,"num1":1,"num2":2,"num3":9,"res":12,"date":"07-28 10:14","J_total":3000000000,"Z_total":871,"jing":10000,"shou":19871},
			{"qihao":751810,"num1":1,"num2":2,"num3":9,"res":12,"date":"07-28 10:14","J_total":3000000000,"Z_total":871,"jing":10000,"shou":19871},
			{"qihao":751810,"num1":1,"num2":2,"num3":9,"res":12,"date":"07-28 10:14","J_total":3000000000,"Z_total":871,"jing":10000,"shou":19871},
		],
		danmuData:[
			{"title":"测试弹幕系统啊","nick":"hezone","jinbi":123541325,"headPic":"./images/headPic.jpg","type":0},
			{"title":"测试红包弹幕消息啊","nick":"红包啊","jinbi":123541325,"headPic":"./images/headPic2.gif","type":1},
			{"title":"测试弹幕系统啊","nick":"hezone","jinbi":123541325,"headPic":"./images/headPic.jpg","type":0},
			{"title":"测试弹幕系统啊","nick":"hezone","jinbi":123541325,"headPic":"./images/headPic.jpg","type":0},
		],
		left:0,
		time:90,
		closeLogin:true,
		DM:{
			"DMtext":'',
			"DMHBje":null,
			"DMHBnum":null
		}
		
		
		
	},
	mounted:function(){
		setInterval(this.lottorTime,1000)
		setInterval(this.danmu,100)
	},
	methods:{
		lottorTime:function(){
			if(this.time <= 0){
				this.time = 90;
			}else{
				this.time -= 1;
			}
		},
		danmu:function(){
			if($(".game_danmu_content ul").width() > Math.abs(this.left)){
				this.left -= 10;
				$(".game_danmu_content ul").animate({"left": this.left + "px"})
			}else{
				this.left = Math.abs(this.left);
				$(".game_danmu_content ul").animate({"left": this.left + "px"});
				this.left -= 10;
				$(".game_danmu_content ul").animate({"left": this.left + "px"})
			}
		},
		login:function(){
			this.closeLogin = this.closeLogin ? false : true ;
			this.closeLogin ? $(".login").hide() : $(".login").show();
		},
		sendDanMu:function(){
			$(".game_mask").show();
			$(".game_danmu_tanchuang").show();
		},
		hide:function(){
			$(".game_mask").hide();
			$(".game_danmu_tanchuang").hide();
		},
		textarea:function(){
			$("textarea").attr("style","color:#000000;font-size:16px;");
		},
		showHB:function(){
			if($(".game_danmu_sendhb").attr("style") == "display: block;"){
				$(".icon_hb").css({"color":"#afafaf"});
				$(".game_danmu_sendhb").hide();
				$(".game_danmu_sendDM").text("发送弹幕");
			}else{
				$(".icon_hb").css({"color":"#ff8765"});
				$(".game_danmu_sendhb").show();
				$(".game_danmu_sendDM").text("发送红包弹幕");
			}
		},
		sendDM:function(){
			console.log(this.DM)
		}
	}
})
