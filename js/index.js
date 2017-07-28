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
		time:90
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
			
		}
	}
})