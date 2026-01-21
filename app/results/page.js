// app/results/page.js
'use client';

import { Trophy, Award, Star, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState('main');

  const yearWiseResults = [
    {
      year: "2024",
      type: "main",
      totalSelections: 0,
      iitSelections: 0,
      nitSelections: 0,
      topRank: "AIR 245",
      toppers: [
        { name: "Rajat Katiyar", rank: "99.81", School: "CHS SECONDARY SCHOOL", images: "/images/Rajat-Katiyar-99-81.jpg" },
        { name: "Sayandeep Haldar", rank: "99.80", School: "NORTH POINT, KOLKATTA", images: "/images/Sayandeep-Haldar-99.80.jpg" },
        { name: "Aakarsh Omar", rank: "99.70", School: "SETH ANANDRAM JAIPURIA", images: "/images/Aakarsh-Omar-99.70.jpg" },
        { name: "KRISH OMER", rank: "99.50", School: "JAIN WORLD SCHOOL", images: "/images/Krish-Omer-99.50.jpg" },
        { name: "Aditya Kanodia", rank: "99.47", School: "SHEILING HOUSE SCHOOL", images: "/images/Aditya-kanodia-99.47.jpg" },
        { name: "Sarthak Tewari", rank: "99.45", School: "SHEILING HOUSE SCHOOL", images: "/images/Sarthak-Tewari-99.45.jpg" },
        { name: "Devansh Bajpai", rank: "99.31", School: "PADAMPAT SINGHANIA", images: "/images/Devansh-Bajpai-99.31.jpg" },
        { name: "Abhishek Pandey", rank: "99.29", School: "SWAMI VIVEKANAND COLLEGE", images: "/images/Abhishek-Pandey-99.29.jpeg" },
        { name: "Raghav Mishra", rank: "99.18", School: "VIRENDRA SWAROOP, AWADHPURI", images: "/images/Raghvendra-Mishra-99.18.png" },
        { name: "Arjun Dixit", rank: "99.15", School: "VIRENDRA SWAROOP, KIDWAI NAGAR", images: "/images/Arjun-Dixit-99.15.png" },
        { name: "Krishna Jaiswal", rank: "99.10", School: "DPS, KALYANPUR", images: "/images/Krishna-Jaiswal-99.10.jpg" },
        { name: "Tanya katiyar", rank: "99.02", School: "VIRENDRA SWAROOP, AWADHPURI", images: "/images/Tanya-Katiyar-99.02.jpg" },
      ]
    },
    {
      year: "2023",
      type: "advanced",
      totalSelections: 118,
      iitSelections: 42,
      nitSelections: 76,
      topRank: "AIR 312",
      toppers: [
        { name: "PRANAV MALPANI", rank: "AIR 373", School: "JAIPURIA", images: "/images/1.jpeg" },
        { name: "PRANSHU AGARWAL", rank: "AIR 790", School: "HERITAGE INTERNATIONAL", images: "/images/2.jpeg" },
        { name: "KUSHAGRA GUPTA", rank: "AIR 942", School: "ALLEN HOUSE", images: "/images/3.jpeg" },
        { name: "AYUSH OMER", rank: "AIR 3183", School: "SHEILING HOUSE", images: "/images/4.jpeg" },
        { name: "GARVIT MAHESHWARI", rank: "AIR 4625", School: "DR. VSEC AWADHPURI", images: "/images/5.jpeg" },
        { name: "DIVYANSHU SHARMA", rank: "AIR 5385", School: "GARDENIA PUBLIC", images: "/images/6.jpeg" },
        { name: "MEDHA AGARWAL", rank: "AIR 6265", School: "JAIPURIA", images: "/images/7.png" },
      ]
    },
    {
      year: "2022",
      type: "advanced",
      totalSelections: 105,
      iitSelections: 38,
      nitSelections: 67,
      topRank: "AIR 425",
      toppers: [
        { name: "SUJAL GUPTA", rank: "AIR 2225", School: "", images: "/images/sujal_gupta__adv_22_air_2225.jpg" },
        { name: "SATVIK MISHRA", rank: "AIR 3184", School: "", images: "/images/Satvik Mishra (Adv.-22 AIR 3184).jpg" },
        { name: "MAYANK JHUNJHUNWALA", rank: "AIR 3563", School: "", images: "/images/mayank_jhunjhunwala__adv-22_air_3563.jpg" },
        { name: "SAUMYA PRATAP SINGH", rank: "AIR 4026", School: "", images: "/images/saumya_pratap_singh__adv-22_air_4026.jpg" },
        { name: "ASHWIN CHOUBEY", rank: "AIR 5156", School: "", images: "/images/ashwin_choubey__adv-22_air_5156.jpg" },
        { name: "SAUMYA GUPTA", rank: "AIR 7516", School: "", images: "/images/saumya_gupta_adv-22_air_7516.jpg" },
        { name: "UJJWAL SRIVASTAVA", rank: "AIR 7927", School: "", images: "/images/ujjwal_srivastava_adv-22_air_7927.jpg" },
        { name: "ABHIRAJ RAJAN", rank: "AIR 8657", School: "", images: "/images/abhiraj_ranjan__adv-22_air_8657.jpg" },
        { name: "ANUJ PRATAP SINGH", rank: "AIR 529", School: "", images: "/images/anuj_pratap_singh_adv-22_cat_rank_529.jpg" },
        { name: "HARSHIT KATIYAR", rank: "AIR 2688", School: "", images: "/images/harshit_katiyar_adv-22_cat_rank_2688.jpg" },
      ]
    },
    {
      year: "2021",
      type: "advanced",
      totalSelections: 0,
      iitSelections: 0,
      nitSelections: 0,
      topRank: "AIR 425",
      toppers: [
        { name: "AKSHAT BAJPAI", rank: "AIR 1602", School: "-", images: "/images/AKSHATBAJPAI_21.jpg" },
        { name: "AKSHAY MALHOTRA", rank: "AIR 2114", School: "-", images: "/images/AKSHAYMALHOTRA_21.jpg" },
        { name: "DEEPANKAR SINGH", rank: "AIR 3081", School: "-", images: "/images/DEEPANKARSINGH_21.jpg" },
        { name: "ROHIT YADAV", rank: "AIR 6374", School: "-", images: "/images/ROHITYADAV_21.jpg" },
        { name: "SHOBHIT SHARMA", rank: "AIR 6438", School: "-", images: "/images/SHOBHITSHARMA_21.jpg" },
        { name: "MOHNISH GURNANI", rank: "AIR 6659", School: "-", images: "/images/MOHNISHGURNANI_21.jpg" },
        { name: "VIVEK AGARWAL", rank: "AIR 6670", School: "-", images: "/images/VIVEKAGARWAL_21.jpg" },
        { name: "MALIK ZADAH IRFAN", rank: "AIR 7312", School: "-", images: "/images/MALIKZADAHIRFAN_21.jpg" },
        { name: "VANSH GUPTA", rank: "AIR 8397", School: "-", images: "/images/VANSHGUPTA_21.jpg" },
        { name: "YASH KHARE", rank: "AIR 8724", School: "-", images: "/images/YASHKHARE_21.jpg" },
        { name: "PARTH RASTOGI", rank: "AIR 9765", School: "-", images: "/images/PARTHRASTOGI_21.jpg" },
        { name: "RAJ GAUTAM", rank: "AIR 346", School: "-", images: "/images/RAJGAUTAM_21.jpg" },
        { name: "ANIKET AGRAHARI", rank: "AIR 1729", School: "-", images: "/images/ANIKETAGRAHARI_21.jpg" }
      ]
    },
    {
      year: "2021",
      type: "main",
      totalSelections: 0,
      iitSelections: 0,
      nitSelections: 0,
      topRank: "AIR 425",
      toppers: [
        { name: "DEEPANKAR SINGH", rank: "99.71", School: "-", images: "/images/DEEPANKARSINGH_21_main_99.71.jpg" },
        { name: "AKSHAT BAJPAI", rank: "99.65", School: "-", images: "/images/AKSHATBAJPAI_21_main_99.65.jpg" },
        { name: "YASH KHARE", rank: "99.53", School: "-", images: "/images/YASHKHARE_21_main_99.53.jpg" },
        { name: "SHOBHIT SHARMA", rank: "99.48", School: "-", images: "/images/shobhit_sharma_2021_mains_percentile_9948.jpg" },
        { name: "MOHNISH GURNANI", rank: "99.32", School: "-", images: "/images/MOHNISHGURNANI_21_main_99.32.jpg" },
        { name: "DIVYANSH SINGH", rank: "99.07", School: "-", images: "/images/divyansh_singh_2021_mains_percentile_9907.jpg" },
        { name: "YASH GUPTA", rank: "99.06", School: "-", images: "/images/yash_gupta_2021_mains_percentile_9906.jpg" },
        { name: "VIVEK AGARWAL", rank: "99.02", School: "-", images: "/images/vivek_agarwal_mains_percentile_9902.jpg" }
      ]
    },
    {
      year: "2020",
      type: "advanced",
      totalSelections: 0,
      iitSelections: 0,
      nitSelections: 0,
      topRank: "AIR 425",
      toppers: [
        { name: "MOHAN KRISHNA", rank: "AIR 1704", School: "-", images: "/images/MOHAN_KRISHNA_AIR_1704.jpg" },
        { name: "DHRUV KHANDELWAL", rank: "AIR 1799", School: "-", images: "/images/Dhruv Khandelwal_AIR_1799.jpg" },
        { name: "SRIDHAR MALPANI", rank: "AIR 1820", School: "-", images: "/images/SHRIDHAR MALPANI_AIR_1820.jpg" },
        { name: "SARTHAK GUPTA", rank: "AIR 1921", School: "-", images: "/images/sarthak_gupta_2020_advanced_air-1921.jpg" },
        { name: "SHUBHAM KUMAR", rank: "AIR 2180", School: "-", images: "/images/shubham_AIR_KUMAR_2180.jpg" },
        { name: "NAVNEET YADAV", rank: "AIR 2806", School: "-", images: "/images/navneet_yadav_2020_advanced_air-2806.jpg" },
        { name: "SAKSHAM KATIYAR", rank: "AIR 5213", School: "-", images: "/images/Saksham Katiyar_AIR_5213.jpg" }
      ]
    },
    {
      year: "2020",
      type: "main",
      totalSelections: 0,
      iitSelections: 0,
      nitSelections: 0,
      topRank: "AIR 425",
      toppers: [
        { name: "MOHAN KRISHNA", rank: "99.95 PERCENTILE", School: "K.V (I.I.T)", images: "/images/Mohan Krishna.jpg" },
        { name: "DHRUV KHANDELWAL", rank: "99.83 PERCENTILE", School: "Dr. V.S.P.S (CIVIL LINES)", images: "/images/Dhruv Khandelwal.jpg1.jpg" },
        { name: "SHUBHAM KUMAR", rank: "99.55 PERCENTILE", School: "H.A.L VIDYALAYA", images: "/images/shubham.jpg" },
        { name: "PRABUDH SINGH", rank: "99.35 PERCENTILE", School: "S.P.S.E.C", images: "/images/PRABUDH SINGH.jpg" },
        { name: "GAURAV KATIYAR", rank: "99.34 PERCENTILE", School: "VSIC ALLAHABAD", images: "/images/Gaurav Katiyar.jpg1.jpg" },
        { name: "SAKSHAM KATIYAR", rank: "99.28 PERCENTILE", School: "Dr. V.S.E.C AWADHPURI", images: "/images/Saksham Katiyar.jpg1.jpg" },
        { name: "SHRIDHAR MALPANI", rank: "99.03 PERCENTILE", School: "JAIPURIYA", images: "/images/SHRIDHAR MALPANI.jpg" }
      ]
    },
    {
      year: "2019",
      type: "advanced",
      totalSelections: 0,
      iitSelections: 0,
      nitSelections: 0,
      topRank: "AIR 425",
      toppers: [
        { name: "SHIVAM GOEL", rank: "AIR 1317 (GEN)", School: "SHEILING HOUSE", images: "/images/Shivam Goel 18-19.jpg" },
        { name: "KUSHAGRA BABBAR", rank: "AIR 2410 (GEN)", School: "V.S.E.C KIDWAI NAGAR", images: "/images/kushagra babbar 18-19.jpg" },
        { name: "DEBORATHI SEN", rank: "AIR 2949 (GEN)", School: "V.S.E.C AWADHPURI", images: "/images/Deborathi Sen 18-19.jpg" },
        { name: "ARADHYA GUPTA", rank: "AIR 3509 (GEN)", School: "U.P. KIRANA", images: "/images/Aradhya gupta 18-19.jpg" },
        { name: "AJITESH PANDEY", rank: "AIR 3576 (GEN)", School: "V.S.E.C AWADHPURI", images: "/images/Ajitesh Pandey 18-19.jpg" },
        { name: "SAGAR YADAV", rank: "AIR 4345 (GEN)", School: "S.P.S.E.C", images: "/images/Sagar yadav 18-19.jpg" },
        { name: "VINAYAK SHUKLA", rank: "AIR 4892 (GEN)", School: "S.P.S.E.C", images: "/images/Vinayak Shukla 18-19.jpg" },
        { name: "SAMARTH SACHAN", rank: "AIR 700 (OBC)", School: "V.S.E.C AWADHPURI", images: "/images/Samarth Sachan 18-19.jpg" }
      ]
    },
    {
      year: "2019",
      type: "main",
      totalSelections: 0,
      iitSelections: 0,
      nitSelections: 0,
      topRank: "AIR 425",
      toppers: [
        { name: "DEBORATHI SEN", rank: "99.38 PERCENTILE", School: "V.S.E.C AWADHPURI", images: "/images/Deborathi Sen 18-19 99.38.jpg" },
        { name: "SAGAR YADAV", rank: "99.46 PERCENTILE", School: "V.S.E.C AWADHPURI", images: "/images/Sagar yadav 18-19 99.46.jpg" },
        { name: "AJITESH PANDEY", rank: "99.46 PERCENTILE", School: "V.S.E.C AWADHPURI", images: "/images/Ajitesh Pandey 18-19 99.46.jpg" },
        { name: "VINAYAK SHUKLA", rank: "99.55 PERCENTILE", School: "S.P.S.E.C", images: "/images/Vinayak Shukla 18-19 99.55.jpg" },
        { name: "HARMAN WASEER", rank: "99.62 PERCENTILE", School: "V.S.E.C KIDWAI NAGAR", images: "/images/Harman Waseer 18-19 99.62.jpg" },
        { name: "KUSHAGRA BABBAR", rank: "99.64 PERCENTILE", School: "V.S.E.C KIDWAI NAGAR", images: "/images/kushagra babbar 18-19 99.64.jpg" },
        { name: "ARADHYA GUPTA", rank: "99.66 PERCENTILE", School: "U.P. KIRANA", images: "/images/Aradhya gupta 18-19 99.66.jpg" },
        { name: "SHIVAM GOEL", rank: "99.82 PERCENTILE", School: "SHEILING HOUSE", images: "/images/Shivam Goel 18-19 99.82.jpg" }
      ]
    },
    {
      year: "2018",
      type: "advanced",
      totalSelections: 0,
      iitSelections: 0,
      nitSelections: 0,
      topRank: "AIR 425",
      toppers: [
        { name: "ATIN VIKRAM SINGH", rank: "AIR 344 (GEN)", School: "V.S.E.C", images: "/images/Atin Vikram.jpg" }
      ]
    },
    {
      year: "2018",
      type: "main",
      totalSelections: 0,
      iitSelections: 0,
      nitSelections: 0,
      topRank: "AIR 425",
      toppers: [
        { name: "AMAN PANDEY", rank: "216/360", School: "", images: "/images/2017 e.png" },
        { name: "SAURABH DUBEY", rank: "219/360", School: "", images: "/images/2017 d.png" },
        { name: "KAPIL GUPTA", rank: "234/360", School: "", images: "/images/2017 c.png" },
        { name: "AKASH GUPTA", rank: "238/360", School: "", images: "/images/2017 b.png" },
        { name: "ABHINAV DIXIT", rank: "248/360", School: "", images: "/images/2017.png" }
      ]
    },
    {
      year: "2017",
      type: "main",
      totalSelections: 0,
      iitSelections: 0,
      nitSelections: 0,
      topRank: "AIR 425",
      toppers: [
        { name: "AKASH GUPTA", rank: "AIR 5078 (GEN)", School: "", images: "/images/2017 b (1).png" },
        { name: "ABHINAV DIXIT", rank: "AIR 4979 (GEN)", School: "", images: "/images/2017 (1).png" },
        { name: "AMAN PANDEY", rank: "AIR 4923 (GEN)", School: "", images: "/images/2017 e (1).png" },
        { name: "KAPIL GUPTA", rank: "AIR 2658 (GEN)", School: "", images: "/images/2017 c (1).png" }
      ]
    },
    {
      year: "2016",
      type: "main",
      totalSelections: 0,
      iitSelections: 0,
      nitSelections: 0,
      topRank: "AIR 425",
      toppers: [
        { name: "JASKARAN SINGH", rank: "AIR 624 (GEN)", School: "UNITED PUBLIC SCHOOL", images: "/images/achievements_img29 (3).jpg" },
        { name: "ABHINAV SHUKLA", rank: "AIR 2567 (GEN)", School: "M.P.E.C", images: "/images/achievements_img30 (1).jpg" },
        { name: "RATNESH MISHRA", rank: "AIR 3033 (GEN)", School: "S.P.S.E.C", images: "/images/achievements_img31.jpg" },
        { name: "RACHIT SRIVASTAV", rank: "AIR 5077", School: "S.P.S.E.C", images: "/images/achievements_img32 (1).jpg" },
        { name: "AVNEESH UPADHAYAY", rank: "AIR 5652 (GEN)", School: "K.S.I.C", images: "/images/achievements_img33 (1).jpg" },
        { name: "RAJAT PRATAP SINGH", rank: "AIR 7208 (GEN)", School: "D.P.S AZAD NAGAR", images: "/images/achievements_img34 (1).jpg" },
        { name: "VARUN SINGH", rank: "AIR 9500 (GEN)", School: "SHEILING HOUSE", images: "/images/achievements_img35 (1).jpg" }
      ]
    },
    {
      year: "2015",
      type: "main",
      totalSelections: 0,
      iitSelections: 0,
      nitSelections: 0,
      topRank: "AIR 425",
      toppers: [
        { name: "SHIVAM GOENKA", rank: "AIR 378 (GEN)", School: "Seth Anand Ram Jaipuria", images: "/images/achievements_img17.jpg" },
        { name: "MOHIT DUSEJA", rank: "AIR 1845 (GEN)", School: "Methodist", images: "/images/achievements_img18.jpg" },
        { name: "UTTAM SHUKLA", rank: "AIR 2128 (GEN)", School: "D.P.S. Kalyanpur", images: "/images/achievements_img19.jpg" },
        { name: "ACHINTYA SINGH", rank: "AIR 445 (CAT)", School: "U.P. Kirana", images: "/images/achievements_img20.jpg" },
        { name: "JASKARAN SINGH", rank: "AIR 3983 (GEN)", School: "United Public School", images: "/images/achievements_img21.jpg" },
        { name: "RISHABH JAIN", rank: "AIR 4253 (GEN)", School: "Dr. V.S.E.C. Awadhpuri", images: "/images/achievements_img22.jpg" },
        { name: "UTKARSH AGARWAL", rank: "AIR 4822 (GEN)", School: "Seth Anand Ram Jaipuria", images: "/images/achievements_img23.jpg" },
        { name: "JAY KUMAR", rank: "AIR 950 (CAT)", School: "K.K. Inter College Kannauj", images: "/images/achievements_img24.jpg" },
        { name: "RISHABH JAIN", rank: "AIR 6809 (GEN)", School: "Seth Anand Ram Jaipuria", images: "/images/achievements_img25.jpg" },
        { name: "VIDUSH AGARWAL", rank: "AIR 7838 (GEN)", School: "Seth Anand Ram Jaipuria", images: "/images/achievements_img26.jpg" },
        { name: "ABHISHEK TRIVEDI", rank: "AIR 9082 (GEN)", School: "Dr. V.S.E.C. Awadhpuri", images: "/images/achievements_img27.jpg" }
      ]
    },
    {
      year: "2014",
      type: "main",
      totalSelections: 0,
      iitSelections: 0,
      nitSelections: 0,
      topRank: "AIR 425",
      toppers: [
        { name: "ADITYA SINGHARIA", rank: "AIR 253", School: "S.P.S.E.C", images: "/images/achievements_img10.jpg" },
        { name: "INDU GAUTAM", rank: "AIR 1531", School: "M.P.E.C", images: "/images/achievements_img11.jpg" },
        { name: "ANESH SHARMA", rank: "AIR 3958", School: "Saraswati Vidhya Mandir", images: "/images/achievements_img12.jpg" },
        { name: "SANDEEP KUMAR", rank: "AIR 4299", School: "Jawahar Navoday Vidyalay", images: "/images/achievements_img13.jpg" },
        { name: "AISHWARYA KR. MAURYA", rank: "AIR 4699", School: "Pt. Deen Dayal Upadhayay", images: "/images/achievements_img14.jpg" },
        { name: "DIVYA MISHRA", rank: "AIR 5250", School: "S.P.S.E.C", images: "/images/achievements_img15.jpg" },
        { name: "AKASH VERMA", rank: "AIR 5802", School: "Adarsh Inter College, Mainpuri", images: "/images/achievements_img16.jpg" }
      ]
    },
    {
      year: "2013",
      type: "main",
      totalSelections: 0,
      iitSelections: 0,
      nitSelections: 0,
      topRank: "AIR 425",
      toppers: [
        { name: "ABHINAV TRIPATHI", rank: "AIR 64", School: "Seth Moti Lal Khedia", images: "/images/achievements_img1.jpg" },
        { name: "SHUBHAM KUMAR", rank: "AIR 125", School: "U.P. Kirana", images: "/images/achievements_img2.jpg" },
        { name: "AYUSH KUMAR", rank: "AIR 325", School: "Saraswati Vidhya Mandir", images: "/images/achievements_img3.jpg" },
        { name: "SHUBHAM PATEL", rank: "AIR 1200", School: "Mantora Public School", images: "/images/achievements_img4.jpg" },
        { name: "SHUBHAM RAJPUT", rank: "AIR 2595", School: "B.N.S.D. Siksha Niketan", images: "/images/achievements_img5.jpg" },
        { name: "AMIT KUSHWAHA", rank: "AIR 3647", School: "Jai Narayan Vidhya Mandir", images: "/images/achievements_img6.jpg" },
        { name: "ANURAGH AWASTHI", rank: "AIR 6278", School: "Pt. Deen Dayal Upadhaya", images: "/images/achievements_img7.jpg" },
        { name: "VAIBHAV MISHRA", rank: "AIR 7140", School: "D.P.S. Azad Nagar", images: "/images/achievements_img8.jpg" },
        { name: "VIVEK AWASTHI", rank: "AIR 7938", School: "B.N.S.D. Siksha Niketan", images: "/images/achievements_img9.jpg" }
      ]
    }
  ];

  const Schools = [
    "IIT Bombay", "IIT Delhi", "IIT Kanpur", "IIT Kharagpur", "IIT Roorkee",
    "IIT Madras", "IIT Guwahati", "NIT Trichy", "NIT Surathkal", "NIT Warangal"
  ];

  const filteredResults = yearWiseResults.filter(result => result.type === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-yellow-500/80 via-orange-500/80 to-red-500/80 text-white  min-h-[200px] md:min-h-[700px] py-2 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/main.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 text-center"> 
        </div>
      </section>

      {/* Overall Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-8 text-white text-center shadow-xl">
              <Trophy className="h-12 w-12 mx-auto mb-3" />
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg font-semibold">IIT Selections</div>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl p-8 text-white text-center shadow-xl">
              <Award className="h-12 w-12 mx-auto mb-3" />
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-lg font-semibold">NIT Selections</div>
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl p-8 text-white text-center shadow-xl">
              <Star className="h-12 w-12 mx-auto mb-3" />
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-lg font-semibold">Success Rate</div>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl p-8 text-white text-center shadow-xl">
              <TrendingUp className="h-12 w-12 mx-auto mb-3" />
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-lg font-semibold">Years Legacy</div>
            </div>
          </div>

          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('main')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                activeTab === 'main'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 shadow hover:shadow-lg'
              }`}
            >
              JEE Main Results
            </button>
            <button
              onClick={() => setActiveTab('advanced')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                activeTab === 'advanced'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 shadow hover:shadow-lg'
              }`}
            >
              JEE Advanced Results
            </button>
          </div>

          {/* Year-wise Results */}
          {filteredResults.map((yearData, index) => (
            <div key={`${yearData.year}-${yearData.type}`} className="mb-16">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Year Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <h2 className="text-4xl font-bold mb-2">JEE {activeTab === 'main' ? 'Main' : 'Advanced'} {yearData.year} Results</h2>
                      <p className="text-blue-100">Outstanding performance by our students</p>
                    </div>
                    {yearData.totalSelections > 0 && (
                      <div className="flex gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold">{yearData.totalSelections}</div>
                          <div className="text-sm text-blue-100">Total Selections</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold">{yearData.iitSelections}</div>
                          <div className="text-sm text-blue-100">IIT</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold">{yearData.nitSelections}</div>
                          <div className="text-sm text-blue-100">NIT</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Toppers Grid */}
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Top Performers</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {yearData.toppers.map((student, idx) => (
                      <div
                        key={idx}
                        className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                          idx === 10000
                            ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-400'
                            : 'bg-gradient-to-br from-gray-50 to-white border border-gray-200'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-16 h-16 rounded-full flex overflow-hidden items-center justify-center text-white font-bold text-lg ${
                                idx === 10000
                                  ? 'bg-gradient-to-br from-yellow-500 to-orange-500'
                                  : 'bg-gradient-to-br from-blue-500 to-purple-500'
                              }`}
                            >
                              <Image
                                src={student.images}
                                width={100}
                                height={100}
                                alt={student.name}
                              />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 capitalize">{student.name}</h4>
                              {idx === 10000 && <div className="text-xs text-yellow-600 font-semibold">🏆 Top Ranker</div>}
                            </div>
                          </div>
                          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            {student.rank}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <span className="text-gray-600 w-20">School:</span>
                            <span className="font-semibold text-gray-900">{student.School}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Schools Section */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Students Are Studying At</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {Schools.map((School, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-2">
                    {School.split(' ')[0].substring(0, 3)}
                  </div>
                  <div className="font-semibold text-gray-900 text-sm">{School}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}