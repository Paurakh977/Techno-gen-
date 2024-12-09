CREATE DATABASE  IF NOT EXISTS `technogen_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `technogen_db`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: technogen_db
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add tag',7,'add_tag'),(26,'Can change tag',7,'change_tag'),(27,'Can delete tag',7,'delete_tag'),(28,'Can view tag',7,'view_tag'),(29,'Can add blog post',8,'add_blogpost'),(30,'Can change blog post',8,'change_blogpost'),(31,'Can delete blog post',8,'delete_blogpost'),(32,'Can view blog post',8,'view_blogpost');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$870000$iKjHTb7I18Ph6wDjnLvAnC$lFCIfMtcdAmZeKy/CFEyLklZSE5tVz9uJEE+iqgadF8=','2024-12-09 13:55:57.426708',1,'admin','','','admin@gmail.com',1,1,'2024-12-09 13:55:42.092453');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_blogpost`
--

DROP TABLE IF EXISTS `blog_blogpost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_blogpost` (
  `id` varchar(100) NOT NULL,
  `title` varchar(200) NOT NULL,
  `excerpt` longtext NOT NULL,
  `content` longtext NOT NULL,
  `cover_image` varchar(200) NOT NULL,
  `date` date NOT NULL,
  `reading_time` varchar(20) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_blogpost`
--

LOCK TABLES `blog_blogpost` WRITE;
/*!40000 ALTER TABLE `blog_blogpost` DISABLE KEYS */;
INSERT INTO `blog_blogpost` VALUES ('building-scalable-apis-with-nodejs-and-express','Building Scalable APIs with Node.js and Express','Learn how to build robust and scalable REST APIs using Node.js and Express framework with best practices and real-world examples','<h3>&nbsp;</h3><h3>&nbsp;</h3><h3>Introduction to API Development</h3><p>&nbsp;</p><p>Building scalable APIs is crucial for modern web applications. In this comprehensive guide, we\'ll explore best practices, authentication strategies, and performance optimization techniques.</p><h4>Key Concepts</h4><ul><li>RESTful principles</li><li>Middleware implementation</li><li>Database integration</li></ul><figure class=\"image image_resized\" style=\"width:25.46%;\"><img style=\"aspect-ratio:3000/2003;\" src=\"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D\" width=\"3000\" height=\"2003\"></figure><figure class=\"image image-style-align-left image_resized\" style=\"width:23.61%;\"><img style=\"aspect-ratio:3000/2003;\" src=\"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D\" width=\"3000\" height=\"2003\"></figure><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><figure class=\"image\"><img style=\"aspect-ratio:416/835;\" src=\"/media/image.png\" width=\"416\" height=\"835\"></figure><p>&nbsp;</p><p>okkk</p><p>&nbsp;</p>','https://images.unsplash.com/photo-1587620962725-abab7fe55159','2024-12-09','10 mins','2024-12-09 16:30:16.548742','2024-12-09 16:32:08.418175'),('the-future-of-ai-in-software-development','The Future of AI in Software Development','Exploring how artificial intelligence is revolutionizing the way we build software','<p>Artificial Intelligence is transforming the way we develop software. From code completion to automated testing, AI tools are becoming an integral part of the development process</p><h3>The Impact of AI on Development</h3><p>&nbsp;</p><ul><li>The Impact of AI on Development</li><li>nothing</li></ul><ol><li>ok ok</li><li>no no</li></ol><p>&nbsp;</p><figure class=\"image image-style-align-right image_resized\" style=\"width:13.45%;\"><img style=\"aspect-ratio:600/800;\" src=\"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600\" width=\"600\" height=\"800\"></figure><p>&nbsp;</p><figure class=\"image image-style-align-left image_resized\" style=\"width:19.59%;\"><img style=\"aspect-ratio:3000/2003;\" src=\"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D\" width=\"3000\" height=\"2003\"></figure><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>hello my frnds chekc check</p><p>&nbsp;</p><p>&nbsp;</p><figure class=\"image image_resized image-style-align-center\" style=\"width:20.83%;\"><img style=\"aspect-ratio:327/375;\" src=\"/media/Untitled.png\" width=\"327\" height=\"375\"></figure>','https://images.unsplash.com/photo-1485827404703-89b55fcc595e','2024-12-09','5mins','2024-12-09 15:40:12.367649','2024-12-09 16:00:32.925442');
/*!40000 ALTER TABLE `blog_blogpost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_blogpost_tags`
--

DROP TABLE IF EXISTS `blog_blogpost_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_blogpost_tags` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `blogpost_id` varchar(100) NOT NULL,
  `tag_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `blog_blogpost_tags_blogpost_id_tag_id_657ed214_uniq` (`blogpost_id`,`tag_id`),
  KEY `blog_blogpost_tags_tag_id_680e7081_fk_blog_tag_id` (`tag_id`),
  CONSTRAINT `blog_blogpost_tags_blogpost_id_cdcddf6c_fk_blog_blogpost_id` FOREIGN KEY (`blogpost_id`) REFERENCES `blog_blogpost` (`id`),
  CONSTRAINT `blog_blogpost_tags_tag_id_680e7081_fk_blog_tag_id` FOREIGN KEY (`tag_id`) REFERENCES `blog_tag` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_blogpost_tags`
--

LOCK TABLES `blog_blogpost_tags` WRITE;
/*!40000 ALTER TABLE `blog_blogpost_tags` DISABLE KEYS */;
INSERT INTO `blog_blogpost_tags` VALUES (3,'building-scalable-apis-with-nodejs-and-express',3),(1,'the-future-of-ai-in-software-development',1),(2,'the-future-of-ai-in-software-development',2);
/*!40000 ALTER TABLE `blog_blogpost_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_tag`
--

DROP TABLE IF EXISTS `blog_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_tag` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_tag`
--

LOCK TABLES `blog_tag` WRITE;
/*!40000 ALTER TABLE `blog_tag` DISABLE KEYS */;
INSERT INTO `blog_tag` VALUES (2,'god'),(3,'pic'),(1,'Tech');
/*!40000 ALTER TABLE `blog_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2024-12-09 13:56:17.361421','1','Tech',1,'[{\"added\": {}}]',7,1),(2,'2024-12-09 15:40:08.992430','2','god',1,'[{\"added\": {}}]',7,1),(3,'2024-12-09 15:40:12.367649','the-future-of-ai-in-software-development','The Future of AI in Software Development',1,'[{\"added\": {}}]',8,1),(4,'2024-12-09 15:42:25.708166','the-future-of-ai-in-software-development','The Future of AI in Software Development',2,'[{\"changed\": {\"fields\": [\"Content\"]}}]',8,1),(5,'2024-12-09 15:42:47.065160','the-future-of-ai-in-software-development','The Future of AI in Software Development',2,'[{\"changed\": {\"fields\": [\"Content\"]}}]',8,1),(6,'2024-12-09 15:44:19.425334','the-future-of-ai-in-software-development','The Future of AI in Software Development',2,'[{\"changed\": {\"fields\": [\"Content\"]}}]',8,1),(7,'2024-12-09 15:50:14.385689','the-future-of-ai-in-software-development','The Future of AI in Software Development',2,'[{\"changed\": {\"fields\": [\"Content\"]}}]',8,1),(8,'2024-12-09 15:56:48.385204','the-future-of-ai-in-software-development','The Future of AI in Software Development',2,'[{\"changed\": {\"fields\": [\"Content\"]}}]',8,1),(9,'2024-12-09 15:59:45.679886','the-future-of-ai-in-software-development','The Future of AI in Software Development',2,'[{\"changed\": {\"fields\": [\"Content\"]}}]',8,1),(10,'2024-12-09 15:59:53.862185','the-future-of-ai-in-software-development','The Future of AI in Software Development',2,'[]',8,1),(11,'2024-12-09 16:00:32.931466','the-future-of-ai-in-software-development','The Future of AI in Software Development',2,'[{\"changed\": {\"fields\": [\"Content\"]}}]',8,1),(12,'2024-12-09 16:29:48.096284','3','pic',1,'[{\"added\": {}}]',7,1),(13,'2024-12-09 16:30:16.548742','building-scalable-apis-with-nodejs-and-express','Building Scalable APIs with Node.js and Express',1,'[{\"added\": {}}]',8,1),(14,'2024-12-09 16:32:08.421135','building-scalable-apis-with-nodejs-and-express','Building Scalable APIs with Node.js and Express',2,'[{\"changed\": {\"fields\": [\"Content\"]}}]',8,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(8,'blog','blogpost'),(7,'blog','tag'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2024-12-09 13:54:14.731111'),(2,'auth','0001_initial','2024-12-09 13:54:15.581078'),(3,'admin','0001_initial','2024-12-09 13:54:15.842430'),(4,'admin','0002_logentry_remove_auto_add','2024-12-09 13:54:15.858412'),(5,'admin','0003_logentry_add_action_flag_choices','2024-12-09 13:54:15.872184'),(6,'contenttypes','0002_remove_content_type_name','2024-12-09 13:54:16.024287'),(7,'auth','0002_alter_permission_name_max_length','2024-12-09 13:54:16.167795'),(8,'auth','0003_alter_user_email_max_length','2024-12-09 13:54:16.216423'),(9,'auth','0004_alter_user_username_opts','2024-12-09 13:54:16.235063'),(10,'auth','0005_alter_user_last_login_null','2024-12-09 13:54:16.351516'),(11,'auth','0006_require_contenttypes_0002','2024-12-09 13:54:16.353719'),(12,'auth','0007_alter_validators_add_error_messages','2024-12-09 13:54:16.369458'),(13,'auth','0008_alter_user_username_max_length','2024-12-09 13:54:16.495047'),(14,'auth','0009_alter_user_last_name_max_length','2024-12-09 13:54:16.607216'),(15,'auth','0010_alter_group_name_max_length','2024-12-09 13:54:16.636611'),(16,'auth','0011_update_proxy_permissions','2024-12-09 13:54:16.653082'),(17,'auth','0012_alter_user_first_name_max_length','2024-12-09 13:54:16.744321'),(18,'blog','0001_initial','2024-12-09 13:54:16.974742'),(19,'sessions','0001_initial','2024-12-09 13:54:17.027480');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('thf9km9jpy4sywrja7olb2xv00p61g1c','.eJxVjDsOwjAQBe_iGllZYicyJT1niNZv1ziAbCmfKuLuECkFtG9m3mYGXpc8rLNOwyjmYsicfrfIeGrZgTy43KtFLcs0Rrsr9qCzvVXR1_Vw_w4yz_lbp5hEqEPTJPZtakmUyHkQQidOOShICByDIzivwgrB2fcefYoK8_4AHPo5yw:1tKeEv:ceZKdH2TX31zyeNhQSI12M9_sXwHaBkSWozamp4scwA','2024-12-23 13:55:57.429458');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-09 22:55:28
