package com.boot.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.boot.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User,Integer> {
	
	 
	 

}
