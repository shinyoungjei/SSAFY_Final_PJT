use happyhouse;

drop table if exists `userInfo`;
create table `userInfo`(
	`id` varchar(20) primary key,
    `pass` varchar(20),
    `name` varchar(20),
    `email` varchar(30),
    `contact` varchar(20)
);

alter table `userInfo` add `email` varchar(30);
alter table `userInfo` add `contact` varchar(20);