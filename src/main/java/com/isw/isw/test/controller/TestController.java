package com.isw.isw.test.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.isw.isw.test.service.TestService;
import com.isw.isw.test.vo.TestVO;

@Controller
public class TestController {
	
	@Autowired
	TestService service;
	
	@RequestMapping(value = "test", method = RequestMethod.GET)
	public String test(Model model) {
		
		List<TestVO> list = service.test();
		System.out.println(list.toString());
		model.addAttribute("list", list);
		return "test";
	}
	
}
