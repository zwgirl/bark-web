package org.bark.remoting;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Method;

import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonReader;
import javax.json.JsonWriter;
import javax.json.JsonWriterFactory;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.inject.Injector;

@WebServlet(name  = "RemotingServiceServlet" , urlPatterns  = {"/rpc" })
//@MultipartConfig(location = "/tmp/", maxFileSize = 1024 * 1024 * 10)
public class RemotingServiceServlet extends HttpServlet{

	private static final long serialVersionUID = 1L;
//    private static final JsonBuilderFactory bf = Json.createBuilderFactory(null);
    private static final JsonWriterFactory wf = Json.createWriterFactory(null);

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		this.process(req, resp);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		this.process(req, resp);
	}
	
	private void process(HttpServletRequest req, HttpServletResponse res){
		String rpc = req.getParameter("rpc");
		
		String q = req.getQueryString();
		boolean isStream = q != null && q.equals("stream");
		try (InputStream is = new ByteArrayInputStream(rpc.getBytes()); 
	             JsonReader rdr = Json.createReader(is)) {
		
			JsonArray root = rdr.readArray();
			LarkInput li = new LarkInput();
			RemotingModel rm = (RemotingModel) li.readObject(root);
			
			String serviceClassname = rm.getClassName();
			Class<?> serviceClass = Class.forName(serviceClassname);
			
			Injector injector = (Injector) this.getServletContext().getAttribute(BarkServletContextListener.INJECTOR);
			Object service = injector.getInstance(serviceClass);
			
			Class<?>[] parClass = new Class[rm.getParameters().length];
			for(int i = 0, length = rm.getParameters().length; i< length; i++){
				Object par = rm.getParameters()[i];
				if(par == null){
					parClass[i] = null;
				} else {
					parClass[i] = rm.getParameters()[0].getClass();
				}
			}
			Method method = serviceClass.getMethod(rm.getMethodName(), parClass);
			Object result = method.invoke(service, rm.getParameters());
			
	        res.setStatus(HttpServletResponse.SC_OK);
	        res.setCharacterEncoding("UTF-8");
			if(result == null){
				res.getWriter().println("Hello World!");
			} else {
		        LarkOutput lo = new LarkOutput();
		        JsonArray array = lo.writeObject1(result);
		        
		        JsonWriter writer = isStream
	 	                ? wf.createWriter(res.getOutputStream())
	 	   	                : wf.createWriter(res.getWriter());
	 	   	        res.setContentType("application/json");
		        writer.write(array);
		        
		        writer.close();
			}
		}catch(Exception ex){
			ex.printStackTrace();
		}
	}
}
