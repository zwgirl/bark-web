package org.bark.test;

@RemotingService
public interface FirstService {
  Result sayHello(String message);
}