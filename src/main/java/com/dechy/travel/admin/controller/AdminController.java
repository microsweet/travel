package com.dechy.travel.admin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dechy.travel.show.model.County;
import com.dechy.travel.show.service.CountyService;

@RequestMapping("/admin")
@Controller
public class AdminController {
	
	@Autowired
	private CountyService countyService;

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
		return "/admin/left";
	}

	@GetMapping("/right")
	String right(Model model) {
		County county = this.countyService.findCounty();
		model.addAttribute(county);
		return "/admin/right";
	}
}
