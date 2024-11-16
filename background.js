// 创建右键菜单项
browser.contextMenus.create({
    id: "open-with-moeyy",
    title: "使用Moeyy代理下载",
    contexts: ["link"],
    targetUrlPatterns: ["*://*/*archive*","*://*/*download*"] // 仅在链接包含 "archive" 和 "download" 时显示
});

// 监听右键菜单点击事件
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "open-with-moeyy" && info.linkUrl) {
        // 将 GitHub 链接替换为 github.moeyy.xyz 格式
        const newUrl = info.linkUrl.replace("https://github.com", "https://github.moeyy.xyz/https://github.com");
        // 打开新链接
        browser.tabs.create({ url: newUrl });
    }
});
