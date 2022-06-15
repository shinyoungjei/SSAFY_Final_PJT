use happyhouse;

CREATE TABLE IF NOT EXISTS `qna_board` (
	`qnaNo` INT NOT NULL AUTO_INCREMENT,
	`userId` VARCHAR(16) NULL DEFAULT NULL,
	`subject` VARCHAR(100) NULL DEFAULT NULL,
	`content` VARCHAR(2000) NULL DEFAULT NULL,
	`hit` INT NULL DEFAULT 0,
	`regtime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`qnaNo`),
	INDEX `qnaboard_to_user_fk` (`userid` ASC) VISIBLE,
	CONSTRAINT `qnaboard_to_user_fk`
	FOREIGN KEY (`userId`)
	REFERENCES `happyhouse`.`userinfo` (`id`)
)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
insert into  `qna_board`(`userId`, `subject`, `content`, `regtime`)
values('ssafy', '질문1', '내용1', now())
, ('ssafy', '질문2', '내용2', now())
, ('ssafy', '질문3', '내용3', now())
, ('ssafy', '질문4', '내용4', now())
, ('ssafy', '질문5', '내용5', now())
, ('ssafy', '질문6', '내용6', now());

CREATE TABLE IF NOT EXISTS `qna_answer` (
	`no` INT NOT NULL AUTO_INCREMENT,
	`qnaNo` INT NOT NULL,
	`userId` VARCHAR(16) NOT NULL,
	`content` VARCHAR(2000) NULL DEFAULT NULL,
	`regtime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`no`),
	CONSTRAINT `qnaAnswer_to_qnaboard_fk_no`
	FOREIGN KEY (`qnaNo`)
	REFERENCES `happyhouse`.`qna_board` (`qnaNo`),
    CONSTRAINT `qnaAnswer_to_qnaboard_fk_id`
	FOREIGN KEY (`userId`)
	REFERENCES `happyhouse`.`userinfo` (`id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;