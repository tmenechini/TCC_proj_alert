package com.alunosunivesp.group4; 

import org.springframework.boot.SpringApplication; 

import org.springframework.boot.autoconfigure.SpringBootApplication;  

@SpringBootApplication 

public class Group4Application {  

public static void main(String[] args) { 

SpringApplication.run(Group4Application.class, args); 

}  

} 

package com.alunosunivesp.group4.controller;  

import java.util.List;  

import org.springframework.beans.factory.annotation.Autowired; 

import org.springframework.http.ResponseEntity; 

import org.springframework.web.bind.annotation.CrossOrigin; 

import org.springframework.web.bind.annotation.GetMapping; 

import org.springframework.web.bind.annotation.PathVariable; 

import org.springframework.web.bind.annotation.PostMapping; 

import org.springframework.web.bind.annotation.RequestBody; 

import org.springframework.web.bind.annotation.RequestMapping; 

import org.springframework.web.bind.annotation.RestController;  

import com.alunosunivesp.group4.model.SensorModel; 

import com.alunosunivesp.group4.service.SensorService;  

@CrossOrigin(origins = "*", allowedHeaders = "*") 

@RestController 

@RequestMapping("/api/v8") 

public class controler {	 

@Autowired 

SensorService sensorService;	 

SensorModel dataSensor = new SensorModel();	 

@GetMapping("/sensors") 

public ResponseEntity<List<SensorModel>> getSonsor() { 

return ResponseEntity.ok( sensorService.getSensors() ); 

}	 

@PostMapping("/sensor") 

public SensorModel saveSensor(@RequestBody SensorModel sensor) { 

return sensorService.saveSensor(sensor); 

}	 

@GetMapping("/sensorAgua/{whaterLevel}") 

public SensorModel getSensorAgua(@PathVariable int whaterLevel) { 

dataSensor.setId("sensorAgua"); 

dataSensor.setWateLevel(whaterLevel); 

return sensorService.saveSensor(dataSensor); 

}	 

@GetMapping("/fluviometro/{nivel}") 

public SensorModel getSensorFluviometro(@PathVariable int nivel) { 

dataSensor.setId("fluviometro"); 

dataSensor.setTipo("fluviometro"); 

dataSensor.setFluviometro(nivel); 

return sensorService.saveSensor(dataSensor); 

}	 

@GetMapping("/chuva/{nivel}") 

public SensorModel getChuva(@PathVariable int nivel) { 

dataSensor.setId("previsao_inteligente"); 

dataSensor.setChuvaPrevisao(nivel); 

return sensorService.saveSensor(dataSensor); 

}	 

} 

package com.alunosunivesp.group4.model;  

import javax.persistence.Id;  

import lombok.Getter; 

import lombok.Setter;  

import javax.persistence.Entity; 

import javax.persistence.GeneratedValue; 

import javax.persistence.GenerationType;  

@Getter 

@Setter 

@Entity 

public class SensorModel {	 

@Id 

//@GeneratedValue(strategy = GenerationType.SEQUENCE) 

private String id; 	 

private String tipo; 	 

private int chuvaPrevisao;	 

private int fluviometro;	 

private String local;	 

private boolean isAlarmOn;	 

private int temp;	 

private int tempMin;	 

private int tempMax;	 

private String date; 	 

private int wateLevel;	 

private String description;	 

} 

package com.alunosunivesp.group4.repository;  

import org.springframework.data.jpa.repository.JpaRepository;  

import com.alunosunivesp.group4.model.SensorModel;  

public interface SensorRepository extends JpaRepository<SensorModel, Long> {  

} 
