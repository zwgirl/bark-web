package test;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Upload
 */
@WebServlet("/upload")
public class Upload extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Upload() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		BufferedInputStream fileIn = new BufferedInputStream(request.getInputStream());
		   String fn = request.getParameter("fileName");
		   
		   byte[] buf = new byte[1024];
		   
		   File file = new File("d:/" + fn);
		   
		   BufferedOutputStream fileOut = new BufferedOutputStream(new FileOutputStream(file));
		   
		   while (true) {
		      int bytesIn = fileIn.read(buf, 0, 1024);
		      
		      System.out.println(bytesIn);
		      
		      if (bytesIn == -1) {
		         break;
		      } else {
		         fileOut.write(buf, 0, bytesIn);
		      }
		   }
		   
		   
		   fileOut.flush();
		   fileOut.close();
		   
		   response.getOutputStream().print(file.getAbsolutePath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
//		request.setCharacterEncoding("UTF-8");
		BufferedInputStream fileIn = new BufferedInputStream(request.getInputStream());
		   String fn = request.getParameter("fileName");
		   
		   byte[] buf = new byte[1024];
		   
		   File file = new File("d:/" + fn);
		   
		   BufferedOutputStream fileOut = new BufferedOutputStream(new FileOutputStream(file));
		   
		   while (true) {
		      int bytesIn = fileIn.read(buf, 0, 1024);
		      
//		      System.out.println(bytesIn);
		      
		      if (bytesIn == -1) {
		         break;
		      } else {
		         fileOut.write(buf, 0, bytesIn);
		      }
		   }
		   
		   
		   fileOut.flush();
		   fileOut.close();
		   
//		   response.getOutputStream().print(file.getAbsolutePath());
	}

}
