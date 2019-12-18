package com.dechy.travel.show.listener;

import java.util.List;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionAttributeListener;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import org.springframework.beans.factory.annotation.Autowired;

import com.dechy.travel.admin.model.DmNewType;
import com.dechy.travel.admin.service.DmNewTypeService;
import com.dechy.travel.show.model.County;
import com.dechy.travel.show.model.NewDetail;
import com.dechy.travel.show.service.CountyService;
import com.dechy.travel.show.service.NewDetailService;

@WebListener
public class HttpSessionLintener implements HttpSessionListener, HttpSessionAttributeListener {
	@Autowired
	private NewDetailService newDetailService;
	@Autowired
	private CountyService countyService;
	@Autowired
	private DmNewTypeService dmNewTypeService;
	@Override
    public void sessionCreated(HttpSessionEvent event) {
        HttpSession session = event.getSession();
        NewDetail newDetailParam = new NewDetail();
		newDetailParam.setNewType(3);
		List<NewDetail> newList = this.newDetailService.findNewDetails(newDetailParam);
		session.setAttribute("newList", newList);
		
		List<DmNewType> typeList = this.dmNewTypeService.findNewType();
		session.setAttribute("typeList", typeList);

		County county = this.countyService.findCounty();
		session.setAttribute("county", county);
    }
}
