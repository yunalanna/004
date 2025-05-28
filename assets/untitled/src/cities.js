document.addEventListener("DOMContentLoaded", () => {
  const cities = [
    {
      name: "巴黎Paris",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/500px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      attractions: ["艾菲爾鐵塔", "羅浮宮", "巴黎聖母院"],
      cuisine: ["可麗餅", "馬卡龍", "鴨胸"],
      events: ["塞納河遊船", "香榭大道散步"],
      nearby: ["凡爾賽", "吉維尼"],
      transport: ["地鐵", "RER 快速鐵路", "巴士"],
      special: ["巴黎時裝週", "香水工坊體驗"],
      suitable: ["情侶", "文青", "藝術愛好者"]
    },
    {
      name: "尼斯Nice",
      image: "https://www.kikikokomedia.com/wp-content/uploads/%E5%B0%BC%E6%96%AF-nice-winter-resort-town-of-the-riviera_001.jpg",
      attractions: ["英國人大道", "尼斯海灘", "馬蒂斯博物館"],
      cuisine: ["尼斯沙拉", "普羅旺斯燉菜", "海鮮拼盤"],
      events: ["尼斯狂歡節", "海岸音樂節"],
      nearby: ["康城", "摩納哥"],
      transport: ["巴士", "有軌電車", "出租車"],
      special: ["嘉年華遊行", "藝術工作坊"],
      suitable: ["家庭", "海灘愛好者", "攝影師"]
    },
    {
      name: "里昂Lyon",
      image: "https://french-nautilus.b-cdn.net/wp-content/uploads/2024/11/Place-des-Jacobins.png",
      attractions: ["富維耶聖母院", "里昂古城", "貝拉庫斯博物館"],
      cuisine: ["里昂香腸", "豬腳", "里昂沙拉"],
      events: ["光影節", "美食節"],
      nearby: ["格勒諾布爾", "尚貝里"],
      transport: ["巴士", "地鐵", "火車"],
      special: ["燈光節", "葡萄酒品鑑"],
      suitable: ["美食家", "歷史愛好者", "家庭"]
    },
    {
      name: "馬賽Marseille",
      image: "https://celiawinetravel.co/wp-content/uploads/2024/10/BLOG.jpg",
      attractions: ["舊港", "聖母加德大教堂", "卡朗格國家公園"],
      cuisine: ["布耶魚湯", "羊奶酪", "橄欖"],
      events: ["馬賽音樂節", "國際電影節"],
      nearby: ["艾克斯", "卡西"],
      transport: ["巴士", "地鐵", "渡輪"],
      special: ["海港嘉年華", "海鮮市集"],
      suitable: ["海港迷", "自然愛好者", "攝影師"]
    },
    {
      name: "波爾多Bordeaux",
      image: "https://cdn01.dcfever.com/media/travel/destination/2016/02/2269_destination_banner.jpg",
      attractions: ["水鏡廣場", "波爾多大教堂", "葡萄酒博物館"],
      cuisine: ["紅酒燉牛肉", "法式麵包", "鵝肝醬"],
      events: ["葡萄酒節", "美食博覽會"],
      nearby: ["巴約", "卡爾卡松"],
      transport: ["巴士", "火車", "自行車租借"],
      special: ["葡萄酒品鑑", "農場體驗"],
      suitable: ["美酒愛好者", "文化探索", "情侶"]
    },
    {
      name: "斯特拉斯堡Strasbourg",
      image: "https://www.settour.com.tw/ss_img/info/location/PAR/R0/PAR0000115/PAR0000115_82676.jpg",
      attractions: ["斯特拉斯堡大教堂", "小法國區", "歐洲議會"],
      cuisine: ["酸菜燉肉", "香腸拼盤", "德國啤酒"],
      events: ["聖誕市集", "音樂節"],
      nearby: ["科爾馬", "米盧斯"],
      transport: ["巴士", "有軌電車", "火車"],
      special: ["歐洲文化節", "傳統美食體驗"],
      suitable: ["家庭", "文化愛好者", "歷史迷"]
    },
    {
      name: "盧瓦爾河谷Loire Valley",
      image: "https://cdn.getyourguide.com/img/tour/6a6c29863adbe7cd.jpeg/68.webp",
      attractions: ["香波堡", "舍農索堡", "盧瓦爾河畔美景"],
      cuisine: ["田園沙拉", "燉菜", "白酒"],
      events: ["葡萄酒節", "花卉展"],
      nearby: ["圖爾", "昂布瓦斯"],
      transport: ["巴士", "火車", "自行車"],
      special: ["古堡之旅", "自然生態"],
      suitable: ["自然愛好者", "歷史迷", "攝影師"]
    },
    {
      name: "坎城Cannes",
      image: "https://media.nownews.com/nn_media/thumbnail/2025/05/1748129210750-cfa887d2ba1442efbd5107bc8ab6afea-800x534.webp?unShow=false",
      attractions: ["坎城影展宮", "海灘", "老城區"],
      cuisine: ["地中海海鮮", "法式甜點", "葡萄酒"],
      events: ["坎城影展", "海灘音樂會"],
      nearby: ["尼斯", "安提布"],
      transport: ["巴士", "渡輪", "出租車"],
      special: ["電影節活動", "海灘派對"],
      suitable: ["電影愛好者", "海灘族群", "年輕人"]
    },
    {
      name: "第戎Dijon",
      image: "https://i0.wp.com/lillian.tw/wp-content/uploads/20240604165744_0_2a3b74.jpg",
      attractions: ["杜松子酒博物館", "古城區", "聖母教堂"],
      cuisine: ["芥末醬", "紅酒燉牛肉", "糕點"],
      events: ["音樂節", "市集"],
      nearby: ["博訥", "博若萊"],
      transport: ["巴士", "火車", "自行車"],
      special: ["美食市集", "葡萄酒體驗"],
      suitable: ["美食家", "文化探索", "家庭"]
    },
    {
      name: "南錫Nancy",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Place_Stanislas_et_ses_grilles_%C3%A0_Nancy.jpg/960px-Place_Stanislas_et_ses_grilles_%C3%A0_Nancy.jpg",
      attractions: ["斯坦尼斯拉斯廣場", "南錫美術館", "聖母教堂"],
      cuisine: ["南錫餅", "法式甜點", "葡萄酒"],
      events: ["文化節", "音樂會"],
      nearby: ["梅斯", "斯特拉斯堡"],
      transport: ["巴士", "火車", "有軌電車"],
      special: ["美術展覽", "街頭表演"],
      suitable: ["藝術愛好者", "文化探索", "家庭"]
    },
    {
      name: "圖爾Tours",
      image: "https://www.sundaytour.com.tw/upfiles/chinese/attractions/tw_attractions_caty01693989043.jpg",
      attractions: ["聖加蒂安大教堂", "圖爾古城牆", "洛亞爾河畔"],
      cuisine: ["豬腳燉菜", "洛亞爾葡萄酒", "奶酪"],
      events: ["音樂節", "葡萄酒展"],
      nearby: ["盧瓦爾河谷", "昂布瓦斯"],
      transport: ["巴士", "火車", "自行車"],
      special: ["古堡巡禮", "自然探索"],
      suitable: ["歷史愛好者", "自然迷", "攝影師"]
    },
    {
      name: "阿維尼翁Avignon",
      image: "https://content.r9cdn.net/rimg/dimg/cd/87/189f76e3-city-7822-1690ca3f4e5.jpg?width=1366&height=768&xhint=1587&yhint=598&crop=true",
      attractions: ["教皇宮", "阿維尼翁橋", "老城區"],
      cuisine: ["普羅旺斯燉菜", "羊肉", "當地葡萄酒"],
      events: ["戲劇節", "音樂會"],
      nearby: ["尼姆", "阿爾勒"],
      transport: ["巴士", "火車", "自行車"],
      special: ["戲劇節", "文化巡禮"],
      suitable: ["藝術愛好者", "歷史迷", "文青"]
    },
    {
      name: "南特Nantes",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/03/25/07/chateau-des-ducs-de-bretagne.jpg?w=1400&h=1400&s=1",
      attractions: ["南特大教堂", "機械島", "布列塔尼博物館"],
      cuisine: ["布列塔尼薄餅", "牡蠣", "當地奶酪"],
      events: ["音樂節", "藝術展"],
      nearby: ["雷恩", "昂熱"],
      transport: ["巴士", "火車", "自行車"],
      special: ["藝術節", "創意市集"],
      suitable: ["藝術家", "文化探索", "家庭"]
    },
    {
      name: "雷恩Rennes",
      image: "https://i.pinimg.com/736x/65/9f/78/659f78542f5411ac1ed18c2b6ee06bc2.jpg",
      attractions: ["聖彼得教堂", "雷恩古城", "植物園"],
      cuisine: ["雷恩薄餅", "豬肉", "奶酪"],
      events: ["音樂節", "市集"],
      nearby: ["南特", "布列塔尼"],
      transport: ["巴士", "火車", "自行車"],
      special: ["市集巡禮", "音樂會"],
      suitable: ["文化探索", "歷史迷", "徒步旅行者"]
    },
    {
      name: "波城Pau",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Ch%C3%A2teeau_de_Pau.JPG/1100px-Ch%C3%A2teeau_de_Pau.JPG",
      attractions: ["波城城堡", "皮雷內山脈風景", "舊城區"],
      cuisine: ["法式燉菜", "羊奶酪", "紅酒"],
      events: ["文化節", "音樂會"],
      nearby: ["比亞里茲", "巴約"],
      transport: ["巴士", "火車", "自行車"],
      special: ["山區健行", "文化探索"],
      suitable: ["自然愛好者", "家庭", "登山客"]
    },
    {
      name: "卡昂Caen",
      image: "https://image.jimcdn.com/app/cms/image/transf/dimension=990x10000:format=jpg/path/s00d0f8408c464a49/image/i9f4079820f57238a/version/1510058284/image.jpg",
      attractions: ["卡昂城堡", "二戰紀念館", "舊城區"],
      cuisine: ["諾曼第蘋果酒", "海鮮", "當地甜點"],
      events: ["電影節", "音樂會"],
      nearby: ["盧昂", "巴約"],
      transport: ["巴士", "火車", "自行車"],
      special: ["歷史巡禮", "文化活動"],
      suitable: ["歷史愛好者", "文化探索", "家庭"]
    },
    {
      name: "昂熱Angers",
      image: "https://guias-viajar.com/wp-content/uploads/2018/08/Angers-FB-004.jpg",
      attractions: ["昂熱城堡", "植物園", "聖莫里斯大教堂"],
      cuisine: ["紅酒", "白酒燉雞", "地方甜點"],
      events: ["音樂節", "花卉展"],
      nearby: ["南特", "圖爾"],
      transport: ["巴士", "火車", "自行車"],
      special: ["花卉展", "美食體驗"],
      suitable: ["自然愛好者", "美食家", "家庭"]
    },
    {
      name: "勒阿弗爾Le Havre",
      image: "https://www.leisurecruisers.com/wp-content/uploads/2019/06/522%E7%BF%81%E5%BC%97%E5%8B%92-4.jpg",
      attractions: ["現代建築", "海灘", "藝術博物館"],
      cuisine: ["海鮮", "法式糕點", "葡萄酒"],
      events: ["藝術節", "音樂會"],
      nearby: ["卡昂", "魯昂"],
      transport: ["巴士", "火車", "渡輪"],
      special: ["現代藝術", "海岸活動"],
      suitable: ["藝術愛好者", "海灘族群", "年輕人"]
    },
    {
      name: "魯昂Rouen",
      image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/90000/90042-Rouen.jpg",
      attractions: ["魯昂大教堂", "聖女貞德廣場", "古城區"],
      cuisine: ["蘋果酒", "鴨胸", "甜點"],
      events: ["文化節", "市集"],
      nearby: ["卡昂", "勒阿弗爾"],
      transport: ["巴士", "火車", "自行車"],
      special: ["歷史巡禮", "文化活動"],
      suitable: ["歷史愛好者", "文化探索", "家庭"]
    },
    {
      name: "卡爾卡松Carcassonne",
      image: "https://owlting-blog-media.s3.ap-northeast-1.amazonaws.com/wp-content/uploads/2019/11/04140726/shutterstock_1681862691.jpg",
      attractions: ["卡爾卡松城堡", "中世紀城牆", "城堡博物館"],
      cuisine: ["香腸", "羊奶酪", "葡萄酒"],
      events: ["中世紀節", "音樂會"],
      nearby: ["波爾多", "圖盧茲"],
      transport: ["巴士", "火車", "自行車"],
      special: ["中世紀重現", "文化節"],
      suitable: ["歷史迷", "家庭", "文化愛好者"]
    },
    {
      name: "圖盧茲Toulouse",
      image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/11/cc/70/8d.jpg",
      attractions: ["卡比托勒廣場", "聖塞爾南大教堂", "航天博物館"],
      cuisine: ["卡斯雷斯香腸", "法式燉菜", "紅酒"],
      events: ["航空節", "音樂會"],
      nearby: ["卡爾卡松", "波爾多"],
      transport: ["巴士", "地鐵", "火車"],
      special: ["航天博物館", "文化活動"],
      suitable: ["科技愛好者", "文化探索", "家庭"]
    }
  ];
const container = document.getElementById("city-container");

  cities.forEach(city => {
    const card = document.createElement("div");
    card.className = "city-content";

    const image = document.createElement("img");
    image.src = city.image;
    image.alt = city.name;

    const details = document.createElement("div");
    details.className = "city-details";
    details.innerHTML = `
      <h3>${city.name}</h3>
      <h4>📍必訪景點</h4><p>${city.attractions.join("、")}</p>
      <h4>🍴經典美食</h4><p>${city.cuisine.join("、")}</p>
      <h4>🎯活動節慶</h4><p>${city.events.join("、")}</p>
      <h4>🏙️周邊城市</h4><p>${city.nearby.join("、")}</p>
      <h4>🚆交通方式</h4><p>${city.transport.join("、")}</p>
      <h4>🌟特色體驗</h4><p>${city.special.join("、")}</p>
      <h4>👥適合族群</h4><p>${city.suitable.join("、")}</p>
    `;

    card.appendChild(image);
    card.appendChild(details);

    // 點擊圖片區塊切換內文顯示
    card.addEventListener("click", () => {
      details.style.display = details.style.display === "block" ? "none" : "block";
    });

    container.appendChild(card);
  });
});document.addEventListener("DOMContentLoaded", () => {
  const cities = [
    {
      name: "巴黎Paris",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/500px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      attractions: ["艾菲爾鐵塔", "羅浮宮", "巴黎聖母院"],
      cuisine: ["可麗餅", "馬卡龍", "鴨胸"],
      events: ["塞納河遊船", "香榭大道散步"],
      nearby: ["凡爾賽", "吉維尼"],
      transport: ["地鐵", "RER 快速鐵路", "巴士"],
      special: ["巴黎時裝週", "香水工坊體驗"],
      suitable: ["情侶", "文青", "藝術愛好者"]
    },
    {
      name: "尼斯Nice",
      image: "https://www.kikikokomedia.com/wp-content/uploads/%E5%B0%BC%E6%96%AF-nice-winter-resort-town-of-the-riviera_001.jpg",
      attractions: ["英國人大道", "尼斯海灘", "馬蒂斯博物館"],
      cuisine: ["尼斯沙拉", "普羅旺斯燉菜", "海鮮拼盤"],
      events: ["尼斯狂歡節", "海岸音樂節"],
      nearby: ["康城", "摩納哥"],
      transport: ["巴士", "有軌電車", "出租車"],
      special: ["嘉年華遊行", "藝術工作坊"],
      suitable: ["家庭", "海灘愛好者", "攝影師"]
    },
    {
      name: "里昂Lyon",
      image: "https://french-nautilus.b-cdn.net/wp-content/uploads/2024/11/Place-des-Jacobins.png",
      attractions: ["富維耶聖母院", "里昂古城", "貝拉庫斯博物館"],
      cuisine: ["里昂香腸", "豬腳", "里昂沙拉"],
      events: ["光影節", "美食節"],
      nearby: ["格勒諾布爾", "尚貝里"],
      transport: ["巴士", "地鐵", "火車"],
      special: ["燈光節", "葡萄酒品鑑"],
      suitable: ["美食家", "歷史愛好者", "家庭"]
    },
    {
      name: "馬賽Marseille",
      image: "https://celiawinetravel.co/wp-content/uploads/2024/10/BLOG.jpg",
      attractions: ["舊港", "聖母加德大教堂", "卡朗格國家公園"],
      cuisine: ["布耶魚湯", "羊奶酪", "橄欖"],
      events: ["馬賽音樂節", "國際電影節"],
      nearby: ["艾克斯", "卡西"],
      transport: ["巴士", "地鐵", "渡輪"],
      special: ["海港嘉年華", "海鮮市集"],
      suitable: ["海港迷", "自然愛好者", "攝影師"]
    },
    {
      name: "波爾多Bordeaux",
      image: "https://cdn01.dcfever.com/media/travel/destination/2016/02/2269_destination_banner.jpg",
      attractions: ["水鏡廣場", "波爾多大教堂", "葡萄酒博物館"],
      cuisine: ["紅酒燉牛肉", "法式麵包", "鵝肝醬"],
      events: ["葡萄酒節", "美食博覽會"],
      nearby: ["巴約", "卡爾卡松"],
      transport: ["巴士", "火車", "自行車租借"],
      special: ["葡萄酒品鑑", "農場體驗"],
      suitable: ["美酒愛好者", "文化探索", "情侶"]
    },
    {
      name: "斯特拉斯堡Strasbourg",
      image: "https://www.settour.com.tw/ss_img/info/location/PAR/R0/PAR0000115/PAR0000115_82676.jpg",
      attractions: ["斯特拉斯堡大教堂", "小法國區", "歐洲議會"],
      cuisine: ["酸菜燉肉", "香腸拼盤", "德國啤酒"],
      events: ["聖誕市集", "音樂節"],
      nearby: ["科爾馬", "米盧斯"],
      transport: ["巴士", "有軌電車", "火車"],
      special: ["歐洲文化節", "傳統美食體驗"],
      suitable: ["家庭", "文化愛好者", "歷史迷"]
    },
    {
      name: "盧瓦爾河谷Loire Valley",
      image: "https://cdn.getyourguide.com/img/tour/6a6c29863adbe7cd.jpeg/68.webp",
      attractions: ["香波堡", "舍農索堡", "盧瓦爾河畔美景"],
      cuisine: ["田園沙拉", "燉菜", "白酒"],
      events: ["葡萄酒節", "花卉展"],
      nearby: ["圖爾", "昂布瓦斯"],
      transport: ["巴士", "火車", "自行車"],
      special: ["古堡之旅", "自然生態"],
      suitable: ["自然愛好者", "歷史迷", "攝影師"]
    },
    {
      name: "坎城Cannes",
      image: "https://media.nownews.com/nn_media/thumbnail/2025/05/1748129210750-cfa887d2ba1442efbd5107bc8ab6afea-800x534.webp?unShow=false",
      attractions: ["坎城影展宮", "海灘", "老城區"],
      cuisine: ["地中海海鮮", "法式甜點", "葡萄酒"],
      events: ["坎城影展", "海灘音樂會"],
      nearby: ["尼斯", "安提布"],
      transport: ["巴士", "渡輪", "出租車"],
      special: ["電影節活動", "海灘派對"],
      suitable: ["電影愛好者", "海灘族群", "年輕人"]
    },
    {
      name: "第戎Dijon",
      image: "https://i0.wp.com/lillian.tw/wp-content/uploads/20240604165744_0_2a3b74.jpg",
      attractions: ["杜松子酒博物館", "古城區", "聖母教堂"],
      cuisine: ["芥末醬", "紅酒燉牛肉", "糕點"],
      events: ["音樂節", "市集"],
      nearby: ["博訥", "博若萊"],
      transport: ["巴士", "火車", "自行車"],
      special: ["美食市集", "葡萄酒體驗"],
      suitable: ["美食家", "文化探索", "家庭"]
    },
    {
      name: "南錫Nancy",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Place_Stanislas_et_ses_grilles_%C3%A0_Nancy.jpg/960px-Place_Stanislas_et_ses_grilles_%C3%A0_Nancy.jpg",
      attractions: ["斯坦尼斯拉斯廣場", "南錫美術館", "聖母教堂"],
      cuisine: ["南錫餅", "法式甜點", "葡萄酒"],
      events: ["文化節", "音樂會"],
      nearby: ["梅斯", "斯特拉斯堡"],
      transport: ["巴士", "火車", "有軌電車"],
      special: ["美術展覽", "街頭表演"],
      suitable: ["藝術愛好者", "文化探索", "家庭"]
    },
    {
      name: "圖爾Tours",
      image: "https://www.sundaytour.com.tw/upfiles/chinese/attractions/tw_attractions_caty01693989043.jpg",
      attractions: ["聖加蒂安大教堂", "圖爾古城牆", "洛亞爾河畔"],
      cuisine: ["豬腳燉菜", "洛亞爾葡萄酒", "奶酪"],
      events: ["音樂節", "葡萄酒展"],
      nearby: ["盧瓦爾河谷", "昂布瓦斯"],
      transport: ["巴士", "火車", "自行車"],
      special: ["古堡巡禮", "自然探索"],
      suitable: ["歷史愛好者", "自然迷", "攝影師"]
    },
    {
      name: "阿維尼翁Avignon",
      image: "https://content.r9cdn.net/rimg/dimg/cd/87/189f76e3-city-7822-1690ca3f4e5.jpg?width=1366&height=768&xhint=1587&yhint=598&crop=true",
      attractions: ["教皇宮", "阿維尼翁橋", "老城區"],
      cuisine: ["普羅旺斯燉菜", "羊肉", "當地葡萄酒"],
      events: ["戲劇節", "音樂會"],
      nearby: ["尼姆", "阿爾勒"],
      transport: ["巴士", "火車", "自行車"],
      special: ["戲劇節", "文化巡禮"],
      suitable: ["藝術愛好者", "歷史迷", "文青"]
    },
    {
      name: "南特Nantes",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/03/25/07/chateau-des-ducs-de-bretagne.jpg?w=1400&h=1400&s=1",
      attractions: ["南特大教堂", "機械島", "布列塔尼博物館"],
      cuisine: ["布列塔尼薄餅", "牡蠣", "當地奶酪"],
      events: ["音樂節", "藝術展"],
      nearby: ["雷恩", "昂熱"],
      transport: ["巴士", "火車", "自行車"],
      special: ["藝術節", "創意市集"],
      suitable: ["藝術家", "文化探索", "家庭"]
    },
    {
      name: "雷恩Rennes",
      image: "https://i.pinimg.com/736x/65/9f/78/659f78542f5411ac1ed18c2b6ee06bc2.jpg",
      attractions: ["聖彼得教堂", "雷恩古城", "植物園"],
      cuisine: ["雷恩薄餅", "豬肉", "奶酪"],
      events: ["音樂節", "市集"],
      nearby: ["南特", "布列塔尼"],
      transport: ["巴士", "火車", "自行車"],
      special: ["市集巡禮", "音樂會"],
      suitable: ["文化探索", "歷史迷", "徒步旅行者"]
    },
    {
      name: "波城Pau",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Ch%C3%A2teeau_de_Pau.JPG/1100px-Ch%C3%A2teeau_de_Pau.JPG",
      attractions: ["波城城堡", "皮雷內山脈風景", "舊城區"],
      cuisine: ["法式燉菜", "羊奶酪", "紅酒"],
      events: ["文化節", "音樂會"],
      nearby: ["比亞里茲", "巴約"],
      transport: ["巴士", "火車", "自行車"],
      special: ["山區健行", "文化探索"],
      suitable: ["自然愛好者", "家庭", "登山客"]
    },
    {
      name: "卡昂Caen",
      image: "https://image.jimcdn.com/app/cms/image/transf/dimension=990x10000:format=jpg/path/s00d0f8408c464a49/image/i9f4079820f57238a/version/1510058284/image.jpg",
      attractions: ["卡昂城堡", "二戰紀念館", "舊城區"],
      cuisine: ["諾曼第蘋果酒", "海鮮", "當地甜點"],
      events: ["電影節", "音樂會"],
      nearby: ["盧昂", "巴約"],
      transport: ["巴士", "火車", "自行車"],
      special: ["歷史巡禮", "文化活動"],
      suitable: ["歷史愛好者", "文化探索", "家庭"]
    },
    {
      name: "昂熱Angers",
      image: "https://guias-viajar.com/wp-content/uploads/2018/08/Angers-FB-004.jpg",
      attractions: ["昂熱城堡", "植物園", "聖莫里斯大教堂"],
      cuisine: ["紅酒", "白酒燉雞", "地方甜點"],
      events: ["音樂節", "花卉展"],
      nearby: ["南特", "圖爾"],
      transport: ["巴士", "火車", "自行車"],
      special: ["花卉展", "美食體驗"],
      suitable: ["自然愛好者", "美食家", "家庭"]
    },
    {
      name: "勒阿弗爾Le Havre",
      image: "https://www.leisurecruisers.com/wp-content/uploads/2019/06/522%E7%BF%81%E5%BC%97%E5%8B%92-4.jpg",
      attractions: ["現代建築", "海灘", "藝術博物館"],
      cuisine: ["海鮮", "法式糕點", "葡萄酒"],
      events: ["藝術節", "音樂會"],
      nearby: ["卡昂", "魯昂"],
      transport: ["巴士", "火車", "渡輪"],
      special: ["現代藝術", "海岸活動"],
      suitable: ["藝術愛好者", "海灘族群", "年輕人"]
    },
    {
      name: "魯昂Rouen",
      image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/90000/90042-Rouen.jpg",
      attractions: ["魯昂大教堂", "聖女貞德廣場", "古城區"],
      cuisine: ["蘋果酒", "鴨胸", "甜點"],
      events: ["文化節", "市集"],
      nearby: ["卡昂", "勒阿弗爾"],
      transport: ["巴士", "火車", "自行車"],
      special: ["歷史巡禮", "文化活動"],
      suitable: ["歷史愛好者", "文化探索", "家庭"]
    },
    {
      name: "卡爾卡松Carcassonne",
      image: "https://owlting-blog-media.s3.ap-northeast-1.amazonaws.com/wp-content/uploads/2019/11/04140726/shutterstock_1681862691.jpg",
      attractions: ["卡爾卡松城堡", "中世紀城牆", "城堡博物館"],
      cuisine: ["香腸", "羊奶酪", "葡萄酒"],
      events: ["中世紀節", "音樂會"],
      nearby: ["波爾多", "圖盧茲"],
      transport: ["巴士", "火車", "自行車"],
      special: ["中世紀重現", "文化節"],
      suitable: ["歷史迷", "家庭", "文化愛好者"]
    },
    {
      name: "圖盧茲Toulouse",
      image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/11/cc/70/8d.jpg",
      attractions: ["卡比托勒廣場", "聖塞爾南大教堂", "航天博物館"],
      cuisine: ["卡斯雷斯香腸", "法式燉菜", "紅酒"],
      events: ["航空節", "音樂會"],
      nearby: ["卡爾卡松", "波爾多"],
      transport: ["巴士", "地鐵", "火車"],
      special: ["航天博物館", "文化活動"],
      suitable: ["科技愛好者", "文化探索", "家庭"]
    }
  ];
const container = document.getElementById("city-container");

  cities.forEach(city => {
    const card = document.createElement("div");
    card.className = "city-content";

    const image = document.createElement("img");
    image.src = city.image;
    image.alt = city.name;

    const details = document.createElement("div");
    details.className = "city-details";
    details.innerHTML = `
      <h3>${city.name}</h3>
      <h4>📍必訪景點</h4><p>${city.attractions.join("、")}</p>
      <h4>🍴經典美食</h4><p>${city.cuisine.join("、")}</p>
      <h4>🎯活動節慶</h4><p>${city.events.join("、")}</p>
      <h4>🏙️周邊城市</h4><p>${city.nearby.join("、")}</p>
      <h4>🚆交通方式</h4><p>${city.transport.join("、")}</p>
      <h4>🌟特色體驗</h4><p>${city.special.join("、")}</p>
      <h4>👥適合族群</h4><p>${city.suitable.join("、")}</p>
    `;

    card.appendChild(image);
    card.appendChild(details);

    // 點擊圖片區塊切換內文顯示
    card.addEventListener("click", () => {
      details.style.display = details.style.display === "block" ? "none" : "block";
    });

    container.appendChild(card);
  });
});
