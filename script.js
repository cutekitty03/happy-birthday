/* ==========================================================
   CHÚC MỪNG SINH NHẬT - KHÔNG GIAN "MẠN"
   Tương tác mượt mà trên Mobile & Trải nghiệm 6 Thử thách
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // --------------------------------------------------------
    // 1. DANH SÁCH ẢNH & LỜI ĐỀ TỪ KỶ NIỆM (26 ẢNH)
    // --------------------------------------------------------
    // Thư mục images hiện có 25 ảnh: 1..16 và 18..26 (17 vắng mặt)
    // Chúng ta định nghĩa danh sách sẵn sàng cho toàn bộ ảnh
    const photoList = [
        { id: 1, src: "images/1.jpg", caption: "Khoảnh khắc đầu tiên khi hai ánh mắt chạm nhau, thế giới bỗng trở nên thật dịu dàng." },
        { id: 2, src: "images/2.jpg", caption: "Nụ cười rạng rỡ của cậu luôn là liều thuốc chữa lành mọi mệt mỏi trong tớ." },
        { id: 3, src: "images/3.jpg", caption: "Những buổi chiều bình yên, chỉ cần ngồi bên cạnh cậu là đã thấy trọn vẹn." },
        { id: 4, src: "images/4.jpg", caption: "Từng góc phố, từng con đường chúng mình cùng đi qua đều trở thành kỷ niệm đẹp." },
        { id: 5, src: "images/5.jpg", caption: "Mỗi chuyến đi xa là một trang mới trong cuốn nhật ký tình yêu của hai đứa." },
        { id: 6, src: "images/6.jpg", caption: "Bên cậu, tớ luôn được là chính mình – một cách ngốc nghếch nhưng hạnh phúc nhất." },
        { id: 7, src: "images/7.jpg", caption: "Cảm ơn cậu vì đã luôn kiên nhẫn, dịu dàng và chở che cho tớ từng chút một." },
        { id: 8, src: "images/8.jpg", caption: "Những cái ôm ấm áp xua tan đi tất cả những giông bão của thế giới ngoài kia." },
        { id: 9, src: "images/9.jpg", caption: "Dù là một bữa ăn đơn giản hay quán quen ven đường, có cậu thì món nào cũng thấy ngon." },
        { id: 10, src: "images/10.jpg", caption: "Mỗi bức hình là một mảnh ghép ký ức vô giá mà tớ luôn nâng niu cất giữ." },
        { id: 11, src: "images/11.jpg", caption: "Thích nhất là cái cách cậu cười tít mắt mỗi khi nhìn thấy tớ hay được ăn món ngon." },
        { id: 12, src: "images/12.jpg", caption: "Khoảnh khắc ấy, tớ biết mình đã tìm thấy cả bầu trời bình yên của riêng mình." },
        { id: 13, src: "images/13.jpg", caption: "Cùng nhau đi qua những ngày nắng đẹp rực rỡ lẫn những cơn mưa rào bất chợt." },
        { id: 14, src: "images/14.jpg", caption: "Cảm ơn vì đã luôn ở đó, lắng nghe và thấu hiểu tớ ngay cả khi tớ không nói nên lời." },
        { id: 15, src: "images/15.jpg", caption: "Bàn tay ấm áp nắm chặt lấy tay tớ giữa dòng người tấp nập." },
        { id: 16, src: "images/16.jpg", caption: "Những ánh mắt trao nhau mà chẳng cần bất kỳ lời nói nào cũng hiểu được lòng nhau." },
        { id: 18, src: "images/18.jpg", caption: "Góc kỷ niệm ngọt ngào ghi dấu nụ cười tỏa nắng của người tớ yêu thương nhất." },
        { id: 19, src: "images/19.jpg", caption: "Dù thời gian có trôi nhanh thế nào, tình cảm này sẽ luôn vẹn nguyên như ngày đầu." },
        { id: 20, src: "images/20.jpg", caption: "Hạnh phúc đôi khi chỉ đơn giản là được cùng cậu ngắm hoàng hôn buông xuống mỗi chiều." },
        { id: 21, src: "images/21.jpg", caption: "Cậu chính là điều may mắn và dịu dàng nhất mà cuộc sống đã ưu ái ban tặng cho tớ." },
        { id: 22, src: "images/22.jpg", caption: "Chỉ cần nhìn thấy nụ cười của cậu là mọi âu lo trong ngày đều tan biến hết." },
        { id: 23, src: "images/23.jpg", caption: "Cùng nhau già đi, cùng nhau đón thật nhiều mùa sinh nhật ngọt ngào nữa nhé." },
        { id: 24, src: "images/24.jpg", caption: "Tớ yêu tất cả những điều thuộc về cậu, từ những nét đáng yêu đến cả những lúc bướng bỉnh." },
        { id: 25, src: "images/25.jpg", caption: "Kho báu lớn nhất trong cuộc đời tớ không ở đâu xa, mà chính là cậu đấy." },
        { id: 26, src: "images/26.jpg", caption: "Chúc mừng sinh nhật tình yêu to bự của tớ! Yêu cậu hơn cả vũ trụ này ♡" }
    ];

    // --------------------------------------------------------
    // 2. LỜI ĐỘNG VIÊN & CỔ VŨ DỊU DÀNG (CHEERING MESSAGES)
    // --------------------------------------------------------
    const sweetCheerMessages = [
        "Cố lên cục cưng ơi, tớ luôn ở bên cạnh cổ vũ nè! ♡",
        "You're doing amazing, my love! 💕",
        "Giỏi quá trời ơi! Đúng là người yêu của tớ có khác 🥰",
        "Một chút nữa thôi là tới kho báu rồi nè, chờ tớ nhé! 🌟",
        "Dù ngoài kia có mệt mỏi thế nào, ở đây luôn có tớ thương cậu nhất 🌸",
        "Cứ bình tĩnh nha bé yêu, kho báu ngọt ngào nhất đang chờ cậu đó nha!",
        "Gửi tặng cậu một cái ôm thật ấm áp qua màn hình nè! 🤗",
        "Mỗi bước đi của cậu đều làm trái tim tớ rung rinh đó nha! 💓",
        "You are the brightest star in my universe! ✨",
        "Cục cưng đỉnh chóp luôn á! Tiếp tục tiến lên nào! 🎉"
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
    // 3. ĐIỀU KHIỂN ÂM NHẠC NỀN (AUDIO CONTROLLER)
    // --------------------------------------------------------
    const bgMusic = document.getElementById("bg-music");
    const musicBtn = document.getElementById("floating-music-btn");
    const musicDisc = document.getElementById("music-disc");
    const soundWave = document.getElementById("sound-wave");
    const musicStatusText = document.getElementById("music-status-text");
    let isMusicPlaying = false;

    function setMusicState(playing) {
        isMusicPlaying = playing;
        if (playing) {
            musicDisc.classList.add("playing");
            soundWave.classList.add("active");
            musicStatusText.textContent = "Tắt nhạc";
        } else {
            musicDisc.classList.remove("playing");
            soundWave.classList.remove("active");
            musicStatusText.textContent = "Bật nhạc";
        }
    }

    function toggleMusic() {
        if (!bgMusic) return;
        if (isMusicPlaying) {
            bgMusic.pause();
            setMusicState(false);
        } else {
            bgMusic.play().then(() => {
                setMusicState(true);
            }).catch(e => {
                console.log("Audio play prevented:", e);
                setMusicState(false);
            });
        }
    }

    if (musicBtn) {
        musicBtn.addEventListener("click", toggleMusic);
    }

    // Tự động kích hoạt nhạc khi có tương tác chạm đầu tiên
    function tryAutoplayOnce() {
        if (!isMusicPlaying && bgMusic) {
            bgMusic.play().then(() => {
                setMusicState(true);
            }).catch(() => {
                // Sẽ kích hoạt khi người dùng bấm nút bắt đầu
            });
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
        { name: "Cửa ngõ ngọt ngào", tag: "Thử thách 1 / 6" },
        { name: "Thu thập yêu thương", tag: "Thử thách 2 / 6" },
        { name: "Thấu hiểu trái tim", tag: "Thử thách 3 / 6" },
        { name: "Mở khóa tình yêu", tag: "Thử thách 4 / 6" },
        { name: "Mảnh ghép hoàn hảo", tag: "Thử thách 5 / 6" },
        { name: "Chiếc bánh diệu kỳ", tag: "Thử thách 6 / 6" },
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
            // Phát nhạc
            if (bgMusic && !isMusicPlaying) {
                bgMusic.play().then(() => setMusicState(true)).catch(() => {});
            }
            showCheer("Cuộc phiêu lưu bắt đầu rồi nè! Chúc cục cưng vượt ải thành công nhé ✨");
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
                    feedback.textContent = "Chính xác luôn! Cậu chính là món quà kỳ diệu nhất mà vũ trụ ban tặng ♡";
                    feedback.hidden = false;
                    triggerConfettiBurst(1500, 35);
                    showCheer("Xuất sắc quá cục cưng ơi! Trạm tiếp theo đang mở ra nè 🥰");
                    setTimeout(() => goToStage(2), 1600);
                } else {
                    btn.classList.add("wrong-pick");
                    feedback.className = "feedback-msg error";
                    feedback.textContent = "Chưa phải đâu nè bé ơi, thử lại câu trả lời ngọt ngào hơn xem nào ♡";
                    feedback.hidden = false;
                    showCheer("Hong sao đâu nè, tớ tin cậu chọn đúng mà! Thử lại nha thương thương 💕");
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

            // Hiệu ứng ngôi sao nhỏ rơi vào hũ
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
                feedback.textContent = "Cả 3 ngôi sao điều ước đã được gom trọn vào hũ tình yêu! ✨";
                feedback.hidden = false;
                triggerConfettiBurst(2000, 50);
                showCheer("You are doing great, my love! 3 điều ước ngọt ngào đã được vũ trụ ghi nhận! 💕");
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
                    feedback.textContent = "Chuẩn không cần chỉnh! Cậu luôn xứng đáng nhận được mọi điều dịu dàng nhất ♡";
                    feedback.hidden = false;
                    triggerConfettiBurst(1500, 35);
                    showCheer("Đúng là người yêu tớ hiểu tớ nhất trần đời! Yêu ghê á 🥰");
                    setTimeout(() => goToStage(4), 1600);
                } else {
                    btn.classList.add("wrong-pick");
                    feedback.className = "feedback-msg error";
                    feedback.textContent = "Điều này cũng đúng, nhưng tớ muốn làm nhiều hơn thế nữa cho cậu cơ ♡";
                    feedback.hidden = false;
                    showCheer("Bé thử lại nha, tớ còn muốn cưng chiều cậu hơn nữa nè! 💕");
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
        lockLabel.textContent = "Khóa Trái Tim";
        key.style.display = "flex";

        function unlockHeart() {
            if (unlocked) return;
            unlocked = true;
            lockTarget.classList.add("unlocked");
            lockLabel.textContent = "Đã Mở Khóa! 💖";
            key.style.display = "none";

            feedback.className = "feedback-msg success";
            feedback.textContent = "Trái tim của tớ đã được cậu mở khóa hoàn toàn rồi nè! ♡";
            feedback.hidden = false;

            triggerConfettiBurst(2200, 60);
            showCheer("Oa! You stole my heart! Cậu mở khóa trái tim tớ rồi nè ♡");
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
                    feedback.textContent = "Hoàn hảo! HAPPY BIRTHDAY MY LOVE ♡ Cậu là mảnh ghép trọn vẹn nhất!";
                    feedback.hidden = false;
                    triggerConfettiBurst(2000, 50);
                    showCheer("Cục cưng tài giỏi quá trời ơi! Chỉ còn 1 trạm nữa là tới kho báu rồi! 🌟");
                    setTimeout(() => goToStage(6), 1800);
                } else {
                    feedback.className = "feedback-msg error";
                    feedback.textContent = "Thứ tự chưa đúng rồi nè, bấm 'Xếp lại' để thử lại nha cục cưng ♡";
                    feedback.hidden = false;
                    showCheer("Hong sao nè bé ơi, bấm nút Xếp lại rồi thử lại xíu nha thương thương! 💕");
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
        instruction.textContent = "👉 Chạm vào nến để thắp sáng 👈";

        function lightCandle() {
            if (candleLit) return;
            candleLit = true;
            candleFlame.classList.add("lit");
            instruction.textContent = "✨ Ngọn nến đã sáng rực rỡ ✨";
            instruction.style.color = "#e07d00";

            triggerConfettiBurst(2000, 45);
            showCheer("Ước một điều ước sinh nhật thật đẹp nhé người tớ thương! 🕯️💖");

            setTimeout(() => {
                successBox.hidden = false;
            }, 800);
        }

        cakeBox.onclick = lightCandle;

        btnUnlock.onclick = () => {
            triggerConfettiBurst(4000, 100);
            showCheer("Chúc mừng sinh nhật! Kho báu tình yêu đã mở ra dành riêng cho cậu! 🎁💖", 4500);
            goToStage(7);
        };
    }

    // --------------------------------------------------------
    // 7. KHO BÁU BÍ MẬT: ALBUM 26 ẢNH & LỜI CHÚC (TREASURE)
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
                    slideImg.src = "images/1.jpg";
                };
                slideImg.style.opacity = "1";
            }, 150);

            slideCounter.textContent = `Ảnh ${currentSlideIdx + 1} / ${photoList.length}`;
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
                    <img src="${photo.src}" alt="Kỷ niệm ${idx + 1}" loading="lazy" onerror="this.src='images/1.jpg'">
                </div>
                <div class="polaroid-note">Ảnh ${idx + 1} ♡</div>
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

    // --- HỘP GỬI ĐIỀU ƯỚC / LỜI NHẮN ---
    function setupWishBox() {
        const wishInput = document.getElementById("wish-input");
        const btnSendWish = document.getElementById("btn-send-wish");
        const wishFeedback = document.getElementById("wish-feedback");
        const savedList = document.getElementById("saved-wishes-list");

        const STORAGE_KEY = "romance_birthday_wishes";

        function loadSavedWishes() {
            savedList.innerHTML = "";
            let wishes = [];
            try {
                const stored = localStorage.getItem(STORAGE_KEY);
                if (stored) wishes = JSON.parse(stored);
            } catch (e) {}

            wishes.forEach(item => {
                const el = document.createElement("div");
                el.className = "saved-wish-item";
                el.innerHTML = `
                    <div class="saved-wish-text">${item.text}</div>
                    <div class="saved-wish-time">${item.time}</div>
                `;
                savedList.appendChild(el);
            });
        }

        btnSendWish.onclick = () => {
            const text = wishInput.value.trim();
            if (!text) {
                wishFeedback.className = "feedback-msg error";
                wishFeedback.textContent = "Hãy viết điều gì đó trước khi gửi nhé cục cưng ơi ♡";
                wishFeedback.hidden = false;
                return;
            }

            const newWish = {
                text: text,
                time: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }) + " - " + new Date().toLocaleDateString("vi-VN")
            };

            let wishes = [];
            try {
                const stored = localStorage.getItem(STORAGE_KEY);
                if (stored) wishes = JSON.parse(stored);
                wishes.unshift(newWish);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
            } catch (e) {}

            wishInput.value = "";
            wishFeedback.className = "feedback-msg success";
            wishFeedback.textContent = "Lời nhắn ngọt ngào của cậu đã được gửi và lưu giữ cẩn thận rồi nè! ♡";
            wishFeedback.hidden = false;

            triggerConfettiBurst(1500, 30);
            showCheer("Cảm ơn tình yêu to bự! Lời nhắn của cậu đã được cất vào tim tớ rồi nè 🥰");
            loadSavedWishes();
        };

        loadSavedWishes();
    }

    // --- CÁC NÚT REPLAY TIỆN ÍCH ---
    function setupReplayButtons() {
        const btnReplayAlbum = document.getElementById("btn-replay-album");
        const btnRestartGame = document.getElementById("btn-restart-game");

        if (btnReplayAlbum) {
            btnReplayAlbum.onclick = () => {
                // Cuộn mượt lên phần thư chúc mừng & album
                screenTreasure.scrollIntoView({ behavior: "smooth" });
                showCheer("Cùng ngắm lại những khoảnh khắc tuyệt vời của hai đứa mình nhé! ♡");
            };
        }

        if (btnRestartGame) {
            btnRestartGame.onclick = () => {
                if (confirm("Cục cưng có muốn phiêu lưu lại từ đầu không nè?")) {
                    goToStage(0);
                }
            };
        }
    }
});
