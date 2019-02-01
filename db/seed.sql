drop table if exists houses;

create table houses(
  id serial primary key,
  name text,
  address text,
  city text,
  state text,
  zipcode int
);

insert into houses(
    name,
    address,
    city,
    state,
    zipcode
) values (
    'Bob Johnson',
    '123 Yeet St',
    'Cincinnati',
    'Ohio',
    43210
);
insert into houses(
    name,
    address,
    city,
    state,
    zipcode
) values (
    'Mad Johnson',
    '123 kjldsa St',
    'dsakljjdakls',
    'Ohidaksjdsakjo',
    81329
);insert into houses(
    name,
    address,
    city,
    state,
    zipcode
) values (
    'Bob 1j23oi',
    '123 mekqwkjewj St',
    'ewqlkjc qe',
    'knklk',
    9876
);