(function(){ 
  function RemotingModel(className, methodName, parameters) {    
    this._className = className;
    this._methodName = methodName;
    this._parameters = parameters;
  }
  RemotingModel.prototype.__proto__ = Object.prototype;
  __cache["org.bark.remoting.RemotingModel"] = RemotingModel;
  Object.defineProperty(RemotingModel.prototype, "className", {
    get : function() {
      return this._className;
    }, 
    set : function(value) {
      this._className = value;
    }
  });
  Object.defineProperty(RemotingModel.prototype, "methodName", {
    get : function() {
      return this._methodName;
    }, 
    set : function(value) {
      this._methodName = value;
    }
  });
  Object.defineProperty(RemotingModel.prototype, "parameters", {
    get : function() {
      return this._parameters;
    }, 
    set : function(value) {
      this._parameters = value;
    }
  });
  RemotingModel.prototype.__readObject = function(json, handlers, obj) {
    var propVal = null;
    obj["_className"] = json["_className"];
    obj["_methodName"] = json["_methodName"];
    
    propVal = json["_parameters"];
    obj["_parameters"] = propVal == null ? null : handlers[propVal];
  };
  RemotingModel.prototype.__writeObject = function(obj, handlers) {
    var __r = {"__clazz" : "org.bark.remoting.RemotingModel"};
    var __propVal = null;
    __r["_className"] = obj["_className"];
    __r["_methodName"] = obj["_methodName"];
    __propVal = obj["_parameters"];
    __r["_parameters"] = __propVal == null ? null : handlers.shared(__propVal);
    return __r;
  };
  RemotingModel.prototype.__class = new (__lc('java.lang.Class'))("org.bark.remoting.RemotingModel", RemotingModel, Object.prototype.__class, [], 1);
  return  RemotingModel;
})();