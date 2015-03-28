package org.bark.test;

import org.bark.remoting.FirstServiceImpl;

import remoting.PersonService;
import remoting.PersonServiceImpl;

import com.google.inject.Binder;
import com.google.inject.Module;

public class RemotingModule implements Module{

	public void configure(Binder binder) {
		binder.bind(FirstService.class).to(FirstServiceImpl.class);
		binder.bind(PersonService.class).to(PersonServiceImpl.class);
	}
	
}