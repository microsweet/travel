package com.dechy.travel.admin.controller;

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

	@GetMapping("/form")
	String form(Model model) {
		County county = this.countyService.findCounty();
		model.addAttribute(county);
		
		List<DmNewType> newTypeList = this.dmNewTypeService.findNewType();
		model.addAttribute("newTypeList", newTypeList);
		
		return "/admin/form";
	}
	
	@PostMapping("/findArticle")
	@ResponseBody
	Map<String, Object> findArticle(NewDetail newDetail) {
		Map<String, Object> map = this.newDetailService.findNewDetailList(newDetail);
		return map;
	}
}
