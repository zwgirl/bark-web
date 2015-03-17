(function(){ 
  function FirstTemplate() {    
  __lc('java.lang.Template').call(this);
    this._name = null;
    this.test = (function(event){
    }).bind(this);
  }
  FirstTemplate.prototype.__proto__ = __lc("java.lang.Template").prototype;
  __cache["FirstTemplate"] = FirstTemplate;
  Object.defineProperty(FirstTemplate.prototype, "name", {
    get : function() {
      return this._name;
    }
  });
  FirstTemplate.prototype.doCreate = function(parent, data) {
  
    var _n = _c("p");parent.appendChild(_n);onclick="this.test(event);";
    (function(_p){
      _p.appendChild(document.createTextNode("\r\n		kshajshajksakjsha \r\n		adadasasa\r\n		啊飒飒飒飒啊飒飒飒飒去啊飒飒飒飒 \r\n	"));
    }).call(this, _n);
  };
  FirstTemplate.prototype.__class = new (__lc('java.lang.Class'))("FirstTemplate", FirstTemplate, __lc("java.lang.Template").prototype.__class, [], 1);
  return  FirstTemplate;
})();