USE tennant_time_clock;

INSERT INTO department 
(name, deleted, created_at, updated_at)
VALUES
('Accounting', false, "2021-12-01T02:21:42.732", "2021-12-01T02:21:42.732"), 
('Human Resources', false, "2021-12-01T02:21:42.732", "2021-12-01T02:21:42.732"), 
('Engineering', false, "2021-12-01T02:21:42.732", "2021-12-01T02:21:42.732"), 
('Customer Service', false, "2021-12-01T02:21:42.732", "2021-12-01T02:21:42.732"), 
('Marketing', false, "2021-12-01T02:21:42.732", "2021-12-01T02:21:42.732"), 
('Sales', false, "2021-12-01T02:21:42.732", "2021-12-01T02:21:42.732");

INSERT INTO individual
(first_name, last_name, nickname, start_date, department_id, email, last_modified, username, password, disabled, notes, created_at, updated_at)
VALUES
('Evelyn', 'Killface', NULL, '2021-11-30', 5, 'WelcomeToYouAre@Doom.com', '2008-03-23', 'killfaEv', 'TestPass', false, 'Barnaby Jones, come live with me.', "2021-12-01T02:21:42.732", "2021-12-01T02:21:42.732"),
('Xander', 'Crews', 'AwesomeX', '2021-11-30', 6, 'NotAwesomeX@Doom.com', '2008-03-23', 'XanderCr', 'TestPass', false, 'Master Cylinder!', "2021-12-01T02:21:42.732", "2021-12-01T02:21:42.732"),
('Simon', 'Killface', NULL, '2021-11-30', 2, 'mmMMmmm@Doom.com', '2008-03-23', 'SimonKil', 'TestPass', false, 'Frequently drops bowls.', "2021-12-01T02:21:42.732", "2021-12-01T02:21:42.732"),
('Wendell', 'Stamps', 'WendellX', '2021-11-30', 1, 'CodyGoingDown@Doom.com', '2008-03-23', 'WendelSt', 'TestPass', false, 'Just so you know, this armor does not protect my feelings.', "2021-12-01T02:21:42.732", "2021-12-01T02:21:42.732");

INSERT INTO timecard
(title, hours, notes, deleted, last_modified, individual_id, created_at, updated_at)
VALUES
('Marketing Campaign', 8, "Sent pamphlets to market 'Doom'", false, '2008-03-23', 1, "2021-12-01T02:21:42.732", "2021-12-01T02:21:42.732"),
('Sale of Dolls', 8, "Sold Killface Dolls", false, '2008-03-23', 2, "2021-12-01T02:21:42.732", "2021-12-01T02:21:42.732"),
('mmmMMMmmm', 8, "MMmmuhhuMMMmmuhmmuh", false, '2008-03-23', 3, "2021-12-01T02:21:42.732", "2021-12-01T02:21:42.732"),
('Paid Bills', 8, "Payed the bills yo!", false, '2008-03-23', 4, "2021-12-01T02:21:42.732", "2021-12-01T02:21:42.732");