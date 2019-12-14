<%@page session="false"%>
<%@page import="java.net.*,java.io.*,java.util.*" %>
<%@page trimDirectiveWhitespaces="true"%>
<%	
	String paramString=request.getQueryString();
	int m=paramString.indexOf("url=");
	String reqUrl=paramString.substring(m+4); 
    
	String reqMethord=request.getMethod();
	if(reqMethord.equalsIgnoreCase("GET")){
		//创建连接
		URL url = null;
		HttpURLConnection connect = null;
		url = new URL(reqUrl);
		connect = (HttpURLConnection) url.openConnection();
		connect.setUseCaches(true);
	
		response.setContentType((new StringBuilder())
				.append("text/html").append(";")
				.append(connect.getContentEncoding()).toString());
		
		BufferedInputStream bufferedinputstream = new BufferedInputStream(
				connect.getInputStream());
		BufferedOutputStream bufferedoutputstream = new BufferedOutputStream(
				response.getOutputStream());
		
		//写入response对象
		int j = connect.getContentLength();
		byte abyte0[] = new byte[50];
		int k = 0;
		while (k < j) {
			int l = bufferedinputstream.read(abyte0, 0, 50);
			k += l;
			bufferedoutputstream.write(abyte0, 0, l);
		}
		if (j == -1) {
			for (int i1 = bufferedinputstream.read(abyte0, 0, 50); i1 != -1; i1 = bufferedinputstream
					.read(abyte0, 0, 50)) {
				bufferedoutputstream.write(abyte0, 0, i1);
			}
		}
		//关闭连接
		bufferedinputstream.close();
		bufferedoutputstream.close();
	}else{
		String postString = null;
		// 获取请求流,并转为字符串,使用DOM4J解析该XML
		ServletInputStream postQueryStream = request.getInputStream();

		final int BUFFER_SIZE = 1024;
		byte[] buffer = new byte[BUFFER_SIZE];
		int length = 0;
		ByteArrayOutputStream baos = new ByteArrayOutputStream();

		do {
			length = postQueryStream.read(buffer);
			if (length > 0) {
				baos.write(buffer, 0, length);
			}
		} while (length > 0);

		postString = new String(baos.toByteArray(), "UTF-8");

		URL url = null;
		HttpURLConnection connect = null;

		url = new URL(reqUrl);
		connect = (HttpURLConnection) url.openConnection();
		connect.setDoOutput(true);
		connect.setRequestMethod("POST");
		connect.setUseCaches(false);

		connect.connect();
		DataOutputStream out1 = new DataOutputStream(
				connect.getOutputStream());
		out1.writeBytes(postString);
		out1.flush();
		out1.close();
		
		//写入response对象
		response.setContentType((new StringBuilder())
				.append(connect.getContentType()).append(";").toString());

		BufferedInputStream bufferedinputstream = new BufferedInputStream(
				connect.getInputStream());

		BufferedOutputStream bufferedoutputstream = new BufferedOutputStream(
				response.getOutputStream());

		int j = connect.getContentLength();

		byte abyte0[] = new byte[50];
		int k = 0;

		while (k < j) {
			int l = bufferedinputstream.read(abyte0, 0, 50);
			k += l;
			bufferedoutputstream.write(abyte0, 0, l);
		}
		if (j == -1) {
			for (int i1 = bufferedinputstream.read(abyte0, 0, 50); i1 != -1; i1 = bufferedinputstream
					.read(abyte0, 0, 50)) {
				bufferedoutputstream.write(abyte0, 0, i1);
			}
		}
		//关闭连接
		bufferedinputstream.close();
		bufferedoutputstream.close();
	}
%>