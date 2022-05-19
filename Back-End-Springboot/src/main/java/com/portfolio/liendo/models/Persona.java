
package com.portfolio.liendo.models;

import com.sun.istack.NotNull;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Persona {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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
    private String img;
    
    @Size(min=1, max=300, message="no cumple con la longitud")
    private String banner;
    
    @Size(min=1, max=500, message="no cumple con la longitud")
    private String about;
    
    @Size(min=1, max=80, message="no cumple con la longitud")
    private String ubicacion;
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

    public Persona() {
    }

    public Persona(Long id, String nombre, String apellido, String ocupacion, String img, String banner, String about, String ubicacion, String institucion, String urlinst, String imginst, String email, String telefono) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.ocupacion = ocupacion;
        this.img = img;
        this.banner = banner;
        this.about = about;
        this.ubicacion = ubicacion;
        this.institucion = institucion;
        this.urlinst = urlinst;
        this.imginst = imginst;
        this.email = email;
        this.telefono = telefono;
    }

    
}
