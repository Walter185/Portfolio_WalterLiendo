
package com.portfolio.wrl.Interface;

import com.portfolio.wrl.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //Traer personas
    public List<Persona> getPersona();
    
    
    //Guardar una persona
    public void savePersona(Persona persona);
    
    //Eliminar persona
    public void deletePersona(Long id);
    
    //Buscar una persona
    public Persona findPersona(Long id);
}
