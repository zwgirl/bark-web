(function(){ 
  function MyTemplate() {    
  __lc('java.lang.ItemTemplate').call(this);
  }
  MyTemplate.prototype.__proto__ = __lc("java.lang.ItemTemplate").prototype;
  __cache["demo.MyTemplate"] = MyTemplate;
  MyTemplate.prototype.createRoot = function(parent) {
    var _n = _c("li");
    parent.appendChild(_n);
    _n.className = "item basic";
    return _n;
  };
  MyTemplate.prototype.createChild = function(parent) {
    (function(_p){
      var _n = _c("h4");
      _p.appendChild(_n);
      _n.className = "fn";
      _n.textContent = new (__lc("java.lang.Binding"))({property : "_h4ClassName", mode : __lc("java.lang.BindingMode").OneWay}).provideValue(_n, "textContent", null);
      (function(_p){
        var _n = _c("span");
        _p.appendChild(_n);
        _n.className = "price";
        (function(_p){
          var _n = document.createTextNode('');
          _p.appendChild(_n);
          _n.data = new (__lc("java.lang.Binding"))({property : "_ulClassName", mode : __lc("java.lang.BindingMode").OneWay}).provideValue(_n, "data", null);
        }).call(this, _n);
      }).call(this, _n);
      var _n = _c("ul");
      _p.appendChild(_n);
      _n.className = "description";
      (function(_p){
        var _n = _c("li");
        _p.appendChild(_n);
        (function(_p){
          var _n = _c("strong");
          _p.appendChild(_n);
          _n.textContent = new (__lc("java.lang.Binding"))({property : "activeClient", mode : __lc("java.lang.BindingMode").OneWay}).provideValue(_n, "textContent", null);
          _p.appendChild(document.createTextNode(" active clients"));
        }).call(this, _n);
        var _n = _c("li");
        _p.appendChild(_n);
        (function(_p){
          var _n = _c("strong");
          _p.appendChild(_n);
          (function(_p){
            _p.appendChild(document.createTextNode("Unlimited"));
          }).call(this, _n);
          _p.appendChild(document.createTextNode(" invoices per month"));
        }).call(this, _n);
        var _n = _c("li");
        _p.appendChild(_n);
        (function(_p){
          var _n = _c("strong");
          _p.appendChild(_n);
          (function(_p){
            _p.appendChild(document.createTextNode("Unlimited"));
          }).call(this, _n);
          _p.appendChild(document.createTextNode(" staff logins"));
        }).call(this, _n);
        var _n = _c("li");
        _p.appendChild(_n);
        (function(_p){
          var _n = _c("strong");
          _p.appendChild(_n);
          (function(_p){
            _p.appendChild(document.createTextNode("Free"));
          }).call(this, _n);
          _p.appendChild(document.createTextNode(" upgrades"));
        }).call(this, _n);
        var _n = _c("li");
        _p.appendChild(_n);
        (function(_p){
          var _n = _c("strong");
          _p.appendChild(_n);
          (function(_p){
            _p.appendChild(document.createTextNode("RapidSSL Certificate"));
          }).call(this, _n);
        }).call(this, _n);
      }).call(this, _n);
      var _n = _c("p");
      _p.appendChild(_n);
      (function(_p){
        _p.appendChild(document.createTextNode("Unlimited telephone & email support"));
      }).call(this, _n);
      var _n = _c("p");
      _p.appendChild(_n);
      (function(_p){
        var _n = _c("a");
        _p.appendChild(_n);
        _n.href = "#";
        _n.className = "action";
        (function(_p){
          _p.appendChild(document.createTextNode("Sign up "));
          var _n = _c("span");
          _p.appendChild(_n);
          (function(_p){
            _p.appendChild(document.createTextNode("30 day free trial"));
          }).call(this, _n);
        }).call(this, _n);
      }).call(this, _n);
    }).call(this, parent);
  };
  MyTemplate.prototype.__class = new (__lc('java.lang.Class'))("demo.MyTemplate", MyTemplate, __lc("java.lang.ItemTemplate").prototype.__class, [], 1);
  return  MyTemplate;
})();