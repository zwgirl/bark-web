(function(){ 
  function FirstService(){}
  FirstService.prototype.__proto__ = Object.prototype;
  __cache["FirstService"] = FirstService;
  FirstService.prototype.sayHello = function(message){
    try{
      return __invoke(new RemotingModel('["FirstService"]', "sayHello", [String.prototype.__class], [message]));
    }catch(e){
      throw e;
    }
  };
  FirstService.prototype.__class = new (__lc('java.lang.Class'))("FirstService", FirstService, Object.prototype.__class, [], 2);
  return  FirstService;
})();