    
package com.portfolio.liendo.models;

import com.sun.istack.NotNull;
import java.io.Serializable;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.Size;


@Entity
public class Persona implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    
    @NotNull
    @Size(min=1, max=50, message="no cumple con la longitud")
    private String nombre;
    
    @NotNull
    @Size(min=1, max=50, message="no cumple con la longitud")
    private String apellido;
     
    @Size(min=1, max=50, message="no cumple con la longitud")
    private String ocupacion;
    
      @Size(min=1, max=300, message="no cumple con la longitud")
    private String institucion;
      
        @Size(min=1, max=300, message="no cumple con la longitud")
    private String urlinst;  
        
    @Size(min=1, max=300, message="no cumple con la longitud")
    private String imginst;    
        
      @Size(min=1, max=60, message="no cumple con la longitud")
    private String email;
    
       @Size(min=1, max=60, message="no cumple con la longitud")
    private String telefono;  
      
    @Size(min=1, max=300, message="no cumple con la longitud")
    private String img;
    
    @Size(min=1, max=300, message="no cumple con la longitud")
    private String banner;
    
    @Size(min=1, max=500, message="no cumple con la longitud")
    private String about;
    
    @Size(min=1, max=80, message="no cumple con la longitud")
    private String ubicacion;
   
        
    @OneToMany(fetch = FetchType.LAZY, mappedBy= "idEdu")
    private List<Educacion> educacionList;
    @OneToMany(fetch = FetchType.LAZY, mappedBy= "idSkill")
    private List<Skills> skillList;
    @OneToMany(fetch = FetchType.LAZY, mappedBy= "idExp")
    private List<Experiencia> experienciaList;

    public Persona() {
    }

    public Persona(Long id, String nombre, String apellido, String ocupacion,
            String institucion, String urlinst, String imginst, String telefono,
            String img, String banner, String about, String ubicaion) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.ocupacion= ocupacion;
        this.institucion = institucion;
        this.urlinst = urlinst;
        this.imginst = imginst;
        this.email = email;
        this.telefono = telefono;
        this.img = img;
        this.banner = banner;
        this.about = about;
        this.ubicacion = ubicacion;
 
        
        
        
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getOcupacion() {
        return ocupacion;
    }

    public void setOcupacion(String ocupacion) {
        this.ocupacion = ocupacion;
    }

    public String getInstitucion() {
        return institucion;
    }

    public void setInstitucion(String institucion) {
        this.institucion = institucion;
    }

    public String getUrlinst() {
        return urlinst;
    }

    public void setUrlinst(String urlinst) {
        this.urlinst = urlinst;
    }

    public String getImginst() {
        return imginst;
    }

    public void setImginst(String imginst) {
        this.imginst = imginst;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getBanner() {
        return banner;
    }

    public void setBanner(String banner) {
        this.banner = banner;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }
    


 
    
    
    


    }
