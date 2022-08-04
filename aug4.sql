create database news_platform;
use news_platform;

create table category(id int primary key,name varchar(100));
create table subcategory(sid int primary key, cname varchar(100), id int, foreign key(id) references category(id));
create table news(nid int primary key, headlines varchar(200), content varchar(2500), sid int, foreign key(sid) references subcategory(sid));

create table user(uid int primary key, uname varchar(50), email varchar(20), password varchar(50));
create table admin(aid int primary key, aname varchar(50), email varchar(20), password varchar(50));

create table comments(commentid int primary key,comment varchar(500),uid int, uname varchar(50),nid int,aid int, foreign key(uid) references user(uid),foreign key(nid) references news(nid));

create table likes(likeid int primary key,uid int, uname varchar(50),nid int, foreign key(uid) references user(uid),foreign key(nid) references news(nid));

insert into category values(1,"Enetertainment"),(2,"Sports"),(3,"Politics"),(4,"Technology");

insert into admin values(1,"Shuwetha","shuwetha.ramesh@gmail.com","shuwetha@123");
insert into admin values(2,"Hrushikesh","hrushikesh.ingle@gmail.com","hrushikesh@123");
insert into admin values(3,"Geethika","geethika.kanna@gmail.com","geethika@123");

insert into user values(1,"John Smith","john.smith@gmail.com","Sjohn@123");
insert into user values(2,"James","james37@gmail.com","James@897");
insert into user values(3,"Andrews","andrews981@gmail.com","Andrews@29");
insert into user values(4,"Thomson","thomson78@gmail.com","thomson@901");
insert into user values(5,"Jenny","jenny145@gmail.com","Jenny@389");

alter table comments ADD FOREIGN KEY (aid) REFERENCES admin(aid);
desc news;
desc comments;
desc likes;


