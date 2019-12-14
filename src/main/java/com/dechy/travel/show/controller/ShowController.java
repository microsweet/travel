package com.dechy.travel.show.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dechy.travel.show.model.NewDetail;
import com.dechy.travel.show.service.NewDetailService;

@RequestMapping("/")
@Controller
public class ShowController {
	
	@Autowired
	private NewDetailService newDetailService;
	
	@RequestMapping()
	String show(Model model) {
		List<Map<String, String>> newDetails = new ArrayList<Map<String, String>>();
		Map<String, String> fxt = new HashMap<String, String>();
		fxt.put("href", "/newDetails/188");
		fxt.put("src", "images/postImages/a.jpg");
		fxt.put("title", "伏羲台");
		Map<String, String> rzm = new HashMap<String, String>();
		rzm.put("href", "/newDetails/189");
		rzm.put("src", "images/postImages/b.jpg");
		rzm.put("title", "人祖庙");
		Map<String, String> msxy = new HashMap<String, String>();
		msxy.put("href", "/newDetails/190");
		msxy.put("src", "images/postImages/c.jpg");
		msxy.put("title", "美术学院");
		newDetails.add(fxt);
		newDetails.add(rzm);
		newDetails.add(msxy);
		
		
		List<NewDetail> jqdtList = this.newDetailService.findNewDetails();
		model.addAttribute("newDetails", newDetails);
		model.addAttribute("jqdtList", jqdtList);

		return "index";
	}

	@GetMapping("/newDetails/{detailId}")
	String newDetails(@PathVariable("detailId") Integer detailId) {
		return "newDetails";
	}
}
