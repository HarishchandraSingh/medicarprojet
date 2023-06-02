package com.boot.medical;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedRepo extends JpaRepository<Medicine,Integer> {
	
	 
	
}
