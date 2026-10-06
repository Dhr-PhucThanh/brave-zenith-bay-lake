import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Download, FileText, ScrollText } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const FILES = [
  {
    href: "/chung-lu-truyen-dao-tap.pdf",
    label: "Tải PDF",
    hint: "Toàn tập 18 luận, Hán–Việt · khoảng 490 KB",
    primary: true,
    icon: Download,
  },
  {
    href: "/chung-lu-truyen-dao-tap.md",
    label: "Tải bản chữ",
    hint: "Markdown · đọc trên máy hoặc in lại",
    primary: false,
    icon: FileText,
  },
  {
    href: "/chung-lu-truyen-dao-tap.zip",
    label: "Tải cả hai (ZIP)",
    hint: "PDF + Markdown trong một file",
    primary: false,
    icon: Download,
  },
] as const;

const CHAPTERS = [
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
  "Chứng Nghiệm",
];

function Home() {
  return (
    <main className="min-h-dvh bg-paper text-ink">
      <div className="mx-auto flex max-w-3xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
        <header className="flex flex-col items-center text-center">
          <p className="mb-4 border-2 border-cinnabar px-3 py-1 text-[11px] font-semibold tracking-[0.35em] text-cinnabar">
            ĐẠO TẠNG · NỘI ĐAN
          </p>
          <h1 className="font-display text-4xl font-bold tracking-[0.28em] text-cinnabar-deep sm:text-5xl">
            鍾呂傳道集
          </h1>
          <p className="mt-3 text-xl font-semibold text-ink">Chung Lữ Truyền Đạo Tập</p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
            Chính Dương Chân Nhân Chung Ly Quyền thuật · Thuần Dương Chân Nhân Lữ Nham
            tập · Hoa Dương Chân Nhân Thi Kiên Ngô truyền.
            <br />
            18 luận — mỗi luận có nguyên văn rồi bản dịch tiếng Việt.
          </p>
        </header>

        <section className="rounded-radius border border-gold bg-surface p-5 shadow-[0_8px_28px_rgba(42,28,18,0.08)] sm:p-7">
          <h2 className="mb-4 font-display text-lg font-bold text-cinnabar-deep">
            Tải toàn tập
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-muted">
            Bấm một nút bên dưới. File sẽ tải về máy — không cần đường dẫn ẩn hay
            copy link.
          </p>
          <div className="grid gap-3">
            {FILES.map((file) => {
              const Icon = file.icon;
              return (
                <a
                  key={file.href}
                  href={file.href}
                  download
                  className={
                    file.primary
                      ? "flex min-h-12 items-center gap-3 rounded-radius bg-cinnabar px-4 py-3 text-paper transition hover:bg-cinnabar-deep"
                      : "flex min-h-12 items-center gap-3 rounded-radius border border-gold bg-gold-soft px-4 py-3 text-ink transition hover:border-cinnabar"
                  }
                >
                  <Icon className="size-5 shrink-0" strokeWidth={1.75} />
                  <span className="flex flex-col text-left">
                    <span className="font-semibold">{file.label}</span>
                    <span
                      className={
                        file.primary ? "text-xs text-gold-soft" : "text-xs text-muted"
                      }
                    >
                      {file.hint}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
          <a
            href="/doc.html"
            className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-radius border border-dashed border-gold px-4 py-3 text-sm font-semibold text-cinnabar-deep transition hover:bg-paper-deep"
          >
            <BookOpen className="size-4" strokeWidth={1.75} />
            Đọc trực tiếp trên trang (không cần tải)
          </a>
        </section>

        <section>
          <h2 className="mb-3 flex items-center gap-2 font-display text-lg font-bold text-cinnabar-deep">
            <ScrollText className="size-5" strokeWidth={1.75} />
            Mục lục 18 luận
          </h2>
          <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {CHAPTERS.map((name, i) => (
              <li
                key={name}
                className="flex items-baseline gap-3 rounded-md border border-gold/60 bg-surface/70 px-3 py-2"
              >
                <span className="w-6 text-right text-xs font-semibold text-cinnabar">
                  {i + 1}
                </span>
                <span className="text-sm">Luận {name}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            Xuất xứ: <em>Tu Chân Thập Thư</em> · <em>Chính Thống Đạo Tạng</em>. Luận
            1–6 là lý; 7–15 là công pháp; 16–18 là nội quán, ma nạn, chứng nghiệm.
          </p>
        </section>
      </div>
    </main>
  );
}
