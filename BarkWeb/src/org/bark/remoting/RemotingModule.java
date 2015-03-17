package org.bark.remoting;

import com.google.inject.Binder;
import com.google.inject.Module;

class RemotingModule implements Module{

	public void configure(Binder binder) {
		binder.bind(FirstService.class).to(FirstServiceImpl.class);
		
	}
	
}