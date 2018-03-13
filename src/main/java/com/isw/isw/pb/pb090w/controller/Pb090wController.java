package com.isw.isw.pb.pb090w.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.isw.isw.pb.pb090w.service.Pb090wService;
import com.isw.isw.pb.pb090w.vo.Pb090wVo;

@Controller
public class Pb090wController {
	
	@Autowired
	Pb090wService service;
	
	@RequestMapping(value = "pb090w", method = RequestMethod.GET)
	public String test(Model model) {
		
		List<Pb090wVo> list = service.pb090w();
		System.out.println(list.toString());
		model.addAttribute("list", list);
		return "PB/PB090W";
	}
	
}


