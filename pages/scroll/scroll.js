var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    list:[
      {
        url:"12313",
        tit:"11111",
        path:"123",
        time:"2016-10-11"
      },
      {
        url:"12313",
        tit:"22222222",
        path:"123",
        time:"2016-10-11"
      },
      {
        url:"12313",
        tit:"33333333333333",
        path:"123",
        time:"2016-10-11"
      },
      {
        url:"12313",
        tit:"444444",
        path:"123",
        time:"2016-10-11"
      },
      {
        url:"12313",
        tit:"555555555555",
        path:"123",
        time:"2016-10-11"
      },
      {
        url:"12313",
        tit:"666666666",
        path:"123",
        time:"2016-10-11"
      },
      {
        url:"12313",
        tit:"77777777777",
        path:"123",
        time:"2016-10-11"
      },
      {
        url:"12313",
        tit:"88888888888888",
        path:"123",
        time:"2016-10-11"
      },
      {
        url:"12313",
        tit:"999999999999999",
        path:"123",
        time:"2016-10-11"
      },
      {
        url:"12313",
        tit:"10101010",
        path:"123",
        time:"2016-10-11"
      },
      {
        url:"12313",
        tit:"十一十一十一",
        path:"123",
        time:"2016-10-11"
      },
      {
        url:"12313",
        tit:"十二十二十二",
        path:"123",
        time:"2016-10-11"
      },
      {
        url:"12313",
        tit:"十三十三十三",
        path:"123",
        time:"2016-10-11"
      },
      {
        url:"12313",
        tit:"十四十四十四",
        path:"123",
        time:"2016-10-11"
      },
      {
        url:"12313",
        tit:"十五十五十五十五",
        path:"123",
        time:"2016-10-11"
      },
      {
        url:"12313",
        tit:"十六十六十六",
        path:"123",
        time:"2016-10-11"
      }
    ],
    showdata:[],
    start:0,
    end:10,
    scrolltop:100,
    animationData:{},
    showinfo:"下滑加载"
  },
  onReady:function(){
    var data1=JSON.parse(JSON.stringify(this.data.list));
    data1=data1.slice(this.data.start,this.data.end);
    this.setData({
           showdata:data1
      })
  },
  /*滚动*/
  scrollfun:function(event){
    if(event.detail.scrollTop>300){
      var animation = wx.createAnimation({
        duration:500,
          timingFunction:"ease",
      })

      this.animation = animation

      animation.scale(1).step();

      this.setData({
        animationData:animation.export()
      })

      setTimeout(function(){
        animation.scale(0).step();
        this.setData({
          animationData:animation.export()
        })
      }.bind(this),1000)
    }else{
       this.setData({
        showinfo:"下滑加载"
      })
    }
  },
  /*下滑加载*/
  scrollload:function(){
    var data1=JSON.parse(JSON.stringify(this.data.list));
    var start=this.data.start;
    var end=this.data.end;
    if(end>=data1.length){
      end=data1.length
      this.setData({
        showinfo:"已加载全部！"
      })
      return;
    }else{
      start++;
      end++;
      this.setData({
        showinfo:"下滑加载！"
      })
    }
    data1=data1.slice(start,end);
      this.setData({
        showdata:data1,
        start:start,
        end:end
      })
  },
  /*上滑*/
  scrollhide:function(){
    var data1=JSON.parse(JSON.stringify(this.data.list));
    var start=this.data.start;
    var end=this.data.end;
    if(start<=0){
      start=0
      return;
    }else{
      start--;
      end--;
    }
    data1=data1.slice(start,end);
      this.setData({
        showdata:data1,
        start:start,
        end:end
    })
  }
})