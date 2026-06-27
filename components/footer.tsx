export default function Footer() {
  return (
    <footer className="bg-[var(--color-base)]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-[var(--color-border)] gap-3 md:gap-0">
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)] text-center md:text-left">
            &copy; 2026 TEKGUYZ. Powered by Advantage Software.
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)] text-center md:text-right">
            Bundle by Advantage Software &middot; reporterresource.com
          </span>
        </div>
      </div>
    </footer>
  );
}
