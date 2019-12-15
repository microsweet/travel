package com.dechy.travel.show.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dechy.travel.show.model.County;
import com.dechy.travel.show.model.NewDetail;
import com.dechy.travel.show.service.CountyService;
import com.dechy.travel.show.service.NewDetailService;

@RequestMapping("/")
@Controller
public class ShowController {
	
	@Autowired
	private NewDetailService newDetailService;
	@Autowired
	private CountyService countyService;
	
	@RequestMapping()
	String show(Model model) {

		List<NewDetail> newList = this.newDetailService.findNewDetails();
		List<NewDetail> jqdtList = this.newDetailService.findNewDetails();
		model.addAttribute("jqdtList", jqdtList);
		model.addAttribute("newList", newList);
		
		County county = this.countyService.findCounty();
		model.addAttribute(county);

		return "index";
	}

	@GetMapping("/newDetail/{detailId}/{newType}")
	String newDetails(@PathVariable("detailId") Integer detailId, @PathVariable("newType") Integer newType, Model model) {

		List<NewDetail> newList = this.newDetailService.findNewDetails();
		model.addAttribute("newList", newList);

		NewDetail newDetailParam = new NewDetail();
		newDetailParam.setId(detailId);
		newDetailParam.setNewType(newType);
		NewDetail newDetail = this.newDetailService.findNewDetails(newDetailParam);
		model.addAttribute("newDetail", newDetail);
		
		County county = this.countyService.findCounty();
		model.addAttribute(county);
		
		return "newDetail";
	}

	@GetMapping("/about")
	String about(Model model) {
		List<NewDetail> newList = this.newDetailService.findNewDetails();
		model.addAttribute("newList", newList);

		County county = this.countyService.findCounty();
		model.addAttribute(county);

		return "about";
	}

	@GetMapping("/newList/{newType}")
	String newList(@PathVariable("newType") Integer newType, Model model) {

		List<NewDetail> newList = this.newDetailService.findNewDetails();
		model.addAttribute("newList", newList);
		
		County county = this.countyService.findCounty();
		model.addAttribute(county);
		
		return "newList";
	}
}
