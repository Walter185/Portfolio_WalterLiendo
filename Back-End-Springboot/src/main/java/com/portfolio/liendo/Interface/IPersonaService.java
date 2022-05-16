
package com.portfolio.liendo.Interface;

import com.portfolio.liendo.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //traer una lista de personas
    public List<Persona> getPersona();
    
    //guardar una persona
    public void savePersona(Persona persona);
    
    
    //eliminar una persona
    public void deletePersona(Long id);
    
    //buscar una persona
    public Persona findPersona(Long id);    
}
