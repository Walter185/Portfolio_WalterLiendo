
package com.portfolio.liendo.Service;

import com.portfolio.liendo.Repository.ISkillsRepository;
import com.portfolio.liendo.models.Skills;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class SkillsService {
    private final ISkillsRepository iskillsRepository;
    
    @Autowired
    public SkillsService(ISkillsRepository iskillsRepository) {
        this.iskillsRepository=iskillsRepository;
    }

    public Skills addSkills(Skills skills){
        return iskillsRepository.save(skills);
    }
    
    public List<Skills> buscarSkills(){
        return iskillsRepository.findAll();
    }
    
    public Skills editarSkill(Skills skills){
        return iskillsRepository.save(skills);
    }
    
    public void borrarSkills(Long id){
        iskillsRepository.deleteById(id);
    }
}