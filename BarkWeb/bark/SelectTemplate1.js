(function(){ 
  function SelectTemplate1() {    
  __lc('java.lang.ItemTemplate').call(this);
    this.item = null;
    this.itemClick = (function(event){
      var person = this.item.dataContext.dataItem;
      person.selected = ! person.selected;
    }).bind(this);
  }
  SelectTemplate1.prototype.__proto__ = __lc("java.lang.ItemTemplate").prototype;
  __cache["SelectTemplate1"] = SelectTemplate1;
  SelectTemplate1.prototype.createRoot = function(parent) {
    var _n = _c("p");
    parent.appendChild(_n);
    _n["name"] = "item";
    this.item = _n;
    _n.className = "item";
    _n.addEventListener('click', this.itemClick, false);
    return _n;
  };
  SelectTemplate1.prototype.createChild = function(parent) {
    (function(_p){
      var _n = _c("input");
      _p.appendChild(_n);
      _n.value = new (__lc("java.lang.Binding"))({property : "name", mode : __lc("java.lang.BindingMode").TwoWay, updateSourceTrigger : __lc("java.lang.UpdateSourceTrigger").PropertyChanged}).provideValue(_n, "value", null);
      var _n = document.createTextNode('');
      _p.appendChild(_n);
      _n.data = new (__lc("java.lang.Binding"))({property : "age", mode : __lc("java.lang.BindingMode").OneWay}).provideValue(_n, "data", null);
    }).call(this, parent);
  };
  SelectTemplate1.prototype.__class = new (__lc('java.lang.Class'))("SelectTemplate1", SelectTemplate1, __lc("java.lang.ItemTemplate").prototype.__class, [], 1);
  return  SelectTemplate1;
})();