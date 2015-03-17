(function(){ 
  function SelectTemplate() {    
  __lc('java.lang.ItemTemplate').call(this);
  }
  SelectTemplate.prototype.__proto__ = __lc("java.lang.ItemTemplate").prototype;
  __cache["SelectTemplate"] = SelectTemplate;
  SelectTemplate.prototype.createRoot = function(parent) {
    var _n = _c("option");
    parent.appendChild(_n);
    _n.value = new (__lc("java.lang.Binding"))({property : "age", mode : __lc("java.lang.BindingMode").OneWay}).provideValue(_n, "value", null);
    return _n;
  };
  SelectTemplate.prototype.createChild = function(parent) {
    (function(_p){
      var _n = document.createTextNode('');
      _p.appendChild(_n);
      _n.data = new (__lc("java.lang.Binding"))({property : "name", mode : __lc("java.lang.BindingMode").OneWay}).provideValue(_n, "data", null);
    }).call(this, parent);
  };
  SelectTemplate.prototype.__class = new (__lc('java.lang.Class'))("SelectTemplate", SelectTemplate, __lc("java.lang.ItemTemplate").prototype.__class, [], 1);
  return  SelectTemplate;
})();