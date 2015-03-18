package org.bark.remoting;

import org.bark.test.FirstService;
import org.bark.test.Result;

public class FirstServiceImpl implements FirstService{

	@Override
	public Result sayHello(String message) {
		System.out.println("Hello world!!!");
		return new Result("Hello world!");
	}

}
