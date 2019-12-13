<%@ page language="java" 
 import="java.util.*,java.net.URL,java.net.HttpURLConnection,java.nio.charset.Charset,java.io.BufferedReader,java.io.IOException,java.io.InputStream,java.io.InputStreamReader"
 pageEncoding="GB2312"%>
<%
	String targetUrl=request.getParameter("url");
	String method=request.getParameter("requestmethod");
	String content="";
	StringBuffer temp=null;
	HttpURLConnection urlConnection = null;   
    request.setCharacterEncoding("GB2312");
    
    if(targetUrl==null) return;
    else
    {
    	targetUrl=targetUrl.replaceAll(":::","&");
    }
    if(method==null)
    {
    	method="GET";
    }
    else
    {
    	method=method.toUpperCase();
    }
    URL url = new URL(targetUrl);   
    urlConnection = (HttpURLConnection) url.openConnection();   

    urlConnection.setRequestMethod(method);   
    urlConnection.setDoOutput(true);   
    urlConnection.setDoInput(true);   
    urlConnection.setUseCaches(false);     
   
     try {   
         InputStream in = urlConnection.getInputStream(); 
         
         InputStream inTemp =in;
         BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(in,"GB2312"));   
         
         temp = new StringBuffer();   
         String line = bufferedReader.readLine();   
         while (line != null) 
         {   
             temp.append(line).append("\r\n");   
             line = bufferedReader.readLine();   
         }   
         bufferedReader.close();   
         content = temp.toString(); 
         //System.out.println(content); 
         out.println(content);  
     } catch (IOException e) {   
     	e.printStackTrace();
         throw e;   
     } finally {   
         if (urlConnection != null)   
             urlConnection.disconnect();   
     }
	
%>
	
