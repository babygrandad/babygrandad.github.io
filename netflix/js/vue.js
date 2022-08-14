const { createApp } = Vue

createApp({
  data() {
    return {
      movies: [
        {
          "name": "Attack on Finland",
          "posterURL": "https://i.goojara.to/mb_227_227937.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 770533,
          "availDate": "2009/01/21",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/XXRH1NIL4VA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Battlestar Galactica: Blood & Chrome",
          "posterURL": "https://i.goojara.to/mb_228_228045.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 314475,
          "availDate": "2015/11/06",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/mo1_E5_oZ5E\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Blowback",
          "posterURL": "https://i.goojara.to/mb_227_227976.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 991212,
          "availDate": "2010/03/31",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/T0nRlNW_a1I\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Checkered Ninja 2",
          "posterURL": "https://i.goojara.to/mb_228_228052.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 396305,
          "availDate": "2015/07/02",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/XQTWdp-ucdk\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Code Name Banshee",
          "posterURL": "https://i.goojara.to/mb_228_228017.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 873056,
          "availDate": "1996/09/09",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/Cj876ciYN0E\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Doctor Strange in the Multiverse of Madness",
          "posterURL": "https://i.goojara.to/mb_227_227986.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 459188,
          "availDate": "2021/01/15",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/aWzlQ2N6qqg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Double Threat",
          "posterURL": "https://i.goojara.to/mb_227_227922.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 164363,
          "availDate": "2015/06/17",
          "trendState": true,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/e6Q2ikM1bUk\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Drive",
          "posterURL": "https://i.goojara.to/mb_227_227948.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 974405,
          "availDate": "2014/01/20",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/7ZU6X0wyzgc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Dynasty Warriors",
          "posterURL": "https://i.goojara.to/mb_227_227964.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 643603,
          "availDate": "2014/08/29",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/K8pyNXNtZBM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Heropanti 2",
          "posterURL": "https://i.goojara.to/mb_227_227911.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 228850,
          "availDate": "2001/09/27",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/Faz9PrY6xF8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Interceptor",
          "posterURL": "https://i.goojara.to/mb_227_227915.jpg",
          "genre": "action",
          "comingSoon": true,
          "id": 149650,
          "availDate": "2022/11/09",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/OQSoII4Bj1o\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Ip Man: The Awakening",
          "posterURL": "https://i.goojara.to/mb_227_227949.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 976531,
          "availDate": "2012/03/12",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/DcEVuNnvtk8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Jesse Stone: Benefit of the Doubt",
          "posterURL": "https://i.goojara.to/mb_228_228009.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 366337,
          "availDate": "2001/05/30",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/g_scoVmz3uA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Jiang Ziya: The Legend of Deification",
          "posterURL": "https://i.goojara.to/mb_227_227945.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 195569,
          "availDate": "2008/10/22",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/eKhjhtVsV1g\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Jurassic World Dominion",
          "posterURL": "https://i.goojara.to/mb_228_228030.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 212800,
          "availDate": "1997/06/17",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/fb5ELWi-ekk\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Last Seen Alive",
          "posterURL": "https://i.goojara.to/mb_227_227913.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 235094,
          "availDate": "2011/02/04",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/LPReRtcDbNo\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Lightyear",
          "posterURL": "https://i.goojara.to/mb_228_228049.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 403767,
          "availDate": "2010/05/03",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/wHBBoUtJHhA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Lupin III: The First",
          "posterURL": "https://i.goojara.to/mb_228_228046.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 555415,
          "availDate": "2003/10/31",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/6C2ZsWobs68\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "RRR",
          "posterURL": "https://i.goojara.to/mb_227_227918.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 642421,
          "availDate": "2011/09/07",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/EJqK_V6RQCw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Restless",
          "posterURL": "https://i.goojara.to/mb_228_228001.jpg",
          "genre": "action",
          "comingSoon": true,
          "id": 208119,
          "availDate": "2022/08/11",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/L8tCoWmooRE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Spiderhead",
          "posterURL": "https://i.goojara.to/mb_227_227970.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 215021,
          "availDate": "2017/08/05",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/BfsNfFoA0J0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "THE PREY: Legend of Karnoctus",
          "posterURL": "https://i.goojara.to/mb_228_228041.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 842010,
          "availDate": "2015/03/29",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/3tOHyMEXoEE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Burning Sea",
          "posterURL": "https://i.goojara.to/mb_227_227989.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 722341,
          "availDate": "2011/09/29",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/fvWxfinyyvo\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Confession",
          "posterURL": "https://i.goojara.to/mb_227_227967.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 804461,
          "availDate": "2013/05/04",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/cdPxJTwAYZI\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Man from Toronto",
          "posterURL": "https://i.goojara.to/mb_227_227995.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 780861,
          "availDate": "2005/07/12",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/urqy8DrcGBs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Princess",
          "posterURL": "https://i.goojara.to/mb_228_228014.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 225608,
          "availDate": "2003/11/12",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/6kFCkfdOfMU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Siege of Robin Hood",
          "posterURL": "https://i.goojara.to/mb_227_227938.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 600516,
          "availDate": "2018/12/28",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/aHcrN2K8ZqU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Spy Who Never Dies",
          "posterURL": "https://i.goojara.to/mb_227_227929.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 182604,
          "availDate": "2011/12/27",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/BmllggGO4pM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Unbearable Weight of Massive Talent",
          "posterURL": "https://i.goojara.to/mb_227_227924.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 654410,
          "availDate": "2012/05/20",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/CKTRbKch2K4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Torpedo: U-235",
          "posterURL": "https://i.goojara.to/mb_227_227957.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 583071,
          "availDate": "1998/10/13",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/6YDBWtx09Ys\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "WWE Money in the Bank",
          "posterURL": "https://i.goojara.to/mb_228_228022.jpg",
          "genre": "action",
          "comingSoon": true,
          "id": 519267,
          "availDate": "2022/09/25",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/OKWyf8TkL7c\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "White Elephant",
          "posterURL": "https://i.goojara.to/mb_227_227912.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 154721,
          "availDate": "1996/10/07",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/5jzO-_xOp98\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Wolf Hound",
          "posterURL": "https://i.goojara.to/mb_227_227927.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 331513,
          "availDate": "2021/04/12",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/ervnalbkwWs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Wrong Place",
          "posterURL": "https://i.goojara.to/mb_228_228042.jpg",
          "genre": "action",
          "comingSoon": false,
          "id": 976608,
          "availDate": "2017/04/26",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/PPJtM3JNN7U\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Apollo 10 1/2: A Space Age Adventure",
          "posterURL": "https://i.goojara.to/mb_227_227728.jpg",
          "genre": "animation",
          "comingSoon": true,
          "id": 317661,
          "availDate": "2022/12/11",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/Dzuz5s_Qk-A\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Barbie: A Fashion Fairytale",
          "posterURL": "https://i.goojara.to/mb_227_227904.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 439932,
          "availDate": "2016/05/08",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/Ph094YzC9-A\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Beavis and Butt-Head Do the Universe",
          "posterURL": "https://i.goojara.to/mb_227_227993.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 906847,
          "availDate": "2021/08/06",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/hyCY-hqA4Hg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Belle",
          "posterURL": "https://i.goojara.to/mb_227_227812.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 111184,
          "availDate": "2006/07/12",
          "trendState": true,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/izIycj3j4Ow\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Chickenhare and the Hamster of Darkness",
          "posterURL": "https://i.goojara.to/mb_227_227950.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 141650,
          "availDate": "2017/10/17",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/w-P8nVYlXEs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Chip 'n Dale: Rescue Rangers",
          "posterURL": "https://i.goojara.to/mb_227_227864.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 173619,
          "availDate": "2018/05/17",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/F4Z0GHWHe60\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Ginger's Tale",
          "posterURL": "https://i.goojara.to/mb_227_227740.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 626951,
          "availDate": "2006/12/06",
          "trendState": true,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/8bZOEVLlq1I\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Green Lantern: Beware My Power",
          "posterURL": "https://i.goojara.to/mb_228_228039.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 227650,
          "availDate": "1998/11/23",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/bjD3r8wPQQA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "I Want to Eat Your Pancreas",
          "posterURL": "https://i.goojara.to/mb_228_228029.jpg",
          "genre": "animation",
          "comingSoon": true,
          "id": 811014,
          "availDate": "2022/11/15",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/72av7VTBE_8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "It's the Easter Beagle, Charlie Brown!",
          "posterURL": "https://i.goojara.to/mb_227_227769.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 910690,
          "availDate": "2015/10/07",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/rssaw7hFdyE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Koati",
          "posterURL": "https://i.goojara.to/mb_227_227741.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 554867,
          "availDate": "2005/01/21",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/48yg4TFVIdI\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Little Sorcerer",
          "posterURL": "https://i.goojara.to/mb_227_227824.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 249520,
          "availDate": "2002/08/03",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/tyyUI4hosUE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Mad God",
          "posterURL": "https://i.goojara.to/mb_227_227965.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 433575,
          "availDate": "2006/12/29",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/jas8OABbn0Y\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Marmaduke",
          "posterURL": "https://i.goojara.to/mb_227_227823.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 708593,
          "availDate": "2012/05/21",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/wDXYjxxnALU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "My Sweet Monster",
          "posterURL": "https://i.goojara.to/mb_227_227752.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 147836,
          "availDate": "2001/10/17",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/hSCqtzcMeEg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Pinocchio: A True Story",
          "posterURL": "https://i.goojara.to/mb_227_227917.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 131824,
          "availDate": "1996/10/05",
          "trendState": true,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/UbZYe4yTrpQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Rabbit Academy: Mission Eggpossible",
          "posterURL": "https://i.goojara.to/mb_227_227746.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 297988,
          "availDate": "2008/01/28",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/GpBztBIcDjg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Sonic the Hedgehog 2",
          "posterURL": "https://i.goojara.to/mb_227_227815.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 119092,
          "availDate": "2003/03/11",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/47r8FXYZWNU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "South Park the Streaming Wars Part 2",
          "posterURL": "https://i.goojara.to/mb_228_228043.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 749318,
          "availDate": "1998/01/29",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/ho1wRg4mBbc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "South Park: The Streaming Wars",
          "posterURL": "https://i.goojara.to/mb_227_227909.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 165218,
          "availDate": "2001/06/30",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/ixQbLKF01G8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Teen Titans Go! & DC Super Hero Girls: Mayhem in the Multiverse",
          "posterURL": "https://i.goojara.to/mb_227_227876.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 102940,
          "availDate": "2011/04/29",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/PqiokC8HTOA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Bad Guys",
          "posterURL": "https://i.goojara.to/mb_227_227804.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 457403,
          "availDate": "2002/11/08",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/m8Xt0yXaDPU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Bob's Burgers Movie",
          "posterURL": "https://i.goojara.to/mb_228_228038.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 393085,
          "availDate": "2007/08/30",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/hbGXqUumtqg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Legend of Hei",
          "posterURL": "https://i.goojara.to/mb_227_227872.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 193287,
          "availDate": "1998/07/26",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/Ps0O9l2CvOM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Point",
          "posterURL": "https://i.goojara.to/mb_227_227979.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 142499,
          "availDate": "2005/04/26",
          "trendState": true,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/6d2P-IUviEc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Sea Beast",
          "posterURL": "https://i.goojara.to/mb_228_228040.jpg",
          "genre": "animation",
          "comingSoon": true,
          "id": 285840,
          "availDate": "2022/10/27",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/P-E-IGQCsPo\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Summit of the Gods",
          "posterURL": "https://i.goojara.to/mb_227_227671.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 364331,
          "availDate": "2002/07/23",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/AwDVv6pDBx8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Wolf House",
          "posterURL": "https://i.goojara.to/mb_227_227780.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 340426,
          "availDate": "2017/03/21",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/AwDVv6pDBx8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "To Mom (And Dad), with Love",
          "posterURL": "https://i.goojara.to/mb_227_227822.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 752949,
          "availDate": "2014/11/03",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/vdPkngJYTHU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Turning Red",
          "posterURL": "https://i.goojara.to/mb_227_227678.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 222102,
          "availDate": "2022/07/27",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/XdKzUbAiswE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Where Is Anne Frank",
          "posterURL": "https://i.goojara.to/mb_227_227755.jpg",
          "genre": "animation",
          "comingSoon": false,
          "id": 172174,
          "availDate": "2014/07/25",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/CiV7sR5VMRU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "An American Pickle",
          "posterURL": "https://i.goojara.to/mb_225_225778.jpg",
          "genre": "comedy",
          "comingSoon": true,
          "id": 165141,
          "availDate": "2022/09/22",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/OmkxQbMtB_M\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Ballbuster",
          "posterURL": "https://i.goojara.to/mb_225_225796.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 136766,
          "availDate": "2012/08/22",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/nGkmWZInfW8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Bigger Fatter Liar",
          "posterURL": "https://i.goojara.to/mb_225_225850.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 609997,
          "availDate": "2021/07/31",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/l0WPB-uvNYA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Bill & Ted Face the Music",
          "posterURL": "https://i.goojara.to/mb_225_225860.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 108364,
          "availDate": "2018/02/27",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/0hAL7emClFM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Eternal Beauty",
          "posterURL": "https://i.goojara.to/mb_225_225836.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 312154,
          "availDate": "2010/07/04",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/NiqwtgZzbds\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Evil Bong 420",
          "posterURL": "https://i.goojara.to/mb_225_225771.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 800347,
          "availDate": "2017/12/21",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/tHUsgtD19jE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Evil Bong 666",
          "posterURL": "https://i.goojara.to/mb_225_225770.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 758398,
          "availDate": "2018/01/25",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/veLQH17X1uw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "F*&% the Prom",
          "posterURL": "https://i.goojara.to/mb_225_225847.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 104348,
          "availDate": "2009/07/22",
          "trendState": true,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/x1XY8LVEJHU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Fearless",
          "posterURL": "https://i.goojara.to/mb_225_225805.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 659012,
          "availDate": "2016/04/05",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/jxnQFP47SzY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "How to Fake a War",
          "posterURL": "https://i.goojara.to/mb_225_225788.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 976701,
          "availDate": "1997/04/06",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/L6QNbSpzLEI\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Looks That Kill",
          "posterURL": "https://i.goojara.to/mb_225_225799.jpg",
          "genre": "comedy",
          "comingSoon": true,
          "id": 121882,
          "availDate": "2022/10/04",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/Wl58hTp_KwQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Love by the 10th Date",
          "posterURL": "https://i.goojara.to/mb_225_225849.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 983138,
          "availDate": "2017/06/15",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/HT10PJkpjJ0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Made in Italy",
          "posterURL": "https://i.goojara.to/mb_225_225780.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 380243,
          "availDate": "2007/11/12",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/_E68yJohxTM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Magic Camp",
          "posterURL": "https://i.goojara.to/mb_225_225808.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 345021,
          "availDate": "2002/11/25",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/GAmcupYhwKA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "My Hero Academia: Heroes Rising",
          "posterURL": "https://i.goojara.to/mb_225_225791.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 117093,
          "availDate": "2007/10/12",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/ezHmHHt0B78\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Poor Greg Drowning",
          "posterURL": "https://i.goojara.to/mb_225_225795.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 383554,
          "availDate": "2017/03/08",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/jyv51YcMmnk\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Present Laughter",
          "posterURL": "https://i.goojara.to/mb_225_225852.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 876726,
          "availDate": "2010/07/15",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/W1zPhKILe00\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Rose Matafeo: Horndog",
          "posterURL": "https://i.goojara.to/mb_225_225866.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 756241,
          "availDate": "2006/02/07",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/LKNwTIbKHrE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Seriously Single",
          "posterURL": "https://i.goojara.to/mb_225_225761.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 637773,
          "availDate": "2006/11/24",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/V2SVIVkP2_U\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Steve-O: Gnarly",
          "posterURL": "https://i.goojara.to/mb_225_225804.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 102883,
          "availDate": "2008/01/31",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/YojTppe9_R4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Binge",
          "posterURL": "https://i.goojara.to/mb_225_225862.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 415192,
          "availDate": "2006/10/15",
          "trendState": true,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/qg3ZjDFZaIw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Condo",
          "posterURL": "https://i.goojara.to/mb_225_225874.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 652911,
          "availDate": "2006/09/19",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/cDdTrjV7mP8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Devil's Restaurant",
          "posterURL": "https://i.goojara.to/mb_225_225876.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 712314,
          "availDate": "2019/09/19",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/J825Qg7bSfE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The House of Tomorrow",
          "posterURL": "https://i.goojara.to/mb_225_225877.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 178409,
          "availDate": "2004/01/25",
          "trendState": true,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/Teb6n0YCVOo\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Long Dumb Road",
          "posterURL": "https://i.goojara.to/mb_225_225790.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 559446,
          "availDate": "2020/03/05",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/ovppEeV1uV0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The One and Only Ivan",
          "posterURL": "https://i.goojara.to/mb_225_225825.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 844851,
          "availDate": "2014/11/22",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/I-uIQDRS4a8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Sleepover",
          "posterURL": "https://i.goojara.to/mb_225_225826.jpg",
          "genre": "comedy",
          "comingSoon": true,
          "id": 317598,
          "availDate": "2022/11/22",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/zqhfd79fbFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The War with Grandpa",
          "posterURL": "https://i.goojara.to/mb_225_225859.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 782755,
          "availDate": "2016/12/14",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/X0K5cA2hS6g\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Tracks",
          "posterURL": "https://i.goojara.to/mb_225_225816.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 232570,
          "availDate": "2004/07/14",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/6-DiOyxCQQI\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Trouble",
          "posterURL": "https://i.goojara.to/mb_225_225883.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 145971,
          "availDate": "2003/05/16",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/p588TqvWTxg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "What If It Works?",
          "posterURL": "https://i.goojara.to/mb_225_225871.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 714733,
          "availDate": "2011/07/03",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/rfan3k5-OyY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Woody Woodpecker",
          "posterURL": "https://i.goojara.to/mb_225_225868.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 991390,
          "availDate": "2019/06/27",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/NakCY0txrGI\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Work It",
          "posterURL": "https://i.goojara.to/mb_225_225785.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 533213,
          "availDate": "2002/12/12",
          "trendState": true,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/OqcP_wkcl2I\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Yes, God, Yes",
          "posterURL": "https://i.goojara.to/mb_225_225766.jpg",
          "genre": "comedy",
          "comingSoon": true,
          "id": 917188,
          "availDate": "2022/09/30",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/DKqtR9tMyCM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Zapped",
          "posterURL": "https://i.goojara.to/mb_225_225800.jpg",
          "genre": "comedy",
          "comingSoon": false,
          "id": 438760,
          "availDate": "2021/06/15",
          "trendState": true,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/vcqcmib3eKI\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "American Gospel: Christ Alone",
          "posterURL": "https://i.goojara.to/mb_227_227675.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 682280,
          "availDate": "1999/12/05",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/0XH2p6Q3u5s\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Among Us",
          "posterURL": "https://i.goojara.to/mb_227_227897.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 755818,
          "availDate": "2017/12/14",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/eA4EGrt1X54\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "And Just Like That... The Documentary",
          "posterURL": "https://i.goojara.to/mb_227_227714.jpg",
          "genre": "documentary",
          "comingSoon": true,
          "id": 957585,
          "availDate": "2022/11/13",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/seTPvqvchs0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Arsène Wenger: Invincible",
          "posterURL": "https://i.goojara.to/mb_228_228021.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 580797,
          "availDate": "2014/11/19",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/Kx47nKj7h_c\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Athlete A",
          "posterURL": "https://i.goojara.to/mb_227_227977.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 622095,
          "availDate": "2013/10/12",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/I3tF46qzSAg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Attica",
          "posterURL": "https://i.goojara.to/mb_227_227683.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 657901,
          "availDate": "2005/09/23",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/aElB8oEfbiU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Bisping",
          "posterURL": "https://i.goojara.to/mb_227_227786.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 669717,
          "availDate": "2010/08/31",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/gmQyd8G17gc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Chasing Coral",
          "posterURL": "https://i.goojara.to/mb_227_227772.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 107198,
          "availDate": "1999/10/03",
          "trendState": true,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/b6fHA9R2cKI\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Crazy Horse",
          "posterURL": "https://i.goojara.to/mb_227_227875.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 235290,
          "availDate": "2008/04/19",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/uSYHaLEzSqk\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Death of a Nation",
          "posterURL": "https://i.goojara.to/mb_227_227916.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 281167,
          "availDate": "2021/10/22",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/UXPhLXuJ90I\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Dick Johnson Is Dead",
          "posterURL": "https://i.goojara.to/mb_227_227870.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 125829,
          "availDate": "2014/08/12",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/wfTmT6C5DnM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Downfall: The Case Against Boeing",
          "posterURL": "https://i.goojara.to/mb_227_227640.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 888941,
          "availDate": "1998/09/01",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/vt-IJkUbAxY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Girl in the Picture",
          "posterURL": "https://i.goojara.to/mb_228_228044.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 633680,
          "availDate": "2012/02/11",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/jnJ4BGNpby8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "I Am Paul Walker",
          "posterURL": "https://i.goojara.to/mb_227_227882.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 480035,
          "availDate": "2001/07/11",
          "trendState": true,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/0eL_cLqaMX0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Jackass Forever",
          "posterURL": "https://i.goojara.to/mb_227_227699.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 780660,
          "availDate": "2006/11/03",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/FNq-QT2Jpng\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Jeen-yuhs: A Kanye Trilogy",
          "posterURL": "https://i.goojara.to/mb_227_227630.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 586503,
          "availDate": "1998/07/17",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/X3d5rT7FGLE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Jeff Foxworthy: The Good Old Days",
          "posterURL": "https://i.goojara.to/mb_227_227829.jpg",
          "genre": "documentary",
          "comingSoon": true,
          "id": 514983,
          "availDate": "2022/10/18",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/oiWyH2XNGEg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Look at Me: XXXTentacion",
          "posterURL": "https://i.goojara.to/mb_227_227880.jpg",
          "genre": "documentary",
          "comingSoon": true,
          "id": 132995,
          "availDate": "2022/11/17",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/uJVgJFzgdJU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Machine Gun Kelly's Life in Pink",
          "posterURL": "https://i.goojara.to/mb_228_228006.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 413998,
          "availDate": "2009/03/17",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/_1kVVpfnMs8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Made in Senegal",
          "posterURL": "https://i.goojara.to/mb_227_227953.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 180076,
          "availDate": "2022/02/19",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/zkdnsh0V1Zs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Olivia Rodrigo: driving home 2 u",
          "posterURL": "https://i.goojara.to/mb_227_227715.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 140983,
          "availDate": "2001/11/02",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/-VVHUq4tOzg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "One More Time with Feeling",
          "posterURL": "https://i.goojara.to/mb_227_227856.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 115539,
          "availDate": "2022/05/17",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/Hdl5sox2G6g\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Our Father",
          "posterURL": "https://i.goojara.to/mb_227_227843.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 907014,
          "availDate": "2010/10/23",
          "trendState": true,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/phQxK5u8IEs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Pumping Iron II: The Women",
          "posterURL": "https://i.goojara.to/mb_227_227621.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 702608,
          "availDate": "2015/07/12",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/awgwUfmLAxg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Snoop Dogg's F*cn Around Comedy Special",
          "posterURL": "https://i.goojara.to/mb_227_227982.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 241711,
          "availDate": "2021/08/16",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/MaUa-NWgO8c\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Mystery of Marilyn Monroe: The Unheard Tapes",
          "posterURL": "https://i.goojara.to/mb_227_227941.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 874180,
          "availDate": "2012/09/13",
          "trendState": true,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/MaUa-NWgO8c\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The State of Texas vs. Melissa",
          "posterURL": "https://i.goojara.to/mb_227_227947.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 796138,
          "availDate": "1998/12/29",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/hN2cGWGO984\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The United States of Insanity",
          "posterURL": "https://i.goojara.to/mb_227_227793.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 487178,
          "availDate": "2003/02/26",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/NBEK4NLcbrY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Trust No One: The Hunt for the Crypto King",
          "posterURL": "https://i.goojara.to/mb_227_227767.jpg",
          "genre": "documentary",
          "comingSoon": true,
          "id": 203099,
          "availDate": "2022/12/19",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/vW2BPQ15OSw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "What Is a Woman?",
          "posterURL": "https://i.goojara.to/mb_227_227934.jpg",
          "genre": "documentary",
          "comingSoon": false,
          "id": 151196,
          "availDate": "2004/04/29",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/42ivIRd9N8E\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Beverly Hills Wedding",
          "posterURL": "https://i.goojara.to/mb_227_227084.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 502966,
          "availDate": "2010/04/23",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/5-BIJ4RpVT0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Bone Cage",
          "posterURL": "https://i.goojara.to/mb_227_227018.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 171312,
          "availDate": "2015/06/24",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/JZH4m5iBo-c\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Broken Down",
          "posterURL": "https://i.goojara.to/mb_227_227094.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 257679,
          "availDate": "2007/03/15",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/P-z2-boNtHk\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Die in a Gunfight",
          "posterURL": "https://i.goojara.to/mb_227_227051.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 699131,
          "availDate": "2008/05/12",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/1kw7Nv1mIF8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Fear Street Part 2: 1978",
          "posterURL": "https://i.goojara.to/mb_227_227037.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 694316,
          "availDate": "2018/10/27",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/eR2KSY1fipo\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Finding You",
          "posterURL": "https://i.goojara.to/mb_227_227060.jpg",
          "genre": "drama",
          "comingSoon": true,
          "id": 615546,
          "availDate": "2022/12/15",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/8qQSVQ32Gxs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Gun and a Hotel Bible",
          "posterURL": "https://i.goojara.to/mb_227_227100.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 184442,
          "availDate": "2001/10/17",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/ZA9Tocd0NKo\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Holding the Man",
          "posterURL": "https://i.goojara.to/mb_227_227039.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 845772,
          "availDate": "2021/11/20",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/2YdJUorviNA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "June Again",
          "posterURL": "https://i.goojara.to/mb_227_227044.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 580197,
          "availDate": "2005/10/28",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/FXn0ryXxfak\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Keeping Up with the Joneses: The Wrong Letter",
          "posterURL": "https://i.goojara.to/mb_227_227064.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 832682,
          "availDate": "2019/11/22",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/qqbMlHrJSwA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Last Call in the Dog House",
          "posterURL": "https://i.goojara.to/mb_227_227092.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 621323,
          "availDate": "1998/07/24",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/k8i3_L5a4Fg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Monuments",
          "posterURL": "https://i.goojara.to/mb_227_227021.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 838633,
          "availDate": "1998/12/12",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/pZfCV-NOi-A\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "My King",
          "posterURL": "https://i.goojara.to/mb_227_227067.jpg",
          "genre": "drama",
          "comingSoon": true,
          "id": 619425,
          "availDate": "2022/08/17",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/V3M0PrkEGdE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "No Sudden Move",
          "posterURL": "https://i.goojara.to/mb_227_227007.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 223214,
          "availDate": "2013/08/10",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/jG6_24ObI6c\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Pelle the Conqueror",
          "posterURL": "https://i.goojara.to/mb_227_227089.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 335031,
          "availDate": "2017/08/09",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/wIoZ5OYc9RE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Pig",
          "posterURL": "https://i.goojara.to/mb_227_227054.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 727579,
          "availDate": "2012/12/16",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/1i-_CRKdh4Y\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Ride the Eagle",
          "posterURL": "https://i.goojara.to/mb_227_227026.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 766412,
          "availDate": "2010/07/16",
          "trendState": true,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/2UzyQ8QdpAM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Room 9",
          "posterURL": "https://i.goojara.to/mb_227_227071.jpg",
          "genre": "drama",
          "comingSoon": true,
          "id": 919932,
          "availDate": "2022/10/20",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/H8OwxMtkBlc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Blackout Experiment",
          "posterURL": "https://i.goojara.to/mb_227_227023.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 965554,
          "availDate": "2017/11/17",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/3uOo9DkhMkc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Christmas Dance",
          "posterURL": "https://i.goojara.to/mb_227_227091.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 452448,
          "availDate": "2011/02/25",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/gou4HdQ66ZQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Duke",
          "posterURL": "https://i.goojara.to/mb_227_227055.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 618521,
          "availDate": "2000/05/26",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/R4PkA26wEA0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Last Letter from Your Lover",
          "posterURL": "https://i.goojara.to/mb_227_227081.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 139969,
          "availDate": "2000/07/03",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/Y-I3DuUOsNw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The New Legend of Shaolin",
          "posterURL": "https://i.goojara.to/mb_227_227087.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 932676,
          "availDate": "2002/01/19",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/m9NbjwIlt5M\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Night Stalker",
          "posterURL": "https://i.goojara.to/mb_227_227072.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 231268,
          "availDate": "2001/12/03",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/Mva2nGveYss\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Rebels of PT-218",
          "posterURL": "https://i.goojara.to/mb_227_227052.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 619294,
          "availDate": "2013/02/04",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/4Jcf0YkkuRw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Trollhunters: Rise of the Titans",
          "posterURL": "https://i.goojara.to/mb_227_227073.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 148463,
          "availDate": "2002/03/13",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/6H4Y21Hg2L8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Trouble Will Find Us",
          "posterURL": "https://i.goojara.to/mb_227_227085.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 113580,
          "availDate": "2011/06/06",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/6H4Y21Hg2L8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Water Lilies",
          "posterURL": "https://i.goojara.to/mb_227_227086.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 174678,
          "availDate": "2011/11/30",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/Gurt0LXHw94\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Who Am I Now?",
          "posterURL": "https://i.goojara.to/mb_227_227077.jpg",
          "genre": "drama",
          "comingSoon": true,
          "id": 201159,
          "availDate": "2022/12/08",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/Gurt0LXHw94\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Zola",
          "posterURL": "https://i.goojara.to/mb_227_227079.jpg",
          "genre": "drama",
          "comingSoon": false,
          "id": 413432,
          "availDate": "2004/10/20",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/46-uA9l8YI8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Bad Witch",
          "posterURL": "https://i.goojara.to/mb_226_226824.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 177793,
          "availDate": "2011/07/15",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/ecRv4nLSXaE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Blood Surf",
          "posterURL": "https://i.goojara.to/mb_226_226692.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 520844,
          "availDate": "2001/06/03",
          "trendState": true,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/qLqNmwHAk2I\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Bloodthirsty",
          "posterURL": "https://i.goojara.to/mb_226_226812.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 282286,
          "availDate": "2001/01/16",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/t4fFIgwt3ck\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Bloody Nun 2: The Curse",
          "posterURL": "https://i.goojara.to/mb_226_226741.jpg",
          "genre": "horror",
          "comingSoon": true,
          "id": 288298,
          "availDate": "2022/10/31",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/XGsQiZfA-e4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Boys from County Hell",
          "posterURL": "https://i.goojara.to/mb_226_226811.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 194831,
          "availDate": "2014/08/26",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/zUrFQVxkXF0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Coffin 2",
          "posterURL": "https://i.goojara.to/mb_226_226725.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 254166,
          "availDate": "2007/03/05",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/XpJJhubiSMo\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Cold Blooded Killers",
          "posterURL": "https://i.goojara.to/mb_226_226787.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 470774,
          "availDate": "2006/03/31",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/3b5s0Drj9gY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Come True",
          "posterURL": "https://i.goojara.to/mb_226_226644.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 272311,
          "availDate": "2006/12/04",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/y2V2Ugs5jtk\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Cry for the Bad Man",
          "posterURL": "https://i.goojara.to/mb_226_226709.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 757598,
          "availDate": "2010/04/26",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/Iu0fHK4CHxo\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Doll Face",
          "posterURL": "https://i.goojara.to/mb_226_226749.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 664706,
          "availDate": "2021/05/25",
          "trendState": true,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/keYAQCUvWLo\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Dreamcatcher",
          "posterURL": "https://i.goojara.to/mb_226_226619.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 114008,
          "availDate": "2003/12/10",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/xI5ooI3BKVw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Forget Everything and Run",
          "posterURL": "https://i.goojara.to/mb_226_226815.jpg",
          "genre": "horror",
          "comingSoon": true,
          "id": 428942,
          "availDate": "2022/09/04",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/YpVwLkfpeow\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Hall",
          "posterURL": "https://i.goojara.to/mb_226_226748.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 953135,
          "availDate": "2011/03/08",
          "trendState": true,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/jUhNB9sRTus\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Held",
          "posterURL": "https://i.goojara.to/mb_226_226758.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 811980,
          "availDate": "2000/09/09",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/_05LrLzDHho\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Honeydew",
          "posterURL": "https://i.goojara.to/mb_226_226720.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 194129,
          "availDate": "2004/11/09",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/QMZS3BgWIA8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Jakob's Wife",
          "posterURL": "https://i.goojara.to/mb_226_226774.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 663400,
          "availDate": "2006/04/12",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/BENrqhNsYSc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Killer Among Us",
          "posterURL": "https://i.goojara.to/mb_226_226795.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 139348,
          "availDate": "2003/01/04",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/joqpDEu4rso\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Leprechaun 6: Back 2 Tha Hood",
          "posterURL": "https://i.goojara.to/mb_226_226680.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 224288,
          "availDate": "2016/09/18",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/z3Lkgr6XxDQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Lucky",
          "posterURL": "https://i.goojara.to/mb_226_226675.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 212008,
          "availDate": "2015/11/28",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/5TC2QkqqtgQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Mummy Dearest",
          "posterURL": "https://i.goojara.to/mb_226_226745.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 167500,
          "availDate": "2020/06/26",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/gbKgUIkIGUA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Nest of Vampires",
          "posterURL": "https://i.goojara.to/mb_226_226713.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 931636,
          "availDate": "2001/12/29",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/uHto0Vst360\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Phobias",
          "posterURL": "https://i.goojara.to/mb_226_226683.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 126227,
          "availDate": "2021/06/23",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/cfXwf-Ibh7I\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Rose A Love Story",
          "posterURL": "https://i.goojara.to/mb_226_226738.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 632079,
          "availDate": "2015/03/10",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/3yme26kz5f0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Shriek If You Know What I Did Last Friday the Thirteenth",
          "posterURL": "https://i.goojara.to/mb_226_226704.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 471605,
          "availDate": "1998/05/21",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/-v5fu76_Jng\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Boonies",
          "posterURL": "https://i.goojara.to/mb_226_226801.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 286839,
          "availDate": "2017/06/02",
          "trendState": true,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/GTB4Hrm7yj4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Devil Below",
          "posterURL": "https://i.goojara.to/mb_226_226633.jpg",
          "genre": "horror",
          "comingSoon": true,
          "id": 515344,
          "availDate": "2022/08/03",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/ty_aldAhoJU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Haunting of Sharon Tate",
          "posterURL": "https://i.goojara.to/mb_226_226655.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 758584,
          "availDate": "1999/06/20",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/I-L0dk6zuyE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Heiress",
          "posterURL": "https://i.goojara.to/mb_226_226672.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 178988,
          "availDate": "2010/12/19",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/50oTC8QGnfg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Leprechaun's Game",
          "posterURL": "https://i.goojara.to/mb_226_226710.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 826915,
          "availDate": "1998/09/10",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/P2BjIlL94Co\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Resort",
          "posterURL": "https://i.goojara.to/mb_226_226721.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 954228,
          "availDate": "2017/04/18",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/UUF5h8mkSCA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Seventh Day",
          "posterURL": "https://i.goojara.to/mb_226_226686.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 516000,
          "availDate": "2009/10/24",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/HJThAgic45Q\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "The Toll",
          "posterURL": "https://i.goojara.to/mb_226_226698.jpg",
          "genre": "horror",
          "comingSoon": true,
          "id": 770420,
          "availDate": "2022/11/04",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/L-ycU2vH8P0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Things Heard & Seen",
          "posterURL": "https://i.goojara.to/mb_226_226830.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 658796,
          "availDate": "2008/02/29",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/HCAaonjgDEA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Under Wraps",
          "posterURL": "https://i.goojara.to/mb_226_226688.jpg",
          "genre": "horror",
          "comingSoon": false,
          "id": 274556,
          "availDate": "2003/07/19",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/GlWq1-t6n40\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "name": "Violation",
          "posterURL": "https://i.goojara.to/mb_226_226700.jpg",
          "genre": "horror",
          "comingSoon": true,
          "id": 516684,
          "availDate": "2022/12/19",
          "trendState": false,
          "preview": "<iframe  src=\"https://www.youtube.com/embed/Otu7hGMgmcQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        }
      ],

      watchList: JSON.parse(localStorage.getItem('watchList')) || [],

      users: JSON.parse(localStorage.getItem('users')) || { loggedIn: false },


    }
  },

  methods: {

    moveRight(row) {
      this.$refs[row].scrollBy({
        top: 0,
        left: (570),
        behavior: 'smooth'
      })

    },

    moveLeft(row) {
      this.$refs[row].scrollBy({
        top: 0,
        left: (-570),
        behavior: 'smooth'
      })
    },

    play(clip) {

      this.$refs.preview.innerHTML = clip

    },

    addToWacthList(movieItem) {
      this.watchList.push(movieItem);
      // this.setLocalStorage();
    },

    removeFromWacthList(movieItem) {
      this.watchList = this.watchList.filter(t => t != movieItem);
      this.setLocalStorage();
    },

    setLocalStorage() {
      localStorage.setItem("watchList", JSON.stringify(this.watchList));
    },

    setUserLocalStorage() {
      localStorage.setItem("users", JSON.stringify(this.users));
    },

    loginUser() {
      let userName = document.getElementById('inputName')
      let password = document.getElementById('inputPassword')


      if (!userName.value && !password.value) {
        userName.classList.add('incorrectData');
        password.classList.add('incorrectData');
        userName.focus();
      }
      else if (!userName.value) {
        userName.classList.add('incorrectData');
        password.classList.remove('incorrectData');
        alert("Enter Username");
        userName.focus()
      }
      else if (!password.value) {
        password.classList.add('incorrectData');
        userName.classList.remove('incorrectData');
        alert("Enter Password");
        password.focus
      } else {
        userName.classList.remove('incorrectData');
        password.classList.remove('incorrectData');

        if (this.validatePasaword(password.value) != true) {
          password.value = ''
          alert('Password must contain at lease 1 lowercase, 1 uppercase, 1 number, 1 special character and must be at least 8 charachters long.')
          password.classList.add('incorrectData');
        } 
        
        else if (this.validateUsername(userName.value) != true) {
          password.value = ''
          userName.classList.add('incorrectData');
          alert('Username can only contain letters and numbers but must start with and alphabet.')
        }
        
        else {
          
          let nameSlice, nameSplice, nameJoin;
          nameSplice = userName.value.slice(0,1);
          nameSlice = userName.value.slice(1,(userName.value.length + 1));
          nameJoin = (nameSplice.toUpperCase() + nameSlice.toLowerCase())
          this.users.name = nameJoin;
          this.users.loggedIn = true;
          this.setUserLocalStorage();
        }


      }

    },

    logoutUser() {
      this.users.name = '';
      this.users = { loggedIn: false };
      this.setUserLocalStorage();
    },

    validatePasaword(password) {
      var passwordFormat = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/;
      if (password.match(passwordFormat)) {
        return true
      } else {
        return false
      }
    },

    validateUsername(username) {
      var nameFormat = /^[a-zA-Z][a-zA-Z0-9]+$/;
      if (username.match(nameFormat)) {
        return true
      } else {
        return false
      }
    },

    // test zone
    checkList() {
      console.log(this.watchList.length)
    }
    // test zone 
  },

  computed: {

    movieDateUpdate() {
      let currentDate = new Date();
      let updatedmovies = [];
      this.movies.forEach(movie => {
        let movieDate = new Date(movie.availDate)
        if (currentDate >= movieDate) {
          movie.comingSoon = false;
        } else {
          movie.comingSoon = true;
        }
        updatedmovies.push(movie)
      });
      return updatedmovies;

    },

    watchListMovies() {
      let newList = [...new Map(this.watchList.map((item) => [item['name'], item])).values()];
      this.watchList = newList;
      this.setLocalStorage();
      return newList.slice(0).reverse();
    },

    comingSoonMovies() {
      return this.movieDateUpdate.filter(movie => movie.comingSoon === true)
    },

    availMovies() {
      return this.movies.filter(movie => movie.comingSoon === false)
    },

    actionMovies() {
      return this.availMovies.filter(movie => movie.genre === 'action')
    },

    comedyMovies() {
      return this.availMovies.filter(movie => movie.genre === 'comedy')
    },

    animationMovies() {
      return this.availMovies.filter(movie => movie.genre === 'animation')
    },

    dramaMovies() {
      return this.availMovies.filter(movie => movie.genre === 'drama')
    },

    documentaryMovies() {
      return this.availMovies.filter(movie => movie.genre === 'documentary')
    },

    horrorMovies() {
      return this.availMovies.filter(movie => movie.genre === 'horror')
    },
  }
}).mount('#app')