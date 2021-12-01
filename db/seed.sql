USE tennant_time_clock;

INSERT INTO department 
(name, deleted)
VALUES
('Accounting', false), ('Human Resources', false), ('Engineering', false), ('Customer Service', false), ('Marketing', false), ('Sales', false);

INSERT INTO individual
(first_name, last_name, nickname, start_date, department_id, email, last_modified, username, password, disabled, notes)
VALUES
('Evelyn', 'Killface', NULL, '2021-11-30', 5, 'WelcomeToYouAre@Doom.com', '2008-03-23', 'killfaEv', false, 'Barnaby Jones, come live with me.'),
('Xander', 'Crews', 'AwesomeX', '2021-11-30', 6, 'NotAwesomeX@Doom.com', '2008-03-23', 'XanderCr', false, 'Master Cylinder!'),
('Simon', 'Killface', NULL, '2021-11-30', 2, 'mmMMmmm@Doom.com', '2008-03-23', 'SimonKil', false, 'Frequently drops bowls.'),
('Wendell', 'Stamps', 'WendellX', '2021-11-30', 1, 'CodyGoingDown@Doom.com', '2008-03-23', 'WendelSt', false, 'Just so you know, this armor does not protect my feelings.');

INSERT INTO timecard
(title, hours, notes, deleted, last_modified, individual_id)
VALUES
('Marketing Campaign', 8, "Sent pamphlets to market 'Doom'", false, '2008-03-23', 1),
('Sale of Dolls', 8, "Sold Killface Dolls", false, '2008-03-23', 2),
('mmmMMMmmm', 8, "MMmmuhhuMMMmmuhmmuh", false, '2008-03-23', 3),
('Paid Bills', 8, "Payed the bills yo!", false, '2008-03-23', 4);