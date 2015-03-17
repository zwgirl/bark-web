package org.bark.remoting;

public class TestClassForName {
	public static void main(String[] args) throws ClassNotFoundException {
		Class cl = Class.forName("org.bark.test.FirstService");
		System.out.println(cl);
		System.out.println(Class.forName("org.bark.test.FirstService"));
	}
}
