
package com.portfolio.liendo.Repository;

import com.portfolio.liendo.models.Skills;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ISkillsRepository extends JpaRepository<Skills, Long> {
    
}
