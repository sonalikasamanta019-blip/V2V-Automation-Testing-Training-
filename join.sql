create table empinfo(
	emp_id int primary key,
	emp_name varchar(100),
	pid int
);

create table perinfo(
	pid int primary key,
	p_name varchar(100) not null
);

insert into empinfo(emp_id, emp_name, pid) values (1,'ajay',10),(2,'amait',20);
insert into empinfo(emp_id, emp_name, pid) values (3,'ananya',30),(4,'anjali',40);

update empinfo set emp_name='amit' where emp_id=2;

insert into perinfo(pid,p_name) values (10,'hr'),(20,'admin'),(30,'dev'),(40,'dev');

select * from perinfo;
select * from empinfo;
delete from perinfo where pid=40;

--inner join
select e.emp_name,p.p_name from empinfo e inner join perinfo p on e.pid=p.pid;

--left outer join
select e.emp_name,p.p_name from empinfo e left join perinfo p on e.pid=p.pid;

--right outer join
select e.emp_name,p.p_name from empinfo e right join perinfo p on e.pid=p.pid;

--full join
select e.emp_name,p.p_name from empinfo e full join perinfo p on e.pid=p.pid;

--cross join
select * from empinfo cross join perinfo;

--natural join 
select * from empinfo natural join perinfo;



