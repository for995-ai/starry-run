// 作品集展示模式：僅以姓名比對本機暫存資料，不蒐集身分證字號。
document.getElementById('certSearchBtn').addEventListener('click', function() {
    const name = document.getElementById('certNameInput').value.trim();
    const id = document.getElementById('certIdInput').value.trim();
    const resultCard = document.getElementById('certResultCard');

    if (!name) {
        alert('請輸入姓名！');
        return;
    }

    this.textContent = '搜尋中...';

    // 模擬資料查詢
    setTimeout(() => {
        this.textContent = '查詢成績與下載證書 🔍';
        
        const savedData = JSON.parse(localStorage.getItem('runnerData'));
        
        // 比對資料 (請確保你在報名頁面填入的資料有成功存入 localStorage)
        if (savedData && name === savedData.name) {
            document.getElementById('resultName').textContent = savedData.name;
            document.getElementById('resultBib').textContent = `參賽編號：34995`;
            document.getElementById('resultGroup').textContent = savedData.groupText.split('(')[0];
            
            // 🌟 關鍵：強制改變 display 屬性 🌟
            resultCard.style.setProperty('display', 'block', 'important');
            
            generateCertificate(savedData.name, savedData.groupText.split('(')[0], "34995");
        } else {
            alert('查無此參賽資料，請確認姓名。');
            resultCard.style.display = 'none';
        }
    }, 500);
});