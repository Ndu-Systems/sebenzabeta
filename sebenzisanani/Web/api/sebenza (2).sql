-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 26, 2017 at 11:26 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sebenza`
--

-- --------------------------------------------------------

--
-- Table structure for table `candidate`
--

CREATE TABLE `candidate` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `cell` varchar(20) NOT NULL,
  `identity` varchar(25) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `job_sector` text NOT NULL,
  `citizenship` text NOT NULL,
  `job_title` varchar(150) NOT NULL,
  `cv` text NOT NULL,
  `dob` varchar(15) NOT NULL,
  `race` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `candidate`
--

INSERT INTO `candidate` (`id`, `name`, `surname`, `email`, `cell`, `identity`, `gender`, `job_sector`, `citizenship`, `job_title`, `cv`, `dob`, `race`) VALUES
(8, 'John', 'Smith', 'smith@mail.com', '0792172198', '92801820180', 'Male', 'IT', 'South African', 'Back End Dev', 'na', '10/06/1993', 'white'),
(9, 'Sizwe', 'Mashaba', 'Sizwe@mail.com', '0792172198', '92801820180', 'Male', 'IT', 'South African', 'Back End Dev', 'na', '10/01/1988', 'black');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `contactperson` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `tel` varchar(20) NOT NULL,
  `province` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `surbub` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `status` varchar(10) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `name`, `contactperson`, `email`, `tel`, `province`, `city`, `surbub`, `address`, `status`, `password`) VALUES
(2, 'Ndu Systems', 'Freedom', 'info@ndu-system.net', '0842529472', 'Gauteng', 'Sandton', 'Revonia', '22 Revonia road', 'Active', 'pass'),
(3, 'google', 'Frade', 'info@google.com', '0842529472', 'Gauteng', 'Sandton', 'Revonia', '22 Revonia road', 'New', 'pass'),
(4, 'Nedbank', 'John Mnise', 'info@Nedbank.co.za', '0842529472', 'Gauteng', 'Sandton', 'Revonia', '22 Revonia road', 'New', 'pass');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `cell` varchar(30) NOT NULL,
  `type` varchar(30) NOT NULL,
  `status` varchar(50) NOT NULL,
  `date` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `cell`, `type`, `status`, `date`) VALUES
(1, 'Ndumiso', 'ndu@mail.com', '131132', 'Candidate', 'New', 'Tuesday 19th of September 2017 01:40:34 PM'),
(2, 'ds', 'fds@ew', '435', 'Candidate', 'New', 'Tuesday 19th of September 2017 01:41:23 PM'),
(3, 'fdg', 'das@ewwd', '32435', 'Candidate', 'New', 'Tuesday 19th of September 2017 01:54:14 PM'),
(4, 'test', 'dsa@wqd', '43535', 'Candidate', 'New', 'Tuesday 19th of September 2017 02:10:04 PM'),
(5, 'John', 'ndu@mail.com', '0845654545', 'Candidate', 'New', 'Tuesday 19th of September 2017 02:11:17 PM'),
(6, 'ffs', 'fds@ewq', '543543', 'Company', 'New', 'Tuesday 19th of September 2017 05:54:45 PM'),
(7, 'rew', 'g@ewq', 'r', 'Company', 'New', 'Tuesday 19th of September 2017 05:56:20 PM');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `tittle` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `course_trainer`
--

CREATE TABLE `course_trainer` (
  `id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `trainter_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `education`
--

CREATE TABLE `education` (
  `id` int(10) NOT NULL,
  `institution` varchar(150) NOT NULL,
  `qaulification` text NOT NULL,
  `year_obtained` varchar(10) NOT NULL,
  `majors` text NOT NULL,
  `userId` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `education`
--

INSERT INTO `education` (`id`, `institution`, `qaulification`, `year_obtained`, `majors`, `userId`) VALUES
(1, 'UKZN', 'Degree	in Computer Science and InformationTechnology', '2014', 'Computer Science and InformationTechnology', 8);

-- --------------------------------------------------------

--
-- Table structure for table `high_school`
--

CREATE TABLE `high_school` (
  `id` int(10) NOT NULL,
  `name` varchar(150) NOT NULL,
  `year` int(10) NOT NULL,
  `userId` int(10) NOT NULL,
  `subjects` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `job`
--

CREATE TABLE `job` (
  `id` int(10) NOT NULL,
  `catergorty` varchar(150) NOT NULL,
  `description` text NOT NULL,
  `expirience` decimal(10,0) NOT NULL,
  `comment` text NOT NULL,
  `componeyId` int(10) NOT NULL,
  `positions` int(10) NOT NULL,
  `status` varchar(20) NOT NULL,
  `location` text NOT NULL,
  `componeyName` varchar(150) NOT NULL,
  `date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `job`
--

INSERT INTO `job` (`id`, `catergorty`, `description`, `expirience`, `comment`, `componeyId`, `positions`, `status`, `location`, `componeyName`, `date`) VALUES
(15, 'Information Technology', 'Front end developer', '2', 'Well known software house who are the market leaders in their field of expertise has an exciting opportunity available for a Junior C# Developer for their offices in Lynnwood. * .NET C# (3+ yearsâ€™', 2, 1, 'Open', 'Sandton', 'Ndu Systems', 'Wednesday 20th of September 2017 03:34:31 PM'),
(16, 'Information Technology', 'C# Developer / SQL', '1', 'C# Software Developer / SQL - Strong .NET development experience (C#) Software Developer - Port Elizabeth - We are looking for a senior level developer who has a passion for development.', 2, 1, 'Open', 'Randburg', 'Ndu Systems', 'Wednesday 20th of September 2017 03:41:46 PM');

-- --------------------------------------------------------

--
-- Table structure for table `listing`
--

CREATE TABLE `listing` (
  `id` int(10) NOT NULL,
  `candidateId` int(10) NOT NULL,
  `jobId` int(10) NOT NULL,
  `date` varchar(150) NOT NULL,
  `status` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `listing`
--

INSERT INTO `listing` (`id`, `candidateId`, `jobId`, `date`, `status`) VALUES
(5, 7, 3, 'Tuesday 19th of September 2017 12:03:45 PM', 'New'),
(6, 7, 4, 'Tuesday 19th of September 2017 12:04:01 PM', 'New'),
(7, 7, 6, 'Tuesday 19th of September 2017 12:04:08 PM', 'New'),
(8, 7, 13, 'Tuesday 19th of September 2017 01:02:53 PM', 'New'),
(9, 7, 10, 'Tuesday 19th of September 2017 01:18:48 PM', 'New'),
(10, 2, 2, 'Tuesday 19th of September 2017 06:01:23 PM', 'New');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `email`, `password`, `role`) VALUES
(1, 'admin@mail.com', 'pass', 'admin'),
(2, 'candidate@mail.com', 'pass', 'candidate'),
(3, 'client@mail.com', 'pass', 'company');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` int(10) NOT NULL,
  `userId` int(10) NOT NULL,
  `skill` text NOT NULL,
  `experience` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `trainer`
--

CREATE TABLE `trainer` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `cell` varchar(50) NOT NULL,
  `province` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `cell` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  `datecreated` varchar(150) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `surname`, `email`, `cell`, `role`, `datecreated`, `password`) VALUES
(1, 'Admin', 'Admin', 'Admin@mail.com', '0215445', 'Admin', '2017/09/09 1:33', 'pass');

-- --------------------------------------------------------

--
-- Table structure for table `work_history`
--

CREATE TABLE `work_history` (
  `id` int(10) NOT NULL,
  `company` varchar(50) NOT NULL,
  `job_title` text NOT NULL,
  `job_duties` text NOT NULL,
  `userId` int(10) NOT NULL,
  `start_date` varchar(20) NOT NULL,
  `end_date` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `work_history`
--

INSERT INTO `work_history` (`id`, `company`, `job_title`, `job_duties`, `userId`, `start_date`, `end_date`) VALUES
(1, 'FNB', 'Dev Test', 'Testing', 8, '10/01/2017', '1/10/2017'),
(2, 'Ned bank', 'Dev Test', 'Testing', 8, '10/01/2016', '1/10/2016');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `candidate`
--
ALTER TABLE `candidate`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course_trainer`
--
ALTER TABLE `course_trainer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `education`
--
ALTER TABLE `education`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `high_school`
--
ALTER TABLE `high_school`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job`
--
ALTER TABLE `job`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `listing`
--
ALTER TABLE `listing`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `work_history`
--
ALTER TABLE `work_history`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `candidate`
--
ALTER TABLE `candidate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `course_trainer`
--
ALTER TABLE `course_trainer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `education`
--
ALTER TABLE `education`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `high_school`
--
ALTER TABLE `high_school`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `job`
--
ALTER TABLE `job`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `listing`
--
ALTER TABLE `listing`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `work_history`
--
ALTER TABLE `work_history`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
