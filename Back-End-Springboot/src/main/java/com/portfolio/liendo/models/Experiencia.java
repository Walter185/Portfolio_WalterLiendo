
package com.portfolio.liendo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Experiencia {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idExp;
    private String tituloExp;
    private int startExp;
    private int endExp;
    private String lugarExp;
    private String imgExp;
    private String otherExp;
    
    
    public Experiencia() {
    }

    public Experiencia(Long idExp, String tituloExp, int startExp, int endExp, String lugarExp, String imgExp, String otherExp) {
        this.idExp = idExp;
        this.tituloExp = tituloExp;
        this.startExp = startExp;
        this.endExp =endExp;
        this.lugarExp = lugarExp;
        this.imgExp = imgExp;
        this.otherExp = otherExp;
    }

    public Long getIdExp() {
        return idExp;
    }

    public void setIdExp(Long idExp) {
        this.idExp = idExp;
    }

    public String getTituloExp() {
        return tituloExp;
    }

    public void setTituloExp(String tituloExp) {
        this.tituloExp = tituloExp;
    }

    public int getStartExp() {
        return startExp;
    }

    public void setStartExp(int startExp) {
        this.startExp = startExp;
    }

    public int getEndExp() {
        return endExp;
    }

    public void setEndExp(int endExp) {
        this.endExp = endExp;
    }

    public String getLugarExp() {
        return lugarExp;
    }

    public void setLugarExp(String lugarExp) {
        this.lugarExp = lugarExp;
    }

    public String getImgExp() {
        return imgExp;
    }

    public void setImgExp(String imgExp) {
        this.imgExp = imgExp;
    }

    public String getOtherExp() {
        return otherExp;
    }

    public void setOtherExp(String otherExp) {
        this.otherExp = otherExp;
    }

    
}