package com.dechy.travel.admin.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.dechy.travel.admin.model.DmNewType;
import com.dechy.travel.admin.model.User;
import com.dechy.travel.admin.service.DmNewTypeService;
import com.dechy.travel.admin.service.UserService;
import com.dechy.travel.show.model.NewDetail;
import com.dechy.travel.show.service.CountyService;
import com.dechy.travel.show.service.NewDetailService;

@RequestMapping("/admin")
@Controller
public class AdminController {
	
	@Autowired
	private CountyService countyService;
	@Autowired
	private DmNewTypeService dmNewTypeService;
	@Autowired
	private NewDetailService newDetailService;
	@Autowired
	private UserService userService;

	//景点维护登录页面跳转
	@GetMapping("/login")
	String login(Model model, HttpSession session) {
		return "admin/login";
	}

	//景点维护主页面
	@GetMapping("/main")
	String admin(Model model, HttpSession session) {

		return "admin/main";
	}

	//景点维护主页面头部
	@GetMapping("/top")
	String top(Model model) {
		return "admin/top";
	}

	//景点维护主页面左侧树页面
	@GetMapping("/left")
	String left(Model model) {

		List<DmNewType> newTypeList = this.dmNewTypeService.findNewType();
		model.addAttribute("newTypeList", newTypeList);
		
		return "admin/left";
	}

	//景点维护右侧文章管理页面
	@GetMapping("/right")
	String right(Model model, NewDetail newDetail) {

		List<DmNewType> newTypeList = this.dmNewTypeService.findNewType();
		model.addAttribute("newTypeList", newTypeList);
		
		return "admin/right";
	}

	//景点维护右侧信息发布页面
	@GetMapping("/form/{type}")
	String form(Model model, HttpSession session, NewDetail newDetail, @PathVariable("type") String type) {
		model.addAttribute("type", type);

		List<DmNewType> newTypeList = this.dmNewTypeService.findNewType();
		model.addAttribute("newTypeList", newTypeList);
		
		if(newDetail.getId()!=null) {
			newDetail = this.newDetailService.findNewDetail(newDetail);
		}
		model.addAttribute(newDetail);
		
		return "admin/form";
	}
	
	//文章管理页面的列表查询
	@PostMapping("/findArticle")
	@ResponseBody
	Map<String, Object> findArticle(NewDetail newDetail) {
		Map<String, Object> map = this.newDetailService.findNewDetailList(newDetail);
		return map;
	}
	
	//保存新闻
	@PostMapping("/saveArticle")
	@ResponseBody
	boolean saveArticle(NewDetail newDetail) {
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");//设置日期格式
		newDetail.setCreateDate(df.format(new Date()));
		boolean result = this.newDetailService.saveNewDetail(newDetail);
		return result;
	}
	
	//删除新闻
	@PostMapping("/deleteArticle")
	@ResponseBody
	boolean deleteArticle(NewDetail newDetail) {
		return this.newDetailService.deleteNewDetail(newDetail);
	}
	
	//登录页面登录验证
	@PostMapping("/identifyUser")
	ModelAndView identifyUser(User user, Model model, HttpSession session) {
		user = this.userService.identifyUser(user);
		if(user!=null) {
			session.setAttribute("userName", user.getUserName());
			return new ModelAndView("redirect:/admin/main");
		}
		return new ModelAndView("redirect:/admin/login");
	}
}
