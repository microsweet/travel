package com.dechy.travel.admin.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dechy.travel.admin.model.DmNewType;
import com.dechy.travel.admin.service.DmNewTypeService;
import com.dechy.travel.show.model.County;
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

	@GetMapping("/login")
	String login(Model model) {
		County county = this.countyService.findCounty();
		model.addAttribute(county);
		return "/admin/login";
	}

	@GetMapping("/main")
	String admin(Model model) {
		County county = this.countyService.findCounty();
		model.addAttribute(county);

		return "/admin/main";
	}

	@GetMapping("/top")
	String top(Model model) {
		County county = this.countyService.findCounty();
		model.addAttribute(county);
		return "/admin/top";
	}

	@GetMapping("/left")
	String left(Model model) {
		County county = this.countyService.findCounty();
		model.addAttribute(county);

		List<DmNewType> newTypeList = this.dmNewTypeService.findNewType();
		model.addAttribute("newTypeList", newTypeList);
		
		return "/admin/left";
	}

	@GetMapping("/right")
	String right(Model model, NewDetail newDetail) {
		County county = this.countyService.findCounty();
		model.addAttribute(county);

//		Map<String, Object> map = this.newDetailService.findNewDetailList(newDetail);
//		model.addAttribute("map", map);
		List<DmNewType> newTypeList = this.dmNewTypeService.findNewType();
		model.addAttribute("newTypeList", newTypeList);
		
		return "/admin/right";
	}

	@GetMapping("/form/{type}")
	String form(Model model, NewDetail newDetail, @PathVariable("type") String type) {
		model.addAttribute("type", type);

		County county = this.countyService.findCounty();
		model.addAttribute(county);
		
		List<DmNewType> newTypeList = this.dmNewTypeService.findNewType();
		model.addAttribute("newTypeList", newTypeList);
		
		if(newDetail.getId()!=null) {
			newDetail = this.newDetailService.findNewDetail(newDetail);
		}
		model.addAttribute(newDetail);
		
		return "/admin/form";
	}
	
	@PostMapping("/findArticle")
	@ResponseBody
	Map<String, Object> findArticle(NewDetail newDetail) {
		Map<String, Object> map = this.newDetailService.findNewDetailList(newDetail);
		return map;
	}
	
	@PostMapping("/saveArticle")
	@ResponseBody
	boolean saveArticle(NewDetail newDetail) {
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");//设置日期格式
		newDetail.setCreateDate(df.format(new Date()));
		boolean result = this.newDetailService.saveNewDetail(newDetail);
		return result;
	}
	
	@PostMapping("deleteArticle")
	@ResponseBody
	boolean deleteArticle(NewDetail newDetail) {
		return this.newDetailService.deleteNewDetail(newDetail);
	}
}
