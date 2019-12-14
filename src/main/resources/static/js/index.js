var t = n = 0, count;
var t1 = n1 = 0, count1;
$(document)
		.ready(
				function() {
					count = $("#tpcbanner_list a").length;
					count1 = $("#tpbanner_list a").length;
					$("#tpcbanner_list a:not(:first-child)").hide();

					$("#tpbanner_list a:not(:first-child)").hide();

					$("#tpcbanner_info").html(
							$("#tpcbanner_list a:first-child").find("img")
									.attr('alt'));

					$("#tpbanner_info").html(
							$("#tpbanner_list a:first-child").find("img").attr(
									'alt'));

					$("#tpcbanner_info").click(
							function() {
								window.open($("#tpcbanner_list a:first-child")
										.attr('href'), "_blank")
							});

					$("#tpbanner_info").click(
							function() {
								window.open($("#tpbanner_list a:first-child")
										.attr('href'), "_blank")
							});

					$("#tpcbanner li")
							.click(
									function() {
										var i = $(this).text() - 1;//获取Li元素内的值，即1，2，3，4
										n = i;
										if (i >= count)
											return;
										$("#tpcbanner_info").html(
												$("#tpcbanner_list a").eq(i)
														.find("img")
														.attr('alt'));
										$("#tpcbanner_info")
												.unbind()
												.click(
														function() {
															window
																	.open(
																			$(
																					"#tpcbanner_list a")
																					.eq(
																							i)
																					.attr(
																							'href'),
																			"_blank")
														})
										$("#tpcbanner_list a").filter(
												":visible").fadeOut(500)
												.parent().children().eq(i)
												.fadeIn(1000);
										document.getElementById("tpcbanner").style.background = "";
										$(this).toggleClass("on");
										$(this).siblings().removeAttr("class");
									});
					$("#tpbanner li")
							.click(
									function() {
										var i = $(this).text() - 1;//获取Li元素内的值，即1，2，3，4
										n1 = i;
										if (i >= count1)
											return;
										$("#tpbanner_info").html(
												$("#tpbanner_list a").eq(i)
														.find("img")
														.attr('alt'));
										$("#tpbanner_info")
												.unbind()
												.click(
														function() {
															window
																	.open(
																			$(
																					"#tpbanner_list a")
																					.eq(
																							i)
																					.attr(
																							'href'),
																			"_blank")
														})
										$("#tpbanner_list a")
												.filter(":visible")
												.fadeOut(500).parent()
												.children().eq(i).fadeIn(1000);
										document.getElementById("tpbanner").style.background = "";
										$(this).toggleClass("on");
										$(this).siblings().removeAttr("class");
									});
					t1 = setInterval("showAuto()", 3000);
					$("#tpbanner").hover(function() {
						clearInterval(t1)
					}, function() {
						t1 = setInterval("showAuto1()", 4000);
					});
					t = setInterval("showAuto()", 3000);
					$("#tpcbanner").hover(function() {
						clearInterval(t)
					}, function() {
						t = setInterval("showAuto()", 4000);
					});
				})
function showAuto1() {
	n1 = n1 >= (count1 - 1) ? 0 : ++n1;

	$("#tpbanner li").eq(n1).trigger('click');
}
function showAuto() {
	n = n >= (count - 1) ? 0 : ++n;

	$("#tpcbanner li").eq(n).trigger('click');
}