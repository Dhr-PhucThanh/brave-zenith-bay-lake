import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as BookOpen, i as Download, n as ScrollText, r as FileText } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DT6g6l0e.js
var import_jsx_runtime = require_jsx_runtime();
var FILES = [
	{
		href: "/chung-lu-truyen-dao-tap.pdf",
		label: "Tải PDF",
		hint: "Toàn tập 18 luận, Hán–Việt · khoảng 490 KB",
		primary: true,
		icon: Download
	},
	{
		href: "/chung-lu-truyen-dao-tap.md",
		label: "Tải bản chữ",
		hint: "Markdown · đọc trên máy hoặc in lại",
		primary: false,
		icon: FileText
	},
	{
		href: "/chung-lu-truyen-dao-tap.zip",
		label: "Tải cả hai (ZIP)",
		hint: "PDF + Markdown trong một file",
		primary: false,
		icon: Download
	}
];
var CHAPTERS = [
	"Chân Tiên",
	"Đại Đạo",
	"Thiên Địa",
	"Nhật Nguyệt",
	"Tứ Thời",
	"Ngũ Hành",
	"Thủy Hỏa",
	"Long Hổ",
	"Đan Dược",
	"Diên Ngân",
	"Trừu Thiêm",
	"Hà Xa",
	"Hoàn Đan",
	"Luyện Hình",
	"Triều Nguyên",
	"Nội Quán",
	"Ma Nạn",
	"Chứng Nghiệm"
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-dvh bg-paper text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-3xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 border-2 border-cinnabar px-3 py-1 text-[11px] font-semibold tracking-[0.35em] text-cinnabar",
							children: "ĐẠO TẠNG · NỘI ĐAN"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl font-bold tracking-[0.28em] text-cinnabar-deep sm:text-5xl",
							children: "鍾呂傳道集"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xl font-semibold text-ink",
							children: "Chung Lữ Truyền Đạo Tập"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 max-w-lg text-sm leading-relaxed text-muted",
							children: [
								"Chính Dương Chân Nhân Chung Ly Quyền thuật · Thuần Dương Chân Nhân Lữ Nham tập · Hoa Dương Chân Nhân Thi Kiên Ngô truyền.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"18 luận — mỗi luận có nguyên văn rồi bản dịch tiếng Việt."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-radius border border-gold bg-surface p-5 shadow-[0_8px_28px_rgba(42,28,18,0.08)] sm:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-4 font-display text-lg font-bold text-cinnabar-deep",
							children: "Tải toàn tập"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-5 text-sm leading-relaxed text-muted",
							children: "Bấm một nút bên dưới. File sẽ tải về máy — không cần đường dẫn ẩn hay copy link."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3",
							children: FILES.map((file) => {
								const Icon = file.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: file.href,
									download: true,
									className: file.primary ? "flex min-h-12 items-center gap-3 rounded-radius bg-cinnabar px-4 py-3 text-paper transition hover:bg-cinnabar-deep" : "flex min-h-12 items-center gap-3 rounded-radius border border-gold bg-gold-soft px-4 py-3 text-ink transition hover:border-cinnabar",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5 shrink-0",
										strokeWidth: 1.75
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex flex-col text-left",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: file.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: file.primary ? "text-xs text-gold-soft" : "text-xs text-muted",
											children: file.hint
										})]
									})]
								}, file.href);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/doc.html",
							className: "mt-4 flex min-h-12 items-center justify-center gap-2 rounded-radius border border-dashed border-gold px-4 py-3 text-sm font-semibold text-cinnabar-deep transition hover:bg-paper-deep",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
								className: "size-4",
								strokeWidth: 1.75
							}), "Đọc trực tiếp trên trang (không cần tải)"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mb-3 flex items-center gap-2 font-display text-lg font-bold text-cinnabar-deep",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollText, {
							className: "size-5",
							strokeWidth: 1.75
						}), "Mục lục 18 luận"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
						children: CHAPTERS.map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-baseline gap-3 rounded-md border border-gold/60 bg-surface/70 px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-6 text-right text-xs font-semibold text-cinnabar",
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm",
								children: ["Luận ", name]
							})]
						}, name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-xs leading-relaxed text-muted",
						children: [
							"Xuất xứ: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Tu Chân Thập Thư" }),
							" · ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Chính Thống Đạo Tạng" }),
							". Luận 1–6 là lý; 7–15 là công pháp; 16–18 là nội quán, ma nạn, chứng nghiệm."
						]
					})
				] })
			]
		})
	});
}
//#endregion
export { Home as component };
