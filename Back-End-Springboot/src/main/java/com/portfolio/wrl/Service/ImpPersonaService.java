package com.portfolio.wrl.Service;

import com.portfolio.wrl.Entity.Persona;
import com.portfolio.wrl.Interface.IPersonaService;
import com.portfolio.wrl.repository.IPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

public class ImpPersonaService implements IPersonaService {
    @Autowired IPersonaRepository ipersonaRepository;

    @Override
    public List<Persona> getPersona() {
        List<Persona> persona = ipersonaRepository.findAll();
        return persona;
    }

    @Override
    public void savePersona(Persona persona) {
        ipersonaRepository.save(persona);
    }

    @Override
    public void deletePersona(Long id) {
        ipersonaRepository.deleteById(id);
    }
    
    public Persona findPersona(Long id) {
    Persona persona = ipersonaRepository.findById(id).orElse(null);
        return persona;
    }
    
}
