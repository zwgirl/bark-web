package org.bark.remoting;

@RemotingService
public interface FirstService {
  Result sayHello(String message);
}