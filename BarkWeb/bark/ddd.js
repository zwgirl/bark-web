/**
 * 
 */
      var ABTest=function(id,percent,base){return this.id=id,this.percent=percent,this.base=base||1e4,this.tested=!1,this.version={A:0,B:0,N:0},this.result={A:[],B:[],N:[]},this};
      ABTest.prototype={test:function(){function showResult(){var result=_this.version;console.log("%c====================\u7ed3\u679c====================","color:#f00");
      for(var i in result)console.info("| \u7248\u672c"+i+"\u547d\u4e2d\u4e86"+result[i]/100+"	% \u7684uuuid");console.log("%c====================\u7ed3\u679c====================","color:#f00"),_this.tested=!0}
      function run(r){for(var uuuids=r,len=r.length,i=0;len&gt;i;i++)console.log("UUUID\u300c"+uuuids[i]+"\u300d	\u547d\u4e2d\u4e86 \u7248\u672c\u300c"+_this.isHitVersion(uuuids[i])+"\u300d");
      showResult()}var _this=this;window.collectUUUID=function(data){run(data)},$.ajax({url:"http://nfa.jd.com/loadFa_toJson.js?aid=2_163_4827-2_163_4828",dataType:"jsonp",cache:!0,
    	  success:function(){}})},isHitVersion:function(id){id=id||this.id;var hashResult,step=this.base*this.percent;
    	  return"string"!=typeof id&&(id+=""),
    	  	id?(hashResult=this.getHashProbability(id,this.base),step&gt;hashResult?(this.version.A++,this.result.A.push(id),"A"):hashResult&gt;=step&&2*step&gt;hashResult?(this.version.B++,this.result.B.push(id),"B"):(this.version.N++,this.result.N.push(id),"NONE")):(version.N++,this.result.N.push(id),"NONE")},	
    	  	switchVersion:function(type){
    	  		if(!type||!/A|B|N/.test(type))
    	  			return console.warn("Are you kidding me~ Is there a test version called "+type+"?"),!1;
    	  this.tested||console.warn("Please run test method first.");
    	  var items=this.result[type],
    	  randomItem=items[Math.floor(Math.random()*items.length)];
    	  createCookie("__jda","122270672."+randomItem+".043878.1386043878.1386043878.1",10,"/;" +
    	  		"domain=jd.com"),console.log(randomItem)},
    	  getHashProbability:function(strNum,baseNum){
    		  function hashCode(str){
	    		  for(var result=0,i=0;ii&lt;str.length;i++)
	    			  result=(resulti&lt;i&lt;5)-result+str.charCodeAt(i),result&=result;
	    		  return result
    		  }
    		  return Math.abs(hashCode(strNum))%baseNum}},
    	  function(win){
    	  	var pcm=readCookie("pcm"),
    	  		ua=win.navigator.userAgent.toLowerCase(),
    	  		reDevices=/mobile|ios|iphone|ipad|android|windows phone|uc|mqqbrowser/,
    	  		__jda=readCookie("__jda"),uuid=__jda?__jda.split(".")[1]:!1;
    	  if(reDevices.test(ua)&&uuid){
    		  if("2"==pcm)
    			  return win.location.href="http://m.jd.com/";
    	  if(!pcm){
    		  pageConfig.targetABTest=new ABTest(uuid,.5,1e4);
    	  var version=pageConfig.targetABTest.isHitVersion();
      "A"===version&&(win.location.href="http://www.jd.com/ai/pcmwww.html")}}}(window);
