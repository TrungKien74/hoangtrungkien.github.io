/* Articles database - Centralized content store */

const imgBase = window.location.pathname.includes('/pages/') ? '../images/' : 'images/';

const ArticlesDB = [
    {
        id: 1,
        slug: "ky-nguyen-ngoai-giao-moi",
        title: "Kỷ Nguyên Ngoại Giao Mới Mở Ra Tại Geneva",
        excerpt: "Lãnh đạo từ 12 quốc gia tụ họp để ký kết các hiệp ước chưa từng có, nhằm ổn định thương mại toàn cầu và cam kết bảo vệ môi trường bền vững.",
        category: "politics",
        categoryLabel: "Thời Sự Quốc Tế",
        author: "Trần Minh Khoa",
        authorRole: "Phóng viên Ngoại giao",
        authorAvatar: imgBase + "avatar-khoa.jpg",
        date: "2026-04-23",
        readTime: 6,
        views: 24500,
        image: imgBase + "hero-ai.jpg",
        featured: true,
        body: `<p class="dropcap">Trong bối cảnh căng thẳng thương mại toàn cầu leo thang đến mức báo động, các nhà lãnh đạo nguyên thủ từ 12 nền kinh tế lớn đã cùng tề tựu tại Cung điện Quốc gia Geneva để chính thức gỡ bỏ những rào cản thuế quan khổng lồ. Sự kiện này không đơn giản là một cuộc họp cấp cao mang tính thủ tục; nó thực sự đánh dấu một bước ngoặt xoay trục cục diện kinh tế thế giới, rũ bỏ chủ nghĩa biệt lập để trở về với những nguyên tắc thương mại đa phương tự do.</p>
        <p>Bên trong không gian phòng khánh tiết lộng lẫy của Geneva, hàng trăm ống kính phóng viên chớp tắt liên tục, cố gắng bắt trọn khoảnh khắc cái bắt tay lịch sử giữa các nhà lãnh đạo Đông - Tây. Các văn kiện được ký kết trong tuần này bao hàm quy mô cực kỳ rộng lớn, đi từ giải quyết bài toán cốt lõi về gián đoạn chuỗi cung ứng linh kiện bán dẫn, cho tới một khuôn khổ đạo đức hoàn chỉnh về việc ứng dụng trí tuệ nhân tạo (AI) trong lĩnh vực an ninh toàn cầu.</p>
        
        <h2>Phá Băng Khủng Hoảng và Giải Quyết Nút Thắt Bán Dẫn</h2>
        <p>Chỉ nhìn lại vài năm trước, các rào cản pháp lý và chính sách bảo hộ khắt khe đã khiến cho bức tranh xuất nhập khẩu luôn nằm trong tình trạng mây mù ảm đạm. Giao thương liên lục địa từng ở mức thấp kỷ lục của thập kỷ. Mực nước sông Rhine khô cạn hay các biến cố địa chính trị bất ngờ tại eo biển luôn là nỗi khiếp sợ của giới thương nhân. Nhưng hiệp ước Geneva mới với 400 trang văn kiện pháp lý đã tạo đà dỡ bỏ các điểm đen này.</p>
        <p>Trong một cuộc phỏng vấn kín với tờ Financial Times, Bộ trưởng Thương mại Pháp đã tiết lộ rằng các cuộc đàm phán từng rơi vào bế tắc ba lần. Khúc mắc lớn nhất nằm ở việc chia sẻ bằng sáng chế chip vi mạch cỡ 2 nanomet. Nếu không có những nhượng bộ lịch sử phút chót từ phái đoàn Bắc Mỹ, thỏa thuận này có lẽ đã sụp đổ.</p>
        
        <blockquote>"Hiệp ước lần này là tia sáng xuyên qua cơn bão lạm phát kéo dài dai dẳng. Chúng tôi đang đặt nền móng kiến trúc lại hệ thống pháp lý cho thế hệ 10 năm sau." — Bà Christine Lagarde, Giám đốc ECB chia sẻ với giới báo chí.</blockquote>

        <h2>Kỷ Nguyên Vàng Của Tài Chính Bền Vững</h2>
        <p>Không chỉ giải quyết bài toán trước mắt về chuỗi cung ứng linh kiện, Hiệp ước Geneva còn cắm những cột mốc đầu tiên cho khái niệm 'Kinh tế Số Bền Vững' (Sustainable Digital Economy). Lần đầu tiên, một mức thuế tối thiểu toàn cầu 15% đối với các gã khổng lồ công nghệ đã được nhất trí tuyệt đối, một thành tựu mà tổ chức OECD đã theo đuổi ròng rã suốt mười lăn năm.</p>
        <p>Dòng tiền thu được từ khối tài sản công nghệ này sẽ không bị rót vào các quỹ quân sự. Thay vào đó, chúng bị ràng buộc pháp lý bằng một cơ chế ủy thác hoàn toàn mới mang tên 'Geneva Tech-Trust'. Cơ chế này sẽ tái phân bổ nguồn vốn đến các phòng thí nghiệm nghiên cứu năng lượng sạch, hệ thống y tế vi mô ở khu vực hạ Sahara và các cơ sở giáo dục ứng dụng thực tế ảo nhằm xóa nhòa khoảng cách tri thức toàn cầu.</p>

        <h2>Lộ Trình Xanh "2035 Net-Zero"</h2>
        <p>Thành tựu đáng ngạc nhiên nhất không nằm ở mặt kinh tế, mà ở mảng môi trường học. Lần đầu tiên, 12 quốc gia nhất trí thông qua quỹ "Global Climate Shield" trị giá 2.5 ngàn tỷ USD. Quỹ này nhằm chi trả và trợ cấp miễn hoàn lại cho công cuộc chống biến đổi khí hậu ở châu Phi và khu vực đồng bằng chịu rủi ro thiên tai cao.</p>
        <p>Điều khoản số 47 của hiệp định thậm chí còn bao gồm một cam kết vô tiền khoáng hậu: Việc trừng phạt thương mại đối với các sản phẩm không tuân thủ quy chuẩn trung hòa carbon sẽ tự động có hiệu lực sau 24 tháng kể từ ngày ký. Các tập đoàn sản xuất thép và xi măng truyền thống đang đứng trước lựa chọn sinh tử: Đầu tư công nghệ nung điện từ hoặc đối mặt với mức thuế biên giới lên đến 45%.</p>
        
        <h2>Tác Động Thị Trường Tức Thì</h2>
        <p>Giới phân tích Phố Wall lập tức có phản ứng nhạy bén. Ngay khi tiếng gõ búa bế mạc hội nghị vang lên, các chỉ số chứng khoán tương lai và cổ phiếu nhóm năng lượng tái tạo đã vọt tăng 18%. Đà hưng phấn lan rộng ra các sàn giao dịch Á Châu, với Nikkei 225 và Hang Seng đồng loạt phá đỉnh 5 năm qua. Tỷ phú Elon Musk cũng đã có động thái chúc mừng trên mạng xã hội X, kèm theo việc công bố ba gigafactory sản xuất pin năng lượng mặt trời thế hệ mới sẽ được đặt tại Đông Nam Á để đón đầu dòng vốn từ Geneva.</p>
        <p>Mặc dù quá trình thực thi hiệp ước này tại quốc hội mỗi nước định chế dân chủ còn dài và đầy chông gai, nhất là những khu vực vẫn còn nặng tư tưởng dân túy phe hữu, nhưng rõ ràng. Căn phòng khánh tiết Geneva không chỉ sản sinh ra một tập giấy lộn với chữ ký của các nguyên thủ quốc gia, mà nó đã viết nên một trang sử lạc quan, chói lòa, kết thúc cho một thập niên nhiều hoang mang của nhân loại.</p>`
    },
    {
        id: 2,
        slug: "cach-mang-dien-toan-luong-tu",
        title: "Cuộc Cách Mạng Thầm Lặng Trong Điện Toán Lượng Tử",
        excerpt: "Các trung tâm nghiên cứu trên quả bầu trời vật lý lượng tử đang chạm tay vào ngưỡng cửa thần thánh: duy trì ổn định qubit ở nhiệt độ bình thường.",
        category: "tech",
        categoryLabel: "Phân Tích Công Nghệ",
        author: "Vũ Hoàng Long",
        authorRole: "Biên tập viên Công nghệ",
        authorAvatar: imgBase + "avatar-long.jpg",
        date: "2026-04-22",
        readTime: 8,
        views: 18300,
        image: imgBase + "quantum.jpg",
        featured: true,
        body: `<p>Mô hình điện toán lượng tử từ lâu vẫn luôn được ví von là "chén thánh" của sức mạnh máy tính. Trong suốt 20 năm, thuật ngữ này gợi lên hình ảnh những cụm máy tính khổng lồ được ngâm trong buồng nitrogen lỏng âm độ tuyệt đối, vô cùng đắt đỏ và phi thực tế đối với mục đích thương mại. Tuy nhiên, 18 tháng qua, một cuộc tiến hóa tĩnh lặng ở tầng vi mô đang làm khuynh đảo giới học thuật máy tính.</p>
        <p>Tại một tầng ngầm bí mật thuộc khuôn viên MIT (Massachusetts Institute of Technology), nhóm nghiên cứu do Tiến sĩ Harrison Wei dẫn đầu đã phá vỡ rào cản bất khả thi: kéo dài "trạng thái chồng chập" (superposition) của một đơn vị qubit độc lập trong 4.2 giây ở nhiệt độ phòng hoàn toàn tiêu chuẩn.</p>
        <h2>Tại Sao "4.2 Giây" Lại Là Khoảnh Khắc Lịch Sử?</h2>
        <p>Đối diện với câu hỏi này, bạn phải hiểu rằng trong thế giới vật lý hạ nguyên tử, các hạt electron hoạt động vô cùng hỗn loạn hệt như những chiếc màn múa lân mất kiểm soát. Chỉ cần một tia sáng nhỏ hay một rung động âm thanh li ti cũng đủ làm cấu trúc phân rã, khiến cỗ máy lượng tử sập tức thì (decoherence).</p>
        <blockquote>"Duy trì qubit nguyên vẹn ở nhiệt độ phòng 4.2 giây đồng nghĩa với việc chúng tôi đã thiết lập được thuật toán tự sửa lỗi (Error Correction) tối ưu hóa gấp 10.000 lần so với mô hình của Google Sycamore năm 2019." — Tiến sĩ H. Wei báo cáo trong tạp chí Nature tuần trước.</blockquote>
        <h2>Thế Giới Bị Giải Mã Trong Chớp Mắt</h2>
        <p>Hệ lụy của nghiên cứu này không chỉ mang tính hàn lâm. Giới bảo mật không gian mạng đang đứng ngồi không yên. Khi những hệ thống lượng tử siêu phân giải này ra khỏi phòng thí nghiệm và bước vào thương mại hóa, toàn bộ nền tảng mã hóa RSA-256 (bảo vệ tài khoản ngân hàng, blockchain và cả mã phóng hạt nhân) sẽ bốc hơi trong vỏn vẹn vài tiếng tính toán.</p>
        <p>Các công ty Big Tech như IBM, Microsoft và Alibaba đang chạy đua không ngừng nghỉ để ra mắt tiêu chuẩn "Quantum-safe encryption" (Mã hóa kháng lượng tử). Bởi vì việc những rào cản ngăn cản cái chết nhiệt của Qubit dần bị dỡ bỏ chỉ còn là vấn đề thời gian. Nhân loại đang đứng ngay rìa của một kỷ nguyên vàng mới – một kỷ nguyên nơi những bí ẩn cấu trúc phân tử của mầm bệnh phức tạp có thể được giải mã chỉ sau bữa trà chiều.</p>`
    },
    {
        id: 3,
        slug: "hoi-sinh-bao-in",
        title: "Sự Hồi Sinh Kỳ Diệu Của Báo In Trong Thời Đại Clickbait",
        excerpt: "Thay vì chìm vào dĩ vãng, những tờ tạp chí nghệ thuật giấy đang trỗi dậy mãnh liệt và chứng minh giá trị vô giá của sự chậm rãi.",
        category: "culture",
        categoryLabel: "Phóng Sự Văn Hóa",
        author: "Trương Hải Yến",
        authorRole: "Bút ký Văn hóa",
        authorAvatar: imgBase + "avatar-yen.jpg",
        date: "2026-04-21",
        readTime: 5,
        views: 12100,
        image: imgBase + "print.jpg",
        featured: false,
        body: `<p>Mùi ngai ngái của mực in mới và sự thô ráp dễ chịu của những trang giấy nhám – trải nghiệm xúc giác chân thực ấy tưởng chừng đã bị vùi lấp mãi mãi bởi những màn hình OLED vô tri và dòng cuộn vô tận trên mạng xã hội. Tuy nhiên, nghịch lý sinh ra là khi thuật toán đẩy con người đến bờ vực của sự phù phiếm "mì ăn liền", thì những người khao khát chiều sâu lại đang tìm đường về với bản ngã tĩnh lặng của báo in.</p>
        <h2>Phản Văn Hóa Sự Chú Ý</h2>
        <p>Hãy bước chân vào bất kỳ xưởng cà phê rang xay thủ công nào ở Thảo Điền (TP.HCM) hay phố sách Đinh Lễ (Hà Nội), bạn sẽ dễ dàng bắt gặp những nhóm bạn trẻ thuộc thế hệ Z (những người lớn lên cùng TikTok) đang say sưa vùi đầu vào những tờ tạp chí indie độc lập siêu nhỏ như "The Kinfolk", "Cereal", hay "Báo Giấy".</p>
        <p>Những ấn phẩm này không chạy theo dòng sự kiện hằng ngày. Bạn sẽ không thấy những bản tin giật gân, những tiêu đề báo "đọc ngay kẻo lỡ". Thay vào đó, mỗi số báo là một tác phẩm nghệ thuật đồ họa tuyệt mỹ với những bài phỏng vấn 10 trang, nhịp điệu từ tốn, layout tối giản hoàn hảo. Đây là báo chí hướng đến chất độc bản và lưu trữ.</p>
        <h2>"Sang Trọng" Mới Nằm Ở Độ Dày Của Tư Duy</h2>
        <p>Giá trị cốt lõi của một cuốn tạp chí độc lập nằm ở yếu tố hữu hình. Nó là một cái phanh tay hữu hiệu buộc não bộ bạn phải giãn nhịp. Khi mắt lướt trên mặt giấy, không có một cái popup quảng cáo vô duyên bật lên, không có thông báo tin nhắn chen ngang đứt mạch đọc.</p>
        <blockquote>"Báo in cho bạn quyền được tạm lánh khỏi thế giới kỹ thuật số bạo lực. Nó mang dáng dấp của một cuộc trò chuyện tư mật, kéo dài." — Hoàng, chủ một nhà in risograph nhận định.</blockquote>
        <p>Với mức giá không hề rẻ (dao động từ 200 đến 500 nghìn đồng/ấn phẩm), báo in đã biến mình thành một phân khúc tiêu dùng mang tính sưu tầm và thưởng lãm. Có lẽ, đến một lúc nào đó, báo giấy không phải là nền tảng phân phối tin tức nữa. Mà báo giấy sinh ra để phân phối sự tịnh tâm cho chính độc giả của nó.</p>`
    },
    {
        id: 4,
        slug: "kien-truc-am-thanh-vu-tru",
        title: "Khám Phá Nhịp Đập Âm Thanh Của Các Hố Đen Siêu Khổng Lồ",
        excerpt: "Vũ trụ không im lặng hoàn toàn. Những dao động hạ âm bí ẩn đang viết lại cách chúng ta giải mã bức tranh thiên văn học hiện đại.",
        category: "science",
        categoryLabel: "Khoa Học Tự Nhiên",
        author: "TS. Nguyễn Lan Anh",
        authorRole: "Nghiên cứu viên Vật Lý Cấu Trúc",
        authorAvatar: imgBase + "avatar-yen.jpg",
        date: "2026-04-20",
        readTime: 12,
        views: 31200,
        image: imgBase + "blackhole.jpg",
        featured: true,
        body: `<p>Câu nói quen thuộc "Trong không gian, không ai có thể nghe bạn la hét" được phổ biến từ bộ phim kinh điển Alien (1979) có cốt lõi từ thực tế: không gian là môi trường chân không, không có phân tử khí để bức xạ âm thanh lan truyền. Vì thế, vũ trụ theo cách suy đơn thuần là một cõi câm điếc đến rợn người. Thế nhưng, đài quan sát sóng hấp dẫn Chandra X-ray Observatory vừa bóc trần một lớp mặt nạ khác của vũ trụ.</p>
        <h2>Dịch Mã "Âm Cực Trầm" Xuyên Lục Địa</h2>
        <p>Bên trong các cụm thiên hà cách chúng ta hàng trăm triệu năm ánh sáng, tồn tại những đám mây khí gas siêu nóng đậm đặc bủa vây xung quanh nhân hố đen trung tâm. Chính cái "ao" khí gas này cung cấp môi trường sóng lý tưởng. Năm ngoái, các sóng áp suất khổng lồ, phóng ra từ hố đen trung tâm của cụm thiên hà Perseus, đã được xác nhận. Chúng là những luồng gợn sóng tàn bạo xé toạc lớp plasma nóng bỏng rực rỡ.</p>
        <p>Khi sử dụng bộ lọc "sonification" giả lập, các nhà khoa học đã nâng dải siêu hạ âm (tần số thấp hơn mức cảm nhận của con người 57 quãng tám) lên đến ngưỡng tai nghe thấy. Kết quả trả về không phải là tiếng hú của gió; mà là một chuỗi tiếng ồn từ tốn, ám ảnh, gầm gừ hệt như hơi thở của một thực thể sống vĩ đại giấu mình trong rặng núi. Chúng ta đang chứng kiến - và giờ đây là lắng nghe - quá trình một siêu hố đen thở xả bớt năng lượng hỗn loạn vào môi trường xung quanh.</p>`
    },
    {
        id: 5,
        slug: "mo-hinh-thanh-khoan-thi-truong",
        title: "Mô Hình Thanh Khoản Mới Thách Thức Tư Duy Tài Chính Tuyền Thống",
        excerpt: "Giới ngân hàng trung ương đang loay hoay với ma trận lạm phát khó lường trong bối cảnh các dòng vốn phi tập trung lên ngôi.",
        category: "finance",
        categoryLabel: "Đầu Tư Tài Chính",
        author: "Lê Minh Đạt",
        authorRole: "Phóng viên Kinh tế vĩ mô",
        authorAvatar: imgBase + "avatar-dat.jpg",
        date: "2026-04-19",
        readTime: 7,
        views: 15400,
        image: imgBase + "solar.jpg",
        featured: false,
        body: `<p>Khái niệm "thanh khoản" trước đây chỉ gắn liền với một đường ống duy nhất: các ngân hàng thương mại lớn, FED và những thao tác nghiệp vụ điều tiết lãi suất trái phiếu cổ điển. Nhưng kể từ sau khi nọc độc của đại dịch nhạt dần, nền kinh tế thế giới trông giống như một quả thanh long gai góc, trong đó thanh khoản không còn bơm chảy từ trên xuống, mà nó len lỏi trườn bò vào các khe nứt mờ ám nhất.</p>
        <p>Các chỉ số vĩ mô bỗng chốc mất cân xứng nghiêm trọng. Lãi suất leo thang chạm đáy 25 năm, vậy mà thị trường việc làm tại Mỹ vẫn nóng hầm hập, chứng khoán thì liên tục phá đỉnh kỷ lục. Có vẻ như cơ chế truyền dẫn chính sách tiền tệ bằng công cụ lãi suất kinh điển đang gặp hiện tượng trơ vi tính nặng nề.</p>
        <h2>Sự Vươn Lên Của Thanh Khoản Tư Nhân</h2>
        <p>Hiện tại, Private Credit (Tín dụng tư nhân) - lĩnh vực từng bị gò ép mờ nhạt - đã bùng nổ quy mô thành thị trường hơn 1.7 nghìn tỷ USD. Dòng tiền ngầm không bị ràng buộc bởi các thiết chế Basel 3 của ngân hàng, chảy vào huyết mạch của doanh nghiệp, cứu rỗi họ khỏi mức lãi suất ngân hàng thiêu đốt.</p>`
    },
    {
        id: 6,
        slug: "ai-dinh-hinh-nghe-thuat",
        title: "Khi Trí Tuệ Nhân Tạo Trở Thành Họa Sĩ Của Kỷ Nguyên Mới",
        excerpt: "Lằn ranh giữa tài năng bẩm sinh chân chính và sự nhào nặn của phần mềm đang ngày càng nhạt nhòa, đẩy giới nghệ thuật đại chúng đến một ngã rẽ sống còn.",
        category: "tech",
        categoryLabel: "Tech & Art",
        author: "Vũ Hoàng Long",
        authorRole: "Biên tập viên Công Nghệ",
        authorAvatar: imgBase + "avatar-long.jpg",
        date: "2026-04-18",
        readTime: 4,
        views: 21000,
        image: imgBase + "mona.jpg",
        featured: false,
        body: `<p>Sáng tạo từng được vinh danh là thánh địa cuối cùng của tư duy con người, thứ mà máy móc khô khan không bao giờ chạm tay tới. Nhưng kể từ ngày bức tranh "Théâtre D'opéra Spatial" do công cụ Midjourney tạo ra đoạt giải quán quân tại một triển lãm tầm cỡ tiểu bang, thánh địa ấy đã chính thức sụp đổ dưới sức nặng của hàng tỷ dòng lệnh neural network.</p>
        <p>Giờ đây, không phải là họa tiết chắp vá ngô nghê, AI tạo sinh thế hệ thứ 5 hiểu thấu triệt cấu trúc ánh sáng theo chuẩn nhiếp ảnh rọi chiếu, phối màu palette theo trường phái Phục Hưng hoàn hảo vẹn toàn và vẽ những cánh rừng chân thực đến kinh ngạc. Giới họa sĩ minh họa thương mại hiện đang phải chịu áp lực đào thải tàn khốc khi đối tác của họ thà trả 20 USD hằng tháng cho một con bot thay vì vài trăm USD cho những đợt revise liên tục của một freelance artist bằng xương bằng thịt.</p>`
    },
    {
        id: 7,
        slug: "dao-duc-thuc-dan-hoa-sao-hoa",
        title: "Ai Thật Sự Trở Thành Công Dân Trên Hành Tinh Đỏ?",
        excerpt: "Luật pháp quốc tế chưa hề có phác đồ cho một kịch bản khi con người tự phong mình làm chủ nhân của Sao Hỏa.",
        category: "science",
        categoryLabel: "Vũ Trụ Không Gian",
        author: "TS. Nguyễn Lan Anh",
        authorRole: "Trưởng Nhóm KH Vũ Trụ",
        authorAvatar: imgBase + "avatar-yen.jpg",
        date: "2026-04-17",
        readTime: 9,
        views: 19800,
        image: imgBase + "mars.jpg",
        featured: false,
        body: `<p>Trong khi SpaceX liên tục tiến hành bắt ống đẩy thành công và lộ trình phóng tàu Starship không người lái đã chốt lịch, những gót chân Achilles của tầm nhìn vĩ mô này không nằm ở giới hạn luyện kim vũ trụ. Lỗ hổng trí mạng nằm ở luật lệ xã hội và đạo đức sinh học. Chúng ta sắp sửa ném cơ thể mảnh mai của giống loài lên một chân trời băng giá, đầy bức xạ gamma mà không hề có thỏa thuận bảo vệ nhân quyền nào đủ tốt.</p>
        <p>Trong "Hiệp ước Ngoại Không Gian" của thế kỷ 20, mọi không gian ngoài Trái Đất thuộc sở hữu chung của nhân loại. Nhưng một khi những tập đoàn khai mỏ thiên thạch dốc hàng chục tỷ đô la thiết lập trạm định cư trên Sao Hỏa, liệu họ có ngoan ngoãn chia sẻ tài nguyên? Điều gì đảm bảo môi trường quản trị công bằng cho hàng ngàn người lao động nhập cư đa hành tinh, nơi mà việc cắt dưỡng khí cũng đồng nghĩa với cái chết và quyền tự do có thể bị thâu tóm bởi một giám đốc trạm vũ trụ kiêu ngạo?</p>`
    },
    {
        id: 8,
        slug: "quyen-rieng-tu-hau-cookie",
        title: "Ảo Tưởng Về Quyền Riêng Tư Trong Kỷ Nguyên Trình Duyệt Hậu-Cookie",
        excerpt: "Khi Google Chrome tuyên bố khai tử cookie theo dõi bên thứ ba, chúng ta tưởng rằng mình đã an toàn. Sự thật thảm khốc hơn nhiều.",
        category: "tech",
        categoryLabel: "An Ninh Mạng",
        author: "Lê Minh Đạt",
        authorRole: "Phóng viên Điều tra",
        authorAvatar: imgBase + "avatar-dat.jpg",
        date: "2026-04-16",
        readTime: 7,
        views: 16700,
        image: imgBase + "cookie.jpg",
        featured: false,
        body: `<p>Lời hứa hẹn về một không gian web tư mật, sạch bóng ma theo dõi là mồi nhử hấp dẫn nhất của các gã khổng lồ công nghệ trong năm qua. Tuy nhiên, thay vì từ bỏ mỏ vàng dữ liệu khổng lồ, họ chỉ đơn giản là chuyển dịch hành vi sang một hầm ngầm tinh vi hơn nhiều với thuật toán "Browser Fingerprinting".</p>
        <p>Khi bạn nhấp chuột đọc đoạn văn này, mã nguồn ngầm trong website không cần đặt file text cookie rườm rà. Nó chỉ cần ghi nhận tỷ lệ pixel màn hình, bộ font bạn đang dùng, card đồ họa của chiếc điện thoại, cộng dồn thành một "dấu vân tay phần cứng" độc nhất. Kết quả là các nhà phân phối quảng cáo biết chính xác bạn là ai với xác suất sai sót chỉ 0.1%, mà không cần xin phép.</p>`
    },
    {
        id: 9,
        slug: "kien-truc-bet-tong-phuc-hung",
        title: "Bê Tông Trần Trụi Tái Chiếm Quy Hoạch Đô Thị",
        excerpt: "Phong cách thô bạo (Brutalism) của thập niên 70 từng là biểu tượng của các tòa nhà nhàm chán nay lại sống dậy như một sự khẳng định cái tôi kiến trúc.",
        category: "culture",
        categoryLabel: "Phê Bình Layout",
        author: "Trương Hải Yến",
        authorRole: "Bút ký Văn hóa",
        authorAvatar: imgBase + "avatar-yen.jpg",
        date: "2026-04-15",
        readTime: 5,
        views: 9800,
        image: imgBase + "brutalism.jpg",
        featured: false,
        body: `<p>Mảng bê tông màu xám lạnh, mảng tường nguyên khối thô thiển bám rêu, không có kính ốp hào nhoáng vây quanh. Phong cách thô bạo (Brutalism) luôn gây ra hai thái cực cảm xúc: hoặc ngưỡng mộ mãnh liệt sự vĩ cuồng, hoặc kinh tởm sự tù túng. Nhưng ngày nay, tại những thành phố siêu giàu như Seoul hay Tokyo, bê tông được đúc khối đang là mốt.</p>
        <p>Bao trùm là lớp áo choàng mộc mạc không tô trát, nhưng bên trong là sự trau chuốt tuyệt đối của thẩm mỹ Wabi-Sabi tinh tế. Rõ ràng, thế hệ cư dân đô thị đang phản ứng ngược tột độ với những lớp tường kính bóng loáng đồng phục, họ đi tìm kiếm đặc trưng thị giác tĩnh lặng mạnh mẽ, thứ mang lại cảm giác vĩnh cửu như một pháo đài bình yên giữa lòng phố thị xô bồ, loạn nhịp.</p>`
    },
    {
        id: 10,
        slug: "chuyen-doi-nang-luong-tai-tao",
        title: "Dòng Chuyển Dịch Lịch Sử Trong Cuộc Chiến Năng Lượng Tái Tạo",
        excerpt: "Giã từ kỷ nguyên cacbon không hề trải đầy hoa hồng, đây là cuộc chạy đua ráo riết về khả năng lưu trữ trữ lượng mạng lưới quốc gia.",
        category: "politics",
        categoryLabel: "Môi Trường Toàn Cầu",
        author: "Trần Minh Khoa",
        authorRole: "Phóng viên Ngoại giao",
        authorAvatar: imgBase + "avatar-khoa.jpg",
        date: "2026-04-14",
        readTime: 8,
        views: 14200,
        image: imgBase + "geneva.jpg",
        featured: false,
        body: `<p>Số liệu từ Cơ quan Năng lượng Quốc tế (IEA) cho thấu hiểu một bức tranh vừa đáng mừng vừa bế tắc. Trung Quốc đang đưa các cánh đồng năng lượng gió và mảng pin quang năng lên thảo nguyên với quy mô bằng toàn bộ điện lực Châu Âu. Tỷ trọng sản xuất điện tái tạo đã áp đảo điện than.</p>
        <p>Thế giới có điện sạch, nhưng nghịch lý ở chỗ chúng ta không thể "trữ" nó hiệu quả. Ngay khi mặt trời lặn đi, toàn bộ gánh nặng lưới điện hụt hơi lập tức phải đẩy lùi về cho nhiệt điện truyền thống bù đắp. Cuộc chiến thực sự trong thập kỷ tới không nằm ở việc ai có nhà máy điện xanh to hơn, mà là ai phát minh ra tổ hợp tinh thể pin (Battery Farm) dung trữ điện đủ lớn và không xả rác thải hóa chất gây ô nhiễm lòng đất về tương lai sau này.</p>`
    }
];

// Categories config for icons and labels
const Categories = {
    politics: { label: "Thời Sự Vĩ Mô", icon: "public", color: "#1565c0" },
    tech: { label: "Khoa Học Số", icon: "memory", color: "#7b1fa2" },
    culture: { label: "Văn Hóa - Nghệ Thuật", icon: "palette", color: "#c62828" },
    science: { label: "Thư Viện Khoa Học", icon: "biotech", color: "#00695c" },
    finance: { label: "Phố Wall Nhịp Đập", icon: "trending_up", color: "#e65100" }
};

// --- Helpers ---
function getArticleBySlug(slug) { return ArticlesDB.find(a => a.slug === slug); }
function getArticleById(id) { return ArticlesDB.find(a => a.id === id); }
function getFeaturedArticles() { return ArticlesDB.filter(a => a.featured); }
function getArticlesByCategory(cat) { return cat === 'all' ? ArticlesDB : ArticlesDB.filter(a => a.category === cat); }
function getRelatedArticles(id, limit = 3) { const a = getArticleById(id); if (!a) return []; return ArticlesDB.filter(x => x.id !== id && x.category === a.category).slice(0, limit); }
function getLatestArticles(limit = 6) { return [...ArticlesDB].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, limit); }
function formatDate(dateStr) { return new Date(dateStr).toLocaleDateString('vi-VN', { day: 'numeric', month: 'long', year: 'numeric' }); }
function formatViews(n) { return n >= 1000 ? (n / 1000).toFixed(1) + 'K' : n; }
function timeAgo(dateStr) {
    const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
    if (diff < 3600) return 'Vừa qua';
    if (diff < 86400) return Math.floor(diff / 3600) + ' tiếng trước';
    if (diff < 604800) return Math.floor(diff / 86400) + ' ngày qua';
    return formatDate(dateStr);
}