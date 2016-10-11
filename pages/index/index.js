Page({
    data:{
    	bardata:[
    		{	index:0,
    			url:"12345",
    			purl:"123456",
    			con:"1111"
    		},
    		{	index:1,
    			url:"12345",
    			purl:"123456",
    			con:"222"
    		},
    		{	index:2,
    			url:"12345",
    			purl:"123456",
    			con:"3333"
    		},
    		{	index:3,
    			url:"12345",
    			purl:"123456",
    			con:"4444"
    		},
    		{	index:4,
    			url:"12345",
    			purl:"123456",
    			con:"55555"
    		}
    	],
    	animationData:{},
    	leftnum:0,
    	current:0,

    },
    onReady:function(){
	    var animation = wx.createAnimation({
	      duration:1000,
	        timingFunction:"ease",
	    })
	    this.animation = animation
	    var timer1=null;
	    var timer=true;
	    var bardata=this.data.bardata;
	    timer1=setInterval(function(){
	      var i=this.data.leftnum;
	      animation.translate(-20*i+"rem").step();
	      this.setData({
	        current:i
	      })
	      if(i>=bardata.length-1){
	      	timer=false;
	      }
	      if(i<=0){
	      	timer=true;
	      }
	      if(timer){
	    	i++;
	    	}else{
	    	i--;
	      }
	      this.setData({
	        animationData:animation.export(),
	        leftnum:i
	      })
	    }.bind(this),3000);
	},
	changecon:function(event){
		var animation = wx.createAnimation({
	      duration:1000,
	        timingFunction:"ease",
	    })
		var i=event.currentTarget.dataset.num;
		console.log(i);
		
		animation.translate(-20*i+"rem").step();
		this.setData({
	        animationData:animation.export(),
	        leftnum:i,
	        current:i
	      })
	      
		
	}    
})