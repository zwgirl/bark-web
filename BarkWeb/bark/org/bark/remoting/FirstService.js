(function(){ 
  function FirstService(){}
  FirstService.prototype.__proto__ = Object.prototype;
  __cache["org.bark.remoting.FirstService"] = FirstService;
  FirstService.prototype.sayHello = function(message){
    try{
      return __invoke("21212", new (__lc("org.bark.remoting.RemotingModel"))("org.bark.remoting.FirstService", "sayHello", [message]));
    }catch(e){
      throw e;
    }
  };
  FirstService.prototype.__class = new (__lc('java.lang.Class'))("org.bark.remoting.FirstService", FirstService, Object.prototype.__class, [], 2);
  return  FirstService;
})();