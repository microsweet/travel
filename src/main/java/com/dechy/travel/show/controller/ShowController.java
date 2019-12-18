package com.dechy.travel.show.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dechy.travel.admin.model.DmNewType;
import com.dechy.travel.admin.service.DmNewTypeService;
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
	@Autowired
	private DmNewTypeService dmNewTypeService;
	
	@RequestMapping()
	String show(Model model, HttpSession session) {

		NewDetail newDetailParam = new NewDetail();
		newDetailParam.setNewType(2);
		List<NewDetail> newList = this.newDetailService.findNewDetails(newDetailParam);
		model.addAllAttributes(newList);
		
		return "show/index";
	}

	@GetMapping("/newDetail/{detailId}/{newType}")
	String newDetails(@PathVariable("detailId") Integer detailId, @PathVariable("newType") Integer newType, Model model, HttpSession session) {

		NewDetail newDetailParam = new NewDetail();
		newDetailParam.setId(detailId);
		newDetailParam.setNewType(newType);
		NewDetail newDetail = this.newDetailService.findNewDetail(newDetailParam);
		model.addAttribute("newDetail", newDetail);

		return "show/newDetail";
	}

	@GetMapping("/about")
	String about(Model model, HttpSession session) {

		County county = this.countyService.findCounty();
		model.addAttribute(county);

		return "show/about";
	}

	@GetMapping("/newList/{newType}")
	String newList(@PathVariable("newType") Integer newType, Model model, HttpSession session) {

		NewDetail newDetailParam = new NewDetail();
		newDetailParam.setNewType(newType);
		List<NewDetail> news = this.newDetailService.findNewDetails(newDetailParam);
		if(news.size()==0) {
			news.add(new NewDetail());
		}
		model.addAttribute("news", news);
		
		DmNewType dmNewType = new DmNewType();
		dmNewType.setDmType(newType);
		dmNewType = this.dmNewTypeService.findNewType(dmNewType);
		model.addAttribute(dmNewType);
		
		return "show/newList";
	}
	
}
