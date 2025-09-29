package net.javaguides.ems;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmsBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmsBackendApplication.class, args);

		Student student = new Student(1, "Ramesh");
		System.out.println(student.getId());
		System.out.println(student.getName());
	}

}
