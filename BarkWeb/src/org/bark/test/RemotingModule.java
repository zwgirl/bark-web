package org.bark.test;

import org.bark.remoting.FirstServiceImpl;

import com.google.inject.Binder;
import com.google.inject.Module;

public class RemotingModule implements Module{

	public void configure(Binder binder) {
		binder.bind(FirstService.class).to(FirstServiceImpl.class);
		
	}
	
}