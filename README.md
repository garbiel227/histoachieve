# 天津师范大学新闻学系新闻史数据库

天津师范大学新闻学系新闻史数据库官方网站静态站点。当前收录新闻学系 2301 班课程作品，后续可继续追加 2401 班、2501 班作品。

## 本地预览

```bash
python3 -m http.server 4173
```

然后访问 `http://localhost:4173`。

## 新增作品

1. 将缩略图放入 `assets/works/<年级>/`。
2. 将可公开访问的原件放入 `originals/<年级>/`，或准备外部链接。
3. 在 `script.js` 的 `works` 数组中追加作品条目。

## 托管说明

本站是纯静态网站，可托管到 GitHub Pages 或 Cloudflare Pages。

GitHub Pages 推荐设置：

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

注意：`originals/2301/01-renmin-cover.pdf` 体量较大，已从默认 Git 提交中排除。上线时请将该文件上传到网盘、对象存储、GitHub Release 或其他静态文件服务，然后把 `script.js` 中 `2301-01` 的 `externalUrl` 填成公开链接。
