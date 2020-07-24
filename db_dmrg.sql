-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 24 Tem 2020, 15:42:22
-- Sunucu sürümü: 10.4.11-MariaDB
-- PHP Sürümü: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `db_dmrg`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `confirmedneeds`
--

CREATE TABLE `confirmedneeds` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `needType` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `confirmName` varchar(255) NOT NULL,
  `confirmSurname` varchar(255) NOT NULL,
  `confirmSTK` varchar(255) NOT NULL,
  `urgency` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `confirmedneeds`
--

INSERT INTO `confirmedneeds` (`id`, `name`, `surname`, `phone`, `address`, `needType`, `amount`, `confirmName`, `confirmSurname`, `confirmSTK`, `urgency`, `status`, `createdAt`, `updatedAt`) VALUES
(24, 'Ahmet', 'Bal', 123456789, 'Kartal/Istanbul', 'Financial Support', 1000, 'John', 'Doe', 'NGO1', 'High', 'In Use', '2020-07-24 13:24:23', '2020-07-24 13:24:23'),
(25, 'Kemal', 'Kaya', 123456789, 'Besiktas/Istanbul', 'Transportation', 2, 'John', 'Doe', 'NGO1', 'High', 'Approved', '2020-07-24 13:26:32', '2020-07-24 13:26:32'),
(26, 'Ayşe', 'Bal', 123456789, 'Kartal/Istanbul', 'Goods', 4, 'Arzu', 'Özkan', 'NGO2', 'Normal', 'Transportation Stage', '2020-07-24 13:27:05', '2020-07-24 13:27:05'),
(27, 'Ali', 'Pamuk', 123456789, 'Fatih/Istanbul', 'Accommodation', 1, 'Arzu', 'Özkan', 'NGO2', 'Low', 'Approved', '2020-07-24 13:27:10', '2020-07-24 13:27:10');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `confirmedsupports`
--

CREATE TABLE `confirmedsupports` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `supportType` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `sendType` varchar(255) NOT NULL,
  `confirmName` varchar(255) NOT NULL,
  `confirmSurname` varchar(255) NOT NULL,
  `confirmSTK` varchar(255) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `confirmedsupports`
--

INSERT INTO `confirmedsupports` (`id`, `name`, `surname`, `phone`, `address`, `supportType`, `amount`, `sendType`, `confirmName`, `confirmSurname`, `confirmSTK`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Cemal Dak', 'Dak', 2147483647, 'papatya, 16', 'Maddi Yardım', 1212, 'Kargo', 'Cemal', 'Dak', 'AFAD', 'Onaylandı', '2020-03-07 14:16:58', '2020-03-07 14:42:03');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `needs`
--

CREATE TABLE `needs` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `needType` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Tablo döküm verisi `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('202003061651-CreateNeedTable.js'),
('202003061702-CreateSupportTable.js'),
('202003061751-CreateEditedNeedTable.js'),
('202003061752-CreateEditedSupportTable.js'),
('202003061753-CreateSTK.js');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `supports`
--

CREATE TABLE `supports` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `supportType` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `sendType` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `supports`
--

INSERT INTO `supports` (`id`, `name`, `surname`, `phone`, `address`, `supportType`, `amount`, `sendType`, `createdAt`, `updatedAt`) VALUES
(3, 'Ahmet', 'Dak', 1234, 'Muğla', 'Maddi Yardım', 1233, 'Kargo', '2020-03-07 15:10:33', '2020-03-07 15:10:33');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL,
  `stk` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `users`
--

INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `password`, `phone`, `stk`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'cemaldak', 'Cemal', 'Dak', '$2a$08$4A1oAxzWphCIkVVbNi69zOBQ5V4AVzyf68jYGTVB5CCaDBcjswopW', 555555, 'AFAD', 'asd@asd.com', '2020-03-07 10:38:40', '2020-03-07 10:38:40'),
(2, 'johndoe', 'John', 'Doe', '$2a$08$y9TTWl6vIRUhok4z1D.1wecmKos.yXWL462tlRo2Ug00rztMl4AzO', 1234567899, 'NGO1', 'johndoe@gmail.com', '2020-03-16 12:08:13', '2020-03-16 12:08:13'),
(3, 'arzuu', 'Arzu', 'Özkan', '$2a$08$gcEO1FT5g/7ScL5NQgRbfuGLkMt5r9NpbMulfZAF1NDZJu9AAwZLK', 123456789, 'NGO2', 'arzu@gmail.com', '2020-07-24 09:04:17', '2020-07-24 09:04:17');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `confirmedneeds`
--
ALTER TABLE `confirmedneeds`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `confirmedsupports`
--
ALTER TABLE `confirmedsupports`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `needs`
--
ALTER TABLE `needs`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Tablo için indeksler `supports`
--
ALTER TABLE `supports`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `confirmedneeds`
--
ALTER TABLE `confirmedneeds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Tablo için AUTO_INCREMENT değeri `confirmedsupports`
--
ALTER TABLE `confirmedsupports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tablo için AUTO_INCREMENT değeri `needs`
--
ALTER TABLE `needs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- Tablo için AUTO_INCREMENT değeri `supports`
--
ALTER TABLE `supports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Tablo için AUTO_INCREMENT değeri `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
