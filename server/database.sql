create table prod_cats(
	id serial primary key,
	name varchar(255)
);

create table employee (
	id serial primary key,
	firstName varchar(50),
	secondName varchar(50),
	rating int
);


create table prods(
	id serial primary key,
	cat_id int,
	name varchar(255),
	cost money,
	descr varchar(255),
	amount integer,
	foreign key (cat_id) references prod_cats (id)	
);


create table orders(
	id serial primary key,
	emp_id integer,
	info varchar(255),
	status varchar(255),
	foreign key(emp_id) references employee (id)
);

create table prods_orders(
	id serial primary key,
	prod_id integer,
	order_id integer,
	foreign key (prod_id) references prods (id),
	foreign key (order_id) references orders (id)
);