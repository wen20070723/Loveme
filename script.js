// 记录点击不喜欢的次数
let hateCount = 0;
// 记录用户选择 yes 的次数，用于触发不同特效
let specialEffectCount = 0;

// 恐怖提示消息数组
const scaryMessages = [
    "黑暗中似乎有双眼睛在盯着你...",
    "背后传来了轻轻的脚步声...",
    "有冰冷的气息在你脖颈边环绕...",
    "窗户外面好像有个黑影在晃动...",
    "隐隐约约听到有人在低声哭泣..."
];

// 病娇质问消息数组
const yandereMessages = [
    "为什么你就是不喜欢我呀，你只能属于我！",
    "别再推开我啦，你逃不出我的掌心！",
    "哼，不喜欢我？那你哪儿也别想去！",
    "你怎么能不喜欢我，我会让你后悔的！",
    "我为你付出这么多，你却不喜欢我，太狠心了！"

];

// 温馨提示消息数组
const warmMessages = [
    "哇，你的选择就像春天的微风，好温暖！",
    "感觉因为你的选择，世界都变得甜甜的啦！",
    "你的这个选择，就像给我送了一束花，好开心！",
    "有你这样温暖的选择，仿佛阳光都更灿烂啦！",
    "你的选择如同星星般闪耀，照亮了我的心！"

];

// 不同创意的不喜欢点击效果
const hateClickEffects = [
    () => document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.2)',
    () => {
        const allHeadings = document.querySelectorAll('h1, h2');
        allHeadings.forEach(heading => heading.style.color = 'red');
        setTimeout(() => {
            allHeadings.forEach(heading => heading.style.color = '');
        }, 2000);
        const randomYandereIndex = Math.floor(Math.random() * yandereMessages.length);
        alert(yandereMessages[randomYandereIndex]);
        hateCount++;
        const randomHateEffect = hateClickEffects[Math.floor(Math.random() * hateClickEffects.length)];
        randomHateEffect();
        if (hateCount % 3 === 0) {
            const randomHateEffect = hateClickEffects[Math.floor(Math.random() * hateClickEffects.length)];
            randomHateEffect();
        }
        if (hateCount % 5 === 0) {
            const randomHateEffect = hateClickEffects[Math.floor(Math.random() * hateClickEffects.length)];
            randomHateEffect();
        }
        if (hateCount % 7 === 0) {
            const randomHateEffect = hateClickEffects[Math.floor(Math.random() * hateClickEffects.length)];
            randomHateEffect();
        }
        if (hateCount % 10 === 0) {
            const randomHateEffect = hateClickEffects[Math.floor(Math.random() * hateClickEffects.length)];
            randomHateEffect();
        }
        if (hateCount % 15 === 0) {
            const randomHateEffect = hateClickEffects[Math.floor(Math.random() * hateClickEffects.length)];
            randomHateEffect();
        }
    },
    () => {
        const audio = new Audio('scary_sound.mp3');
        audio.play();
    },
    () => {
        const element = document.createElement('div');
        element.style.position = 'fixed';
        element.style.top = '50%';
        element.style.left = '50%';
        element.style.transform = 'translate(-50%, -50%)';
        element.style.fontSize = '50px';
        element.style.color = 'red';
        element.textContent = '别拒绝我！';
        document.body.appendChild(element);
        setTimeout(() => element.remove(), 2000);
    },
    () => document.body.style.filter = 'grayscale(100%)'
];

// 切换问题步骤的函数
function nextStep(stepId, choice) {
    // 移除当前激活步骤的 active 类
    document.querySelector('.active').classList.remove('active');
    // 为下一个步骤添加 active 类，使其显示
    document.getElementById(stepId).classList.add('active');

    if (choice === 'yes') {
        specialEffectCount++;
        // 根据选择 yes 的次数，触发不同温馨特效
        switch (specialEffectCount % 3) {
            case 0:
                // 短暂显示爱心雨特效
                const heartInterval = setInterval(createHeart, 200);
                setTimeout(() => clearInterval(heartInterval), 2000);
                break;
            case 1:
                // 文字颜色变为粉色一段时间，并弹出温馨提示
                const allHeadings = document.querySelectorAll('h1, h2');
                allHeadings.forEach(heading => {
                    heading.style.color = '#ff4081';
                    setTimeout(() => {
                        heading.style.color = '';
                    }, 2000);
                });
                const randomWarmIndex = Math.floor(Math.random() * warmMessages.length);
                alert(warmMessages[randomWarmIndex]);
                break;
            case 2:
                // 短暂显示五彩纸屑雨特效
                const confettiInterval = setInterval(createConfetti, 150);
                setTimeout(() => clearInterval(confettiInterval), 2000);
                break;
        }
    } else {
        // 选择 no 时的惊吓特效
        document.body.classList.add('shake');
        setTimeout(() => document.body.classList.remove('shake'), 1000);
        const randomScaryIndex = Math.floor(Math.random() * scaryMessages.length);
        alert(scaryMessages[randomScaryIndex]);
    }
}

// 创建爱心元素并添加到页面，模拟爱心雨
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById('heartContainer').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

// 创建五彩纸屑元素并添加到页面，模拟五彩纸屑雨
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById('confetti-container').appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
}

// 当用户点击喜欢时的处理函数
function showLove() {
    document.body.style.background = '#ffe6f2';
    document.getElementById('bloodEffect').style.display = 'none';

    // 清除所有恐怖相关样式
    document.querySelectorAll('h1, h2').forEach(el => {
        el.classList.remove('spooky-text');
        el.style.color = '#ff4081';
        el.style.textShadow = '0 0 10px #fff';
        el.style.fontSize = '32px';
        el.style.fontFamily = 'Comic Sans MS, cursive, sans-serif';
    });
    document.body.style.filter = 'blur(0) brightness(1)';
    document.body.style.transform = 'scale(1) rotate(0deg)';
    document.body.style.letterSpacing = 'normal';

    // 持续显示爱心雨和五彩纸屑雨
    setInterval(createHeart, 200);
    setInterval(createConfetti, 100);

    // 修改提示文字并隐藏按钮
    document.querySelector('h1').innerHTML = "哇！我超开心哒！🥰";
    document.getElementById('loveButton').style.display = 'none';
    document.getElementById('hateButton').style.display = 'none';
}

// 创建血滴元素并添加到页面，模拟血滴下落
function createDrip() {
    const drip = document.createElement('div');
    drip.className = 'drip';
    drip.style.left = Math.random() * 100 + 'vw';
    drip.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(drip);
    setTimeout(() => drip.remove(), 3000);
}

// 根据点击不喜欢的次数更新恐怖效果
function updateSpookyEffects() {
    if (hateCount > 3) {
        document.querySelectorAll('h1, h2').forEach(el => {
            el.classList.add('spooky-text');
        });
    }
    if (hateCount > 6) {
        document.body.style.backgroundColor = `hsl(0, 100%, ${30 - hateCount}%)`;
    }
    if (hateCount > 9) {
        document.body.style.filter = 'blur(3px)';
    }
    if (hateCount > 12) {
        document.body.style.transform = 'scale(0.9)';
    }
    if (hateCount > 15) {
        document.body.style.letterSpacing = '5px';
    }
    if (hateCount > 18) {
        document.body.style.transform = 'rotate(-5deg)';
    }
    if (hateCount > 21) {
        document.body.style.filter = 'blur(5px) brightness(0.5)';
    }
    if (hateCount > 24) {
        document.body.style.transform = 'scale(0.8) rotate(10deg)';
    }
}

// 打开病娇质问弹窗
function openPopup() {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const randomIndex = Math.floor(Math.random() * yandereMessages.length);
    popupText.textContent = yandereMessages[randomIndex];
    popup.style.display = 'flex';
    // 去除页面模糊效果，让弹窗清晰显示
    document.body.style.filter = 'blur(0)';
    setTimeout(() => document.body.style.filter = 'blur(3px)', 1000);
    setTimeout(() => document.body.style.filter = 'blur(0)', 3000);
    setTimeout(() => document.body.style.filter = 'blur(3px)', 4000);
    setTimeout(() => document.body.style.filter = 'blur(0)', 5000);
    setTimeout(() => document.body.style.filter = 'blur(0)', 6000);
    setTimeout(() => document.body.style.filter = 'blur(0)', 7000);
}

// 关闭病娇质问弹窗
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    // 恢复页面模糊效果
    updateSpookyEffects();
}

// 当用户点击不喜欢时的处理函数
function hate() {
    hateCount++;
    const hateBtn = document.getElementById('hateButton');
    const loveBtn = document.getElementById('loveButton');

    // 不喜欢按钮逐渐变小
    hateBtn.style.transform = `scale(${Math.max(0.1, 0.8 - hateCount * 0.05)})`;
    // 喜欢按钮逐渐变大
    loveBtn.style.transform = `scale(${1 + hateCount * 0.1})`;

    // 动态改变不喜欢按钮的文字
    const randomScaryIndex = Math.floor(Math.random() * scaryMessages.length);
    if (hateCount % 2 === 0) {
        hateBtn.innerHTML = scaryMessages[randomScaryIndex];
    } else {
        hateBtn.innerHTML = `别再拒绝啦，很可怕的！(${hateCount})`;
    }

    // 点击一定次数后增加血滴效果
    if (hateCount > 3) {
        createDrip();
    }

    // 点击一定次数后显示血影效果
    if (hateCount > 2) {
        document.getElementById('bloodEffect').style.display = 'block';
        document.getElementById('bloodEffect').style.opacity = Math.min(1, hateCount * 0.1);
    }

    // 更新恐怖效果
    updateSpookyEffects();

    // 应用点击不喜欢的创意效果
    const effectIndex = (hateCount - 1) % hateClickEffects.length;
    hateClickEffects[effectIndex]();

    // 点击 15 次后弹出病娇质问弹窗
    if (hateCount === 15) {
        openPopup();
    }

    // 点击 25 次后隐藏不喜欢按钮
    if (hateCount > 25) {
        hateBtn.style.display = 'none';
    }
    // 点击 30 次后触发喜欢效果
    if (hateCount > 30) {
        showLove();
    }
}