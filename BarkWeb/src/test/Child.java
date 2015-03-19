package test;

@RemotingBean
public class Child extends Person1 {
  private Person1 _mother;
  private Person1 _father;

  public Person1  getMother() {
    return this._mother;
  }
  public void setMother(Person1 value) {
    this._mother = value;
  }

  public Person1  getFather() {
    return this._father;
  }
  public void setFather(Person1 value) {
    this._father = value;
  }
  static {
    org.bark.remoting.SerializerFactory.getInstance().register(Child.class, new org.bark.remoting.Serializer(){
      @Override
      public void writeObject(javax.json.JsonObjectBuilder builder, org.bark.remoting.ReferenceProcessor handler, Object value) {
        org.bark.remoting.SerializerFactory.getInstance().getSerializer(Person1 .class).writeObject(builder, handler, value);
        Child __o = (Child)value;
        builder = __o._mother == null ? builder.addNull("_mother") : builder.add("_mother", handler.shared(__o._mother));
        builder = __o._father == null ? builder.addNull("_father") : builder.add("_father", handler.shared(__o._father));
      }
    });
    org.bark.remoting.DeserializerFactory.getInstance().register(Child.class, new org.bark.remoting.Deserializer(){
      @SuppressWarnings({ "unchecked", "rawtypes" })
      @Override
      public Object readObject(javax.json.JsonObject jsonObj, Object[] handlers, Object obj) throws Exception {
        org.bark.remoting.DeserializerFactory.getInstance().getDeserializer(Person1 .class).readObject(jsonObj, handlers, obj);
        Child __o = (Child)obj;
        __o._mother = jsonObj.get("_mother") == javax.json.JsonValue.NULL ? null : (  Person1)handlers[jsonObj.getInt("_mother")];
        __o._father = jsonObj.get("_father") == javax.json.JsonValue.NULL ? null : (  Person1)handlers[jsonObj.getInt("_father")];
        return obj;
      }
    });
  }
}