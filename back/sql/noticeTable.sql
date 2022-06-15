use happyhouse;

CREATE TABLE IF NOT EXISTS `notice_board` (
   `noticeNo` INT NOT NULL AUTO_INCREMENT,
   `userId` VARCHAR(16) NULL DEFAULT NULL,
   `subject` VARCHAR(100) NULL DEFAULT NULL,
   `content` VARCHAR(2000) NULL DEFAULT NULL,
   `hit` INT NULL DEFAULT 0,
   `regtime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`noticeNo`),
   INDEX `noticeboard_to_user_fk` (`userid` ASC) VISIBLE,
   CONSTRAINT `noticeboard_to_user_fk`
   FOREIGN KEY (`userId`)
   REFERENCES `happyhouse`.`userinfo` (`id`)
)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

insert into  `notice_board`(`userId`, `subject`, `content`, `regtime`)
values('ssafy', '공지사항질문1', '내용1', now())
, ('ssafy', '공지사항질문2', '내용2', now())
, ('ssafy', '공지사항질문1', '내용3', now())
, ('ssafy', '공지사항질문4', '내용4', now())
, ('ssafy', '공지사항질문5', '내용5', now())
, ('ssafy', '공지사항질문6', '내용6', now());