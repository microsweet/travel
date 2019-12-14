package com.dechy.travel.show.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/show")
@Controller
public class showController {
	
	@GetMapping
	String show() {
		return "index";
	}

}
