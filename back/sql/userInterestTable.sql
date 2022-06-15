CREATE TABLE IF NOT EXISTS `user_interest` (
	`no` INT NOT NULL AUTO_INCREMENT,
	`userId` VARCHAR(20),
	`aptCode` int unique,
	PRIMARY KEY (`no`),
	CONSTRAINT `userInterest_to_userinfo_fk`
	FOREIGN KEY (`userId`)
	REFERENCES `happyhouse`.`userinfo` (`id`),
    CONSTRAINT `userInterest_to_houseinfo_fk`
	FOREIGN KEY (`aptCode`)
	REFERENCES `happyhouse`.`houseinfo` (`aptCode`)
)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

insert into `user_interest`(`userId`, `aptCode`) values('ssafy', 13);