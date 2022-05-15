package com.portfolio.wrl.Interface;

import com.portfolio.wrl.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //Traer un lista de personas
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo persona
    public void savePersona(Persona persona);
    
    //Eliminar una persona por id
    public void deletePersona(Long id);
    
    //Buscar una persona por id
    public Persona finPersona(Long id); 
    
}
