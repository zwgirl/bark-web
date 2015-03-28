(function(){ 
  function Person() {    
  }
  Person.prototype.__proto__ = Object.prototype;
  __cache["demo.Person"] = Person;
  Person.prototype.__class = new (__lc('java.lang.Class'))("demo.Person", Person, Object.prototype.__class, [], 1);
  return  Person;
})();