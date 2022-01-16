package com.ishyiga.transilator.model;

import com.sun.istack.NotNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.UniqueConstraint;

@Entity
public class Translation extends AuditModel{

	@Id
	@GeneratedValue
	private int tid;
	private String v_name;
	private String kinyarwanda;
	private String english;
	private String french;
	private String kiswahili;
	public int getTid() {
		return tid;
	}
	public void setTid(int tid) {
		this.tid = tid;
	}
	public String getV_name() {
		return v_name;
	}
	public void setV_name(String v_name) {
		this.v_name = v_name;
	}
	public String getKinyarwanda() {
		return kinyarwanda;
	}
	public void setKinyarwanda(String kinyarwanda) {
		this.kinyarwanda = kinyarwanda;
	}
	public String getEnglish() {
		return english;
	}
	public void setEnglish(String english) {
		this.english = english;
	}
	public String getFrench() {
		return french;
	}
	public void setFrench(String french) {
		this.french = french;
	}
	public String getKiswahili() {
		return kiswahili;
	}
	public void setKiswahili(String kiswahili) {
		this.kiswahili = kiswahili;
	}
	
	
	
}
