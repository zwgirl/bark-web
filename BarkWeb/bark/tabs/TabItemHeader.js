(function(){ 
  function TabItemHeader() {    
  __lc('java.lang.ItemTemplate').call(this);
    this.OnClick = (function(event){
      var p = event.target.dataContext.dataItem;
      p.selected1 = true;
    }).bind(this);
    this.callback = (function(target, tagProperty1, tagProperty2, value){
      if(value == true)
      {
        target.className = "selected";
      }
      else
      {
        target.className = "";
      }
    }).bind(this);
  }
  TabItemHeader.prototype.__proto__ = __lc("java.lang.ItemTemplate").prototype;
  __cache["tabs.TabItemHeader"] = TabItemHeader;
  TabItemHeader.prototype.createRoot = function(parent, item) {
    var _n = _c("li");
    parent.appendChild(_n);
    _n.dataContext = new (__lc('java.lang.DataContext'))(item, '12');
    _n.className = new (__lc("java.lang.Binding"))({property : "selected1", mode : __lc("java.lang.BindingMode").OneWay, callback : this.callback}).provideValue(_n, "className", null);
    _n.addEventListener('click', this.OnClick, false);
    return _n;
  };
  TabItemHeader.prototype.createChild = function(parent) {
    (function(_p){
      var _n = _c("a");
      _p.appendChild(_n);
      _n.href = "#";
      _n.textContent = new (__lc("java.lang.Binding"))({property : "header"}).provideValue(_n, "textContent", null);
    }).call(this, parent);
  };
  TabItemHeader.prototype.__class = new (__lc('java.lang.Class'))("tabs.TabItemHeader", TabItemHeader, __lc("java.lang.ItemTemplate").prototype.__class, [], 1);
  return  TabItemHeader;
})();