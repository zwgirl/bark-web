package remoting;

@RemotingService
public interface PersonService {
  String sayHello(String name);
}