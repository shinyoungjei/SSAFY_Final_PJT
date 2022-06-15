use happyhouse;

CREATE TABLE IF NOT EXISTS `convenience_store` (
	`no` INT NOT NULL AUTO_INCREMENT,
	`dongCode` varchar(10) DEFAULT NULL,
	`lat` varchar(30) DEFAULT NULL,
	`lng` varchar(30) DEFAULT NULL,
	PRIMARY KEY (`no`),
	CONSTRAINT `convenienct_to_dongcode_fk`
	FOREIGN KEY (`dongCode`)
	REFERENCES `happyhouse`.`dongcode` (`dongCode`)
)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;