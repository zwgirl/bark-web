(function(){ 
  function FirstService(){}
  FirstService.prototype.__proto__ = Object.prototype;
  __cache["org.bark.test.FirstService"] = FirstService;
  FirstService.prototype.sayHello = function(message, r){
    try{
      return __invoke(new RemotingModel('["org.bark.test.FirstService"]', "sayHello", [String.prototype.__class, __lc("org.bark.test.Result", "org.bark.test.Result").prototype.__class], [message, r]));
    }catch(e){
      throw e;
    }
  };
  FirstService.prototype.__class = new (__lc('java.lang.Class'))("org.bark.test.FirstService", FirstService, Object.prototype.__class, [], 2);
  return  FirstService;
})();