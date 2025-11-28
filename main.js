
const translate = {
    en: {
        Home: "Home",
        ExploreSites: "Explore Sites",
        BookTickets: "BookTickets",
        Guides: 'Guides',
        Transportation: "Transportation",
        Contact: "Contact",
        English: "English",
        Arabic: "Arabic",
        Login:"Login",
        DiscoverEgyptIslamicHeritage:"Discover Egypt's Islamic Heritage",
        Bookguidedtourstotimelesslandmarks:"Book guided tours to timeless landmarks",
        ExploreNow:"Explore Now",
        FamousIslamicHeritageSites:"Famous Islamic Heritage Sites",
        AlHakimMosque:"Al-Hakim Mosque",
        Readmore:"Read more",
        Booknow:"Book now",
        SaladinCitadel:"Saladin Citadel",
        Readmore:"Read more",
        Booknow:"Book now",
        AlAzharMosque:"Al-Azhar Mosque",
        Readmore:"Read more",
        Booknow:"Book now",
        SultanAlZahirBaybarsMosque:"Sultan Al-Zahir Baybars Mosque",
        Readmore:"Read more",
        Booknow:"Book now",
        GayerAndersonMuseum:"Gayer-Anderson Museum",
        Readmore:"Read more",
        Booknow:"Book now",
        SultanAlGhuriAgency:"Sultan Al-Ghuri Agency",
        Readmore:"Read more",
        Booknow:"Book now",
        MrsWasilashouse:"Mrs. Wasila's house",
        Readmore:"Read more",
        Booknow:"Book now",
        RawdaIslandNilometer:"Rawda Island Nilometer",
        Readmore:"Read more",
        Booknow:"Book now",
        AlJeddawiAgency:"Al-Jeddawi Agency",
        Readmore:"Read more",
        Booknow:"Book now",
        QaitbayCitadel:"Qaitbay Citadel",
        Readmore:"Read more",
        Booknow:"Book now",
        JamalalDinhouse:"Jamal al-Din house",
        Readmore:"Read more",
        Booknow:"Book now",
        Formore:"For more"
    },
    ar: {
        Home: "الصفحة الرئيسية",
        ExploreSites: "استكشف المواقع",
        BookTickets: "احجز التذاكر",
        Guides: 'المرشدون',
        Transportation: "المواصلات",
        Contact: "اتصل بنا",
        English: "الانجليزية",
        Arabic: "العربية",
        Login:"تسجيل دخول",
        DiscoverEgyptIslamicHeritage:"اكتشف التراث الإسلامي في مصر",
        Bookguidedtourstotimelesslandmarks:"احجز جولات إرشادية لأهم المعالم الخالدة",
        ExploreNow:"استكشف الآن",
        FamousIslamicHeritageSites:"أشهر مواقع التراث الإسلامي",
        AlHakimMosque:"مسجد الحاكم بأمر الله",
        Readmore:"اقرأ المزيد",
        Booknow:"احجز الآن",
        SaladinCitadel:"قلعة صلاح الدين",
        Readmore:"اقرأ المزيد",
        Booknow:"احجز الآن",
        AlAzharMosque:"جامع الأزهر",
        Readmore:"اقرأ المزيد",
        Booknow:"احجز الآن",
        SultanAlZahirBaybarsMosque:"مسجد السلطان الظاهر بيبرس",
        Readmore:"اقرأ المزيد",
        Booknow:"احجز الآن",
        GayerAndersonMuseum:"متحف جايير أندرسون",
        Readmore:"اقرأ المزيد",
        Booknow:"احجز الآن",
        MuseumofIslamicArt:"متحف الفن الإسلامي",
        Readmore:"اقرأ المزيد",
        Booknow:"احجز الآن",
        SultanAlGhuriAgency:"وكالة السلطان الغوري",
        Readmore:"اقرأ المزيد",
        Booknow:"احجز الآن",
        MrsWasilashouse:"بيت السيدة وسيلة",
        Readmore:"اقرأ المزيد",
        Booknow:"احجز الآن",
        RawdaIslandNilometer:"رَوْضة الجزيرة – النيلوميتر",
        Readmore:"اقرأ المزيد",
        Booknow:"احجز الآن",
        AlJeddawiAgency:"وكالة الجدّاوي",
        Readmore:"اقرأ المزيد",
        Booknow:"احجز الآن",
        QaitbayCitadel:"قلعة قايتباي",
        Readmore:"اقرأ المزيد",
        Booknow:"احجز الآن",
        JamalalDinhouse:"بيت جمال الدين",
        Readmore:"اقرأ المزيد",
        Booknow:"احجز الآن",
        Formore:"لمزيد من المعلومات",
    }
}
const langSelct = document.querySelector("select")
langSelct.addEventListener('change', (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);

})
//    // لو فيه ترجمه محفوظه في localStorage يرجعه
// document.addEventListener("DOMContentLoaded",()=>{
//     const lange = localStorage.getItem("lang");
//     setLang(localStorage.getItem("lang"));    
// });
const setLang = (lange) => {
    const elements = document.querySelectorAll("[data-translete]");
    elements.forEach((element) => {
        const translateKey = element.getAttribute("data-translete");
        element.textContent = translate[lange][translateKey];
    });
    if (lange === "ar") {
        document.dir = "rtl";
    } else {
        document.dir = "ltr";
    }
}




const toggleBtn = document.getElementById("darkToggle");
  const body = document.body;

//   // لو فيه مود محفوظ في localStorage يرجعه
//   if (localStorage.getItem("theme") === "dark") {
//     body.classList.add("dark-mode");
//     toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
//     toggleBtn.classList.remove("btn-outline-dark");
//     toggleBtn.classList.add("btn-outline-light");
//   }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
      toggleBtn.classList.remove("btn-outline-dark");
      toggleBtn.classList.add("btn-outline-light");
    } else {
      localStorage.setItem("theme", "light");
      toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      toggleBtn.classList.remove("btn-outline-light");
      toggleBtn.classList.add("btn-outline-dark");
    }
  });
