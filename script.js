/* ==========================================================
   CHÚC MỪNG SINH NHẬT - KHÔNG GIAN "MẠN"
   Tương tác mượt mà trên Mobile & Trải nghiệm 6 Thử thách
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // --------------------------------------------------------
    // 1. DANH SÁCH ẢNH & LỜI ĐỀ TỪ KỶ NIỆM (23 ẢNH)
    // --------------------------------------------------------
    const photoList = [
        { id: 1, src: "images/p1.jpg", caption: "Tuổi học trò thiệt là dễ thương vì có thh đồng hành với tht." },
        { id: 2, src: "images/p2.jpg", caption: "Mỗi tấm hình là một mảnh ghép ký ức vô giá mà iu luôn nâng niu cất giữ." },
        { id: 3, src: "images/p3.jpg", caption: "Nụ cười rạng rỡ của bé mỗi khi bên cạnh iu luôn là liều thuốc chữa lành hiệu quả ó." },
        { id: 4, src: "images/p4.jpg", caption: "Cảm ơn thh đã khiến từng con đường ở Cần Thơ đều trở thành kỷ niệm đẹp của tht." },
        { id: 5, src: "images/p5.jpg", caption: "Không cần quá nhiều quá cáp, chỉ cần thh ở bên cạnh là tht đã thấy mình có một ngày trọn vẹn ròii." },
        { id: 6, src: "images/p6.jpg", caption: "Bên thh, iu luôn được là chính mình – less perfect, but much happier." },
        { id: 7, src: "images/p7.jpg", caption: "Cảm ơn bé iu vì đã luôn kiên nhẫn, dịu dàng và chở che cho iu iu từng bước một." },
        { id: 8, src: "images/p8.jpg", caption: "Hạnh phúc đôi khi chỉ đơn giản là được cùng nhau làm những điều bình dị ở những nơi quen thuộc." },
        { id: 9, src: "images/p9.jpg", caption: "Thích nhất cái cách anh iu cười hong thấy mặt trời mỗi khi nắm tay đi với iu iu." },
        { id: 10, src: "images/p10.jpg", caption: "Cảm ơn anh iu đã luôn là chỗ dựa vững chắc cho em iu mỗi khi em cần." },
        { id: 11, src: "images/p11.jpg", caption: "Không phải lần đầu tiên đi với nhau nhưng luôn là trải nghiệm đầu tiên khi ở bên thh." },
        { id: 12, src: "images/p12.jpg", caption: "Những tấm hình daily thh không ngại share, iu đều thấy dễ thương moa moa." },
        { id: 13, src: "images/p13.jpg", caption: "Cảm ơn bé đã chở iu đi qua những ngày nắng đẹp rực rỡ lẫn những cơn mưa rào bất chợt." },
        { id: 14, src: "images/p14.jpg", caption: "Cảm ơn Thanh Hưng vì đã luôn ở đó, lắng nghe và đồng hành với Thảo Trinh ngay những lúc em không nói nên lời." },
        { id: 15, src: "images/p15.jpg", caption: "Thích được anh iu hun hun lắm lunnn!!!" },
        { id: 16, src: "images/p16.jpg", caption: "Mỗi ngày trôi qua lại thấy yêu thương bé iu thim nhìu nhìu nũa." },
        { id: 17, src: "images/p17.jpg", caption: "Khoảnh khắc ấy, em biết mình đã tìm thấy một bầu trời chmúa hmề của riêng mình." },
        { id: 18, src: "images/p18.jpg", caption: "Thh chính là điều may mắn và dịu dàng nhất mà zũ chụ đã ưu ái ban tặng cho tht ó." },
        { id: 19, src: "images/p19.jpg", caption: "Nơi ghi dấu nụ cười tỏa nắng của người em iu thương nhất." },
        { id: 20, src: "images/p20.jpg", caption: "Chỉ cần nhìn thấy nụ cười của bé iu là mọi âu lo trong ngày của iu iu đều tan biến hết." },
        { id: 21, src: "images/p21.jpg", caption: "Mỗi chuyến đi xa đối với iu đều là một trang mới trong cuốn nhật ký tình yêu của hai đứa mình nè." },
        { id: 22, src: "images/p22.jpg", caption: "Anh iu của em thiệt là ngầu quá điiiii!" },
        { id: 23, src: "images/p23.jpg", caption: "Dù thời gian có trôi nhanh thế nào, tình cảm dành cho thh sẽ luôn vẹn nguyên như ngày đầu. Chúc mừng sinh nhật tình yêu to bự của em! Yêu bé nhìu hơn zũ chụ này lun đó nhe hehe ♡" }
    ];


    // --------------------------------------------------------
    // 2. LỜI ĐỘNG VIÊN & CỔ VŨ DỊU DÀNG (CHEERING MESSAGES)
    // --------------------------------------------------------
    const sweetCheerMessages = [
        "Cố lên cục cưng ơi, iu luôn ở bên cạnh cổ vũ bé nè! ♡",
        "You're doing amazing, my love! 💕",
        "Giỏi quá zay ta! Đúng là người yêu của em có khác 🥰",
        "Một xíu nữa thoii là tới kho báu roi ne, chờ iu nho! 🌟",
        "Dù ngoài kia có mệt mỏi thế nào, ở đây luôn có iu thương bé nhứt 🌸",
        "Cứ bình tĩnh nha bé iu, kho báu ngọt ngào nhất đang chờ bé đó nha!",
        "Gửi tặng anh iu một cái ôm thiệt ấm áp qua màn hình nè! 🤗",
        "Mỗi bước đi của bé đều làm trái tim iu rung rinh đó nha! 💓",
        "You are the brightest star in my universe! ✨",
        "Cục cưng đỉnh chóp luôn á! Tiếp tục tiến lên nè! 🎉"
    ];

    const cheerToast = document.getElementById("cheer-toast");
    const cheerText = document.getElementById("cheer-text");
    let cheerTimeout = null;

    function showCheer(customMessage = null, duration = 3200) {
        if (!cheerToast || !cheerText) return;
        const msg = customMessage || sweetCheerMessages[Math.floor(Math.random() * sweetCheerMessages.length)];
        cheerText.textContent = msg;
        cheerToast.hidden = false;
        // Trigger animation
        requestAnimationFrame(() => {
            cheerToast.classList.add("visible");
        });

        if (cheerTimeout) clearTimeout(cheerTimeout);
        cheerTimeout = setTimeout(() => {
            cheerToast.classList.remove("visible");
            setTimeout(() => { cheerToast.hidden = true; }, 400);
        }, duration);
    }

    // --------------------------------------------------------
    // 3. DANH SÁCH BÀI HÁT & ĐIỀU KHIỂN ĐĨA HÁT (PLAYLIST)
    // --------------------------------------------------------
    const playlist = [
        { title: "Nơi này có anh iu ♡", src: "music/1.mp3" },
        { title: "Mặt trời của em iu ♡", src: "music/2.mp3" },
        { title: "Mỗi ngày iu iu ♡", src: "music/3.mp3" },
        { title: "Thanh Hưng iu Thảo Trinh ♡", src: "music/4.mp3" },
        { title: "Thh là siu nhưn ♡", src: "music/5.mp3" },
        { title: "iu là bà chã hơm ♡", src: "music/6.mp3" },
        { title: "Thinking 'bout you ♡", src: "music/7.mp3" },
        { title: "'Cause I love u ♡", src: "music/8.mp3" }
    ];

    let currentTrackIdx = 0;
    let isMusicPlaying = false;

    const bgMusic = document.getElementById("bg-music");
    const musicBtn = document.getElementById("floating-music-btn");
    const musicDisc = document.getElementById("music-disc");
    const soundWave = document.getElementById("sound-wave");
    const musicTrackTitle = document.getElementById("music-track-title");

    function updateTrackUI() {
        const track = playlist[currentTrackIdx];
        if (musicTrackTitle && track) {
            musicTrackTitle.textContent = track.title;
        }
        if (musicDisc) {
            musicDisc.classList.add("playing");
            // Hiệu ứng nảy nhẹ của đĩa khi chuyển bài
            musicDisc.classList.remove("pop");
            void musicDisc.offsetWidth; // kích hoạt lại animation
            musicDisc.classList.add("pop");
        }
        if (soundWave) {
            soundWave.classList.add("active");
        }
    }

    function playTrack(index, showToast = true) {
        if (!bgMusic || playlist.length === 0) return;
        currentTrackIdx = (index + playlist.length) % playlist.length;
        const track = playlist[currentTrackIdx];

        bgMusic.src = track.src;
        try {
            bgMusic.currentTime = 0;
        } catch (e) { }

        bgMusic.play().then(() => {
            isMusicPlaying = true;
            updateTrackUI();
            if (showToast) {
                showCheer(`🎵 Đang phát: ${track.title}`, 2600);
            }
        }).catch((err) => {
            console.log("Audio play prevented or file not found:", err);
            updateTrackUI();
        });
    }

    // TÍNH NĂNG ĐĨA HÁT: Mỗi khi bấm vào đĩa hát sẽ ĐỔI QUA BÀI KẾ TIẾP!
    function nextTrack() {
        if (playlist.length <= 1) {
            // Nếu chỉ có 1 bài: phát lại bài từ đầu kèm thông báo dễ thương
            if (bgMusic) {
                try {
                    bgMusic.currentTime = 0;
                } catch (e) { }
                bgMusic.play().catch(() => { });
                updateTrackUI();
            }
            showCheer(`🎵 Đang phát: ${playlist[0].title}`, 2200);
        } else {
            // Chuyển sang bài kế tiếp trong danh sách
            const nextIdx = (currentTrackIdx + 1) % playlist.length;
            playTrack(nextIdx, true);
        }
    }

    if (musicBtn) {
        musicBtn.addEventListener("click", nextTrack);
    }

    // Tự động chuyển sang bài tiếp theo khi bài hiện tại hát xong
    if (bgMusic) {
        bgMusic.addEventListener("ended", () => {
            const nextIdx = (currentTrackIdx + 1) % playlist.length;
            playTrack(nextIdx, true);
        });

        // Xử lý an toàn nếu một bài hát chưa có file trên máy
        bgMusic.addEventListener("error", () => {
            console.warn("Lỗi tải tệp âm thanh:", bgMusic.src);
            if (playlist.length > 1 && currentTrackIdx !== 0) {
                showCheer("Chưa tìm thấy tệp bài hát mới, đang phát bài quen thuộc nha ♡", 2800);
                playTrack(0, false);
            }
        });
    }

    // Tự động kích hoạt nhạc khi có tương tác chạm đầu tiên trên màn hình
    function tryAutoplayOnce() {
        if (!isMusicPlaying && bgMusic) {
            playTrack(currentTrackIdx, false);
        }
        document.removeEventListener("touchstart", tryAutoplayOnce);
        document.removeEventListener("click", tryAutoplayOnce);
    }
    document.addEventListener("touchstart", tryAutoplayOnce, { passive: true });
    document.addEventListener("click", tryAutoplayOnce, { passive: true });

    // --------------------------------------------------------
    // 4. HIỆU ỨNG VŨ TRỤ BỤI SAO & CONFETTI CANVAS
    // --------------------------------------------------------
    const starCanvas = document.getElementById("star-canvas");
    if (starCanvas) {
        const ctx = starCanvas.getContext("2d");
        let stars = [];
        function resizeStarCanvas() {
            starCanvas.width = window.innerWidth;
            starCanvas.height = window.innerHeight;
            initStars();
        }
        function initStars() {
            stars = [];
            const count = Math.min(60, Math.floor(window.innerWidth / 10));
            for (let i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * starCanvas.width,
                    y: Math.random() * starCanvas.height,
                    radius: Math.random() * 1.5 + 0.5,
                    alpha: Math.random(),
                    speed: Math.random() * 0.02 + 0.005,
                    direction: Math.random() > 0.5 ? 1 : -1
                });
            }
        }
        function drawStars() {
            ctx.clearRect(0, 0, starCanvas.width, starCanvas.height);
            stars.forEach(star => {
                star.alpha += star.speed * star.direction;
                if (star.alpha >= 1) { star.alpha = 1; star.direction = -1; }
                if (star.alpha <= 0.1) { star.alpha = 0.1; star.direction = 1; }
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.fill();
            });
            requestAnimationFrame(drawStars);
        }
        window.addEventListener("resize", resizeStarCanvas);
        resizeStarCanvas();
        drawStars();
    }

    // Hiệu ứng pháo giấy Confetti lãng mạn
    const confettiCanvas = document.getElementById("confetti-canvas");
    let confettiParticles = [];
    let confettiAnimId = null;

    function triggerConfettiBurst(duration = 2500, particleCount = 70) {
        if (!confettiCanvas) return;
        const ctx = confettiCanvas.getContext("2d");
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;

        const colors = ["#ff6584", "#ff4b72", "#ffd875", "#f8b84e", "#a367dc", "#ffbccc", "#ffffff"];
        for (let i = 0; i < particleCount; i++) {
            confettiParticles.push({
                x: window.innerWidth / 2 + (Math.random() - 0.5) * 120,
                y: window.innerHeight / 2 + (Math.random() - 0.5) * 80,
                vx: (Math.random() - 0.5) * 10,
                vy: (Math.random() - 1.2) * 10 - 2,
                size: Math.random() * 8 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
                rotSpeed: (Math.random() - 0.5) * 10,
                isHeart: Math.random() > 0.6,
                alpha: 1
            });
        }

        if (!confettiAnimId) {
            function updateConfetti() {
                ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
                for (let i = confettiParticles.length - 1; i >= 0; i--) {
                    const p = confettiParticles[i];
                    p.x += p.vx;
                    p.y += p.vy;
                    p.vy += 0.22; // trọng lực
                    p.rotation += p.rotSpeed;
                    p.alpha -= 0.008;

                    if (p.alpha <= 0 || p.y > confettiCanvas.height) {
                        confettiParticles.splice(i, 1);
                        continue;
                    }

                    ctx.save();
                    ctx.translate(p.x, p.y);
                    ctx.rotate((p.rotation * Math.PI) / 180);
                    ctx.globalAlpha = p.alpha;
                    ctx.fillStyle = p.color;

                    if (p.isHeart) {
                        ctx.font = `${p.size * 1.5}px serif`;
                        ctx.fillText("♥", -p.size / 2, p.size / 2);
                    } else {
                        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
                    }
                    ctx.restore();
                }

                if (confettiParticles.length > 0) {
                    confettiAnimId = requestAnimationFrame(updateConfetti);
                } else {
                    confettiAnimId = null;
                    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
                }
            }
            confettiAnimId = requestAnimationFrame(updateConfetti);
        }
    }

    // --------------------------------------------------------
    // 5. QUẢN LÝ CÁC GIAI ĐOẠN / SCREEN CONTROLLER
    // --------------------------------------------------------
    let currentStage = 0; // 0: Intro, 1..6: Challenges, 7: Treasure
    const stageInfo = [
        { name: "Khởi hành", tag: "Bắt đầu" },
        { name: "Cánh cửa màu hồng", tag: "Thử thách 1 / 6" },
        { name: "Thu thập yêu thương", tag: "Thử thách 2 / 6" },
        { name: "Thấu hiểu trái tim", tag: "Thử thách 3 / 6" },
        { name: "Mở khoá tình yêu", tag: "Thử thách 4 / 6" },
        { name: "Mảnh ghép hoàn hảo", tag: "Thử thách 5 / 6" },
        { name: "Bánh kem ngọt ngào", tag: "Thử thách 6 / 6" },
        { name: "Kho báu sinh nhật", tag: "Hoàn thành ♡" }
    ];

    const journeyHeader = document.getElementById("journey-header");
    const stageTag = document.getElementById("stage-tag");
    const stageName = document.getElementById("stage-name");
    const progressBarFill = document.getElementById("progress-bar-fill");
    const milestones = document.querySelectorAll(".milestone");

    const screenIntro = document.getElementById("screen-intro");
    const challengeScreens = [
        document.getElementById("screen-challenge-1"),
        document.getElementById("screen-challenge-2"),
        document.getElementById("screen-challenge-3"),
        document.getElementById("screen-challenge-4"),
        document.getElementById("screen-challenge-5"),
        document.getElementById("screen-challenge-6")
    ];
    const screenTreasure = document.getElementById("screen-treasure");

    function goToStage(stageNum) {
        currentStage = stageNum;

        // Ẩn tất cả các màn hình
        screenIntro.hidden = true;
        challengeScreens.forEach(sc => { if (sc) sc.hidden = true; });
        screenTreasure.hidden = true;

        if (stageNum === 0) {
            // Màn hình bắt đầu
            screenIntro.hidden = false;
            journeyHeader.hidden = true;
            return;
        }

        // Cập nhật thanh tiến trình
        journeyHeader.hidden = false;
        const info = stageInfo[stageNum] || stageInfo[1];
        stageTag.textContent = info.tag;
        stageName.textContent = info.name;

        // Độ đầy thanh tiến trình
        const percentage = Math.min(100, Math.round(((stageNum - 1) / 5) * 100));
        progressBarFill.style.width = `${Math.max(16.6, percentage)}%`;

        // Cập nhật các mốc
        milestones.forEach((m, idx) => {
            const step = idx + 1;
            m.classList.remove("active", "completed");
            if (step < stageNum) {
                m.classList.add("completed");
                m.innerHTML = "✓";
            } else if (step === stageNum) {
                m.classList.add("active");
                m.innerHTML = ["✨", "⭐", "💌", "🔑", "🧩", "🎂"][idx];
            } else {
                m.innerHTML = ["✨", "⭐", "💌", "🔑", "🧩", "🎂"][idx];
            }
        });

        if (stageNum >= 1 && stageNum <= 6) {
            const targetScreen = challengeScreens[stageNum - 1];
            if (targetScreen) targetScreen.hidden = false;
            initChallenge(stageNum);
        } else if (stageNum === 7) {
            // Kho báu
            journeyHeader.hidden = true;
            screenTreasure.hidden = false;
            initTreasure();
        }

        // Tự động cuộn lên đầu màn hình nhẹ nhàng
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Nút Bắt đầu cuộc phiêu lưu
    const btnStart = document.getElementById("btn-start");
    if (btnStart) {
        btnStart.addEventListener("click", () => {
            // Bắt đầu phát nhạc nếu chưa phát
            if (!isMusicPlaying) {
                playTrack(currentTrackIdx, false);
            }
            showCheer("Cuộc phiêu lưu bắt đầu rồi nè! Chúc cục cưng vượt ải thành công nhen ✨");
            goToStage(1);
        });
    }

    // --------------------------------------------------------
    // 6. LOGIC TỪNG THỬ THÁCH (CHALLENGES 1 -> 6)
    // --------------------------------------------------------
    function initChallenge(stageNum) {
        switch (stageNum) {
            case 1:
                setupChallenge1();
                break;
            case 2:
                setupChallenge2();
                break;
            case 3:
                setupChallenge3();
                break;
            case 4:
                setupChallenge4();
                break;
            case 5:
                setupChallenge5();
                break;
            case 6:
                setupChallenge6();
                break;
        }
    }

    // --- THỬ THÁCH 1: CÂU ĐỐ CỬA NGÕ ---
    function setupChallenge1() {
        const options = document.querySelectorAll("#c1-options .option-btn");
        const feedback = document.getElementById("c1-feedback");
        feedback.hidden = true;

        options.forEach(btn => {
            btn.onclick = () => {
                const isCorrect = btn.dataset.correct === "true";
                if (isCorrect) {
                    btn.classList.add("correct-pick");
                    feedback.className = "feedback-msg success";
                    feedback.textContent = "Chính xác luôn! Bé iu chính là món quà kỳ diệu nhất mà vũ trụ đem tới ó ♡";
                    feedback.hidden = false;
                    triggerConfettiBurst(1500, 35);
                    showCheer("Xuất sắc quá cục cưng oiii! Trạm tiếp theo đang mở ra nè 🥰");
                    setTimeout(() => goToStage(2), 1600);
                } else {
                    btn.classList.add("wrong-pick");
                    feedback.className = "feedback-msg error";
                    feedback.textContent = "Chưa phải đâu bé ơi, chọn lại câu trả lời ngọt ngào hơn đi ♡";
                    feedback.hidden = false;
                    showCheer("Hong sao đâu nè, iu tin bé chọn đúng mà! Thử lại nho thuông thuông 💕");
                    setTimeout(() => btn.classList.remove("wrong-pick"), 800);
                }
            };
        });
    }

    // --- THỬ THÁCH 2: KÉO THẢ GOM 3 NGÔI SAO ---
    function setupChallenge2() {
        const starItems = document.querySelectorAll(".star-item");
        const wishJar = document.getElementById("wish-jar-target");
        const countDisplay = document.getElementById("stars-collected-count");
        const jarStarsContainer = document.getElementById("jar-collected-stars");
        const feedback = document.getElementById("c2-feedback");
        let collectedCount = 0;

        feedback.hidden = true;
        countDisplay.textContent = "0";
        jarStarsContainer.innerHTML = "";
        starItems.forEach(item => {
            item.classList.remove("collected");
            item.style.display = "flex";
        });

        function collectStar(starEl) {
            if (starEl.classList.contains("collected")) return;
            starEl.classList.add("collected");
            starEl.style.display = "none";
            collectedCount++;
            countDisplay.textContent = collectedCount;

            // Hiệu ứng ngôi sao nhỏ rơi vào lọ thủy tinh
            const miniStar = document.createElement("span");
            miniStar.textContent = "⭐";
            miniStar.style.fontSize = "16px";
            miniStar.style.margin = "2px";
            jarStarsContainer.appendChild(miniStar);

            triggerConfettiBurst(800, 15);

            if (collectedCount < 3) {
                showCheer(`Tuyệt vời! Đã thu thập được ${collectedCount}/3 điều ước rồi nè ✨`);
            } else {
                wishJar.classList.add("drag-over");
                feedback.className = "feedback-msg success";
                feedback.textContent = "Cả 3 ngôi sao đã được gom trọn vào bình ước nguyện! ✨";
                feedback.hidden = false;
                triggerConfettiBurst(2000, 50);
                showCheer("You are doing great, my love! 3 điều ước ngọt ngào đã được lưu giữ trong lọ thủy tinh roii nha! 💕");
                setTimeout(() => goToStage(3), 1800);
            }
        }

        // Hỗ trợ cả Touch, Pointer Drag & Tap Click
        starItems.forEach(star => {
            // Nhấn chạm để thu thập ngay (cực kỳ tiện trên mobile)
            star.addEventListener("click", () => collectStar(star));

            // Kéo thả cảm ứng trên điện thoại (Pointer Events)
            let isDragging = false;
            let startX, startY;

            star.addEventListener("pointerdown", (e) => {
                isDragging = true;
                star.setPointerCapture(e.pointerId);
                star.classList.add("dragging");
                startX = e.clientX;
                startY = e.clientY;
            });

            star.addEventListener("pointermove", (e) => {
                if (!isDragging) return;
                const dx = e.clientX - startX;
                const dy = e.clientY - startY;
                star.style.transform = `translate(${dx}px, ${dy}px) scale(1.06)`;

                // Kiểm tra xem có đang rê qua hũ không
                const jarRect = wishJar.getBoundingClientRect();
                if (e.clientX >= jarRect.left && e.clientX <= jarRect.right &&
                    e.clientY >= jarRect.top && e.clientY <= jarRect.bottom) {
                    wishJar.classList.add("drag-over");
                } else {
                    wishJar.classList.remove("drag-over");
                }
            });

            function endDrag(e) {
                if (!isDragging) return;
                isDragging = false;
                star.classList.remove("dragging");
                star.style.transform = "";

                const jarRect = wishJar.getBoundingClientRect();
                if (e.clientX >= jarRect.left && e.clientX <= jarRect.right &&
                    e.clientY >= jarRect.top && e.clientY <= jarRect.bottom) {
                    collectStar(star);
                }
                wishJar.classList.remove("drag-over");
            }

            star.addEventListener("pointerup", endDrag);
            star.addEventListener("pointercancel", endDrag);
        });
    }

    // --- THỬ THÁCH 3: CÂU ĐỐ MẬT MÃ CẢM XÚC ---
    function setupChallenge3() {
        const options = document.querySelectorAll("#c3-options .option-btn");
        const feedback = document.getElementById("c3-feedback");
        feedback.hidden = true;

        options.forEach(btn => {
            btn.onclick = () => {
                const isCorrect = btn.dataset.correct === "true";
                if (isCorrect) {
                    btn.classList.add("correct-pick");
                    feedback.className = "feedback-msg success";
                    feedback.textContent = "Đúng luông! Bé iu luôn xứng đáng nhận được mọi điều dịu dàng nhất ♡";
                    feedback.hidden = false;
                    triggerConfettiBurst(1500, 35);
                    showCheer("Đúng là người yêu em hiểu em nhất trên đời! Yêu ghê áaaaaaa 🥰");
                    setTimeout(() => goToStage(4), 1600);
                } else {
                    btn.classList.add("wrong-pick");
                    feedback.className = "feedback-msg error";
                    feedback.textContent = "Điều này cũng đúng, nhưng em muốn làm nhiều hơn nữa cho anh ó ♡";
                    feedback.hidden = false;
                    showCheer("Bé iu thử lại nha, iu còn muốn cưng chiều bé hơn nữa ó! 💕");
                    setTimeout(() => btn.classList.remove("wrong-pick"), 800);
                }
            };
        });
    }

    // --- THỬ THÁCH 4: CHÌA KHÓA VÀ Ổ KHÓA TRÁI TIM ---
    function setupChallenge4() {
        const key = document.getElementById("magic-key");
        const lockTarget = document.getElementById("heart-lock-target");
        const lockLabel = document.getElementById("lock-label");
        const feedback = document.getElementById("c4-feedback");
        let unlocked = false;

        feedback.hidden = true;
        lockTarget.classList.remove("unlocked", "drag-over");
        lockLabel.textContent = "Khoá Trái Tim";
        key.style.display = "flex";

        function unlockHeart() {
            if (unlocked) return;
            unlocked = true;
            lockTarget.classList.add("unlocked");
            lockLabel.textContent = "Đã Mở Khoá! 💖";
            key.style.display = "none";

            feedback.className = "feedback-msg success";
            feedback.textContent = "Trái tim của iu đã được bé mở khoá rồi nè! ♡";
            feedback.hidden = false;

            triggerConfettiBurst(2200, 60);
            showCheer("Õmg! You stole my heart! Bé mở khoá trái tim iu hay zay ♡");
            setTimeout(() => goToStage(5), 1800);
        }

        // Click để tra chìa tự động
        key.onclick = () => unlockHeart();

        // Kéo thả cảm ứng trên mobile
        let isDragging = false;
        let startX, startY;

        key.addEventListener("pointerdown", (e) => {
            if (unlocked) return;
            isDragging = true;
            key.setPointerCapture(e.pointerId);
            key.classList.add("dragging");
            startX = e.clientX;
            startY = e.clientY;
        });

        key.addEventListener("pointermove", (e) => {
            if (!isDragging) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            key.style.transform = `translate(${dx}px, ${dy}px) scale(1.1)`;

            const rect = lockTarget.getBoundingClientRect();
            if (e.clientX >= rect.left && e.clientX <= rect.right &&
                e.clientY >= rect.top && e.clientY <= rect.bottom) {
                lockTarget.classList.add("drag-over");
            } else {
                lockTarget.classList.remove("drag-over");
            }
        });

        function endKeyDrag(e) {
            if (!isDragging) return;
            isDragging = false;
            key.classList.remove("dragging");
            key.style.transform = "";

            const rect = lockTarget.getBoundingClientRect();
            if (e.clientX >= rect.left && e.clientX <= rect.right &&
                e.clientY >= rect.top && e.clientY <= rect.bottom) {
                unlockHeart();
            }
            lockTarget.classList.remove("drag-over");
        }

        key.addEventListener("pointerup", endKeyDrag);
        key.addEventListener("pointercancel", endKeyDrag);
    }

    // --- THỬ THÁCH 5: GHÉP MẢNH YÊU THƯƠNG ---
    function setupChallenge5() {
        const slots = document.querySelectorAll("#puzzle-slots .puzzle-slot");
        const chipsPool = document.getElementById("puzzle-chips-pool");
        const btnReset = document.getElementById("btn-reset-puzzle");
        const feedback = document.getElementById("c5-feedback");

        const targetWords = ["HAPPY", "BIRTHDAY", "MY", "LOVE"];
        let userSlots = [null, null, null, null];

        feedback.hidden = true;

        // Xáo trộn các từ
        const shuffledWords = [...targetWords].sort(() => Math.random() - 0.5);

        function renderChips() {
            chipsPool.innerHTML = "";
            shuffledWords.forEach((word, index) => {
                const chip = document.createElement("button");
                chip.className = "puzzle-chip";
                chip.textContent = word;
                chip.dataset.word = word;
                chip.dataset.chipIndex = index;

                // Kiểm tra xem từ này đã được dùng vào slot chưa
                if (userSlots.includes(word)) {
                    chip.classList.add("used");
                }

                chip.onclick = () => {
                    // Tìm slot trống đầu tiên
                    const emptyIndex = userSlots.findIndex(s => s === null);
                    if (emptyIndex !== -1) {
                        userSlots[emptyIndex] = word;
                        updateSlotsUI();
                        renderChips();
                        checkPuzzleCompletion();
                    }
                };

                chipsPool.appendChild(chip);
            });
        }

        function updateSlotsUI() {
            slots.forEach((slot, idx) => {
                const val = userSlots[idx];
                if (val) {
                    slot.textContent = val;
                    slot.classList.add("filled");
                    slot.onclick = () => {
                        // Chạm vào slot để gỡ từ ra
                        userSlots[idx] = null;
                        updateSlotsUI();
                        renderChips();
                    };
                } else {
                    slot.innerHTML = `<span class="slot-placeholder">${idx + 1}</span>`;
                    slot.classList.remove("filled");
                    slot.onclick = null;
                }
            });
        }

        function checkPuzzleCompletion() {
            if (userSlots.every(s => s !== null)) {
                const isCorrect = userSlots.every((s, i) => s === targetWords[i]);
                if (isCorrect) {
                    feedback.className = "feedback-msg success";
                    feedback.textContent = "Perfect! HAPPY BIRTHDAY MY LOVE ♡ thh là mảnh ghép trọn vẹn nhất của iu lun!";
                    feedback.hidden = false;
                    triggerConfettiBurst(2000, 50);
                    showCheer("Cục cưng giỏi quá trời lunnn! Chỉ còn 1 trạm nữa là tới kho báu rồi ó! 🌟");
                    setTimeout(() => goToStage(6), 1800);
                } else {
                    feedback.className = "feedback-msg error";
                    feedback.textContent = "Thứ tự chưa đúng nè, bấm 'Xếp lại' để thử lại nha cục cưng ♡";
                    feedback.hidden = false;
                    showCheer("Hong sao nè bé iu ơi, bấm nút 'Xếp lại' rồi thử lại nhen! 💕");
                }
            }
        }

        btnReset.onclick = () => {
            userSlots = [null, null, null, null];
            feedback.hidden = true;
            updateSlotsUI();
            renderChips();
        };

        userSlots = [null, null, null, null];
        updateSlotsUI();
        renderChips();
    }

    // --- THỬ THÁCH 6: THẮP NẾN SINH NHẬT VÀ GỬI ĐIỀU ƯỚC ---
    function setupChallenge6() {
        const cakeBox = document.getElementById("cake-interactive-box");
        const candleFlame = document.getElementById("candle-flame");
        const instruction = document.getElementById("candle-instruction");
        const successBox = document.getElementById("c6-success-box");
        const btnUnlock = document.getElementById("btn-unlock-treasure");
        let candleLit = false;

        candleFlame.classList.remove("lit");
        successBox.hidden = true;
        instruction.textContent = "👉 Chạm vào đèn cầy để thắp sáng 👈";

        function lightCandle() {
            if (candleLit) return;
            candleLit = true;
            candleFlame.classList.add("lit");
            instruction.textContent = "✨ Ngọn đèn đã toả sáng rực rỡ ✨";
            instruction.style.color = "#e07d00";

            triggerConfettiBurst(2000, 45);
            showCheer("Ước một điều ước sinh nhật thiệt đẹp nha người em thương! 🕯️💖");

            setTimeout(() => {
                successBox.hidden = false;
            }, 800);
        }

        cakeBox.onclick = lightCandle;

        btnUnlock.onclick = () => {
            triggerConfettiBurst(4000, 100);
            showCheer("Chúc mừng sinh nhật bé iu! Kho báu tình yêu đã mở ra dành riêng cho thh thoii đó! 🎁💖", 4500);
            goToStage(7);
        };
    }

    // --------------------------------------------------------
    // 7. KHO BÁU BÍ MẬT: ALBUM 23 ẢNH & LỜI CHÚC (TREASURE)
    // --------------------------------------------------------
    let currentSlideIdx = 0;
    let autoSlideTimer = null;
    let isAutoSlidePlaying = false;

    function initTreasure() {
        // Cập nhật số lượng ảnh hiển thị
        const totalCountSpan = document.getElementById("total-photos-count");
        if (totalCountSpan) totalCountSpan.textContent = photoList.length;

        setupSlideshow();
        setupGridView();
        setupWishBox();
        setupReplayButtons();

        // Pháo giấy chúc mừng
        triggerConfettiBurst(3500, 80);
    }

    // --- SLIDESHOW CONTROLS & TOUCH SWIPE ---
    function setupSlideshow() {
        const slideImg = document.getElementById("slide-img");
        const slideCounter = document.getElementById("slide-counter");
        const slideCaption = document.getElementById("slide-caption");
        const btnPrev = document.getElementById("btn-prev-slide");
        const btnNext = document.getElementById("btn-next-slide");
        const btnAuto = document.getElementById("btn-play-pause-slide");
        const tabSlideshow = document.getElementById("tab-slideshow");
        const tabGrid = document.getElementById("tab-grid");
        const slideshowView = document.getElementById("slideshow-view");
        const gridView = document.getElementById("grid-view");
        const slideshowCard = document.querySelector(".slideshow-card");

        function updateSlide(index) {
            currentSlideIdx = (index + photoList.length) % photoList.length;
            const photo = photoList[currentSlideIdx];

            // Hiệu ứng mờ dần khi chuyển ảnh
            slideImg.style.opacity = "0.4";
            setTimeout(() => {
                slideImg.src = photo.src;
                slideImg.onerror = () => {
                    // Nếu một ảnh nào đó không tải được, hiển thị ảnh kế tiếp
                    slideImg.src = "images/p1.jpg";
                };
                slideImg.style.opacity = "1";
            }, 150);

            slideCounter.textContent = `Hình ${currentSlideIdx + 1} / ${photoList.length}`;
            slideCaption.textContent = photo.caption;
        }

        btnPrev.onclick = () => {
            updateSlide(currentSlideIdx - 1);
        };

        btnNext.onclick = () => {
            updateSlide(currentSlideIdx + 1);
        };

        // Tự động chạy
        function toggleAutoSlide() {
            if (isAutoSlidePlaying) {
                clearInterval(autoSlideTimer);
                isAutoSlidePlaying = false;
                btnAuto.textContent = "▶ Tự chạy";
            } else {
                isAutoSlidePlaying = true;
                btnAuto.textContent = "⏸ Dừng";
                autoSlideTimer = setInterval(() => {
                    updateSlide(currentSlideIdx + 1);
                }, 3500);
            }
        }
        btnAuto.onclick = toggleAutoSlide;

        // Vuốt ngón tay chuyển ảnh trên màn hình cảm ứng điện thoại (Touch Swipe)
        let touchStartX = 0;
        let touchEndX = 0;

        slideshowCard.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        slideshowCard.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const swipeThreshold = 40; // khoảng cách vuốt tối thiểu
            if (touchEndX < touchStartX - swipeThreshold) {
                // Vuốt sang trái -> Ảnh kế tiếp
                updateSlide(currentSlideIdx + 1);
            }
            if (touchEndX > touchStartX + swipeThreshold) {
                // Vuốt sang phải -> Ảnh trước đó
                updateSlide(currentSlideIdx - 1);
            }
        }

        // Chuyển Tab (Slideshow vs Grid)
        tabSlideshow.onclick = () => {
            tabSlideshow.classList.add("active");
            tabGrid.classList.remove("active");
            slideshowView.hidden = false;
            gridView.hidden = true;
        };

        tabGrid.onclick = () => {
            tabGrid.classList.add("active");
            tabSlideshow.classList.remove("active");
            slideshowView.hidden = true;
            gridView.hidden = false;
            if (isAutoSlidePlaying) toggleAutoSlide();
        };

        updateSlide(0);
    }

    // --- GRID VIEW VÀ MODAL LIGHTBOX XEM ẢNH FULL MÀN HÌNH ---
    function setupGridView() {
        const photoGrid = document.getElementById("photo-grid");
        const lightboxModal = document.getElementById("lightbox-modal");
        const lightboxImg = document.getElementById("lightbox-img");
        const lightboxCaption = document.getElementById("lightbox-caption");
        const lightboxClose = document.getElementById("lightbox-close");
        const lightboxPrev = document.getElementById("lightbox-prev");
        const lightboxNext = document.getElementById("lightbox-next");

        let activeLightboxIdx = 0;

        photoGrid.innerHTML = "";
        photoList.forEach((photo, idx) => {
            const item = document.createElement("div");
            item.className = "polaroid-item";
            item.innerHTML = `
                <div class="polaroid-img-box">
                    <img src="${photo.src}" alt="Kỷ niệm ${idx + 1}" loading="lazy" onerror="this.src='images/p1.jpg'">
                </div>
                <div class="polaroid-note">Hình ${idx + 1} ♡</div>
            `;
            item.onclick = () => openLightbox(idx);
            photoGrid.appendChild(item);
        });

        function openLightbox(idx) {
            activeLightboxIdx = idx;
            const photo = photoList[activeLightboxIdx];
            lightboxImg.src = photo.src;
            lightboxCaption.textContent = photo.caption;
            lightboxModal.hidden = false;
        }

        function closeLightbox() {
            lightboxModal.hidden = true;
        }

        lightboxClose.onclick = closeLightbox;
        lightboxModal.onclick = (e) => {
            if (e.target === lightboxModal) closeLightbox();
        };

        lightboxPrev.onclick = (e) => {
            e.stopPropagation();
            activeLightboxIdx = (activeLightboxIdx - 1 + photoList.length) % photoList.length;
            const photo = photoList[activeLightboxIdx];
            lightboxImg.src = photo.src;
            lightboxCaption.textContent = photo.caption;
        };

        lightboxNext.onclick = (e) => {
            e.stopPropagation();
            activeLightboxIdx = (activeLightboxIdx + 1) % photoList.length;
            const photo = photoList[activeLightboxIdx];
            lightboxImg.src = photo.src;
            lightboxCaption.textContent = photo.caption;
        };
    }

    // --- HỘP GỬI ĐIỀU ƯỚC / LỜI NHẮN VỀ EMAIL ---
    function setupWishBox() {
        // 👉 ĐỊA CHỈ EMAIL NHẬN LỜI NHẮN CỦA BẠN:
        const RECEIVER_EMAIL = "bibicao1101@gmail.com";

        const wishInput = document.getElementById("wish-input");
        const btnSendWish = document.getElementById("btn-send-wish");
        const wishFeedback = document.getElementById("wish-feedback");

        btnSendWish.onclick = async () => {
            const text = wishInput.value.trim();
            if (!text) {
                wishFeedback.className = "feedback-msg error";
                wishFeedback.textContent = "Hãy viết điều gì đó trước khi gửi nho cục cưng ♡";
                wishFeedback.hidden = false;
                return;
            }

            const sendTime = new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }) + " - " + new Date().toLocaleDateString("vi-VN");

            // Hiệu ứng đang gửi
            const originalBtnText = btnSendWish.innerHTML;
            btnSendWish.disabled = true;
            btnSendWish.innerHTML = "Đang gửi về trái tim... 💌";

            if (RECEIVER_EMAIL && !RECEIVER_EMAIL.includes("your-email")) {
                try {
                    await fetch(`https://formsubmit.co/ajax/${RECEIVER_EMAIL}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        },
                        body: JSON.stringify({
                            _subject: "💌 Lời nhắn sinh nhật từ người ấy!",
                            "Thời gian": sendTime,
                            "Nội dung lời nhắn": text
                        })
                    });
                } catch (err) {
                    console.log("Email sending error or offline:", err);
                }
            }

            btnSendWish.disabled = false;
            btnSendWish.innerHTML = originalBtnText;

            // Xóa ô nhập để người ấy có thể gửi thêm nhiều lời nhắn khác!
            wishInput.value = "";
            wishFeedback.className = "feedback-msg success";
            wishFeedback.textContent = "Lời nhắn ngọt ngào của ăm chã đã bay vèo về hòm thư rồi nè! Bé iu có thể gửi thêm nhiều lời nhắn nữa cho bà chã nha ♡";
            wishFeedback.hidden = false;

            triggerConfettiBurst(1500, 30);
            showCheer("Cảm ơn cục cưng nha! Lời nhắn của ăm chã đã được bà chã cất vào tim rồi nè 🥰");
        };
    }

    // --- CÁC NÚT REPLAY TIỆN ÍCH ---
    function setupReplayButtons() {
        const btnReplayAlbum = document.getElementById("btn-replay-album");
        const btnRestartGame = document.getElementById("btn-restart-game");

        if (btnReplayAlbum) {
            btnReplayAlbum.onclick = () => {
                // Cuộn mượt lên phần thư chúc mừng & album
                screenTreasure.scrollIntoView({ behavior: "smooth" });
                showCheer("Cùng coi lại những khoảnh khắc dễ thương của hai đứa mình nhe! ♡");
            };
        }

        if (btnRestartGame) {
            btnRestartGame.onclick = () => {
                if (confirm("Cục cưng có muốn phiêu lưu lại từ đầu hong nè?")) {
                    goToStage(0);
                }
            };
        }
    }
});
