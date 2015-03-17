package org.bark.remoting;

public class FirstServiceImpl implements FirstService{

	@Override
	public Result sayHello(String message) {
		System.out.println("Hello world!!!");
		return new Result("Hello world!");
	}

}
