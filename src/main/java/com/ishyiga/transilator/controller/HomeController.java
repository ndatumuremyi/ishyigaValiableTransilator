package com.ishyiga.transilator.controller;

import com.ishyiga.transilator.repository.TranslationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	@Autowired
	private TranslationRepository tRepo;

	@RequestMapping()
	public String home() {
		return "Home.html";
	}

}
