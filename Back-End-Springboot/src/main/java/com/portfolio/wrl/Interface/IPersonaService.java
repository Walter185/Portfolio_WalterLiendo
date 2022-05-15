package com.portfolio.wrl.Interface;

import com.portfolio.wrl.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //Traer lista de personas
    public List<Persona> getPersona();
    
    //Guardar una persona
    public void savePersona(Persona persona);            
    
    //Eliminar una persona
    public void deletePersona(Long id);

    public Persona findPersona(Long id);
}
