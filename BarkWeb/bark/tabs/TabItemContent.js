(function(){ 
  function TabItemContent() {    
  __lc('java.lang.ItemTemplate').call(this);
    this.callback = (function(target, tagProperty1, tagProperty2, value){
      if(value == true)
      {
        target.style.display = "block";
      }
      else
      {
        target.style.display = "none";
      }
    }).bind(this);
  }
  TabItemContent.prototype.__proto__ = __lc("java.lang.ItemTemplate").prototype;
  __cache["tabs.TabItemContent"] = TabItemContent;
  TabItemContent.prototype.createRoot = function(parent, item) {
    var _n = _c("div");
    parent.appendChild(_n);
    _n.dataContext = new (__lc('java.lang.DataContext'))(item, '12');
    _n.style.display = new (__lc("java.lang.Binding"))({property : "selected1", mode : __lc("java.lang.BindingMode").OneWay, callback : this.callback}).provideValue(_n, "style", "display");
    return _n;
  };
  TabItemContent.prototype.createChild = function(parent) {
    (function(_p){
      var _n = _c("h3");
      _p.appendChild(_n);
      _n.dataContext = new (__lc("java.lang.DataPath"))({mode : __lc("java.lang.PathMode").Relative, property : "poem"}).provideValue(_n, "dataContext", null);
      _n.textContent = new (__lc("java.lang.Binding"))({property : "author"}).provideValue(_n, "textContent", null);
      var _n = _c("div");
      _p.appendChild(_n);
      _n.id = "flexContainer";
      _n.dataContext = new (__lc("java.lang.DataPath"))({mode : __lc("java.lang.PathMode").Relative, property : "poem"}).provideValue(_n, "dataContext", null);
      (function(_p){
        var _n = _c("div");
        _p.appendChild(_n);
        _n.className = "item";
        (function(_p){
          var _n = _c("img");
          _p.appendChild(_n);
          _n.src = new (__lc("java.lang.Binding"))({property : "img"}).provideValue(_n, "src", null);
        }).call(this, _n);
        var _n = _c("div");
        _p.appendChild(_n);
        _n.className = "item";
        (function(_p){
          var _n = _c("ul");
          _p.appendChild(_n);
          (function(_p){
            var _n = _c("li");
            _p.appendChild(_n);
            _n.textContent = new (__lc("java.lang.Binding"))({property : "first"}).provideValue(_n, "textContent", null);
            var _n = _c("li");
            _p.appendChild(_n);
            _n.textContent = new (__lc("java.lang.Binding"))({property : "second"}).provideValue(_n, "textContent", null);
            var _n = _c("li");
            _p.appendChild(_n);
            _n.textContent = new (__lc("java.lang.Binding"))({property : "three"}).provideValue(_n, "textContent", null);
            var _n = _c("li");
            _p.appendChild(_n);
            _n.textContent = new (__lc("java.lang.Binding"))({property : "four"}).provideValue(_n, "textContent", null);
          }).call(this, _n);
        }).call(this, _n);
      }).call(this, _n);
    }).call(this, parent);
  };
  TabItemContent.prototype.__class = new (__lc('java.lang.Class'))("tabs.TabItemContent", TabItemContent, __lc("java.lang.ItemTemplate").prototype.__class, [], 1);
  return  TabItemContent;
})();